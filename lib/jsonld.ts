import { profile } from "@/content/profile";
import { findImage } from "@/lib/images";

const personId = `${profile.siteUrl}/#person`;

/** Schema.org Person (04-TECH-SEO-MEDICION.md §2.2). */
export function personJsonLd() {
  const portrait = findImage("retrato");
  const current = profile.experience.find((e) => e.to === null && !e.org.startsWith("Freelance"));
  return {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    alternateName: profile.fullName,
    jobTitle: profile.role,
    description: profile.tagline,
    url: profile.siteUrl,
    ...(portrait && { image: `${profile.siteUrl}${portrait}` }),
    email: `mailto:${profile.links.email}`,
    hasOccupation: profile.targetRoles.map((name) => ({
      "@type": "Occupation",
      name,
      occupationLocation: { "@type": "City", name: "Lima" },
    })),
    address: { "@type": "PostalAddress", addressLocality: "Lima", addressCountry: "PE" },
    alumniOf: profile.education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.org })),
    ...(current && { worksFor: { "@type": "Organization", name: current.org } }),
    knowsAbout: Object.values(profile.skills).flat(),
    knowsLanguage: ["es", "en"],
    sameAs: [profile.links.linkedin, profile.links.github],
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${profile.siteUrl}/#website`,
    url: profile.siteUrl,
    name: profile.name,
    inLanguage: "es-PE",
    publisher: { "@id": personId },
  };
}

/**
 * Convierte "YYYY-MM-DD" a formato ISO 8601 DateTime con zona horaria (Lima UTC-5).
 * Requerido por Google Search Console para dateModified y datePublished.
 */
export function toIsoDateTime(dateStr: string): string {
  if (dateStr.includes("T")) {
    return dateStr;
  }
  return `${dateStr}T00:00:00-05:00`;
}

/** ProfilePage para home y /sobre-mi. */
export function profilePageJsonLd() {
  return {
    "@type": "ProfilePage",
    dateModified: toIsoDateTime(profile.updatedAt),
    mainEntity: personJsonLd(),
  };
}

export function jsonLdGraph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
