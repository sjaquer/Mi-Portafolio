import type { Metric } from "@/content/profile";

/**
 * Casos de estudio (02-PRD.md §8.3) y selección de proyectos (07-PROYECTOS.md).
 * Los datos de la ficha y las tarjetas viven aquí; el cuerpo de cada caso, en content/casos/<slug>.mdx.
 */

/**
 * Permiso escrito de la jefatura de Empleabilidad para publicar proyectos institucionales
 * (07-PROYECTOS.md §3.1). Cambiar a `true` solo cuando llegue la respuesta por correo.
 */
export const institutionalPermission = true; // Permiso confirmado por Sebastián el 2026-10-11.

/** Fecha del build (YYYY-MM-DD): las fechas de publicación se evalúan al compilar. */
const buildDate = process.env.BUILD_DATE ?? new Date().toISOString().slice(0, 10);
/** En `next dev` se ven también los borradores, marcados como tales. */
export const previewDrafts = process.env.NODE_ENV === "development";

export type CaseType = "web" | "automatizacion" | "datos";
export type CaseStatus = "produccion" | "qa" | "entregado" | "prototipo";

export const caseTypeLabel: Record<CaseType, string> = {
  web: "Web",
  automatizacion: "Automatización",
  datos: "Datos / Medición",
};

export const caseStatusLabel: Record<CaseStatus, string> = {
  produccion: "En producción",
  qa: "En QA",
  entregado: "Entregado",
  prototipo: "Prototipo",
};

interface Publication {
  /** Proyecto de la universidad: necesita `institutionalPermission`. */
  institutional?: boolean;
  /** No se publica antes de esta fecha (YYYY-MM-DD). */
  publishFrom?: string;
  /** Contenido aún no listo o programado para otra fase. */
  draft?: string;
}

export interface CaseStudy extends Publication {
  slug: string;
  /** Título = resultado, no nombre del proyecto (06-CONTENIDO.md §4). */
  title: string;
  subtitle: string;
  /** Una línea: qué dolía. */
  problem: string;
  result: Metric;
  type: CaseType;
  context: string;
  role: string;
  duration: string;
  year: number;
  stack: string[];
  status: CaseStatus;
  /** Última revisión del contenido (sitemap). */
  updatedAt: string;
  /** Aparece en la home (máximo 3). */
  featured?: boolean;
}

/** Motivo por el que algo no se publica todavía, o `null` si se publica. */
export function pendingReason(p: Publication): string | null {
  if (p.draft) return p.draft;
  if (p.institutional && !institutionalPermission)
    return "Falta el permiso escrito de la universidad";
  if (p.publishFrom && buildDate < p.publishFrom) return `Se publica desde el ${p.publishFrom}`;
  return null;
}

const visible = (p: Publication) => previewDrafts || pendingReason(p) === null;

