"use client";

import { useState } from "react";
import { PostCard } from "@/components/ui/post-card";
import { pillarLabel, type Note, type Pillar } from "@/content/notas";

export interface NoteItem {
  n: Note;
  minutes: number;
}

/** Índice de notas con filtro por pilar (02-PRD.md §8.6). Conteo anunciado con aria-live. */
export function NoteList({ items }: { items: NoteItem[] }) {
  const [filter, setFilter] = useState<Pillar | "all">("all");
  const pillars = (Object.keys(pillarLabel) as Pillar[]).filter((p) =>
    items.some((i) => i.n.pillar === p),
  );
  const shown = filter === "all" ? items : items.filter((i) => i.n.pillar === filter);

  const chip = (value: Pillar | "all", label: string, count: number) => (
    <li key={value}>
      <button
        type="button"
        aria-pressed={filter === value}
        data-cta={`notes_filter_${value}`}
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
        <ul aria-label="Filtrar notas por pilar" className="flex flex-wrap gap-2">
          {chip("all", "Todas", items.length)}
          {pillars.map((p) =>
            chip(p, pillarLabel[p], items.filter((i) => i.n.pillar === p).length),
          )}
        </ul>
        <p aria-live="polite" className="text-small text-ink-500">
          {shown.length} {shown.length === 1 ? "nota" : "notas"}
        </p>
      </div>
      <ol className="flex flex-col">
        {shown.map(({ n, minutes }, idx) => (
          <li key={n.slug} className={`reveal py-6 ${idx > 0 ? "border-t border-border" : "pt-0"}`}>
            <PostCard n={n} minutes={minutes} />
          </li>
        ))}
      </ol>
    </>
  );
}
