import { isMeasured, type Experience } from "@/content/profile";
import { formatRange } from "@/lib/format";

/**
 * Experiencia con cargos reales (§19.2). Raíl vertical con un punto por puesto; el
 * puesto actual va relleno. `compact` muestra solo el primer logro.
 */
export function Timeline({
  items,
  compact = false,
}: {
  items: readonly Experience[];
  compact?: boolean;
}) {
  return (
    <ol className="flex flex-col">
      {items.map((e, idx) => {
        const current = e.to === null && idx === 0;
        return (
          <li key={`${e.org}-${e.from}`} className="grid gap-2 md:grid-cols-12 md:gap-5">
            <p className="pt-px font-mono text-small text-ink-500 md:col-span-3 md:text-right">
              {formatRange(e.from, e.to)}
            </p>
            <div className="relative flex flex-col gap-2 border-l border-border pb-7 pl-6 md:col-span-9">
              <span
                aria-hidden
                className={`absolute top-1 left-0 size-3 -translate-x-1/2 rounded-full border-2 ${
                  current ? "border-ink-900 bg-ink-900" : "border-border-strong bg-bg"
                }`}
              />
              <h3 className="text-h3">
                {e.title}
                {/* Separador para lectores de pantalla y buscadores: sin él se lee "AlumniUniversidad". */}
                <span className="sr-only"> · </span>
                <span className="block font-normal text-ink-500">{e.org}</span>
              </h3>
              <ul className="flex flex-col gap-1 text-ink-700">
                {(compact ? e.highlights.slice(0, 1) : e.highlights).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              {!compact && e.metric && (
                <p className="text-small text-ink-700">
                  <span
                    className={`font-mono font-semibold ${isMeasured(e.metric) ? "text-success-700" : "text-ink-900"}`}
                  >
                    {e.metric.before && `${e.metric.before} → `}
                    {e.metric.value}
                  </span>{" "}
                  {e.metric.label}
                  <span className="text-ink-500"> · {e.metric.context}</span>
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
