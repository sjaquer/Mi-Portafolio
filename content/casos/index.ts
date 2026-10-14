import type { Metric } from "@/content/profile";

/**
 * Casos de estudio (02-PRD.md §8.3) y selección de proyectos (07-PROYECTOS.md).
 * Los datos de la ficha y las tarjetas viven aquí; el cuerpo de cada caso, en content/casos/<slug>.mdx.
 */

/**
 * Permiso escrito de la jefatura de Desarrollo Profesional y Alumni para publicar proyectos institucionales
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

/** Portada del caso: plano de su flujo real (03-DESIGN.md §6.8). Títulos de ≤ 12 caracteres. */
export interface CaseCover {
  label: string;
  nodes: { tag: string; title: string }[];
  /** Índice del nodo que construí o que cambió. */
  highlight: number;
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
  cover: CaseCover;
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
    context: "Universidad Norbert Wiener · Dirección de Desarrollo Profesional y Alumni",
    role: "Único desarrollador: producto, arquitectura, backend y frontend",
    duration: "2026", // TODO(Sebastián): confirmar inicio y fin
    year: 2026,
    stack: ["Next.js", "Supabase/PostgreSQL", "Docker", "Playwright"],
    status: "produccion",
    updatedAt: "2026-10-11",
    featured: true,
    institutional: true,
    cover: {
      label: "Arquitectura",
      nodes: [
        { tag: "Cliente", title: "Usuarios" },
        { tag: "Servidor", title: "Next.js" },
        { tag: "Datos", title: "PostgreSQL" },
        { tag: "Terceros", title: "Microsoft" },
      ],
      highlight: 1,
    },
  },
  {
    slug: "difusion-correo-wiener",
    title: "Campañas de 8 000 correos de horas a tan solo minutos, con baja automática",
    subtitle:
      "Sistema interno de difusión con segmentación, personalización, envío por lotes y lista de exclusión, más la verificación previa de la base de correos.",
    problem:
      "Las campañas a egresados se enviaban a mano desde Outlook, en tandas pequeñas: tomaban horas y las bajas no siempre se respetaban.",
    result: {
      value: "5–10 min",
      before: "1–2 h",
      label: "por campaña de 8 000 destinatarios",
      context: "Estimado: tiempo de envío de una misma campaña antes y después del sistema",
      measured: true,
    },
    type: "automatizacion",
    context: "Universidad Norbert Wiener · Dirección de Desarrollo Profesional y Alumni",
    role: "Diseño y desarrollo completo",
    duration: "2026", // TODO(Sebastián): fechas de inicio y puesta en uso
    year: 2026,
    stack: ["React", "Node.js", "PostgreSQL", "Microsoft 365"],
    status: "produccion",
    updatedAt: "2026-10-11",
    featured: true,
    institutional: true,
    cover: {
      label: "Flujo de una campaña",
      nodes: [
        { tag: "Público", title: "Segmento" },
        { tag: "Control", title: "Exclusión" },
        { tag: "Mensaje", title: "Plantilla" },
        { tag: "Envío", title: "Lotes" },
      ],
      highlight: 1,
    },
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
    context: "Universidad Norbert Wiener · Dirección de Desarrollo Profesional y Alumni",
    role: "Diseño y desarrollo del portal y del tablero",
    duration: "2026", // TODO(Sebastián): fechas
    year: 2026,
    stack: ["React", "TypeScript", "PostgreSQL (Neon)", "Chart.js"],
    status: "produccion",
    updatedAt: "2026-10-11",
    featured: true,
    institutional: true,
    cover: {
      label: "De la respuesta al indicador",
      nodes: [
        { tag: "Captura", title: "Formulario" },
        { tag: "Datos", title: "Base central" },
        { tag: "Uso", title: "Difusión" },
        { tag: "Lectura", title: "Tablero" },
      ],
      highlight: 1,
    },
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
    context: "Universidad Norbert Wiener · Dirección de Desarrollo Profesional y Alumni",
    role: "Diseño y desarrollo completo",
    duration: "2026", // TODO(Sebastián): fechas
    year: 2026,
    stack: ["React", "TypeScript", "Tailwind CSS", "Apps Script"],
    status: "produccion",
    updatedAt: "2026-10-11",
    institutional: true,
    cover: {
      label: "Embudo de la feria",
      nodes: [
        { tag: "Descubrir", title: "Directorio" },
        { tag: "Decidir", title: "Empresa" },
        { tag: "Convertir", title: "Inscripción" },
        { tag: "Volver", title: "Post-evento" },
      ],
      highlight: 2,
    },
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
    context: "Universidad Norbert Wiener · Dirección de Desarrollo Profesional y Alumni",
    role: "Diseño y desarrollo completo",
    duration: "2026", // TODO(Sebastián): fechas
    year: 2026,
    stack: ["Python", "Playwright", "Ollama", "Gemini"],
    status: "produccion",
    updatedAt: "2026-10-11",
    institutional: true,
    cover: {
      label: "Del correo a la bolsa laboral",
      nodes: [
        { tag: "Entrada", title: "Correo" },
        { tag: "Extracción", title: "Playwright" },
        { tag: "IA", title: "Estructura" },
        { tag: "Salida", title: "Publicación" },
      ],
      highlight: 2,
    },
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
    cover: {
      label: "Una fuente, muchas salidas",
      nodes: [
        { tag: "Fuente", title: "profile.ts" },
        { tag: "Build", title: "Next.js" },
        { tag: "Salida", title: "HTML" },
        { tag: "Medición", title: "GA4" },
      ],
      highlight: 1,
    },
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
      context: "Estimado · Dearel, ago – nov 2025",
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
    cover: {
      label: "Pedidos sin digitar dos veces",
      nodes: [
        { tag: "Tienda", title: "Shopify" },
        { tag: "Integración", title: "API REST" },
        { tag: "Gestión", title: "CRM" },
        { tag: "Lectura", title: "Sheets + BI" },
      ],
      highlight: 1,
    },
  },
  {
    slug: "pedidos-big-jack",
    title: "Pedidos 35 % más rápidos en una hamburguesería",
    subtitle:
      "Menú digital y bot de WhatsApp con IA que envían cada pedido por webhook a una terminal de caja y cocina, con el inventario ligado a las comandas.",
    problem:
      "Salón, cocina y canal online trabajaban desconectados: cada pedido se transcribía a mano y el inventario se desfasaba.",
    result: {
      value: "−35 %",
      label: "tiempo de procesamiento por pedido",
      context: "Estimado · 4 semanas antes vs. después de la implementación",
    },
    type: "automatizacion",
    context: "Big Jack Burgers · hamburguesería en Lima",
    role: "Operaciones y Marketing · único programador del sistema",
    duration: "nov 2025 – sep 2026",
    year: 2025,
    stack: ["Next.js", "Firebase", "Webhooks", "Ollama / Gemini"],
    status: "entregado", // TODO(Sebastián): ¿sigue en uso? Si es así, "produccion".
    updatedAt: "2026-10-11",
    cover: {
      label: "Flujo de un pedido",
      nodes: [
        { tag: "Canales", title: "Menú y bot" },
        { tag: "Integración", title: "Webhook" },
        { tag: "Operación", title: "Cocina" },
        { tag: "Control", title: "Inventario" },
      ],
      highlight: 1,
    },
  },
];

