import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

// Plantilla Open Graph (03-DESIGN.md §12.9.6 y §13.2 v6.0): 1200 × 630, papel, padding 64,
// etiqueta mono + monograma, titular Plus Jakarta Sans 600 y pie con la regla de medición (§6.1).

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const font = (pkg: string, file: string) =>
  readFile(join(process.cwd(), "node_modules", pkg, "files", file));

const C = {
  papel: "#F8F9FC",
  tinta: "#0F1424",
  gris500: "#5B657E",
  gris400: "#7B8499",
  marino: "#312E81",
  acento: "#4F46E5",
};

interface OgInput {
  label: string;
  title: string;
  description?: string;
}

export async function renderOg({ label, title, description }: OgInput) {
  const [jakarta400, jakarta600, mono500, monogram] = await Promise.all([
    font("@fontsource/plus-jakarta-sans", "plus-jakarta-sans-latin-400-normal.woff"),
    font("@fontsource/plus-jakarta-sans", "plus-jakarta-sans-latin-600-normal.woff"),
    font("@fontsource/ibm-plex-mono", "ibm-plex-mono-latin-500-normal.woff"),
    readFile(join(process.cwd(), "public/brand/logo/monograma.svg")),
  ]);
  const monogramSrc = `data:image/svg+xml;base64,${monogram.toString("base64")}`;

  // Regla: marcas cada 8 u, una larga cada 5.
  const ticks = Array.from({ length: 134 }, (_, i) => i);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: C.papel,
        padding: 64,
        fontFamily: "Plus Jakarta Sans",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontFamily: "IBM Plex Mono",
            fontSize: 22,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: C.gris500,
          }}
        >
          {label}
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={monogramSrc} width={48} height={48} alt="" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 960 }}>
        <div
          style={{
            fontSize: title.length > 60 ? 48 : 60,
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: C.tinta,
          }}
        >
          {title}
        </div>
        {description && (
          <div style={{ fontSize: 26, lineHeight: 1.4, color: C.gris500 }}>{description}</div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "flex-end", height: 14, gap: 6 }}>
          {ticks.map((i) => (
            <div
              key={i}
              style={{ width: 2, height: i % 5 === 0 ? 14 : 7, background: C.gris400 }}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
          <span style={{ fontWeight: 600, color: C.tinta }}>{profile.name}</span>
          <span style={{ fontFamily: "IBM Plex Mono", color: C.acento }}>
            {new URL(profile.siteUrl).host}
          </span>
        </div>
      </div>
    </div>,
    {
      ...ogSize,
      fonts: [
        { name: "Plus Jakarta Sans", data: jakarta400, weight: 400, style: "normal" },
        { name: "Plus Jakarta Sans", data: jakarta600, weight: 600, style: "normal" },
        { name: "IBM Plex Mono", data: mono500, weight: 500, style: "normal" },
      ],
    },
  );
}
