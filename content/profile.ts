/**
 * FUENTE ÚNICA del perfil (CLAUDE.md, regla 1).
 * llms.txt, resume.txt, metadatos y JSON-LD se generan desde aquí.
 * Cargos, fechas y certificaciones deben ser idénticos al CV vigente.
 * Alineado con content/cv/CV-Sebastian-Jaque.docx (versión del 11 oct 2026).
 */

export type YearMonth = `${number}-${string}`;

export interface Metric {
  /** Cifra tal como se muestra: "−35 %" (signo menos real U+2212) o "En producción". */
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
  role: "Analista de Producto · Desarrollo Web · Automatización de Procesos",
  tagline:
    "Construyo herramientas web y automatizaciones pensadas para que la gente las entienda y las use sin complicarse.",
  summary:
    "Estudiante de último ciclo de Administración y Negocios Internacionales con perfil técnico (Next.js, Python, PostgreSQL, APIs). Especializado en análisis de producto, descubrimiento y diseño de flujos de usuario, y construcción de soluciones digitales que optimizan la operación de negocio y reducen tiempos de ciclo. Actualmente desarrollo herramientas internas en la Universidad Norbert Wiener.",
  /** Versión de 2–3 líneas del resumen para la primera pantalla en el celular (hero). */
  summaryShort:
    "Último ciclo de Administración y Negocios Internacionales. Hoy desarrollo herramientas internas en la Universidad Norbert Wiener.",
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
      title: "Practicante Pre Profesional — Dirección de Empleabilidad y Alumni",
      from: "2026-06",
      to: null,
      location: "Lima",
      highlights: [
        "Lideré el desarrollo y producto de Empleabilidad Wiener (bolsa laboral, creador de CV con IA y feria virtual en Next.js, Supabase/PostgreSQL, Docker, Microsoft Entra ID y Playwright E2E), unificando tres plataformas de terceros en una propia. En producción desde oct. 2026.",
        "Construí un sistema de difusión por correo con segmentación, personalización y lista de exclusión (Ley 29733): el envío de campañas de 8 000 correos pasó de horas a tan solo 5–10 minutos.",
        "Desarrollé micrositios, landings y portal de formularios con validación de identidad contra padrón institucional y tableros en tiempo real para encuestas NPS y seguimiento de egresados.",
        "Automaticé la extracción y publicación de convocatorias laborales 24/7 mediante un bot con IA (Python, Playwright, LLM local y Gemini) y depuración de bases de datos de empresas.",
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
      title: "Operaciones y Sistemas",
      from: "2025-11",
      to: "2026-09",
      location: "Lima",
      highlights: [
        "Diseñé e implementé el ecosistema de pedidos en tiempo real (carta digital interactiva, bot de WhatsApp con IA y panel ERP de cocina y despacho en Next.js y Firebase), reduciendo en 35% el tiempo de procesamiento por orden.",
        "Reestructuré la política de precios a partir de análisis de costos unitarios y datos de venta, elevando el margen mensual en 15%.",
        "Gestioné indicadores de satisfacción y experiencia de comensales para optimizar los flujos operativos del producto digital.",
      ],
      metric: {
        value: "−35 %",
        label: "tiempo de procesamiento por pedido",
        context: "Estimado · 4 semanas antes vs. después de la implementación",
      },
      stack: ["Next.js", "React", "Firebase"],
    },
    {
      org: "Freelance — Soluciones Digitales y de Producto",
      title: "Desarrollador de Soluciones y Analista de Producto",
      from: "2025-06",
      to: null,
      location: "Lima · Remoto",
      highlights: [
        "Integré Shopify, CRM (Kommo) y Google Sheets mediante APIs REST y webhooks para retail (Dearel), reduciendo las tareas administrativas manuales en 30%.",
        "Desarrollé LogINV, plataforma agroindustrial multialmacén para gestión de stock en tiempo real, alertas de expiración y cálculo automatizado de puntos de reorden (ROP).",
        "Construí PrestaFacilito (gestión de préstamos y cobranzas con lectura OCR de comprobantes de pago) y tableros de BI para control de inventario y ventas.",
      ],
      metric: {
        value: "−30 %",
        label: "tareas administrativas manuales",
        context: "Estimado · retail e integraciones freelance, 2025",
      },
      stack: ["Next.js", "Shopify", "APIs REST", "Python", "Google Sheets", "Power BI"],
    },
    {
      org: "Neon Led Store",
      title: "Practicante de Optimización Web y Canales Digitales",
      from: "2025-06",
      to: "2025-08",
      location: "Lima",
      highlights: [
        "Ejecuté estrategias de SEO técnico, semántico y arquitectura de contenidos que incrementaron los leads orgánicos en 40%.",
        "Medí y reporté rendimiento y embudos de usuario con Google Analytics. Reconocido como Colaborador del Mes tres meses consecutivos.",
      ],
      metric: {
        value: "+40 %",
        label: "leads orgánicos por optimización web",
        context: "Neon Led Store · jun – ago 2025",
      },
      stack: ["SEO", "Google Analytics"],
    },
    {
      org: "Zeus Maritime Ship Supply",
      title: "Practicante de Logística y Abastecimiento",
      from: "2025-04",
      to: "2025-05",
      location: "Callao",
      highlights: [
        "Gestioné órdenes de compra en ERP para suministros marítimos con 95 % de precisión en entregas.",
      ],
      stack: ["ERP"],
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
      "Análisis de producto",
      "Next.js",
      "Automatización de procesos",
      "Integración de APIs",
      "Python",
      "PostgreSQL",
    ],
    product: [
      "Análisis y descubrimiento de producto",
      "Especificación de requerimientos y User Stories",
      "Diseño de flujos y prototipado (Figma)",
      "Métricas de producto y analítica (GA4)",
      "Pruebas de usuario y QA",
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
    data: ["PostgreSQL", "Supabase", "SQL Server", "Docker", "Power BI", "Google Analytics 4"],
  },

