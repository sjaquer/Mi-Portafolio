import { cases } from "@/content/casos";
import { notes } from "@/content/notas";
import { profile } from "@/content/profile";
import { formatDate, formatRange } from "@/lib/format";

/** Versión en texto plano del perfil para llms.txt y resume.txt (auditoría C7). */
function experienceBlock() {
  return profile.experience
    .map((e) => {
      const lines = [`- ${e.title} — ${e.org} (${formatRange(e.from, e.to)}, ${e.location})`];
      e.highlights.forEach((h) => lines.push(`  - ${h}`));
      if (e.metric)
        lines.push(`  - Resultado: ${e.metric.value} — ${e.metric.label} (${e.metric.context})`);
      if (e.stack.length) lines.push(`  - Stack: ${e.stack.join(", ")}`);
      return lines.join("\n");
    })
    .join("\n");
}

function educationBlock() {
  return profile.education
    .map((e) => `- ${e.degree} — ${e.org} (${formatRange(e.from, e.to)}). ${e.status}.`)
    .join("\n");
}

function certificationsBlock() {
  return [
    ...profile.certifications.map((c) => `- ${c.name} — ${c.issuer}, ${c.year}`),
    ...profile.certificationsInProgress.map((c) => `- En curso: ${c.name} — ${c.issuer}`),
  ].join("\n");
}

function skillsBlock() {
  return [
    `- Aptitudes principales: ${profile.skills.primary.join(", ")}`,
    `- Desarrollo web: ${profile.skills.web.join(", ")}`,
    `- Automatización e integraciones: ${profile.skills.automation.join(", ")}`,
    `- Bases de datos y herramientas: ${profile.skills.data.join(", ")}`,
  ].join("\n");
}

function languagesBlock() {
  return profile.languages.map((l) => `- ${l.name}: ${l.level}`).join("\n");
}

function linksBlock() {
  return [
    `- Web: ${profile.siteUrl}`,
    `- LinkedIn: ${profile.links.linkedin}`,
    `- GitHub: ${profile.links.github}`,
    `- Email: ${profile.links.email}`,
  ].join("\n");
}

const updated = `Actualizado: ${formatDate(profile.updatedAt)}`;

/** https://llmstxt.org — resumen en Markdown para asistentes de IA. */
export function llmsTxt() {
  return `# ${profile.name}

> ${profile.role}. ${profile.tagline}

${profile.summary}

- Ubicación: ${profile.location}
- Disponibilidad: ${profile.availability}

## Rol y especialidad

${skillsBlock()}

## Experiencia

${experienceBlock()}

## Educación

${educationBlock()}

## Certificaciones

${certificationsBlock()}

## Idiomas

${languagesBlock()}

## Casos de estudio

${cases.map((c) => `- [${c.title}](${profile.siteUrl}/proyectos/${c.slug}): ${c.result.value} ${c.result.label}.`).join("\n")}

## Notas

${notes.map((n) => `- [${n.title}](${profile.siteUrl}/notas/${n.slug}): ${n.description}`).join("\n")}

## Enlaces

${linksBlock()}
- CV en texto plano: ${profile.siteUrl}/resume.txt

${updated}
`;
}

export function resumeTxt() {
  const rule = "─".repeat(72);
  const section = (title: string, body: string) => `${title.toUpperCase()}\n${rule}\n${body}\n`;
  return [
    `${profile.fullName.toUpperCase()}\n${profile.role}\n${profile.location} · ${profile.siteUrl}\n`,
    section("Perfil", `${profile.tagline}\n\n${profile.summary}\n${profile.availability}.`),
    section("Especialidad", skillsBlock()),
    section("Experiencia", experienceBlock()),
    section("Educación", educationBlock()),
    section("Certificaciones", certificationsBlock()),
    section("Idiomas", languagesBlock()),
    section("Contacto", linksBlock()),
    updated,
  ].join("\n");
}
