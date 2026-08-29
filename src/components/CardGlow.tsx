import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface CardGlowProps {
  /** Color del resplandor en formato rgba. */
  color?: string;
  className?: string;
}

/**
 * Brillo radial suave que aparece al hacer hover sobre la tarjeta.
 * Sustituye los "scan-line" para evitar el efecto de raya dentro de la tarjeta.
 */
export function CardGlow({ color = 'rgba(16,185,129,0.35)', className = '' }: CardGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const enter = () => animate(el, { opacity: 1, scale: 1, duration: 600, ease: 'outExpo' });
    const leave = () => {
      animate(el, { opacity: 0, scale: 0.82, duration: 500, ease: 'outExpo' });
      el.style.setProperty('--gx', '50%');
      el.style.setProperty('--gy', '50%');
    };
    const move = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      el.style.setProperty('--gx', `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty('--gy', `${((e.clientY - r.top) / r.height) * 100}%`);
    };

    parent.addEventListener('pointerenter', enter);
    parent.addEventListener('pointerleave', leave);
    parent.addEventListener('pointermove', move);
    return () => {
      parent.removeEventListener('pointerenter', enter);
      parent.removeEventListener('pointerleave', leave);
      parent.removeEventListener('pointermove', move);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 blur-2xl ${className}`}
      style={{
        background: `radial-gradient(40% 40% at var(--gx, 50%) var(--gy, 50%), ${color}, transparent 70%)`,
        transform: 'scale(0.82)',
      }}
    />
  );
}

export default CardGlow;
