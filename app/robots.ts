import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";

// Se conserva la política anterior hacia rastreadores de IA y redes sociales;
// se quitan Host, Crawl-delay y las reglas de Vite (04-TECH-SEO-MEDICION.md §2.3).
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "Amazonbot",
];
const socialCrawlers = ["LinkedInBot", "Twitterbot", "facebookexternalhit", "WhatsApp", "Slackbot"];
const seoScrapers = ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "BLEXBot"];
const disallow = ["/api/", "/dev/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: [...aiCrawlers, ...socialCrawlers], allow: "/", disallow },
      { userAgent: seoScrapers, disallow: "/" },
    ],
    sitemap: new URL("/sitemap.xml", profile.siteUrl).toString(),
  };
}
