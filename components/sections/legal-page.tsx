import type { ReactNode } from "react";
import { Section } from "@/components/ui/section";
import { formatDate } from "@/lib/format";

/** Plantilla de páginas legales: cabecera + texto largo en MDX (estilos de `mdx-components`). */
export function LegalPage({
  label,
  title,
  updated,
  children,
}: {
  label: string;
  title: string;
  /** Fecha de la última revisión (YYYY-MM-DD). */
  updated: string;
  children: ReactNode;
}) {
  return (
    <Section>
      <div className="max-w-prose">
        <p className="mb-3 text-label-mono text-ink-500">{label}</p>
        <h1 className="text-h1">{title}</h1>
        <p className="mt-4 text-small text-ink-500">
          Última actualización: <time dateTime={updated}>{formatDate(updated)}</time>
        </p>
      </div>
      <div className="mt-8 border-t border-border pt-8 text-body">{children}</div>
    </Section>
  );
}
