"use client";

import { useEffect, useState } from "react";

export interface ChapterItem {
  id: string;
  num: string;
  label: string;
}

/**
 * Riel lateral de capítulos para la home (v5.0).
 * Barra de progreso ligada al scroll en CSS puro (`.rail-progress`) + estado activo por
 * IntersectionObserver. Oculto por debajo de xl para no invadir la retícula de 1120 px.
 */
export function ChapterRail({ chapters }: { chapters: readonly ChapterItem[] }) {
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? "");

  useEffect(() => {
    const elements = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    for (const el of elements) io.observe(el);
    return () => io.disconnect();
  }, [chapters]);

  return (
    <nav
      aria-label="Capítulos de la página"
      className="fixed top-1/2 right-4 z-20 hidden -translate-y-1/2 items-stretch gap-3 min-[1380px]:flex"
    >
      <ol className="flex flex-col items-end gap-1">
        {chapters.map((c) => {
          const isActive = activeId === c.id;
          return (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                data-cta={`rail_${c.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`group flex min-h-control-sm items-center gap-2 rounded-sm px-2 font-mono text-label transition-colors duration-150 ease-standard ${
                  isActive ? "text-ink-900" : "text-ink-500 hover:text-ink-900"
                }`}
              >
                <span
                  className={`transition-opacity duration-150 ease-standard ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  }`}
                >
                  {c.label}
                </span>
                <span className="tabular-nums">{c.num}</span>
                <span
                  aria-hidden
                  className={`h-px transition-all duration-200 ease-standard ${
                    isActive
                      ? "w-4 bg-accent-600"
                      : "w-2 bg-border-strong group-hover:w-3 group-hover:bg-ink-700"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ol>
      <div aria-hidden className="relative my-2 w-px bg-border">
        <span className="rail-progress absolute inset-0 bg-accent-600" />
      </div>
    </nav>
  );
}
