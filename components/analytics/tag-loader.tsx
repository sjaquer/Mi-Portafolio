"use client";

import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-GDPBN9G1M5";
const EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
/** Sin interacción, se carga igual pasado este tiempo tras `load` (visitas que solo leen). */
const IDLE_FALLBACK_MS = 5000;

/**
 * Carga GTM (o GA4 directo mientras no exista el contenedor) tras la primera interacción o,
 * sin ella, unos segundos después de `load`; nunca durante la carga (04-TECH-SEO-MEDICION.md
 * §3.2). El estado de consentimiento ya está fijado en <head> por `consentDefaultScript`.
 */
export function TagLoader({ gtmId }: { gtmId?: string }) {
  useEffect(() => {
    let timer: number | undefined;
    function load() {
      EVENTS.forEach((e) => window.removeEventListener(e, load));
      window.removeEventListener("load", schedule);
      clearTimeout(timer);
      if (document.querySelector('script[src*="googletagmanager.com/gtm.js"]')) return;
      const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
      const s = document.createElement("script");
      s.async = true;
      if (gtmId) {
        w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
        s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      } else {
        w.gtag("js", new Date());
        w.gtag("config", GA_ID, {
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
        });
        s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      }
      document.head.appendChild(s);
    }
    function schedule() {
      timer = window.setTimeout(load, IDLE_FALLBACK_MS);
    }
    EVENTS.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    return () => {
      EVENTS.forEach((e) => window.removeEventListener(e, load));
      window.removeEventListener("load", schedule);
      clearTimeout(timer);
    };
  }, [gtmId]);

  return null;
}
