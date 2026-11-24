import type { ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/ui/callout";
import { Figure } from "@/components/ui/figure";
import { FlowDiagram } from "@/components/ui/flow-diagram";
import { Metric } from "@/components/ui/metric";

export const slugify = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Estilos de texto largo (Prose, §19.2): 68 caracteres, enlaces subrayados, ritmo de la escala.
const components: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2
      id={slugify(String(children))}
      className="mt-8 mb-4 scroll-mt-9 text-h2 first:mt-0"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: (props) => <h3 className="mt-6 mb-3 text-h3" {...props} />,
  p: (props) => <p className="mb-4 max-w-prose" {...props} />,
  ul: (props) => <ul className="mb-4 flex max-w-prose list-disc flex-col gap-2 pl-5" {...props} />,
  ol: (props) => (
    <ol className="mb-4 flex max-w-prose list-decimal flex-col gap-2 pl-5" {...props} />
  ),
  a: (props) => (
    <a className="text-accent-600 underline underline-offset-4 hover:text-accent-700" {...props} />
  ),
  strong: (props) => <strong className="font-semibold text-ink-900" {...props} />,
  // Imágenes de contenido dentro de notas y casos (v7.0): marco elevado y leyenda opcional vía title.
  // Se usa <span> (nunca <figure>) porque Markdown envuelve `![alt](src)` en `<p>`.
  img: ({ className = "", title, ...props }) => (
    <span className="case-card-surface my-7 block overflow-hidden rounded-lg border border-border bg-surface p-2 shadow-sm sm:p-3">
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img
        {...props}
        loading="lazy"
        className={`block h-auto w-full rounded-md border border-border bg-surface-muted ${className}`}
      />
      {title && <span className="mt-2 block px-1 text-small text-ink-500">{title}</span>}
    </span>
  ),
  code: (props) => (
    <code
      className="rounded-sm bg-surface-muted px-1 font-mono text-small text-ink-900"
      {...props}
    />
  ),
  // Tablas (remark-gfm): bordes de 1 px, cabecera en etiqueta mono, desplazable en el celular.
  table: (props) => (
    <div className="mb-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-left text-small" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-border bg-surface-muted px-4 py-3 align-bottom text-label-mono font-medium whitespace-nowrap text-ink-500"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border-b border-border px-4 py-3 align-top text-ink-700 [tr:last-child_&]:border-b-0"
      {...props}
    />
  ),
  Callout,
  Figure,
  FlowDiagram,
  Metric: (props: ComponentProps<typeof Metric>) => (
    <div className="my-6">
      <Metric {...props} />
    </div>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