const allCases: CaseStudy[] = [
  {
    slug: "bolsa-de-trabajo-wiener",
    title: "Una plataforma de empleabilidad propia para reemplazar tres de terceros",
    subtitle:
      "Bolsa laboral, creador de CV con lectura por IA y feria virtual en un solo lugar: cinco roles, acceso con Microsoft y pruebas de punta a punta.",
    problem:
      "La bolsa laboral, el creador de CV y los formularios de feria vivían en plataformas de terceros, cada una con su usuario y sin datos comunes.",
    result: {
      value: "3 → 1",
      label: "plataformas de terceros reemplazadas por una propia",
      context: "En producción y en uso desde oct. 2026 · base de la feria virtual del 22 oct",
    },
    type: "web",
    context: "Universidad Norbert Wiener · Dirección de Empleabilidad y Alumni",
    role: "Único desarrollador: producto, arquitectura, backend y frontend",
    duration: "2026", // TODO(Sebastián): confirmar inicio y fin
    year: 2026,
    stack: ["Next.js", "Supabase/PostgreSQL", "Docker", "Playwright"],
    status: "produccion",
    updatedAt: "2026-10-11",
    featured: true,
    institutional: true,
  },
  {
    slug: "difusion-correo-wiener",
    title: "Campañas de 8 000 correos en 2 minutos, con baja automática",
    subtitle:
      "Sistema interno de difusión con segmentación, personalización, envío por lotes y lista de exclusión, más la verificación previa de la base de correos.",
    problem:
      "Las campañas a egresados se enviaban a mano desde Outlook, en tandas pequeñas: tomaban horas y las bajas no siempre se respetaban.",
    result: {
      value: "~2 min",
      label: "por campaña de 8 000 destinatarios (antes, más de 4 h)",
      context: "Tiempo de envío de una misma campaña antes y después del sistema",
      measured: true,
    },
    type: "automatizacion",
    context: "Universidad Norbert Wiener · Dirección de Empleabilidad y Alumni",
    role: "Diseño y desarrollo completo",
    duration: "2026", // TODO(Sebastián): fechas de inicio y puesta en uso
    year: 2026,
    stack: ["React", "Node.js", "PostgreSQL", "Microsoft 365"],
    status: "produccion",
    updatedAt: "2026-10-11",
    featured: true,
    institutional: true,
  },
  {
    slug: "formularios-nps-wiener",
    title: "Encuestas con identidad validada y datos que se analizan solos",
    subtitle:
      "Portal de formularios con DNI validado contra el padrón, encuestas NPS por evento y un tablero de resultados de egresados que se recalcula solo.",
    problem:
      "Las encuestas vivían en formularios sueltos, sin verificar quién respondía, y cada reporte obligaba a unir y limpiar respuestas a mano.",
    result: {
      value: "~3 000",
      label: "respuestas de egresados analizadas en un tablero que se actualiza solo",
      context: "Encuesta de empleabilidad de egresados 2025–2026",
    },
    type: "datos",
    context: "Universidad Norbert Wiener · Dirección de Empleabilidad y Alumni",
    role: "Diseño y desarrollo del portal y del tablero",
    duration: "2026", // TODO(Sebastián): fechas
    year: 2026,
    stack: ["React", "TypeScript", "PostgreSQL (Neon)", "Chart.js"],
    status: "produccion",
    updatedAt: "2026-10-11",
    featured: true,
    institutional: true,
  },
  {
    slug: "feria-virtual-wiener",
    title: "Una feria virtual que limpia sus propias inscripciones",
    subtitle:
      "Sitio de la Feria Virtual de Empleabilidad 2026: una página por empresa generada desde datos, conferencias con antes y después, e inscripciones normalizadas al guardarse.",
    problem:
      "La información de cada empresa llegaba en piezas sueltas y las inscripciones traían códigos, correos y nombres mal escritos que había que limpiar a mano.",
    result: {
      value: "Automática",
      label: "limpieza de las inscripciones, que antes se hacía a mano",
      context: "Feria Virtual de Empleabilidad 2026", // TODO(Sebastián): inscritos y conferencias (07 §4)
    },
    type: "web",
    context: "Universidad Norbert Wiener · Dirección de Empleabilidad y Alumni",
    role: "Diseño y desarrollo completo",
    duration: "2026", // TODO(Sebastián): fechas
    year: 2026,
    stack: ["React", "TypeScript", "Tailwind CSS", "Apps Script"],
    status: "produccion",
    updatedAt: "2026-10-11",
    institutional: true,
  },
  {
    slug: "reqlut-bot",
    title: "Un bot que publica ofertas laborales 24/7 con IA local",
    subtitle:
      "Lee el correo de ofertas, extrae cada aviso, lo estructura con un modelo local, lo revisa con una segunda pasada de IA y lo publica en la bolsa laboral.",
    problem:
      "Cada oferta que llegaba por correo se copiaba campo por campo al formulario de la bolsa laboral: decenas por semana, con errores y retrasos.",
    result: {
      value: "24/7",
      label: "publicación de ofertas sin copiar campos a mano",
      context: "Bolsa laboral de la universidad", // TODO(Sebastián): ofertas/semana y horas evitadas (07 §4)
    },
    type: "automatizacion",
    context: "Universidad Norbert Wiener · Dirección de Empleabilidad y Alumni",
    role: "Diseño y desarrollo completo",
    duration: "2026", // TODO(Sebastián): fechas
    year: 2026,
    stack: ["Python", "Playwright", "Ollama", "Gemini"],
    status: "produccion",
    updatedAt: "2026-10-11",
    institutional: true,
  },
  {
    slug: "este-portafolio",
    title: "Un portafolio que carga menos de la mitad de JavaScript y se puede medir",
    subtitle:
      "Rehice mi web desde una auditoría: contenido en el HTML, una sola fuente de datos, sistema de diseño accesible y medición con consentimiento.",
    problem:
      "La web anterior pintaba todo con JavaScript, contaba otra historia que mi CV y no tenía ninguna forma de saber si servía.",
    result: {
      value: "−59 %",
      label: "JavaScript inicial: de ~344 KB a ~140 KB comprimidos",
      context:
        "Build de Vite del 11 oct (gzip) vs. Lighthouse móvil de la home nueva del 12 oct, sin contar GTM/GA4",
    },
    type: "web",
    context: "Proyecto propio · sjaquer.is-a.dev",
    role: "Auditoría, diseño, desarrollo y medición",
    duration: "oct 2026",
    year: 2026,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GTM / GA4"],
    status: "produccion",
    updatedAt: "2026-10-12",
  },
  {
    slug: "integracion-shopify-crm-dearel",
    title: "Pedidos y clientes sin digitar dos veces en una tienda retail",
    subtitle:
      "Integración de Shopify, el CRM y Google Sheets mediante APIs REST, con tableros de ventas e inventario y flujos logísticos conectados al CRM.",
    problem:
      "Los pedidos y los datos de clientes se copiaban a mano entre la tienda online, el CRM y las hojas de cálculo.",
    result: {
      value: "−30 %",
      label: "tareas administrativas manuales",
      context: "Dearel · ago – nov 2025", // TODO(Sebastián): base, periodo y método de medición
    },
    type: "automatizacion",
    context: "Dearel · tienda retail en Lima",
    role: "Desarrollador de Soluciones de Negocio",
    duration: "ago – nov 2025",
    year: 2025,
    stack: ["Shopify", "APIs REST", "Google Sheets", "Power BI"],
    status: "entregado",
    updatedAt: "2026-10-12",
    draft: "Falta la base y el método del −30 % (07-PROYECTOS.md §4)",
  },
  {
    slug: "pedidos-big-jack",
    title: "Pedidos 35 % más rápidos en una hamburguesería",
    subtitle:
      "Terminal de pedidos y cocina, menú digital conectado por webhook e inventario ligado a las comandas.",
    problem:
      "Salón, cocina y canal online trabajaban desconectados: cada pedido se transcribía a mano y el inventario se desfasaba.",
    result: {
      value: "−35 %",
      label: "tiempo de procesamiento por pedido",
      context: "Medido durante 4 semanas antes vs. después de la implementación",
    },
    type: "automatizacion",
    context: "Big Jack Burgers · hamburguesería en Lima",
    role: "Operaciones y Marketing · único programador del sistema",
    duration: "nov 2025 – sep 2026",
    year: 2025,
    stack: ["Next.js", "React", "Firebase", "Webhooks"],
    status: "entregado", // TODO(Sebastián): ¿sigue en uso? Si es así, "produccion".
    updatedAt: "2026-10-11",
  },
];

