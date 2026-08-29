import { useEffect, useRef } from 'react';

interface UseMagneticOptions {
  /** Fuerza de atracción (0-1). */
  strength?: number;
}

/**
 * Atrae el elemento hacia el cursor al acercarse (efecto magnético).
 * Sólo con puntero fino.
 */
export function useMagnetic<T extends HTMLElement = HTMLAnchorElement>(options: UseMagneticOptions = {}) {
  const { strength = 0.35 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) return;

    el.style.willChange = 'transform';

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
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
  }, [strength]);

  return ref;
}
