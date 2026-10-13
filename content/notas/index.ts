/**
 * Notas (blog + espacio LinkedIn, 06-CONTENIDO.md §5). La ficha vive aquí; el texto, en
 * content/notas/<slug>.mdx. La web es la versión canónica; LinkedIn, la distribución.
 */

export type Pillar = "construyendo" | "pymes" | "medicion" | "herramientas";

export const pillarLabel: Record<Pillar, string> = {
  construyendo: "Construyendo",
  pymes: "Automatización para PYMES",
  medicion: "Aprendiendo medición",
  herramientas: "Herramientas e IA",
};

export interface Note {
  slug: string;
  title: string;
  /** 140–160 caracteres: meta description y bajada. */
  description: string;
  /** Fecha de publicación (YYYY-MM-DD). */
  date: string;
  pillar: Pillar;
  /** URL de la publicación en LinkedIn; se completa después de publicarla (06 §5.4, paso 5). */
  linkedinUrl?: string;
  draft?: boolean;
}

const allNotes: Note[] = [
  {
    slug: "eventos-ga4-portafolio",
    title: "Mis primeros 9 eventos en GA4 y por qué los nombré así",
    description:
      "Cómo diseñé la medición de mi portafolio: eventos tipados, consentimiento por defecto denegado y el error de parámetros que encontré al probar en producción.",
    date: "2026-10-12",
    pillar: "medicion",
  },
  {
    slug: "validar-correos-antes-de-una-campana",
    title: "Validé 1 200 correos antes de una campaña: así se evita quemar una cuenta de envío",
    description:
      "Por qué verificar una base de correos antes de enviar protege la reputación de las cuentas, y cómo lo resolví con Python, registros MX y reintentos.",
    date: "2026-10-12",
    pillar: "construyendo",
  },
  {
    slug: "tres-tareas-para-automatizar",
    title: "3 tareas que una tienda pequeña puede automatizar este mes",
    description:
      "Pedidos que se copian a mano, inventario que se cuadra al cierre y datos que viven en tres lugares: tres automatizaciones simples que vi funcionar.",
    date: "2026-10-12",
    pillar: "pymes",
  },
  {
    slug: "por-que-redisene-mi-portafolio",
    title: "Por qué rediseñé mi portafolio empezando por una auditoría",
    description:
      "La versión anterior se veía bien, pero no la encontraban los buscadores y contaba otra historia que mi CV. Qué cambié, en qué orden y qué aprendí.",
    date: "2026-10-12",
    pillar: "construyendo",
  },
];

const previewDrafts = process.env.NODE_ENV === "development";

/** Notas publicables, de la más reciente a la más antigua. */
export const notes = allNotes
  .filter((n) => previewDrafts || !n.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getNote(slug: string) {
  return notes.find((n) => n.slug === slug);
}
