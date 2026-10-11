"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { profile } from "@/content/profile";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Partial<Record<Field, string>> };

type Field = "name" | "email" | "reason" | "message";

const schema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre.").max(100),
  email: z.email("Revisa el email: parece incompleto.").max(200),
  reason: z.enum(["empleo", "proyecto", "otro"], { error: "Elige un motivo." }),
  message: z.string().trim().min(10, "Cuéntame un poco más (mínimo 10 caracteres).").max(4000),
});

const reasonLabel = { empleo: "Empleo", proyecto: "Proyecto", otro: "Otro" } as const;

// Límite de envíos en memoria por IP: 3 por hora. Es un freno básico (no compartido entre
// instancias del servidor); el honeypot detiene a la mayoría de bots.
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: un campo oculto que solo rellenan los bots. Se responde "éxito" para no darles pistas.
  if (formData.get("company")) return { status: "success" };

  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    const fieldErrors: Partial<Record<Field, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as Field;
      fieldErrors[key] ??= issue.message;
    }
    return { status: "error", message: "Revisa los campos marcados.", fieldErrors };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (rateLimited(ip)) {
    return {
      status: "error",
      message: `Recibí varios mensajes seguidos desde tu conexión. Escríbeme directamente a ${profile.links.email}.`,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? profile.links.email;
  if (!apiKey || !from) {
    return {
      status: "error",
      message: `El formulario no está disponible en este momento. Escríbeme a ${profile.links.email}.`,
    };
  }

  const { name, email, reason, message } = parsed.data;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[Web] ${reasonLabel[reason]} — ${name}`,
      text: `${name} <${email}>\nMotivo: ${reasonLabel[reason]}\n\n${message}`,
      html: `<p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;<br>Motivo: ${reasonLabel[reason]}</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!res.ok) {
    return {
      status: "error",
      message: `No pude enviar el mensaje. Inténtalo de nuevo o escríbeme a ${profile.links.email}.`,
    };
  }
  return { status: "success" };
}
