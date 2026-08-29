import { useEffect, useRef } from 'react';
import { useScrollProgress } from './Reveal';

interface ScrollDividerProps {
  className?: string;
  /** Color del trazo. */
  color?: string;
}

/**
 * Divisor de sección: un path SVG que se "dibuja" progresivamente
 * según el scroll del usuario (anime.js no es necesario aquí, usamos
 * el progreso del scroll para animar stroke-dashoffset).
 */
const ScrollDivider: React.FC<ScrollDividerProps> = ({
  className,
  color = '#10b981',
}) => {
  const { ref, subscribe } = useScrollProgress<HTMLDivElement>();
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    const unsub = subscribe((p) => {
      path.style.strokeDashoffset = `${len * (1 - p)}`;
      if (dot) {
        const point = path.getPointAtLength(len * p);
        dot.setAttribute('cx', `${point.x}`);
        dot.setAttribute('cy', `${point.y}`);
        dot.style.opacity = p > 0.02 && p < 0.98 ? '1' : '0';
      }
    });
    return unsub;
  }, [subscribe]);

  return (
    <div ref={ref} className={`flex items-center justify-center py-16 ${className ?? ''}`}>
      <svg width="240" height="48" viewBox="0 0 240 48" fill="none" aria-hidden>
        <path
          ref={pathRef}
          d="M10 24 H96 M144 24 H230 M120 12 L132 24 L120 36 L108 24 Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
        <circle ref={dotRef} r="3" fill={color} style={{ opacity: 0 }} />
      </svg>
    </div>
  );
};

export default ScrollDivider;
