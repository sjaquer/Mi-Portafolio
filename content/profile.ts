/**
 * FUENTE ÚNICA del perfil (CLAUDE.md, regla 1).
 * llms.txt, resume.txt, metadatos y JSON-LD se generan desde aquí.
 * Cargos, fechas y certificaciones deben ser idénticos al CV vigente.
 * Datos alineados con la Fase 0 (public/llms.txt del 11 oct 2026).
 */

export type YearMonth = `${number}-${string}`;

export interface Metric {
  /** Cifra tal como se muestra: "−35 %" (signo menos real U+2212) o "En producción". */
  value: string;
  /** Qué cambió. */
  label: string;
  /** Base, periodo y método (06-CONTENIDO.md §1). Obligatorio: nunca una cifra sin contexto. */
  context: string;
}

export interface Experience {
  org: string;
  title: string;
  from: YearMonth;
  /** null = actualidad */
  to: YearMonth | null;
  location: string;
  highlights: string[];
  metric?: Metric;
  stack: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
}

export const profile = {
  name: "Sebastián Jaque",
  fullName: "Sebastián Emiliano Jaque Reátegui",
  handle: "sjaquer",
  role: "Desarrollo web · Automatización · MarTech & CRO",
  tagline:
    "Construyo sitios y automatizaciones que conectan marketing, operaciones y datos — y mido si funcionan.",
  summary:
    "Estudiante de último ciclo de Administración y Negocios Internacionales. Construyo con Next.js, conecto sistemas con APIs y mido el impacto con GA4. Hoy desarrollo herramientas internas en el área de empleabilidad de la Universidad Norbert Wiener.",
  location: "Lima, Perú",
  availability: "Disponible para roles junior desde enero 2027",
  siteUrl: "https://sjaquer.is-a.dev",

  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Intermedio (acreditación B1 en curso)" },
  ],

  experience: [
    {
      org: "Universidad Norbert Wiener",
      title: "Practicante Pre Profesional",
      from: "2026-06",
      to: null,
      location: "Lima, Perú",
      highlights: [
        "Diseño y desarrollo de herramientas internas para el área de empleabilidad y ferias laborales.",
        "Plataforma de bolsa de trabajo con CMS por roles (Next.js, PostgreSQL, Docker).",
        "Flujos de comunicación omnicanal con segmentación por facultad, carrera y ciclo (SMTP y WhatsApp API).",
        "Automatización de la validación y estandarización de datos de estudiantes.",
      ],
      stack: ["Next.js", "PostgreSQL", "Docker", "WhatsApp API", "SMTP"],
    },
    {
      org: "Big Jack Burgers",
      title: "Operaciones y Marketing",
      from: "2025-11",
      to: null,
      location: "Lima, Perú",
      highlights: [
        "Desarrollo del sistema digital de terminal de pedidos y cocina como único programador a cargo.",
        "Control de inventario en tiempo real vinculado a la cola de comandas.",
        "Modelado de costos de insumos y estandarización de recetas operativas.",
      ],
      metric: {
        value: "−35 %",
        label: "tiempo de procesamiento por pedido",
        context: "Medido durante 4 semanas antes vs. después de la implementación",
      },
      stack: ["React", "Firebase"],
    },
    {
      org: "Dearel",
      title: "Desarrollador de Soluciones de Negocios",
      from: "2025-08",
      to: "2025-11",
      location: "Lima, Perú",
      highlights: [
        "Integración de plataformas e-commerce y operativas (Shopify, Google Sheets, CRM) mediante APIs.",
        "Automatización del flujo de leads y pedidos hacia el sistema logístico central.",
      ],
      metric: {
        value: "−30 %",
        label: "tareas manuales de digitación",
        // TODO(CV): completar base, periodo y método de medición.
        context: "Dearel",
      },
      stack: ["Python", "Shopify API", "Google Sheets API"],
    },
  ] satisfies Experience[],

  education: [
    {
      org: "Universidad Norbert Wiener",
      degree: "Administración y Negocios Internacionales",
      from: "2022-03",
      to: "2026-12",
      status: "10.º ciclo, en curso; egreso dic. 2026",
    },
  ],

  certifications: [
    { name: "Artificial Intelligence Professional (CAIPC®)", issuer: "CertiProf", year: 2025 },
    { name: "AWS Generative AI for Executives", issuer: "Amazon Web Services", year: 2025 },
    { name: "Diplomado en IA para Negocios", issuer: "IDAT", year: 2025 },
    { name: "Curso de Especialización en Microsoft SQL Server", issuer: "IDAT", year: 2024 },
    { name: "Curso de Especialización en Power BI", issuer: "Intercorp / IDAT", year: 2025 },
  ] satisfies Certification[],

  /** Para JSON-LD (knowsAbout) y llms.txt. */
  skills: {
    web: ["Next.js", "React", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL", "Docker"],
    automation: [
      "APIs REST",
      "WhatsApp Business API",
      "SMTP",
      "Resend",
      "Python",
      "Google Sheets API",
    ],
    martech: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Embudos de conversión",
      "Consent Mode v2",
    ],
  },

  links: {
    linkedin: "https://www.linkedin.com/in/sjaquer",
    github: "https://github.com/sjaquer",
    email: "sjaquer@outlook.es",
    /** Mismo número publicado en la versión anterior del sitio. */
    whatsapp: "51946978919",
  },

  updatedAt: "2026-10-11",
} as const;

export type Profile = typeof profile;
