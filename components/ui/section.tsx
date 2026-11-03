import type { ComponentProps, ReactNode } from "react";
import { Container } from "@/components/ui/container";

/** Ritmo vertical entre secciones: 64 px móvil / 96 px escritorio (§17.1).
 *  `tight` reduce solo el margen superior: para la primera sección (cabecera) de una
 *  página, que no debe heredar el aire entre secciones bajo el header fijo. */
export function Section({
  className = "",
  tight = false,
  children,
  ...props
}: ComponentProps<"section"> & { tight?: boolean }) {
  const pt = tight ? "pt-6 lg:pt-8" : "pt-8 lg:pt-9";
  return (
    <section className={`${pt} pb-8 lg:pb-9 ${className}`} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

/** Color del nodo de sección (03-DESIGN §15.3): wayfinding por tipo de contenido
 *  — métricas (azul acento), proyectos (ámbar), notas (verde azulado). */
export type SectionTone = "neutral" | "accent" | "teal" | "amber";

const toneClass: Record<SectionTone, string> = {
  neutral: "text-ink-500",
  accent: "text-accent-600",
  teal: "text-chart-3-text",
  amber: "text-chart-2-text",
};

interface SectionHeaderProps {
  label: string;
  title: string;
  lead?: ReactNode;
  /** id del h2, para `aria-labelledby` de la sección. */
  id?: string;
  /** Sin margen inferior (cuando va en una fila con una acción al lado). */
  flush?: boolean;
  /** Color de la etiqueta + punto guía. Las secciones clave (casos, notas) lo usan. */
  tone?: SectionTone;
}

/** Etiqueta mono + h2 + lead opcional (§19.2). */
export function SectionHeader({
  label,
  title,
  lead,
  id,
  flush,
  tone = "neutral",
}: SectionHeaderProps) {
  return (
    <header className={`max-w-prose ${flush ? "" : "mb-7"}`}>
      <p className={`mb-3 flex items-center gap-2 text-label-mono ${toneClass[tone]}`}>
        {tone !== "neutral" && (
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-current" />
        )}
        {label}
      </p>
      <h2 id={id} className="text-h2">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lead text-ink-700">{lead}</p>}
    </header>
  );
}
