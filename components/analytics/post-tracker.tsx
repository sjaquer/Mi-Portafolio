"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** post_read al 75 % de scroll, una sola vez (04 §4.3). */
export function PostTracker({ slug, pillar }: { slug: string; pillar: string }) {
  useEffect(() => {
    let sent = false;
    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (!sent && max > 0 && window.scrollY / max >= 0.75) {
        sent = true;
        track({ event: "post_read", post_slug: slug, post_pillar: pillar });
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug, pillar]);
  return null;
}