/** Casos publicables en este build (en desarrollo, todos). */
export const cases = allCases.filter(visible);

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}

/** Galería (Nivel B, 07-PROYECTOS.md §2): tarjeta corta, sin caso largo. */
export interface GalleryItem extends Publication {
  name: string;
  angle: string;
  stack: string[];
  href?: string;
  hrefLabel?: string;
}

const allGallery: GalleryItem[] = [
  {
    name: "Landings de graduación 2026 · pregrado y posgrado",
    angle:
      "Una base reutilizada para dos públicos: cuenta regresiva, preguntas frecuentes para bajar consultas repetidas, registro de asistencia y SEO técnico.",
    stack: ["HTML", "CSS", "JavaScript", "SEO"],
    href: "https://ceremoniaegresados.uwiener.edu.pe",
    hrefLabel: "Ver la landing de pregrado",
    institutional: true,
  },
  {
    name: "Wiener Career Center & Alumni · Posgrado",
    angle:
      "Sección de empleabilidad y alumni integrada sobre el WordPress de Posgrado, conservando los píxeles de Google Ads, Meta, LinkedIn y TikTok.",
    stack: ["WordPress", "JavaScript", "Píxeles de medición"],
    institutional: true,
  },
  {
    name: "Página de Empleabilidad y Alumni",
    angle:
      "Rediseño de la página del área: arquitectura de información por público, formulario de leads y contacto por WhatsApp.",
    stack: ["HTML", "CSS", "JavaScript"],
    institutional: true,
  },
  {
    name: "Portal de Bolsa Laboral",
    angle:
      "Propuesta de página de inicio para la bolsa laboral: por qué registrarse, una sección para empresas y la agenda de eventos y talleres.",
    stack: ["HTML", "Tailwind CSS"],
    institutional: true,
    // TODO(Sebastián): ¿se publicó o quedó como prototipo? (07-PROYECTOS.md, Nivel B)
  },
  {
    name: "LogINV",
    angle:
      "PWA de inventario para varios almacenes: conteo rápido con escáner de códigos de barras, alertas de vencimiento e interfaz en 4 idiomas.",
    stack: ["Next.js", "Firebase", "PWA"],
    href: "https://github.com/sjaquer/LogINV",
    hrefLabel: "Código de LogINV en GitHub",
    // TODO(Sebastián): ¿tuvo cliente real? (07-PROYECTOS.md, Nivel B)
  },
  {
    name: "Sistema Obra",
    angle:
      "Inventario de materiales, donaciones y turnos para una obra comunitaria, con movimientos en tiempo real y exportación a Excel.",
    stack: ["React", "Firestore"],
  },
];

