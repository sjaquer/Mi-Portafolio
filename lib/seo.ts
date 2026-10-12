import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const homeTitle = `${profile.name} — Desarrollo web, MarTech y CRO | Lima`;
export const homeDescription =
  "Estudiante de último ciclo que construye sitios con Next.js, automatizaciones e integraciones, y mide su impacto con GA4. Lima, Perú.";

/** Metadata por defecto del layout raíz (04-TECH-SEO-MEDICION.md §2.1). */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: homeTitle, template: `%s — ${profile.name}` },
  description: homeDescription,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "es_PE",
    siteName: profile.name,
    title: homeTitle,
    description: homeDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  verification: {
    google: "R7XnE1dbqikLDxkxSKfYOnRIIYWy3WQ96LCdq3G84KY",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

interface PageMetaInput {
  title: string;
  description: string;
  path: `/${string}`;
  noindex?: boolean;
}

/** Metadata de una página interna: título, descripción y canonical únicos. */
export function pageMetadata({ title, description, path, noindex }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    twitter: { title, description },
    ...(noindex && { robots: { index: false, follow: false } }),
  };
}
