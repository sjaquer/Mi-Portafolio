"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { cvPdfPath } from "@/lib/cv-path";
import { pageTypeOf, track } from "@/lib/analytics";

const OUTBOUND = ["linkedin.com", "github.com"];

/** Zona de la página donde ocurrió el clic: header, footer o el id de la sección. */
function locationOf(el: Element): string {
  if (el.closest("body > header")) return "header";
  if (el.closest("footer")) return "footer";
  const region = el.closest(
    "section[aria-labelledby], section[id], nav[aria-label], aside[aria-labelledby], form",
  );
  if (!region) return "main";
  if (region.tagName === "FORM") return region.id || "form";
  return (
    region.getAttribute("aria-labelledby") ||
    region.id ||
    region.getAttribute("aria-label") ||
    "main"
  );
}

/**
 * Un solo listener delegado para todos los clics medibles (04 §4.3). Así cada botón solo
 * necesita `data-cta`, y ningún componente de servidor tiene que volverse de cliente.
 */
export function ClickTracker() {
  const pathname = usePathname();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const el = target?.closest<HTMLElement>("a, button");
      if (!el) return;
      const cta = el.dataset.cta;
      const location = locationOf(el);

      if (cta)
        track({
          event: "cta_click",
          cta_id: cta,
          cta_location: location,
          page_type: pageTypeOf(pathname),
        });

      const href = el instanceof HTMLAnchorElement ? el.href : "";
      if (!href) return;
      const url = new URL(href, window.location.href);

      if (url.pathname === cvPdfPath) track({ event: "cv_download", cta_location: location });
      else if (url.hostname === "wa.me")
        track({ event: "generate_lead", lead_channel: "whatsapp" });
      else if (url.protocol === "mailto:") track({ event: "generate_lead", lead_channel: "email" });
      else if (OUTBOUND.some((d) => url.hostname.endsWith(d)))
        track({
          event: "outbound_click",
          link_domain: url.hostname.replace(/^www\./, ""),
          cta_location: location,
        });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [pathname]);

  return null;
}
