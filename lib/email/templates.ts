import { profile } from "@/content/profile";
import { cvPdfPath } from "@/lib/cv-path";

/**
 * Correos del formulario de contacto con la línea gráfica de 03-DESIGN.md
 * (§4 color, §5 tipografía, §6.1 regla de medición, §13.4 firma), adaptada a correo:
 * tablas, estilos en línea, 600 px de ancho y fuentes con alternativas seguras.
 */

export type ContactReason = "empleo" | "proyecto" | "otro";

export interface ContactMessage {
  name: string;
  email: string;
  reason: ContactReason;
  message: string;
}

export interface EmailContent {
  subject: string;
  html: string;
  text: string;
}

const reasonLabel: Record<ContactReason, string> = {
  empleo: "Empleo",
  proyecto: "Proyecto",
  otro: "Otro",
};

// Tokens de marca en hex: los clientes de correo no entienden variables CSS.
const C = {
  papel: "#FAFAF8",
  blanco: "#FFFFFF",
  gris50: "#F3F2EF",
  gris100: "#E4E2DD",
  gris500: "#666C76",
  gris700: "#3D424B",
  tinta: "#14161A",
  marino: "#1F3A5F",
  azul: "#2350D9",
};
const SANS = "Inter, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const MONO = "'JetBrains Mono', Menlo, Consolas, 'Courier New', monospace";
const ASSET = `${profile.siteUrl}/brand/email`;

const esc = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

const firstName = (name: string) => name.trim().split(/\s+/)[0] ?? name;

/** Etiqueta mono en mayúsculas (§5.3). */
const label = (text: string) =>
  `<p style="margin:0 0 12px;font-family:${MONO};font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:${C.gris500};">${esc(text)}</p>`;

/** Botón: primario (azul acción) o secundario (borde), §19.1. */
const button = (href: string, text: string, variant: "primary" | "secondary" = "primary") => {
  const primary = variant === "primary";
  return `<a href="${href}" style="display:inline-block;padding:12px 20px;border-radius:10px;font-family:${SANS};font-size:15px;font-weight:600;text-decoration:none;${
    primary
      ? `background:${C.azul};color:${C.blanco};border:1px solid ${C.azul};`
      : `background:${C.blanco};color:${C.tinta};border:1px solid #8A9099;`
  }">${esc(text)}</a>`;
};

