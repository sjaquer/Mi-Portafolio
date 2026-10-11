import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { TagLoader } from "@/components/analytics/tag-loader";
import { consentDefaultScript } from "@/lib/analytics";
import { jsonLdGraph, personJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { defaultMetadata } from "@/lib/seo";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

// Tipografías de marca (03-DESIGN.md §5.1), autoalojadas con next/font.
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1013" },
  ],
};

const siteJsonLd = jsonLdGraph(websiteJsonLd(), personJsonLd());

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
        {/* Consent Mode v2: estado por defecto antes de cualquier etiqueta (04 §4.2). */}
        <script dangerouslySetInnerHTML={{ __html: consentDefaultScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="flex min-h-dvh flex-col">
        {children}
        <TagLoader />
      </body>
    </html>
  );
}
