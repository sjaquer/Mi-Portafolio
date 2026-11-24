import type { ReactNode } from "react";
import { MeasureRule } from "@/components/brand/measure-rule";
import { ArticleToc } from "@/components/ui/article-toc";
import { Container } from "@/components/ui/container";
import { formatDate } from "@/lib/format";
import type { Heading } from "@/lib/headings";

/** Plantilla editorial de páginas legales (v7.0): cabecera ambiental, índice y texto largo MDX. */
export function LegalPage({
  label,
  title,
  updated,
  headings = [],
  children,
}: {
  label: string;
  title: string;
  /** Fecha de la última revisión (YYYY-MM-DD). */
  updated: string;
  headings?: Heading[];
  children: ReactNode;
}) {
  const hasToc = headings.length >= 2;
  return (
    <article>
      <div className="hero-ambient border-b border-border">
        <Container className="pt-6 pb-8 lg:pt-8">
          <div className="max-w-prose">
            <p className="mb-3 text-label-mono text-accent-600">{label}</p>
            <h1 className="text-h1">{title}</h1>
            <p className="mt-4 font-mono text-small text-ink-500 tabular-nums">
              Última actualización: <time dateTime={updated}>{formatDate(updated)}</time>
            </p>
          </div>
          <MeasureRule className="mt-6" />
        </Container>
      </div>

      <Container className="py-8 lg:py-9">
        {hasToc ? (
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <ArticleToc headings={headings} variant="mobile" />
            <div className="article-body text-body lg:col-span-8">{children}</div>
            <aside className="hidden lg:col-span-3 lg:col-start-10 lg:block">
              <ArticleToc headings={headings} variant="desktop" />
            </aside>
          </div>
        ) : (
          <div className="article-body text-body">{children}</div>
        )}
      </Container>
    </article>
  );
}