/** Marco común: papel, tarjeta blanca de 600 px, cabecera con monograma y pie con la regla. */
function layout({ preheader, body, footer }: { preheader: string; body: string; footer: string }) {
  return `<!doctype html>
<html lang="es-PE">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${esc(profile.name)}</title>
</head>
<body style="margin:0;padding:0;background:${C.papel};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.papel};">
  <tr><td align="center" style="padding:32px 16px;">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;">
      <tr><td style="padding:0 0 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td style="padding-right:12px;"><img src="${ASSET}/monograma.png" width="32" height="32" alt="sj" style="display:block;border:0;border-radius:7px;"></td>
          <td style="font-family:${SANS};font-size:15px;font-weight:600;color:${C.tinta};">${esc(profile.name)}</td>
        </tr></table>
      </td></tr>
      <tr><td style="background:${C.blanco};border:1px solid ${C.gris100};border-radius:16px;padding:32px 24px;font-family:${SANS};color:${C.gris700};font-size:16px;line-height:1.6;">
        ${body}
      </td></tr>
      <tr><td style="padding:24px 4px 0;">
        <img src="${ASSET}/regla.png" width="552" height="12" alt="" style="display:block;width:100%;max-width:552px;height:auto;border:0;">
      </td></tr>
      <tr><td style="padding:16px 4px 0;font-family:${SANS};font-size:12px;line-height:1.6;color:${C.gris500};">
        ${footer}
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/** Firma de correo (§13.4). */
const signature = `<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;border-top:1px solid ${C.gris100};">
  <tr><td style="padding-top:20px;font-family:${SANS};">
    <p style="margin:0;font-size:15px;font-weight:600;color:${C.tinta};">${esc(profile.name)}</p>
    <p style="margin:2px 0 0;font-size:13px;color:${C.gris500};">${esc(profile.role)}</p>
    <p style="margin:8px 0 0;font-size:13px;">
      <a href="${profile.siteUrl}" style="color:${C.azul};text-decoration:none;">sjaquer.is-a.dev</a>
      <span style="color:${C.gris100};">&nbsp;·&nbsp;</span>
      <a href="${profile.links.linkedin}" style="color:${C.azul};text-decoration:none;">LinkedIn</a>
    </p>
  </td></tr>
</table>`;

/** Notificación para Sebastián: quién escribió, por qué y el mensaje. */
export function notificationEmail(m: ContactMessage, receivedAt = new Date()): EmailContent {
  const reason = reasonLabel[m.reason];
  const when = receivedAt.toLocaleString("es-PE", {
    timeZone: "America/Lima",
    dateStyle: "long",
    timeStyle: "short",
  });
  const replyHref = `mailto:${encodeURIComponent(m.email)}?subject=${encodeURIComponent(`Re: tu mensaje (${reason}) en ${new URL(profile.siteUrl).host}`)}`;
  const row = (term: string, value: string) =>
    `<tr><td style="padding:10px 0;border-bottom:1px solid ${C.gris100};font-family:${MONO};font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:${C.gris500};width:96px;vertical-align:top;">${term}</td><td style="padding:10px 0;border-bottom:1px solid ${C.gris100};font-family:${SANS};font-size:15px;color:${C.tinta};">${value}</td></tr>`;

  const body = `
    ${label(`Nuevo mensaje · ${reason}`)}
    <h1 style="margin:0 0 20px;font-family:${SANS};font-size:24px;line-height:1.25;font-weight:600;letter-spacing:-0.02em;color:${C.tinta};">${esc(m.name)} te escribió</h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      ${row("Nombre", esc(m.name))}
      ${row("Email", `<a href="mailto:${esc(m.email)}" style="color:${C.azul};text-decoration:none;">${esc(m.email)}</a>`)}
      ${row("Motivo", reason)}
    </table>
    ${label("Mensaje")}
    <div style="background:${C.gris50};border-radius:10px;padding:16px 18px;font-size:15px;line-height:1.6;color:${C.tinta};white-space:pre-wrap;">${esc(m.message)}</div>
    <p style="margin:28px 0 0;">${button(replyHref, `Responder a ${firstName(m.name)}`)}</p>`;

  return {
    subject: `[Web] ${reason} — ${m.name}`,
    html: layout({
      preheader: `${reason}: ${m.message.slice(0, 90)}`,
      body,
      footer: `Recibido el ${esc(when)} desde el formulario de <a href="${profile.siteUrl}/contacto" style="color:${C.gris500};">${new URL(profile.siteUrl).host}</a>. Responder a este correo escribe directamente a ${esc(m.email)}.`,
    }),
    text: `Nuevo mensaje · ${reason}\n\n${m.name} <${m.email}>\nMotivo: ${reason}\nRecibido: ${when}\n\n${m.message}\n\n— Formulario de ${profile.siteUrl}/contacto`,
  };
}

/**
 * Confirmación automática para quien escribe.
 * Incluye el resumen exacto del mensaje enviado (motivo y texto) y aviso de carpeta de correo no deseado.
 */
export function confirmationEmail(m: ContactMessage): EmailContent {
  const name = firstName(m.name);
  const reason = reasonLabel[m.reason];
  const isJob = m.reason === "empleo";
  const reasonPhrase =
    m.reason === "empleo"
      ? "una oportunidad de empleo"
      : m.reason === "proyecto"
        ? "un proyecto"
        : "tu consulta";

  const row = (term: string, value: string) =>
    `<tr><td style="padding:10px 0;border-bottom:1px solid ${C.gris100};font-family:${MONO};font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:${C.gris500};width:96px;vertical-align:top;">${term}</td><td style="padding:10px 0;border-bottom:1px solid ${C.gris100};font-family:${SANS};font-size:15px;font-weight:600;color:${C.tinta};">${value}</td></tr>`;

  const body = `
    ${label("Mensaje recibido")}
    <h1 style="margin:0 0 16px;font-family:${SANS};font-size:24px;line-height:1.25;font-weight:600;letter-spacing:-0.02em;color:${C.tinta};">Gracias, ${esc(name)}</h1>
    <p style="margin:0 0 16px;">Recibí tu mensaje sobre <strong style="color:${C.tinta};">${esc(reasonPhrase)}</strong> y te responderé en un plazo de <strong style="color:${C.tinta};">1 a 2 días hábiles</strong>.</p>
    
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;margin-bottom:12px;">
      ${row("Motivo", reason)}
    </table>
    ${label("Copia de tu mensaje")}
    <div style="background:${C.gris50};border-radius:10px;padding:16px 18px;font-size:15px;line-height:1.6;color:${C.tinta};white-space:pre-wrap;margin-bottom:20px;">${esc(m.message)}</div>

    <div style="background:${C.gris50};border:1px solid ${C.gris100};border-radius:10px;padding:14px 16px;margin:0 0 24px;font-size:13px;line-height:1.5;color:${C.gris700};">
      <strong style="color:${C.tinta};">Aviso:</strong> Si en algún momento no recibes mi respuesta en tu bandeja principal, por favor revisa tu carpeta de <strong>correo no deseado (spam)</strong>.
    </div>

    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:${C.gris700};">${
      isJob
        ? "Mientras tanto, puedes revisar mi CV actualizado o ver mis proyectos y experiencia:"
        : "Mientras tanto, puedes ver cómo trabajo: cada caso cuenta el problema, las decisiones y lo que cambió, con su base y su periodo."
    }</p>
    <table role="presentation" cellpadding="0" cellspacing="0"><tr>
      ${
        isJob
          ? `<td style="padding:0 12px 12px 0;">${button(`${profile.siteUrl}${cvPdfPath}`, "Descargar CV", "primary")}</td>
             <td style="padding:0 0 12px;">${button(`${profile.siteUrl}/proyectos?utm_source=email&utm_medium=confirmacion&utm_campaign=contacto`, "Ver proyectos", "secondary")}</td>`
          : `<td style="padding:0 12px 12px 0;">${button(`${profile.siteUrl}/proyectos?utm_source=email&utm_medium=confirmacion&utm_campaign=contacto`, "Ver proyectos", "primary")}</td>
             <td style="padding:0 0 12px;">${button(`${profile.siteUrl}${cvPdfPath}`, "Descargar CV", "secondary")}</td>`
      }
    </tr></table>
    ${signature}`;

  return {
    subject: `Recibí tu mensaje (${reason}) — ${profile.name}`,
    html: layout({
      preheader: `Recibí tu mensaje sobre ${reasonPhrase}. Te respondo en 1 a 2 días hábiles.`,
      body,
      footer: `Recibes este correo porque escribiste en el formulario de contacto de <a href="${profile.siteUrl}" style="color:${C.gris500};">${new URL(profile.siteUrl).host}</a> con el motivo ${esc(reason)}. No es una lista de envíos: no recibirás más correos automáticos. <a href="${profile.siteUrl}/privacidad" style="color:${C.gris500};">Aviso de privacidad</a>.`,
    }),
    text: `Gracias, ${name}.\n\nRecibí tu mensaje sobre ${reasonPhrase} y te responderé en un plazo de 1 a 2 días hábiles.\n\nCopia de tu mensaje:\nMotivo: ${reason}\nMensaje:\n${m.message}\n\nAviso: Si en algún momento no recibes mi respuesta en tu bandeja principal, por favor revisa tu carpeta de correo no deseado (spam).\n\nMientras tanto:\n→ CV: ${profile.siteUrl}${cvPdfPath}\n→ Proyectos: ${profile.siteUrl}/proyectos\n\n${profile.name}\n${profile.role}\n${profile.siteUrl}`,
  };
}
