import type { Experience } from "@/content/profile";
import { formatRange } from "@/lib/format";

/** Experiencia con cargos reales (§19.2). `compact` muestra solo el primer logro. */
export function Timeline({
  items,
  compact = false,
}: {
  items: readonly Experience[];
  compact?: boolean;
}) {
  return (
    <ol className="flex flex-col">
      {items.map((e) => (
        <li
          key={`${e.org}-${e.from}`}
          className="grid gap-2 border-t border-border py-5 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-5"
        >
          <p className="font-mono text-small text-ink-500 md:col-span-3">
            {formatRange(e.from, e.to)}
          </p>
          <div className="flex flex-col gap-2 md:col-span-9">
            <h3 className="text-h3">
              {e.title}
              <span className="block font-normal text-ink-500">{e.org}</span>
            </h3>
            <ul className="flex flex-col gap-1 text-ink-700">
              {(compact ? e.highlights.slice(0, 1) : e.highlights).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            {e.metric && (
              <p className="text-small text-ink-700">
                <span className="font-mono font-semibold text-success-700">{e.metric.value}</span>{" "}
                {e.metric.label}
                <span className="text-ink-500"> · {e.metric.context}</span>
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
