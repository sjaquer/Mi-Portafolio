/**
 * Barra de progreso de lectura (casos y notas). Solo CSS: `animation-timeline: scroll()`.
 * Navegadores sin soporte no la muestran. Decorativa: la posición ya la da el scroll.
 */
export function ReadingProgress() {
  return <div aria-hidden className="reading-progress" />;
}
