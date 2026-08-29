import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface CardGlowProps {
  /** Color del resplandor temático en formato rgba. */
  color?: string;
  className?: string;
}

/**
 * Resplandor de cristal líquido (Liquid Glassmorphism + Specular Highlight).
 * Genera un halo de color temático difuso y un reflejo especular blanco puro
 * que sigue con precisión el cursor del mouse, simulando refracción 3D de vidrio.
 */
export function CardGlow({ color = 'rgba(16,185,129,0.25)', className = '' }: CardGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const specularRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const specular = specularRef.current;
    const parent = glow?.parentElement;
    if (!glow || !specular || !parent) return;

    const enter = () => {
      animate([glow, specular], {
        opacity: [0, 1],
        scale: [0.85, 1],
        duration: 400,
        ease: 'outExpo',
      });
    };

    const leave = () => {
      animate([glow, specular], {
        opacity: 0,
        scale: 0.85,
        duration: 450,
        ease: 'outExpo',
      });
      glow.style.setProperty('--gx', '50%');
      glow.style.setProperty('--gy', '50%');
      specular.style.setProperty('--gx', '50%');
      specular.style.setProperty('--gy', '50%');
    };

    const move = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      const x = `${((e.clientX - r.left) / r.width) * 100}%`;
      const y = `${((e.clientY - r.top) / r.height) * 100}%`;
      glow.style.setProperty('--gx', x);
      glow.style.setProperty('--gy', y);
      specular.style.setProperty('--gx', x);
      specular.style.setProperty('--gy', y);
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
    <>
      {/* 1. Ambient Dynamic Color Aura */}
      <div
        ref={glowRef}
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 blur-3xl transition-opacity duration-300 z-0 ${className}`}
        style={{
          background: `radial-gradient(45% 45% at var(--gx, 50%) var(--gy, 50%), ${color}, transparent 75%)`,
          transform: 'scale(0.85)',
        }}
      />

      {/* 2. Specular Crystal Highlight */}
      <div
        ref={specularRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 z-10 transition-opacity duration-300 mix-blend-overlay"
        style={{
          background: `radial-gradient(30% 30% at var(--gx, 50%) var(--gy, 50%), rgba(255, 255, 255, 0.18), transparent 80%)`,
          transform: 'scale(0.85)',
        }}
      />
    </>
  );
}

export default CardGlow;