  /** Cargos objetivo respaldados por proyectos reales. */
  targetRoles: [
    "Analista de producto",
    "Product Engineer junior",
    "Desarrollador de soluciones de negocio",
    "Analista de automatización de procesos",
    "Desarrollador web junior",
  ],

  /**
   * Búsquedas que debe responder el sitio (SEO, GEO y asistentes de IA).
   */
  keywords: [
    "analista de producto Lima",
    "product analyst junior Peru",
    "product engineer junior Lima",
    "desarrollador de soluciones de negocio",
    "analista de automatización de procesos",
    "desarrollador web junior Lima",
    "desarrollador Next.js Perú",
    "automatización de procesos",
    "integración de APIs",
    "integración Shopify y CRM",
    "automatización con Python",
    "RPA con Playwright",
    "Power Automate y Office Scripts",
    "bolsa de trabajo universitaria",
    "plataforma de empleabilidad",
    "creador de CV con IA",
    "gestión de inventarios LogINV",
    "PostgreSQL y Docker",
  ],

  /** Preguntas que hacen reclutadores y empresas; alimentan llms.txt y ai.txt con respuestas citables. */
  faq: [
    {
      q: "¿Quién es Sebastián Jaque?",
      a: "Analista de producto y desarrollador de soluciones en Lima, Perú. Estudiante de último ciclo de Administración y Negocios Internacionales (egreso dic. 2026). Une comprensión de negocio, diseño de flujos y desarrollo técnico: construye con Next.js, automatiza con Python y conecta plataformas con APIs.",
    },
    {
      q: "¿Qué productos en producción ha construido?",
      a: "La plataforma de empleabilidad de la Universidad Norbert Wiener (portaldelestudiante.uwiener.edu.pe/servicio/empleabilidad): bolsa laboral, creador de CV con IA y feria virtual. También el ecosistema de pedidos en tiempo real de Big Jack Burgers, la plataforma agroindustrial de inventarios LogINV, PrestaFacilito, un sistema de difusión por correo y portales de formularios con validación.",
    },
    {
      q: "¿Qué resultados medidos tiene?",
      a: "−35 % de tiempo de procesamiento por pedido en Big Jack Burgers, −30 % en tareas manuales integrando Shopify con CRM en retail, y campañas de 8 000 correos de más de 4 horas a tan solo 5–10 minutos. Cada cifra con su base y periodo documentado.",
    },
    {
      q: "¿Para qué roles está disponible?",
      a: "Roles junior de Analista de Producto, Product Engineer, desarrollo de soluciones de negocio, desarrollo web y automatización de procesos, desde enero 2027, en Lima o remoto.",
    },
    {
      q: "¿Con qué tecnologías trabaja?",
      a: "Next.js, React, TypeScript, Tailwind CSS, Python, PostgreSQL/Supabase, Firebase, Docker, Playwright, Power Automate, APIs REST, Shopify, Figma y GA4.",
    },
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/sjaquer",
    github: "https://github.com/sjaquer",
    email: "sjaquer@outlook.es",
    /** Número publicado en el CV. */
    whatsapp: "51946978919",
  },

  updatedAt: "2026-11-01",
} as const;

export type Profile = typeof profile;
