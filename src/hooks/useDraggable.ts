import { useEffect, useRef } from 'react';
import { animate, createDraggable } from 'animejs';
import type { Draggable } from 'animejs';

interface UseDraggableOptions {
  /** Vuelve al origen con un resorte al soltar (por defecto true). */
  returnOnRelease?: boolean;
  /** Ease del retorno al origen. */
  ease?: string;
}

/**
 * Hace que un elemento sea arrastrable con anime.js v4 (createDraggable).
 * Sólo se activa con puntero fino (ratón) para no bloquear el scroll táctil.
 */
export function useDraggable<T extends HTMLElement = HTMLDivElement>(options: UseDraggableOptions = {}) {
  const ref = useRef<T>(null);
  const { returnOnRelease = true, ease = 'outElastic' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) return;

    let returnAnim: ReturnType<typeof animate> | null = null;

    const draggable: Draggable = createDraggable(el, {
      cursor: { grab: 'grab', dragging: 'grabbing' },
      dragThreshold: 4,
      onGrab: () => {
        returnAnim?.pause();
      },
      onRelease: () => {
        if (!returnOnRelease) return;
        draggable.stop();
        returnAnim = animate(el, {
          x: 0,
          y: 0,
          ease,
          duration: 800,
          onComplete: () => draggable.reset(),
        });
      },
    });

    return () => draggable.revert();
  }, [returnOnRelease, ease]);

  return ref;
}
