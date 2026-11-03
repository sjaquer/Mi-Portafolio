"use client";

import { useEffect } from "react";
import { CONSENT_CHANGE_EVENT, readConsent } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-GDPBN9G1M5";

/**
 * Carga GTM (o GA4 directo si no hay contenedor) SOLO cuando el visitante acepta la
 * medición (opt-in, Ley 29733; 04-TECH-SEO-MEDICION.md §3.2, §4.2). Sin aceptación no
 * se descarga ningún script de terceros: mejor privacidad y rendimiento, y la medición
 * queda fuera de las pruebas de laboratorio. El estado de Consent Mode ya está fijado
 * en <head> por `consentDefaultScript`.
 */
export function TagLoader({ gtmId }: { gtmId?: string }) {
  useEffect(() => {
    let loaded = false;

    function load() {
      if (loaded || document.querySelector('script[src*="googletagmanager.com/g"]')) {
        loaded = true;
        return;
      }
      loaded = true;
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

    // Ya aceptó en una visita anterior: carga diferida para no competir con el render.
    if (readConsent() === "granted") {
      const ric = (
        window as Window & {
          requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => void;
        }
      ).requestIdleCallback;
      if (ric) ric(load, { timeout: 2000 });
      else window.setTimeout(load, 1200);
    }

    // Acepta ahora en el banner: carga de inmediato.
    const onChange = (e: Event) => {
      if ((e as CustomEvent<string>).detail === "granted") load();
    };
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, [gtmId]);

  return null;
}
