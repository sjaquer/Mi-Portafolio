"use client";

import { useEffect } from "react";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-GDPBN9G1M5";
const EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

/**
 * Carga GTM (o GA4 directo mientras no exista el contenedor) tras la primera interacción,
 * nunca durante la carga (04-TECH-SEO-MEDICION.md §3.2). El estado de consentimiento ya
 * está fijado en <head> por `consentDefaultScript`: las etiquetas lo respetan.
 */
export function TagLoader() {
  useEffect(() => {
    function load() {
      EVENTS.forEach((e) => window.removeEventListener(e, load));
      if (document.querySelector('script[src*="googletagmanager.com/gtm.js"]')) return;
      const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
      const s = document.createElement("script");
      s.async = true;
      if (GTM_ID) {
        w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
        s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
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
    EVENTS.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    return () => EVENTS.forEach((e) => window.removeEventListener(e, load));
  }, []);

  return null;
}
