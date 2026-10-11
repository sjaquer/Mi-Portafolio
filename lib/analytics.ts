/**
 * Medición (04-TECH-SEO-MEDICION.md §4). Los eventos se envían SOLO con `track()`.
 * Tipado para que un nombre o parámetro mal escrito no compile: es la causa más común
 * de datos rotos en GA4. Nunca se envían datos personales (nombre, email, mensaje).
 */

export type PageType =
  "home" | "projects" | "case_study" | "about" | "cv" | "contact" | "privacy" | "other";

export type LeadChannel = "form" | "whatsapp" | "email";

export type AnalyticsEvent =
  | { event: "cta_click"; cta_id: string; cta_location: string; page_type: PageType }
  | { event: "cv_download"; cta_location: string }
  | { event: "generate_lead"; lead_channel: LeadChannel; lead_reason?: string }
  | { event: "outbound_click"; link_domain: string; cta_location: string }
  | { event: "case_study_view"; case_slug: string; case_type: string }
  | { event: "case_study_read"; case_slug: string }
  | { event: "post_read"; post_slug: string; post_pillar: string }
  | { event: "form_error"; field: string }
  | { event: "theme_change"; theme: "light" | "dark" | "system" };

type DataLayerWindow = Window & { dataLayer?: unknown[] };

export function track(e: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(e);
}

export function pageTypeOf(pathname: string): PageType {
  if (pathname === "/") return "home";
  if (pathname === "/proyectos") return "projects";
  if (pathname.startsWith("/proyectos/")) return "case_study";
  const map: Record<string, PageType> = {
    "/sobre-mi": "about",
    "/cv": "cv",
    "/contacto": "contact",
    "/privacidad": "privacy",
  };
  return map[pathname] ?? "other";
}

/* ── Consentimiento (Consent Mode v2, §4.2) ─────────────────────────────── */

export const CONSENT_COOKIE = "sj_consent";
export type ConsentChoice = "granted" | "denied";
export const CONSENT_OPEN_EVENT = "sj:open-consent";

export function readConsent(): ConsentChoice | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=(granted|denied)`));
  return (m?.[1] as ConsentChoice | undefined) ?? null;
}

/** Guarda la elección (cookie de primera parte, 6 meses) y actualiza Consent Mode. */
export function saveConsent(choice: ConsentChoice) {
  document.cookie = `${CONSENT_COOKIE}=${choice}; Max-Age=${60 * 60 * 24 * 180}; Path=/; SameSite=Lax`;
  const w = window as DataLayerWindow & { gtag?: (...args: unknown[]) => void };
  w.gtag?.("consent", "update", { analytics_storage: choice });
  if (choice === "denied") {
    // Al revocar, se borran las cookies de GA ya creadas.
    document.cookie.split("; ").forEach((c) => {
      const name = c.split("=")[0];
      if (name === "_ga" || name.startsWith("_ga_")) {
        const domain = location.hostname.split(".").slice(-2).join(".");
        document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${domain}`;
        document.cookie = `${name}=; Max-Age=0; Path=/`;
      }
    });
  }
}

/**
 * Script en <head>, antes de cualquier etiqueta: crea dataLayer y gtag, y fija el
 * estado por defecto de Consent Mode v2 en `denied` (o lo que el visitante ya eligió).
 * La publicidad queda siempre denegada: este sitio no hace remarketing.
 */
export const consentDefaultScript = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;var c=(document.cookie.match(/(?:^|; )${CONSENT_COOKIE}=(granted|denied)/)||[])[1];gtag('consent','default',{analytics_storage:c==='granted'?'granted':'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});gtag('set','ads_data_redaction',true);`;
