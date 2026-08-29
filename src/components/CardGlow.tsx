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
    const leave = () => animate(el, { opacity: 0, scale: 0.82, duration: 500, ease: 'outExpo' });

    parent.addEventListener('pointerenter', enter);
    parent.addEventListener('pointerleave', leave);
    return () => {
      parent.removeEventListener('pointerenter', enter);
      parent.removeEventListener('pointerleave', leave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 blur-2xl ${className}`}
      style={{
        background: `radial-gradient(60% 60% at 50% 35%, ${color}, transparent 72%)`,
        transform: 'scale(0.82)',
      }}
    />
  );
}

export default CardGlow;
