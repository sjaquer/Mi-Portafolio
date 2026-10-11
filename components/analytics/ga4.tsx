"use client";

import { useEffect } from "react";

const GA_ID = "G-GDPBN9G1M5";
const EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

/**
 * GA4 se carga tras la primera interacción, nunca durante la carga
 * (04-TECH-SEO-MEDICION.md §3.2): ~176 KB que no compiten con el contenido.
 * En la Fase 3 se reemplaza por GTM + Consent Mode v2.
 */
export function Ga4() {
  useEffect(() => {
    function load() {
      EVENTS.forEach((e) => window.removeEventListener(e, load));
      const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void };
      w.dataLayer = w.dataLayer || [];
      w.gtag = function gtag() {
        // gtag exige el objeto `arguments`, no un array.
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer.push(arguments);
      };
      w.gtag("js", new Date());
      w.gtag("config", GA_ID, {
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(s);
    }
    EVENTS.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    return () => EVENTS.forEach((e) => window.removeEventListener(e, load));
  }, []);

  return null;
}
