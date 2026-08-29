import { useEffect, useRef } from 'react';

interface UseTiltOptions {
  /** Inclinación máxima en grados. */
  max?: number;
  /** Escala al hacer hover. */
  scale?: number;
}

/**
 * Inclinación 3D que sigue al cursor (rotateX/rotateY con perspectiva).
 * Sólo se activa con puntero fino para no afectar el táctil.
 * Aplicar a un elemento INTERNO (no al que ya es draggable).
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>(options: UseTiltOptions = {}) {
  const { max = 9, scale = 1.015 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) return;

    el.style.transformStyle = 'preserve-3d';
    el.style.willChange = 'transform';

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) scale(${scale})`;
    };
    const onLeave = () => {
      el.style.transform = '';
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [max, scale]);

  return ref;
}
