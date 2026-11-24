"use client";

import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { CountUp } from "@/components/ui/count-up";

export interface ImpactItem {
  id: string;
  org: string;
  shortMetric: string;
  value: string;
  before?: string;
  beforeLabel: string;
  afterLabel: string;
  afterPercent: number;
  label: string;
  context: string;
  detail: string;
  caseHref?: string;
  caseLabel?: string;
  countUp?: boolean;
}

/**
 * Banda interactiva de impacto con pestañas accesibles (v5.0).
 * Sigue la guía de `tabs`: selección sigue al foco, una sola fila desplazable,
 * sin `aria-controls`, indicador por borde en pseudo-elemento `[aria-selected="true"]::after`,
 * y estilos de panel aplicados al contenedor hijo (no sobre `role="tabpanel"`).
 */
export function ImpactTabs({ items }: { items: readonly ImpactItem[] }) {
  const [selectedId, setSelectedId] = useState(items[0]?.id ?? "");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectIndex = (index: number) => {
    const item = items[index];
    if (!item) return;
    setSelectedId(item.id);
    const btn = tabRefs.current[index];
    btn?.focus();
    btn?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (index + 1) % items.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + items.length) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = items.length - 1;

    if (next !== null) {
      e.preventDefault();
      selectIndex(next);
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Resultados por proyecto"
        className="flex gap-1 overflow-x-auto border-b border-border"
      >
        {items.map((item, i) => {
          const isSelected = item.id === selectedId;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`impact-tab-${item.id}`}
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              data-cta={`impact_tab_${item.id}`}
              onClick={() => selectIndex(i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`impact-tab flex min-h-control-md flex-none items-center gap-3 px-4 py-2 text-left text-small font-semibold whitespace-nowrap transition-colors duration-150 ease-standard ${
                isSelected ? "text-ink-900" : "text-ink-500 hover:text-ink-900"
              }`}
            >
              <span>{item.org}</span>
              <span
                className={`font-mono text-label tabular-nums ${
                  isSelected ? "text-success-700" : "text-ink-500"
                }`}
              >
                {item.shortMetric}
              </span>
            </button>
          );
        })}
      </div>

      {items.map((item) => {
        const isSelected = item.id === selectedId;
        return (
          <div
            key={item.id}
            role="tabpanel"
            aria-labelledby={`impact-tab-${item.id}`}
            tabIndex={isSelected ? 0 : undefined}
            hidden={!isSelected}
          >
            <div className="impact-panel-enter grid gap-7 pt-6 lg:min-h-[15rem] lg:grid-cols-12 lg:items-center">
              <div className="border-l-2 border-cyan-600 pl-5 lg:col-span-5">
                {item.before && (
                  <p className="mb-2 flex items-center gap-2 font-mono text-small font-medium text-ink-500">
                    <span className="shrink-0">Antes</span>
                    <span className="tabular-nums">{item.before}</span>
                    <span aria-hidden className="text-border-strong">
                      ├──┤
                    </span>
                    <span className="sr-only">Después:</span>
                  </p>
                )}
                <p className="font-mono text-metric font-semibold text-success-700 tabular-nums">
                  {item.countUp && isSelected ? <CountUp value={item.value} /> : item.value}
                </p>
                <p className="mt-2 text-lead text-ink-900">{item.label}</p>
                <p className="mt-2 text-small text-ink-500">{item.context}</p>
              </div>

              <div className="flex flex-col gap-5 lg:col-span-7">
                <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-5">
                  <div>
                    <div className="mb-2 flex items-center justify-between gap-2 font-mono text-label text-ink-500">
                      <span>{item.beforeLabel}</span>
                      <span className="tabular-nums">100 %</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-surface-muted">
                      <div className="h-full w-full rounded-full bg-border-strong opacity-60" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between gap-2 font-mono text-label text-ink-900">
                      <span>{item.afterLabel}</span>
                      <span className="text-success-700 tabular-nums">{item.shortMetric}</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-surface-muted">
                      <div
                        className="impact-bar-after h-full w-full rounded-full bg-success-700"
                        style={{ transform: `scaleX(${item.afterPercent / 100})` }}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-body text-ink-700">{item.detail}</p>

                {item.caseHref && (
                  <div>
                    <Link
                      href={item.caseHref}
                      data-cta={`impact_case_${item.id}`}
                      className="group inline-flex min-h-control-md items-center gap-2 text-small font-semibold text-accent-600 underline-offset-4 hover:text-accent-700 hover:underline"
                    >
                      {item.caseLabel ?? "Leer el caso"}
                      <IconArrowRight
                        size={16}
                        stroke={1.5}
                        aria-hidden
                        className="transition-transform duration-200 ease-standard group-hover:translate-x-1 motion-reduce:transform-none"
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
