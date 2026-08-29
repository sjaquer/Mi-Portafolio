import { useEffect, useLayoutEffect, useRef } from 'react';
import { animate, set, stagger as staggerFn } from 'animejs';
import { throttle } from '../utils/throttle';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Desplazamiento inicial en Y (px). */
  y?: number;
  /** Opacidad inicial. */
  opacityFrom?: number;
  /** Retraso base (ms). */
  delay?: number;
  /** Stagger entre hijos coincidentes con `selector` (ms). */
  stagger?: number;
  /** Duración (ms). */
  duration?: number;
  /** Si se indica, se animan los hijos que coincidan en lugar del contenedor. */
  selector?: string;
  /** Margen del observer. */
  rootMargin?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Revela el contenido al entrar en viewport usando anime.js.
 * Sustituye los `whileInView` de framer-motion para entradas simples.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  y = 30,
  opacityFrom = 0,
  delay = 0,
  stagger,
  duration = 700,
  selector,
  rootMargin = '0px 0px -10% 0px',
  as = 'div',
}) => {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !selector) return;
    set(el.querySelectorAll(selector), { opacity: opacityFrom, translateY: y });
  }, [selector, opacityFrom, y]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = selector ? el.querySelectorAll(selector) : el;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animate(targets, {
            opacity: [opacityFrom, 1],
            translateY: [y, 0],
            delay: stagger ? staggerFn(stagger, { start: delay }) : delay,
            duration,
            ease: 'outExpo',
          });
          obs.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [selector, y, opacityFrom, delay, stagger, duration, rootMargin]);

  const Tag = as as any;
  return (
    <Tag ref={ref} className={className} style={selector ? undefined : { opacity: opacityFrom }}>
      {children}
    </Tag>
  );
};

export default Reveal;

/** Hook: ejecuta `cb` una vez cuando el elemento entra en viewport. */
export function useInViewOnce<T extends Element = HTMLDivElement>(
  cb: (el: T) => void,
  rootMargin = '0px 0px -10% 0px'
) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          cb(el);
          obs.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}

/** Hook: expone el progreso (0→1) de un elemento a lo largo del viewport. */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const progress = useRef(0);
  const listeners = useRef<((p: number) => void)[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = throttle(() => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const seen = vh - rect.top;
      const p = Math.min(1, Math.max(0, seen / total));
      progress.current = p;
      listeners.current.forEach((l) => l(p));
    });

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const subscribe = (l: (p: number) => void) => {
    listeners.current.push(l);
    l(progress.current);
    return () => {
      listeners.current = listeners.current.filter((x) => x !== l);
    };
  };

  return { ref, subscribe };
}
