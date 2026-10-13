import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { TagLoader } from "@/components/analytics/tag-loader";
import { consentDefaultScript } from "@/lib/analytics";
import { jsonLdGraph, personJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { defaultMetadata } from "@/lib/seo";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

// Tipografías de marca (03-DESIGN.md §5.1), autoalojadas en app/fonts: las variables
// latin de Google Fonts (OFL). Archivos locales para no depender de Google en el build.
const inter = localFont({
  src: "./fonts/inter-latin-var.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});
const jetbrainsMono = localFont({
  src: "./fonts/jetbrains-mono-latin-var.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
  // Solo etiquetas y cifras: sin precarga, para no competir con Inter (texto del LCP).
  preload: false,
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1013" },
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
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Consent Mode v2: estado por defecto antes de cualquier etiqueta (04 §4.2).
            GTM no se carga aquí: lo inyecta TagLoader tras la primera interacción. */}
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
