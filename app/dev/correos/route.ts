import { profile } from "@/content/profile";
import { confirmationEmail, notificationEmail } from "@/lib/email/templates";

/**
 * Vista previa de los correos del formulario, solo en `pnpm dev`:
 * /dev/correos?tipo=notificacion · /dev/correos?tipo=confirmacion
 * Datos simulados (CLAUDE.md, regla 7). En producción responde 404.
 */
const sample = {
  name: "Ana Torres",
  email: "ana.torres@ejemplo.com",
  reason: "empleo" as const,
  message:
    "Hola, Sebastián. Vi tu caso de la plataforma de empleabilidad y me gustaría conversar sobre una vacante de analista de automatización en nuestro equipo.\n\n¿Tienes 20 minutos esta semana?",
};

export function GET(request: Request) {
  if (process.env.NODE_ENV !== "development") return new Response("Not found", { status: 404 });
  const url = new URL(request.url);
  const tipo = url.searchParams.get("tipo");
  const email = tipo === "confirmacion" ? confirmationEmail(sample) : notificationEmail(sample);
  // Las imágenes apuntan al dominio público; en local se sirven desde el propio dev server.
  const html = email.html.replaceAll(`${profile.siteUrl}/brand/`, `${url.origin}/brand/`);
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
