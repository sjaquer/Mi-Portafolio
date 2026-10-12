import { profile } from "@/content/profile";
import { fromAddress, sendEmail } from "@/lib/email/send";
import { confirmationEmail, notificationEmail } from "@/lib/email/templates";

/**
 * Correos del formulario, solo en `pnpm dev`. En producción responde 404.
 * - Ver:    /dev/correos?tipo=notificacion · /dev/correos?tipo=confirmacion
 * - Probar: /dev/correos?enviar=1[&a=otro@correo.com] → envía los dos correos reales con
 *   Resend (claves de .env.local) a CONTACT_TO_EMAIL o a la dirección de `a`.
 * Datos simulados (CLAUDE.md, regla 7).
 */
const sample = {
  name: "Ana Torres",
  email: "ana.torres@ejemplo.com",
  reason: "empleo" as const,
  message:
    "Hola, Sebastián. Vi tu caso de la plataforma de empleabilidad y me gustaría conversar sobre una vacante de analista de automatización en nuestro equipo.\n\n¿Tienes 20 minutos esta semana?",
};

export async function GET(request: Request) {
  if (process.env.NODE_ENV !== "development") return new Response("Not found", { status: 404 });
  const url = new URL(request.url);

  if (url.searchParams.has("enviar")) {
    const to = url.searchParams.get("a") ?? process.env.CONTACT_TO_EMAIL ?? profile.links.email;
    if (!process.env.RESEND_API_KEY || !fromAddress()) {
      return Response.json(
        { ok: false, error: "Falta RESEND_API_KEY o CONTACT_FROM_EMAIL en .env.local" },
        { status: 500 },
      );
    }
    // Ambos van a tu bandeja; el `reply_to` simula el flujo real.
    const results = await Promise.all(
      [notificationEmail(sample), confirmationEmail(sample)].map(async (email) => ({
        asunto: email.subject,
        enviado: await sendEmail({ to: [to], reply_to: to, ...email }),
      })),
    );
    return Response.json({ de: fromAddress(), para: to, resultados: results });
  }

  const tipo = url.searchParams.get("tipo");
  const email = tipo === "confirmacion" ? confirmationEmail(sample) : notificationEmail(sample);
  // Las imágenes apuntan al dominio público; en local se sirven desde el propio dev server.
  const html = email.html.replaceAll(`${profile.siteUrl}/brand/`, `${url.origin}/brand/`);
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
