import type { MetadataRoute } from "next";
import { cases } from "@/content/casos";
import { profile } from "@/content/profile";

/** Solo URLs reales, nunca fragmentos # (auditoría C3). */
const pages = ["/", "/proyectos", "/sobre-mi", "/cv", "/contacto", "/privacidad"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, profile.siteUrl).toString();
  return [
    ...pages.map((path) => ({ url: url(path), lastModified: profile.updatedAt })),
    ...cases.map((c) => ({ url: url(`/proyectos/${c.slug}`), lastModified: c.updatedAt })),
  ];
}
