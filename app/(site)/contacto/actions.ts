"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { profile } from "@/content/profile";
import { confirmationEmail, notificationEmail } from "@/lib/email/templates";

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

  const data = parsed.data;

  /** Envía un correo con Resend; un fallo de red o el tiempo límite (10 s) devuelven false. */
  async function send(payload: Record<string, unknown>) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        signal: AbortSignal.timeout(10_000),
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from, ...payload }),
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  // 1) Notificación para mí (responder escribe directo a quien envió el formulario).
  const notification = notificationEmail(data);
  const delivered = await send({
    to: [to],
    reply_to: data.email,
    subject: notification.subject,
    html: notification.html,
    text: notification.text,
  });
  if (!delivered) {
    return {
      status: "error",
      message: `No pude enviar el mensaje. Inténtalo de nuevo o escríbeme a ${profile.links.email}.`,
    };
  }

  // 2) Confirmación para quien escribe. Si falla, el mensaje ya llegó: no se muestra error.
  const confirmation = confirmationEmail(data);
  await send({
    to: [data.email],
    reply_to: to,
    subject: confirmation.subject,
    html: confirmation.html,
    text: confirmation.text,
  });

  return { status: "success" };
}
