import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

// Plantilla Open Graph (03-DESIGN.md §12.9.6 y §13.2 v7.0): 1200 × 630, Índigo Nocturno
// con halo radial suave, barra superior Índigo → Cian, etiqueta mono cian + monograma claro,
// titular Plus Jakarta Sans 600 y pie con la regla de medición (§6.1).

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const font = (pkg: string, file: string) =>
  readFile(join(process.cwd(), "node_modules", pkg, "files", file));

const C = {
  noche: "#0C1124",
  tintaClara: "#F8FAFC",
  textoSec: "#CBD5EC",
  bordeRegla: "#3B4A73",
  indigo: "#818CF8",
  indigoBase: "#4F46E5",
  cian: "#22D3EE",
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
    readFile(join(process.cwd(), "public/brand/logo/monograma-negativo.svg")),
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
        backgroundColor: C.noche,
        backgroundImage:
          "radial-gradient(circle at 86% 14%, rgba(129, 140, 248, 0.22), transparent 52%), radial-gradient(circle at 12% 88%, rgba(34, 211, 238, 0.16), transparent 48%)",
        padding: "56px 64px",
        fontFamily: "Plus Jakarta Sans",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          backgroundImage: `linear-gradient(90deg, ${C.indigoBase} 0%, ${C.indigo} 48%, ${C.cian} 100%)`,
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: C.cian,
            }}
          />
          <span
            style={{
              fontFamily: "IBM Plex Mono",
              fontSize: 21,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: C.cian,
            }}
          >
            {label}
          </span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={monogramSrc} width={48} height={48} alt="" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 980 }}>
        <div
          style={{
            fontSize: title.length > 60 ? 46 : 58,
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            color: C.tintaClara,
          }}
        >
          {title}
        </div>
        {description && (
          <div style={{ fontSize: 25, lineHeight: 1.42, color: C.textoSec }}>{description}</div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", alignItems: "flex-end", height: 14, gap: 6 }}>
          {ticks.map((i) => (
            <div
              key={i}
              style={{ width: 2, height: i % 5 === 0 ? 14 : 7, background: C.bordeRegla }}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
          <span style={{ fontWeight: 600, color: C.tintaClara }}>{profile.name}</span>
          <span style={{ fontFamily: "IBM Plex Mono", color: C.indigo }}>
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
