"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** case_study_view al cargar y case_study_read al 75 % de scroll, una sola vez (04 §4.3). */
export function CaseTracker({ slug, type }: { slug: string; type: string }) {
  useEffect(() => {
    track({ event: "case_study_view", case_slug: slug, case_type: type });

    let sent = false;
    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (!sent && max > 0 && window.scrollY / max >= 0.75) {
        sent = true;
        track({ event: "case_study_read", case_slug: slug });
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug, type]);

  return null;
}
