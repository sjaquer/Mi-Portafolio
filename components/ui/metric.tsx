import type { Metric as MetricData } from "@/content/profile";

/**
 * Cifra de resultado + qué cambió + contexto (§6.3).
 * `context` es obligatorio por tipo: ninguna métrica sin base (CLAUDE.md, regla 2).
 * El verde solo se aplica a cifras; los resultados cualitativos van en tinta.
 */
export function Metric({ value, label, context, measured }: MetricData) {
  // Verde solo para resultados medidos (§4.5): variaciones con % o signo, no fechas ni estados.
  const isNumeric = measured ?? (/[%−+]/.test(value) && /\d/.test(value));
  return (
    <div className="flex flex-col gap-1">
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
