"use client";

import { useEffect } from "react";
import { cvPdfPath } from "@/lib/cv-path";

/**
 * Saludo para quien abre DevTools: muestra cómo está hecho el sitio y deja una
 * pequeña API (`sj.*`) para inspeccionar rendimiento y medición en vivo.
 * Se ejecuta una vez, cuando el navegador está inactivo: no compite con la carga.
 */

const C = {
  marino: "#1F3A5F",
  papel: "#FAFAF8",
  azul: "#7A9BFF",
  verde: "#3FC08A",
  gris: "#8A9099",
};
const mono = "font-family: 'JetBrains Mono', ui-monospace, monospace";

type Entry = Record<string, unknown>;

function round(n: number, d = 0) {
  return Math.round(n * 10 ** d) / 10 ** d;
}

/** LCP y CLS se recogen con PerformanceObserver (buffered), la API recomendada. */
const vitals = { lcp: undefined as number | undefined, cls: 0 };

function observeVitals() {
  try {
    new PerformanceObserver((list) => {
      const last = list.getEntries().at(-1);
      if (last) vitals.lcp = last.startTime;
    }).observe({ type: "largest-contentful-paint", buffered: true });
    new PerformanceObserver((list) => {
      for (const e of list.getEntries() as (PerformanceEntry & {
        value: number;
        hadRecentInput: boolean;
      })[]) {
        if (!e.hadRecentInput) vitals.cls += e.value;
      }
    }).observe({ type: "layout-shift", buffered: true });
  } catch {
    // Navegadores sin estas entradas (Safari, Firefox): se muestran como "—".
  }
}

/** Métricas medidas en este navegador, en esta visita. */
function measure(): Entry {
  const nav = performance.getEntriesByType("navigation")[0] as
    PerformanceNavigationTiming | undefined;
  const resources = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
  const kb = (list: PerformanceResourceTiming[]) =>
    round(list.reduce((s, r) => s + (r.transferSize || 0), 0) / 1024, 1);
  const own = resources.filter((r) => r.name.startsWith(location.origin));
  return {
    "TTFB (ms)": nav ? round(nav.responseStart - nav.requestStart) : "—",
    "LCP (ms)": vitals.lcp !== undefined ? round(vitals.lcp) : "—",
    CLS: round(vitals.cls, 3),
    "DOM listo (ms)": nav ? round(nav.domContentLoadedEventEnd) : "—",
    "JS propio (KB)": kb(own.filter((r) => r.initiatorType === "script")),
    "Terceros (KB)": kb(resources.filter((r) => !r.name.startsWith(location.origin))),
    Recursos: resources.length,
  };
}

const api = {
  ayuda() {
    console.log(
      "%csj.ayuda()%c       esta lista\n%csj.rendimiento()%c LCP, CLS, TTFB y peso medidos en tu navegador\n%csj.eventos()%c     lo que este sitio envía al dataLayer (sin datos personales)\n%csj.stack()%c       cómo está construido\n%csj.contacto()%c    dónde escribirme\n%csj.cv()%c          abrir el CV en PDF",
      ...Array.from({ length: 6 }).flatMap(() => [
        `${mono}; color: ${C.azul}; font-weight: 600`,
        `${mono}; color: ${C.gris}`,
      ]),
    );
  },
  rendimiento() {
    console.table(measure());
    return "Medido con PerformanceObserver y Resource Timing, en este dispositivo.";
  },
  eventos() {
    const dl = ((window as unknown as { dataLayer?: Entry[] }).dataLayer ?? [])
      .filter(
        (e) => e && typeof e === "object" && "event" in e && !String(e.event).startsWith("gtm"),
      )
      .map((e) =>
        Object.fromEntries(
          Object.entries(e).filter(([k, v]) => v !== undefined && !k.startsWith("gtm")),
        ),
      );
    if (dl.length) console.table(dl);
    return dl.length
      ? `${dl.length} eventos en esta visita. Haz clic en algo y vuelve a llamar sj.eventos().`
      : "Aún no hay eventos: haz clic en un botón y vuelve a probar.";
  },
  stack() {
    console.table({
      Framework: "Next.js 16 (App Router, páginas estáticas) + React 19",
      Lenguaje: "TypeScript estricto",
      Estilos: "Tailwind CSS 4 con tokens de diseño propios",
      Contenido: "MDX + una sola fuente de datos (profile.ts)",
      Medición: "GTM + GA4 con Consent Mode v2 · eventos tipados",
      Calidad: "ESLint, Prettier, Lighthouse CI, WCAG 2.2 AA",
      Hosting: "Vercel",
    });
    return "Detalle en /proyectos/este-portafolio";
  },
  contacto() {
    console.log(
      `%c✉  sjaquer@outlook.es\n→  ${location.origin}/contacto\n→  https://www.linkedin.com/in/sjaquer`,
      `${mono}; color: ${C.papel}; background: ${C.marino}; padding: 8px 12px; border-radius: 6px; line-height: 1.8`,
    );
    return "Respondo en 1 a 2 días hábiles.";
  },
  cv() {
    window.open(cvPdfPath, "_blank", "noopener");
    return "Abriendo el CV…";
  },
};

export function ConsoleGreeting() {
  useEffect(() => {
    const w = window as unknown as { sj?: typeof api; __sjGreeted?: boolean };
    if (w.__sjGreeted) return;
    w.__sjGreeted = true;
    w.sj = api;
    observeVitals();

    const greet = () => {
      console.log(
        "%c sj %c Sebastián Jaque · desarrollo web, automatización e integraciones ",
        `${mono}; background: ${C.marino}; color: ${C.papel}; font-weight: 700; font-size: 14px; padding: 6px 10px; border-radius: 6px 0 0 6px`,
        `${mono}; background: ${C.papel}; color: ${C.marino}; font-size: 12px; padding: 7px 10px; border-radius: 0 6px 6px 0; border: 1px solid ${C.marino}`,
      );
      console.log(
        "%c¿Inspeccionando el código? Bien: aquí no hay nada que esconder.\n%cEste sitio es estático, accesible y medido con consentimiento. Escribe %csj.ayuda()%c para explorarlo desde la consola.",
        `font-size: 13px; font-weight: 600; color: ${C.verde}`,
        `font-size: 12px; color: ${C.gris}; line-height: 1.6`,
        `${mono}; font-size: 12px; color: ${C.azul}; font-weight: 600`,
        `font-size: 12px; color: ${C.gris}`,
      );
    };
    const idle = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 1500));
    idle(greet);
  }, []);

  return null;
}
