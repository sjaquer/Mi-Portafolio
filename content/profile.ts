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
  /** Resultado medido aunque no sea un porcentaje (p. ej. "~2 min"): se muestra en verde (§4.5). */
  measured?: boolean;
  /** Valor de partida: con él la cifra se muestra como cota "antes → después" (03-DESIGN.md §6.1). */
  before?: string;
}

/** Verde solo para resultados medidos (§4.5): variaciones con % o signo, no fechas ni estados. */
export const isMeasured = (m: Metric) =>
  m.measured ?? (/\d/.test(m.value) && /[%−+]/.test(m.value));

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
  role: "Desarrollo web · Automatización de procesos · Integraciones",
  tagline:
    "Construyo herramientas web y automatizaciones que reducen tareas manuales y conectan sistemas con APIs.",
  summary:
    "Estudiante de último ciclo de Administración y Negocios Internacionales. Construyo con Next.js, desarrollo automatizaciones con Python y conecto plataformas mediante APIs para ahorrar tiempo operativo. Actualmente desarrollo herramientas internas en la Universidad Norbert Wiener.",
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
      title: "Practicante Pre Profesional — Dirección de Desarrollo Profesional y Alumni",
      from: "2026-06",
      to: null,
      location: "Lima",
      highlights: [
        "Desarrollé en solitario Empleabilidad Wiener, la plataforma propia de bolsa laboral y CV (Next.js, Supabase/PostgreSQL, Docker): 5 roles, acceso con Microsoft Entra ID, lectura de CV en PDF con IA y pruebas E2E con Playwright. En producción desde oct. 2026.",
        "Construí un sistema de difusión por correo con segmentación, personalización y lista de exclusión (Ley 29733): el envío de campañas pasó de horas a tan solo minutos.",
        "Desarrollé micrositios y landings (feria virtual, ceremonias de graduación, formularios y encuestas NPS) con SEO técnico, validación de identidad contra padrón y normalización automática de inscripciones.",
        "Automaticé la publicación de ofertas laborales con un bot de IA (Python, Playwright, LLM local con respaldo en Gemini) y verifiqué una base de 1 200+ correos de empresas para reducir rebotes.",
      ],
      metric: {
        value: "5–10 min",
        before: "1–2 h",
        label: "por campaña de correo, antes enviada a mano en tandas",
        context: "Universidad Norbert Wiener · estimado por campaña, antes vs. después del sistema",
        measured: true,
      },
      stack: ["Next.js", "Supabase/PostgreSQL", "Docker", "Playwright", "Python"],
    },
    {
      org: "Big Jack Burgers",
      title: "Operaciones y Marketing",
      from: "2025-11",
      to: "2026-09",
      location: "Lima",
      highlights: [
        "Construí el sistema de pedidos en tres piezas conectadas en tiempo real: una carta digital y un bot de WhatsApp con IA que convierten cada pedido en una orden estructurada, y un panel interno de caja, cocina y despacho que calcula totales y registra tiempos.",
        // TODO(Sebastián): el +15 % no tiene base ni periodo en el CV (regla 2 de CLAUDE.md).
        "Reestructuré la política de precios a partir de costos operativos y datos de venta, elevando el margen mensual en 15 %.",
        "Gestioné contenido, comunicación de marca y seguimiento de indicadores de satisfacción del cliente.",
      ],
      metric: {
        value: "−35 %",
        label: "tiempo de procesamiento por pedido",
        context: "Estimado · 4 semanas antes vs. después de la implementación",
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
        "Sincronicé órdenes, clientes e inventario entre Shopify, el CRM (Kommo) y Google Sheets con APIs REST y webhooks, para que ningún dato se digitara dos veces.",
        "Diseñé dashboards de Business Intelligence para el control de ventas e inventario.",
        "Estandaricé flujos logísticos conectados al CRM, mejorando la trazabilidad de pedidos.",
      ],
      metric: {
        value: "−30 %",
        label: "tareas administrativas manuales",
        context: "Estimado · Dearel, ago – nov 2025",
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
        "Ejecuté estrategias de SEO técnico y semántico y optimización de contenido.",
        "Monitoreé y reporté rendimiento web con Google Analytics. Reconocido como Colaborador del Mes tres meses consecutivos.",
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

  /** Aptitudes técnicas para JSON-LD (knowsAbout), CV y llms.txt. */
  skills: {
    primary: [
      "Next.js",
      "Automatización de procesos",
      "Integración de APIs",
      "Python",
      "PostgreSQL",
    ],
    web: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5", "Figma (UI/UX)"],
    automation: [
      "Python",
      "APIs REST",
      "Playwright (RPA)",
      "Power Automate",
      "Google Apps Script",
      "Integración Shopify y CRM",
      "Email transaccional (Resend)",
    ],
    data: ["PostgreSQL", "SQL Server", "Docker", "Power BI", "SEO y Google Analytics básico"],
  },

  /** Cargos objetivo respaldados por proyectos reales. */
  targetRoles: [
    "Desarrollador web",
    "Desarrollador full stack junior",
    "Analista de automatización de procesos",
    "Desarrollador de soluciones de negocio",
    "Analista de marketing digital",
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/sjaquer",
    github: "https://github.com/sjaquer",
    email: "sjaquer@outlook.es",
    /** Número publicado en el CV. */
    whatsapp: "51946978919",
  },

  updatedAt: "2026-10-13",
} as const;

export type Profile = typeof profile;
