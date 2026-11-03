import { isMeasured, type Metric as MetricData } from "@/content/profile";
import { CountUp } from "@/components/ui/count-up";

/**
 * Cifra de resultado + qué cambió + contexto (§6.3).
 * `context` es obligatorio por tipo: ninguna métrica sin base (CLAUDE.md, regla 2).
 * El verde solo se aplica a cifras; los resultados cualitativos van en tinta.
 * Con `before`, la cifra se lee como una cota de plano: antes ├──┤ después (§6.1).
 */
export function Metric({
  value,
  label,
  context,
  measured,
  before,
  reserveBefore = false,
  countUp = false,
}: MetricData & {
  /** Reserva la fila "antes" aunque no exista, para alinear varias métricas en una grilla. */
  reserveBefore?: boolean;
  /** Anima la cifra desde cero al entrar en pantalla (solo cifras simples). */
  countUp?: boolean;
}) {
  const isNumeric = isMeasured({ value, label, context, measured });
  return (
    <div className="flex h-full flex-col gap-1">
      {/* En una grilla la fila se reserva para que las cifras queden a la misma altura.
          Sin la etiqueta visible, la cota se leía como un trazo suelto. */}
      {(before || reserveBefore) && (
        <p
          className={`${before ? "flex" : "hidden md:flex"} items-center gap-2 font-mono text-small font-medium text-ink-500 ${
            reserveBefore ? "min-h-6" : ""
          }`}
        >
          {before && (
            <>
              <span className="shrink-0">Antes</span>
              <span className="tabular-nums">{before}</span>
              <svg
                aria-hidden
                focusable="false"
                viewBox="0 0 48 16"
                preserveAspectRatio="none"
                className="fig h-4 w-7 shrink-0 stroke-border-strong"
                fill="none"
                strokeWidth={1.5}
                strokeLinecap="round"
              >
                <path d="M1 3v10M47 3v10" vectorEffect="non-scaling-stroke" className="fig-fade" />
                <path
                  d="M1 8H47"
                  pathLength={1}
                  vectorEffect="non-scaling-stroke"
                  className="fig-draw"
                />
              </svg>
              <span className="sr-only">Después:</span>
            </>
          )}
        </p>
      )}
      <p
        className={
          isNumeric
            ? "font-mono text-metric font-semibold text-success-700 tabular-nums"
            : "text-h2 font-semibold text-ink-900 tabular-nums"
        }
      >
        {countUp ? <CountUp value={value} /> : value}
      </p>
      <p className="text-body text-ink-900">{label}</p>
      <p className="text-small text-ink-500">{context}</p>
    </div>
  );
}