export const gallery = allGallery.filter(visible);

/** Proyectos de práctica: visualmente secundarios (02-PRD.md §8.2). Sin métricas. */
export interface LabProject {
  name: string;
  description: string;
  stack: string[];
  year: number;
  href: string;
}

// TaskZenith y ORDEV al fondo: sin relación con el objetivo (07-PROYECTOS.md §2).
export const lab: LabProject[] = [
  {
    name: "Big Jack Bot",
    description:
      "Prototipo que convierte mensajes de WhatsApp en pedidos estructurados: un modelo local detecta la intención y Gemini extrae los productos.",
    stack: ["Electron", "React", "Ollama", "Gemini API"],
    year: 2025,
    href: "https://github.com/sjaquer/bigjack-bot",
  },
  {
    name: "TaskMe",
    description:
      "Tablero Kanban que estructura tareas escritas en lenguaje natural y las sincroniza con Google Calendar.",
    stack: ["Next.js", "Firebase", "Genkit", "dnd-kit"],
    year: 2025,
    href: "https://github.com/sjaquer/taskME",
  },
  {
    name: "TaskZenith",
    description:
      "Espacio de trabajo modular con widgets arrastrables, persistencia en Firestore y temporizador Pomodoro.",
    stack: ["React", "TypeScript", "Firestore", "dnd-kit"],
    year: 2025,
    href: "https://github.com/sjaquer/TaskZenith",
  },
  {
    name: "ORDEV",
    description:
      "Planificador de rutas aéreas que resuelve restricciones de peso, combustible y pasaje con el solver CP-SAT de OR-Tools.",
    stack: ["Python", "OR-Tools", "React", "TypeScript"],
    year: 2025,
    href: "https://github.com/sjaquer/Optimizador-Vuelos-CP-SAT",
  },
];
