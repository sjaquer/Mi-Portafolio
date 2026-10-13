/**
 * La marca de medición (03-DESIGN.md §6.1): regla de 1 px con marcas cada 8 u y una
 * larga cada 40 u. Firma gráfica de "construir y medir". Decorativa: oculta a lectores.
 */
export function MeasureRule({
  className = "",
  draw = false,
}: {
  className?: string;
  /** Se traza de izquierda a derecha al cargar (firma del hero, §11.2). */
  draw?: boolean;
}) {
  return (
    <svg
      aria-hidden
      className={`block h-3 w-full text-border-strong ${draw ? "rule-draw" : ""} ${className}`}
      focusable="false"
    >
      <defs>
        <pattern id="measure-ticks" width="40" height="12" patternUnits="userSpaceOnUse">
          <path
            d="M0.75 0V12M8.75 6V12M16.75 6V12M24.75 6V12M32.75 6V12"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="12" fill="url(#measure-ticks)" />
    </svg>
  );
}
