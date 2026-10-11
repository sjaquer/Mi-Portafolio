import type { Metric } from "@/content/profile";

/**
 * Casos de estudio (02-PRD.md §8.3). Los datos de la ficha y las tarjetas viven aquí;
 * el cuerpo de cada caso, en content/casos/<slug>.mdx.
 */

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

export interface CaseStudy {
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
}

export const cases: CaseStudy[] = [
  {
    slug: "bolsa-de-trabajo-wiener",
    title: "Una bolsa de trabajo propia para la universidad, construida por una sola persona",
    subtitle:
      "Plataforma de empleabilidad con cinco roles, CV con importación por IA y feria virtual, lista para salir a producción.",
    problem:
      "Los servicios de empleabilidad estaban repartidos en plataformas de terceros, sin datos propios sobre su uso.",
    result: {
      value: "11 de 14",
      label: "módulos del MVP terminados antes de la entrega a QA",
      context: "Estado al 24 sep 2026 · lanzamiento previsto el 22 oct 2026",
    },
    type: "web",
    context: "Universidad Norbert Wiener · área de empleabilidad",
    role: "Único desarrollador: producto, arquitectura, backend y frontend",
    duration: "2026", // TODO(Sebastián): confirmar inicio y fin
    year: 2026,
    stack: ["Next.js", "PostgreSQL", "Docker", "Zod"],
    status: "qa",
    updatedAt: "2026-10-11",
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

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}

/** Proyectos de práctica: visualmente secundarios (02-PRD.md §8.2). Sin métricas. */
export interface LabProject {
  name: string;
  description: string;
  stack: string[];
  year: number;
  href: string;
}

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
    name: "ORDEV",
    description:
      "Planificador de rutas aéreas que resuelve restricciones de peso, combustible y pasaje con el solver CP-SAT de OR-Tools.",
    stack: ["Python", "OR-Tools", "React", "TypeScript"],
    year: 2025,
    href: "https://github.com/sjaquer/Optimizador-Vuelos-CP-SAT",
  },
  {
    name: "TaskZenith",
    description:
      "Espacio de trabajo modular con widgets arrastrables, persistencia en Firestore y temporizador Pomodoro.",
    stack: ["React", "TypeScript", "Firestore", "dnd-kit"],
    year: 2025,
    href: "https://github.com/sjaquer/TaskZenith",
  },
];
