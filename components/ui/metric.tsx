import { isMeasured, type Metric as MetricData } from "@/content/profile";

/**
 * Cifra de resultado + qué cambió + contexto (§6.3).
 * `context` es obligatorio por tipo: ninguna métrica sin base (CLAUDE.md, regla 2).
 * El verde solo se aplica a cifras; los resultados cualitativos van en tinta.
 * Con `before`, la cifra se lee como una cota de plano: antes ├──┤ después (§6.1).
 */
export function Metric({ value, label, context, measured, before }: MetricData) {
  const isNumeric = isMeasured({ value, label, context, measured });
  return (
    <div className="flex flex-col gap-1">
      {before && (
        <p className="flex items-center gap-3 font-mono text-small font-medium text-ink-500">
          <span>
            <span className="sr-only">Antes: </span>
            {before}
          </span>
          <svg
            aria-hidden
            focusable="false"
            viewBox="0 0 100 16"
            preserveAspectRatio="none"
            className="fig h-4 min-w-6 flex-1 stroke-border-strong"
            fill="none"
            strokeWidth={1.5}
            strokeLinecap="round"
          >
            <path d="M1 3v10M99 3v10" vectorEffect="non-scaling-stroke" className="fig-fade" />
            <path
              d="M1 8H99"
              pathLength={1}
              vectorEffect="non-scaling-stroke"
              className="fig-draw"
            />
          </svg>
          <span className="sr-only">Después:</span>
        </p>
      )}
      <p
        className={
          isNumeric
            ? "font-mono text-metric font-semibold text-success-700"
            : "text-h2 font-semibold text-ink-900"
        }
      >
        {value}
      </p>
      <p className="text-body text-ink-900">{label}</p>
      <p className="text-small text-ink-500">{context}</p>
    </div>
  );
}
