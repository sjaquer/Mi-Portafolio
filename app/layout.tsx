import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { TagLoader } from "@/components/analytics/tag-loader";
import { consentDefaultScript, consentInitScript } from "@/lib/analytics";
import { jsonLdGraph, personJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { defaultMetadata } from "@/lib/seo";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

// Tipografías de marca (03-DESIGN.md §5.1 v6.0), autoalojadas en app/fonts: variables y cortes
// latin de Google Fonts / IBM (OFL). Archivos locales para no depender de Google en el build.
const dmSans = localFont({
  src: "./fonts/dm-sans-latin-var.woff2",
  variable: "--font-dm-sans",
  weight: "100 900",
  display: "swap",
});
// Plus Jakarta Sans para titulares (curvas geométricas abiertas, menos cuadradas que Inter).
const plusJakarta = localFont({
  src: "./fonts/plus-jakarta-sans-latin-var.woff2",
  variable: "--font-plus-jakarta",
  weight: "200 800",
  display: "swap",
});
const ibmPlexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-500-latin.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-mono-600-latin.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  // Solo etiquetas y cifras: sin precarga, para no competir con DM Sans (texto del LCP).
  preload: false,
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F9FC" },
    { media: "(prefers-color-scheme: dark)", color: "#080A12" },
  ],
};

const siteJsonLd = jsonLdGraph(websiteJsonLd(), personJsonLd());
const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-PSWBGH5K";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-PE"
      data-theme="light"
      suppressHydrationWarning
      className={`${dmSans.variable} ${plusJakarta.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: consentInitScript }} />
        {/* Consent Mode v2: estado por defecto antes de cualquier etiqueta (04 §4.2).
            GTM no se carga aquí: TagLoader lo inyecta solo si el visitante acepta. */}
        <script dangerouslySetInnerHTML={{ __html: consentDefaultScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="flex min-h-dvh flex-col">
        {/* Google Tag Manager (noscript) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
        <TagLoader gtmId={gtmId} />
      </body>
    </html>
  );
}