/** Casos publicables en este build (en desarrollo, todos). */
export const cases = allCases.filter(visible);

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}

/** Galería (Nivel B, 07-PROYECTOS.md §7.2): tarjeta corta, sin caso largo. */
export interface GalleryItem extends Publication {
  name: string;
  angle: string;
  stack: string[];
  /** Ancla visual de la tarjeta (`MiniFlow`): 3 pasos de ≤ 9 caracteres; el central es lo que construí. */
  flow: readonly [string, string, string];
  href?: string;
  hrefLabel?: string;
}

const allGallery: GalleryItem[] = [
  {
    name: "Landings de graduación 2026 · pregrado y posgrado",
    angle:
      "Una base reutilizada para dos públicos: cuenta regresiva, preguntas frecuentes para bajar consultas repetidas, registro de asistencia y SEO técnico.",
    stack: ["HTML", "CSS", "JavaScript", "SEO"],
    flow: ["Egresado", "Landing", "Registro"],
    href: "https://ceremoniaegresados.uwiener.edu.pe",
    hrefLabel: "Ver la landing de pregrado",
    institutional: true,
  },
  {
    name: "Wiener Career Center & Alumni · Posgrado",
    angle:
      "Sección de desarrollo profesional y alumni integrada sobre el WordPress de Posgrado, conservando los píxeles de Google Ads, Meta, LinkedIn y TikTok.",
    stack: ["WordPress", "JavaScript", "Píxeles de medición"],
    flow: ["WordPress", "Sección", "Píxeles"],
    institutional: true,
  },
  {
    name: "Página de Desarrollo Profesional y Alumni",
    angle:
      "Rediseño de la página del área: arquitectura de información por público, formulario de leads y contacto por WhatsApp.",
    stack: ["HTML", "CSS", "JavaScript"],
    flow: ["Visitante", "Página", "Contacto"],
    institutional: true,
  },
  {
    name: "Portal de Bolsa Laboral",
    angle:
      "Prototipo de la bolsa laboral para dos públicos —candidatos y empresas— con la agenda de eventos y talleres. Sus flujos pasaron a la plataforma de empleabilidad.",
    stack: ["React", "Tailwind CSS", "Firebase"],
    flow: ["Candidato", "Portal", "Empresa"],
    institutional: true,
  },
  {
    name: "LogiFlow",
    angle:
      "Cola de llamadas, pedidos e inventario para un equipo de ventas por teléfono: los leads entran solos desde Shopify y el CRM por webhook, y el pedido confirmado vuelve al CRM.",
    stack: ["Next.js", "Firebase", "Kommo API", "Shopify"],
    flow: ["Shopify", "LogiFlow", "CRM"],
    href: "https://github.com/sjaquer/logiflow",
    hrefLabel: "Código de LogiFlow en GitHub",
  },
  {
    name: "DataWeave BI",
    angle:
      "Tablero de operación de una tienda online: pedidos por webhook, envíos, devoluciones, inventario y ventas por provincia, con nombres de productos y provincias normalizados por IA.",
    stack: ["Next.js", "Firebase", "Shopify API", "Genkit"],
    flow: ["Shopify", "DataWeave", "Tablero"],
    href: "https://github.com/sjaquer/DataWeave-BI",
    hrefLabel: "Código de DataWeave BI en GitHub",
  },
  {
    name: "LogINV",
    angle:
      "PWA de inventario para varios almacenes: conteo rápido con escáner de códigos de barras, alertas de vencimiento e interfaz en 4 idiomas.",
    stack: ["Next.js", "Firebase", "PWA"],
    flow: ["Escáner", "LogINV", "Reponer"],
    href: "https://github.com/sjaquer/LogINV",
    hrefLabel: "Código de LogINV en GitHub",
    // TODO(Sebastián): ¿tuvo cliente real? (07-PROYECTOS.md, Nivel B)
  },
  {
    name: "Sistema Obra",
    angle:
      "Inventario de materiales, donaciones y turnos para una obra comunitaria, con movimientos en tiempo real y exportación a Excel.",
    stack: ["React", "Firestore"],
    flow: ["Donación", "Stock", "Excel"],
  },
  {
    name: "Optimizador de vuelos (ORDEV)",
    angle:
      "Planificador de vuelos de helicóptero para pasajeros y carga: el solver CP-SAT respeta peso, capacidad, reabastecimiento y prioridad, y devuelve el itinerario con su manifiesto por tramo.",
    stack: ["Next.js", "TypeScript", "OR-Tools"],
    flow: ["Escenario", "CP-SAT", "Ruta"],
    href: "https://github.com/sjaquer/Optimizador-Vuelos-CP-SAT",
    hrefLabel: "Código del optimizador en GitHub",
  },
  {
    name: "PrestaFacilito",
    angle:
      "Gestión de préstamos y cobranzas: cronograma con mora calculada sola, lectura por OCR de comprobantes de pago para no digitar montos y un registro de auditoría de cada acción.",
    stack: ["React", "Express", "Supabase/PostgreSQL", "Tesseract.js"],
    flow: ["Voucher", "Cuotas", "Cobranza"],
    href: "https://github.com/sjaquer/prestafacilito",
    hrefLabel: "Código de PrestaFacilito en GitHub",
  },
  {
    name: "Coralia Delights y Digital Bakery",
    angle:
      "Dos tiendas online para repostería: catálogo, checkout con zona de reparto y horario, y un panel con inventario, combos y promociones. Digital Bakery fue la primera versión.",
    stack: ["Next.js", "Firebase", "Tailwind CSS"],
    flow: ["Catálogo", "Checkout", "Panel"],
    href: "https://github.com/sjaquer/Carolia-Delights",
    hrefLabel: "Código de Coralia Delights en GitHub",
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

// Lo personal y de práctica al fondo (07-PROYECTOS.md §7.4).
export const lab: LabProject[] = [
  {
    name: "TaskMe",
    description:
      "Tablero Kanban que estructura tareas escritas en lenguaje natural y las sincroniza con Google Calendar.",
    stack: ["Next.js", "Firebase", "Genkit", "dnd-kit"],
    year: 2025,
    href: "https://github.com/sjaquer/taskME",
  },
  {
    name: "Ecos Literarios",
    description:
      "Biblioteca de autores en español con un análisis por IA de cada obra: temas, contexto y estilo.",
    stack: ["Next.js", "Genkit", "Gemini", "Firestore"],
    year: 2026,
    href: "https://github.com/sjaquer/ecos",
  },
  {
    name: "HoneyNotes",
    description:
      "Cartas digitales para parejas con un asistente de escritura que sugiere cómo decir algo con más claridad, y retos semanales programados con Cloud Functions.",
    stack: ["Next.js", "Firebase", "Genkit", "Gemini"],
    year: 2026,
    href: "https://github.com/sjaquer/honeynotes",
  },
  {
    name: "Juego para la Gamedev.js Jam 2026",
    description:
      "Juego de navegador en dos capas: un escritorio retro con terminal y asistente, y un nivel de plataformas con un robot de piezas que se rompen y se reparan.",
    stack: ["TypeScript", "Phaser", "Vite", "Gemini API"],
    year: 2026,
    href: "https://github.com/sjaquer/gamejamdevjs-2026",
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
    name: "Secret Love",
    description:
      "Micrositio de regalo: cuenta regresiva, códigos que desbloquean páginas y una historia generada con IA sobre un fondo de acuario animado.",
    stack: ["Next.js", "Tailwind CSS", "Genkit"],
    year: 2025,
    href: "https://github.com/sjaquer/secretlove",
  },
];
