import { profile } from "@/content/profile";

const personId = `${profile.siteUrl}/#person`;

/** Schema.org Person (04-TECH-SEO-MEDICION.md §2.2). */
export function personJsonLd() {
  const current = profile.experience.find((e) => e.to === null);
  return {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    alternateName: profile.fullName,
    jobTitle: profile.role,
    description: profile.tagline,
    url: profile.siteUrl,
    address: { "@type": "PostalAddress", addressLocality: "Lima", addressCountry: "PE" },
    alumniOf: profile.education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.org })),
    ...(current && { worksFor: { "@type": "Organization", name: current.org } }),
    knowsAbout: [...profile.skills.web, ...profile.skills.automation, ...profile.skills.martech],
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

/** ProfilePage para home y /sobre-mi. */
export function profilePageJsonLd() {
  return {
    "@type": "ProfilePage",
    dateModified: profile.updatedAt,
    mainEntity: personJsonLd(),
  };
}

export function jsonLdGraph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
