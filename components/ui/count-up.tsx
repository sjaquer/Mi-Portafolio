"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cuenta una cifra desde cero cuando entra en pantalla (§11). Mejora progresiva:
 * en SSR y sin JS se muestra el valor final (sin CLS); con prefers-reduced-motion
 * no anima. Solo decora una cifra ya visible; nunca sustituye al dato real.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Prefijo (signo), dígitos y sufijo: "−35 %" → "−" / "35" / " %".
    const match = value.match(/^(\D*?)(\d+)(.*)$/s);
    if (!match) return;
    const [, prefix, digits, suffix] = match;
    const target = parseInt(digits, 10);

    // Sin movimiento: se queda en el valor final (ya es el estado inicial).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let started = false;

    const run = () => {
      setDisplay(`${prefix}0${suffix}`); // arranca en cero (callback, no cuerpo del efecto)
      const duration = 1100;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setDisplay(`${prefix}${Math.round(eased * target)}${suffix}`);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            run();
          }
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
