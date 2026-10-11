import type { ComponentProps, ReactNode } from "react";
import { Container } from "@/components/ui/container";

/** Ritmo vertical entre secciones: 64 px móvil / 96 px escritorio (§17.1). */
export function Section({ className = "", children, ...props }: ComponentProps<"section">) {
  return (
    <section className={`py-8 lg:py-9 ${className}`} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  label: string;
  title: string;
  lead?: ReactNode;
  /** id del h2, para `aria-labelledby` de la sección. */
  id?: string;
  /** Sin margen inferior (cuando va en una fila con una acción al lado). */
  flush?: boolean;
}

/** Etiqueta mono + h2 + lead opcional (§19.2). */
export function SectionHeader({ label, title, lead, id, flush }: SectionHeaderProps) {
  return (
    <header className={`max-w-prose ${flush ? "" : "mb-7"}`}>
      <p className="mb-3 text-label-mono text-ink-500">{label}</p>
      <h2 id={id} className="text-h2">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lead text-ink-700">{lead}</p>}
    </header>
  );
}
