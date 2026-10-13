"use client";

import { useState } from "react";
import { CaseArticle } from "@/components/ui/case-article";
import { caseTypeLabel, type CaseStudy, type CaseType } from "@/content/casos";

/**
 * Listado de casos con filtro por tipo (02-PRD.md §8.2), en formato de índice de
 * artículos. El conteo se anuncia con aria-live.
 */
export interface CaseItem {
  c: CaseStudy;
  minutes: number;
}

export function CaseGrid({ items }: { items: CaseItem[] }) {
  const cases = items.map((i) => i.c);
  const [filter, setFilter] = useState<CaseType | "all">("all");
  const types = (Object.keys(caseTypeLabel) as CaseType[]).filter((t) =>
    cases.some((c) => c.type === t),
  );
  const shown = filter === "all" ? items : items.filter((i) => i.c.type === filter);

  const chip = (value: CaseType | "all", label: string, count: number) => (
    <li key={value}>
      <button
        type="button"
        aria-pressed={filter === value}
        data-cta={`projects_filter_${value}`}
        onClick={() => setFilter(value)}
        className="inline-flex min-h-control-md items-center gap-2 rounded-full border border-border-strong px-4 text-small font-semibold text-ink-900 transition-colors duration-150 ease-standard hover:bg-surface-muted aria-pressed:border-ink-900 aria-pressed:bg-ink-900 aria-pressed:text-bg"
      >
        {label}
        <span className="font-mono font-medium opacity-70">{count}</span>
      </button>
    </li>
  );

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <ul aria-label="Filtrar casos por tipo" className="flex flex-wrap gap-2">
          {chip("all", "Todos", cases.length)}
          {types.map((t) => chip(t, caseTypeLabel[t], cases.filter((c) => c.type === t).length))}
        </ul>
        <p aria-live="polite" className="text-small text-ink-500">
          {shown.length} {shown.length === 1 ? "caso" : "casos"}
        </p>
      </div>
      {/* Índice de artículos: el primero destacado, el resto en filas (§19.2). */}
      <ol className="flex flex-col">
        {shown.map(({ c, minutes }, idx) => (
          <li key={c.slug} className={`reveal py-7 ${idx > 0 ? "border-t border-border" : "pt-0"}`}>
            <CaseArticle
              c={c}
              minutes={minutes}
              variant={idx === 0 ? "featured" : "row"}
              headingLevel="h3"
            />
          </li>
        ))}
      </ol>
    </>
  );
}
