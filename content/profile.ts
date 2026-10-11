/**
 * FUENTE ÚNICA del perfil (CLAUDE.md, regla 1).
 * llms.txt, resume.txt, metadatos y JSON-LD se generan desde aquí.
 * Cargos, fechas y certificaciones deben ser idénticos al CV vigente.
 * Alineado con content/cv/CV-Sebastian-Jaque.docx (versión del 11 oct 2026).
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
      org: "Universidad Privada Norbert Wiener",
      title: "Practicante Pre Profesional — Área de Empleabilidad",
      from: "2026-06",
      to: null,
      location: "Lima",
      highlights: [
        "Desarrollé la plataforma web de bolsa de trabajo para ferias laborales (Next.js, PostgreSQL, Docker), con CMS editable de imágenes, textos y estados, y control de acceso por roles.",
        "Construí un pipeline ETL en Python que valida, deduplica y estandariza datos de estudiantes en la ingesta, reduciendo errores de carga manual.",
        "Migré la base de datos principal de SQLite a PostgreSQL para soportar concurrencia, dashboards en tiempo real y reportería.",
        "Implementé un sistema de comunicación masiva omnicanal (SMTP + WhatsApp Business API) con segmentación dinámica por facultad, carrera, ciclo y estado.",
      ],
      stack: ["Next.js", "PostgreSQL", "Docker", "Python", "WhatsApp Business API"],
    },
    {
      org: "Big Jack Burgers",
      title: "Operaciones y Marketing",
      from: "2025-11",
      to: "2026-09",
      location: "Lima",
      highlights: [
        "Implementé un sistema interno de gestión de pedidos que redujo el tiempo de procesamiento en 35 %.",
        // TODO(Sebastián): el +15 % no tiene base ni periodo en el CV (regla 2 de CLAUDE.md).
        "Reestructuré la política de precios a partir de costos operativos y datos de venta, elevando el margen mensual en 15 %.",
        "Gestioné contenido, comunicación de marca y seguimiento de indicadores de satisfacción del cliente.",
      ],
      metric: {
        value: "−35 %",
        label: "tiempo de procesamiento por pedido",
        // TODO(Sebastián): el CV no menciona el periodo; viene de la Fase 0. Confirmar.
        context: "Medido durante 4 semanas antes vs. después de la implementación",
      },
      stack: ["Next.js", "React", "Firebase"],
    },
    {
      org: "Dearel (Retail)",
      title: "Desarrollador de Soluciones de Negocio",
      from: "2025-08",
      to: "2025-11",
      location: "Lima",
      highlights: [
        "Integré Shopify, CRM y Google Sheets mediante APIs REST, reduciendo las tareas administrativas manuales en 30 %.",
        "Diseñé dashboards de Business Intelligence para el control de ventas e inventario.",
        "Estandaricé flujos logísticos conectados al CRM, mejorando la trazabilidad de pedidos.",
      ],
      metric: {
        value: "−30 %",
        label: "tareas administrativas manuales",
        // TODO(Sebastián): completar base y método de medición.
        context: "Dearel · ago – nov 2025",
      },
      stack: ["Shopify", "APIs REST", "Google Sheets", "Power BI"],
    },
    {
      org: "Neon Led Store",
      title: "Practicante de Marketing Digital",
      from: "2025-06",
      to: "2025-08",
      location: "Lima",
      highlights: [
        // TODO(Sebastián): el +40 % no tiene base ni periodo en el CV (regla 2 de CLAUDE.md).
        "Ejecuté estrategias de SEO técnico y semántico y de contenido que incrementaron los leads orgánicos en 40 %.",
        "Medí y reporté rendimiento con Google Analytics. Reconocido como Colaborador del Mes tres meses consecutivos.",
      ],
      stack: ["SEO", "Google Analytics"],
    },
    {
      org: "Zeus Maritime Ship Supply",
      title: "Practicante de Logística y Abastecimiento",
      from: "2025-04",
      to: "2025-05",
      location: "Callao",
      highlights: [
        "Gestioné órdenes de compra en ERP para suministros marítimos con 95 % de precisión en entregas.",
      ],
      stack: ["ERP"],
    },
    {
      org: "Freelance — Soluciones Digitales para PYMES",
      title: "Desarrollador de Soluciones",
      from: "2022-06",
      to: null,
      location: "Lima · Remoto",
      highlights: [
        "Desarrollo sistemas web con backend en Python y SQL, reportería automatizada y configuración de e-commerce para pequeños negocios.",
      ],
      stack: ["Python", "SQL"],
    },
  ] satisfies Experience[],

  education: [
    {
      org: "Universidad Privada Norbert Wiener",
      degree: "Administración y Negocios Internacionales",
      from: "2022-03",
      to: "2026-12",
      status:
        "10.º ciclo (egreso dic. 2026). Tesis en curso: impacto de la IA generativa en la productividad laboral en agencias de marketing digital de Lima (2026).",
    },
    {
      org: "Idat",
      degree: "Diplomado en Inteligencia Artificial y Aplicaciones Empresariales",
      from: "2025-03",
      to: "2025-07",
      status: "Completado",
    },
  ],

  certifications: [
    { name: "AI Professional Certification (CAIPC)", issuer: "CertiProf", year: 2025 },
    { name: "SQL Server", issuer: "Idat / Microsoft", year: 2025 },
    { name: "Power BI", issuer: "Intercorp / Zegel", year: 2025 },
    { name: "Generative AI for Executives", issuer: "AWS", year: 2025 },
  ] satisfies Certification[],

  /** En curso (CV, sección Certificaciones). */
  certificationsInProgress: [
    { name: "Google Analytics 4", issuer: "Google Skillshop" },
    { name: "Google UX Design", issuer: "Coursera" },
  ],

  /** Para JSON-LD (knowsAbout) y llms.txt. */
  skills: {
    web: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5", "Figma (UI/UX)"],
    data: ["Python", "SQL", "PostgreSQL", "Docker", "APIs REST", "pipelines ETL"],
    martech: ["Google Analytics 4", "Google Tag Manager", "SEO", "CRO", "Power BI"],
    automation: ["WhatsApp Business API", "SMTP", "Shopify", "CRM", "ERP", "Google Sheets"],
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
