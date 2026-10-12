import { profile } from "@/content/profile";

/**
 * Remitente con la marca personal: siempre "Sebastián Jaque <dirección>".
 * CONTACT_FROM_EMAIL puede ser solo la dirección (recomendado) o ya traer un nombre;
 * en ese caso se respeta tal cual.
 */
export function fromAddress(raw = process.env.CONTACT_FROM_EMAIL) {
  const value = raw?.trim();
  if (!value) return undefined;
  return value.includes("<") ? value : `${profile.name} <${value}>`;
}

export interface SendPayload {
  to: string[];
  subject: string;
  html: string;
  text: string;
  reply_to?: string;
}

/** Envía un correo con Resend; un fallo de red o el tiempo límite (10 s) devuelven false. */
export async function sendEmail(payload: SendPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = fromAddress();
  if (!apiKey || !from) return false;
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
