import type { Heading } from "@/lib/headings";

const num = (i: number) => String(i + 1).padStart(2, "0");
/** En el chip se ve la parte antes de ":" ("El problema: no es…" → "El problema");
 *  el resto va como texto solo para lectores, así el nombre accesible es el título entero. */
const split = (t: string) => {
  const i = t.indexOf(":");
  return i === -1 ? [t, ""] : [t.slice(0, i), t.slice(i)];
};

/**
 * Índice "En esta página" de casos y notas (v4.3), desde los títulos reales del MDX.
 * - `desktop`: columna fija al costado del texto.
 * - `mobile`: tira de chips fija bajo el header, con desplazamiento horizontal: en el
 *   celular un caso ocupa 6–7 pantallas y no había forma de saltar de sección.
 * La sección visible se resalta solo con CSS (`scroll-target-group`, globals.css) donde
 * el navegador lo soporta; sin soporte, el índice funciona igual. 0 KB de JavaScript.
 * Los números coinciden con los de cada `h2` del cuerpo (`.article-body`).
 */
export function ArticleToc({
  headings,
  variant,
}: {
  headings: Heading[];
  variant: "mobile" | "desktop";
}) {
  if (headings.length < 2) return null;

  if (variant === "mobile") {
    return (
      <nav
        aria-label="En esta página"
        className="sticky top-header z-10 -mx-4 mb-6 border-b border-border bg-bg px-4 py-2 md:-mx-5 md:px-5 lg:hidden"
      >
        <ol className="toc-group flex snap-x [scrollbar-width:none] gap-2 overflow-x-auto">
          {headings.map((h, i) => (
            <li key={h.id} className="shrink-0 snap-start">
              <a
                href={`#${h.id}`}
                className="toc-chip inline-flex min-h-control-md items-center gap-2 rounded-full border border-border bg-surface px-4 text-small whitespace-nowrap text-ink-700 transition-colors duration-150 ease-standard"
              >
                <span aria-hidden className="font-mono text-label text-ink-500">
                  {num(i)}
                </span>
                <span className="max-w-chip truncate">
                  {split(h.text)[0]}
                  <span className="sr-only">{split(h.text)[1]}</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  return (
    <nav aria-label="En esta página" className="sticky top-9">
      <p className="mb-3 text-label-mono text-ink-500">En esta página</p>
      <ol className="toc-group flex flex-col border-l border-border">
        {headings.map((h, i) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="toc-link -ml-px flex min-h-control-sm items-baseline gap-3 border-l-2 border-transparent py-2 pl-4 text-small text-ink-700 transition-colors duration-150 ease-standard hover:border-ink-900 hover:text-ink-900"
            >
              <span aria-hidden className="font-mono text-label text-ink-500">
                {num(i)}
              </span>
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
