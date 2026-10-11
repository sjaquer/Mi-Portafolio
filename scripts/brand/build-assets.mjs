// Genera los activos vectoriales de marca (03-DESIGN.md §3, §10.6, §13.7)
// con el texto convertido a contornos, para que no dependan de fuentes instaladas.
// Uso: pnpm brand  (después ejecuta render-png.sh para PNG/ICO)
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import opentype from "opentype.js";

const require = createRequire(import.meta.url);
const font = (pkg, file) => {
  const b = readFileSync(require.resolve(`${pkg}/files/${file}`));
  return opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength));
};

const inter600 = font("@fontsource/inter", "inter-latin-600-normal.woff");
const mono500 = font("@fontsource/jetbrains-mono", "jetbrains-mono-latin-500-normal.woff");
const mono600 = font("@fontsource/jetbrains-mono", "jetbrains-mono-latin-600-normal.woff");

const C = {
  papel: "#FAFAF8",
  tinta: "#14161A",
  marino: "#1F3A5F",
  marino100: "#D6DFEA",
  marino900: "#13233A",
  marino50: "#EEF2F7",
  marino300: "#8FA3BF",
};

const r = (n) => Math.round(n * 100) / 100;

/** Texto → path con tracking en em. Devuelve d y caja contenedora. */
function textPath(f, text, size, x, y, trackingEm = 0) {
  const scale = size / f.unitsPerEm;
  // charToGlyph evita el shaping GSUB (opentype.js no soporta todos los lookups de Inter).
  const glyphs = [...text].map((ch) => f.charToGlyph(ch));
  const parts = [];
  let cursor = x;
  glyphs.forEach((g, i) => {
    parts.push(g.getPath(cursor, y, size));
    cursor += g.advanceWidth * scale + trackingEm * size;
    if (glyphs[i + 1]) cursor += f.getKerningValue(g, glyphs[i + 1]) * scale;
  });
  const path = new opentype.Path();
  parts.forEach((p) => path.extend(p));
  const bb = path.getBoundingBox();
  return { d: path.toPathData(2), bb };
}

const out = (file, svg) => {
  mkdirSync(file.substring(0, file.lastIndexOf("/")), { recursive: true });
  writeFileSync(file, svg.trim() + "\n");
  console.log("✓", file);
};

// ── Monograma (§3.2) ────────────────────────────────────────────────────────
function monogram({ withRule = true } = {}) {
  const size = withRule ? 26 : 32;
  const probe = textPath(mono600, "sj", size, 0, 0);
  const w = probe.bb.x2 - probe.bb.x1;
  const x = (64 - w) / 2 - probe.bb.x1; // centrado óptico horizontal
  const y = withRule ? 38 : 32 + (probe.bb.y2 - probe.bb.y1) / 2 - probe.bb.y2;
  const t = textPath(mono600, "sj", size, x, y);
  const left = r(t.bb.x1 + 1);
  const rule = withRule
    ? [
        [left, 46],
        [left + 6, 48],
        [left + 12, 48],
      ]
        .map(([lx, y1]) => `M${r(lx)} ${y1}V52`)
        .join("")
    : "";
  return { letters: t.d, rule };
}

function monogramSvg(bg, fg, { withRule = true, label = true, extraStyle = "" } = {}) {
  const m = monogram({ withRule });
  const a11y = label ? ` role="img" aria-label="Sebastián Jaque"` : "";
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"${a11y}>${extraStyle}
  <rect class="bg" width="64" height="64" rx="14" fill="${bg}"/>
  <path class="fg" d="${m.letters}" fill="${fg}"/>${
    m.rule
      ? `\n  <path class="rule" d="${m.rule}" stroke="${fg}" stroke-width="2" stroke-linecap="round" fill="none"/>`
      : ""
  }
</svg>`;
}

out("public/brand/logo/monograma.svg", monogramSvg(C.marino, C.papel));
out("public/brand/logo/monograma-negativo.svg", monogramSvg(C.papel, C.marino));
out("public/brand/logo/monograma-mono.svg", monogramSvg(C.tinta, "#FFFFFF"));
out("public/brand/logo/monograma-simple.svg", monogramSvg(C.marino, C.papel, { withRule: false }));

// Favicon: positivo en claro; en pestañas oscuras pasa a marino-100 + marino-900.
const darkStyle = `
  <style>@media (prefers-color-scheme: dark){.bg{fill:${C.marino100}}.fg{fill:${C.marino900}}.rule{stroke:${C.marino900}}}</style>`;
out("public/favicon.svg", monogramSvg(C.marino, C.papel, { extraStyle: darkStyle }));

// ── Wordmarks (§3.1) ────────────────────────────────────────────────────────
function wordmark(f, text, size, tracking) {
  const probe = textPath(f, text, size, 0, 0, tracking);
  const t = textPath(f, text, size, -probe.bb.x1, -probe.bb.y1, tracking);
  return {
    d: t.d,
    w: r(probe.bb.x2 - probe.bb.x1),
    h: r(probe.bb.y2 - probe.bb.y1),
  };
}

const main = wordmark(inter600, "Sebastián Jaque", 48, -0.02);
const compact = wordmark(mono500, "sjaquer", 48, 0);

const wordmarkSvg = (wm, fill, label) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${wm.w} ${wm.h}" role="img" aria-label="${label}">
  <path d="${wm.d}" fill="${fill}"/>
</svg>`;

out("public/brand/logo/wordmark.svg", wordmarkSvg(main, C.tinta, "Sebastián Jaque"));
out("public/brand/logo/wordmark-dark.svg", wordmarkSvg(main, C.papel, "Sebastián Jaque"));
out("public/brand/logo/wordmark-marino.svg", wordmarkSvg(main, C.marino, "Sebastián Jaque"));
out("public/brand/logo/wordmark-compacto.svg", wordmarkSvg(compact, C.tinta, "sjaquer"));

// Para los componentes React (inline, currentColor, tema claro/oscuro).
out(
  "components/brand/paths.ts",
  `// Generado por scripts/brand/build-assets.mjs — no editar a mano.
export const wordmarkPath = {
  viewBox: "0 0 ${main.w} ${main.h}",
  d: "${main.d}",
} as const;

export const monogramPath = {
  viewBox: "0 0 64 64",
  letters: "${monogram().letters}",
  rule: "${monogram().rule}",
} as const;
`,
);

// ── Avatar provisional (§10.6) ──────────────────────────────────────────────
// Busto lineal sobrio + cota de medición. Trazo 1,5 px constante al escalar.
out(
  "public/brand/avatar-silhouette.svg",
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" role="img" aria-label="Ilustración provisional de Sebastián Jaque">
  <rect width="800" height="1000" fill="${C.marino50}"/>
  <g fill="none" stroke="${C.marino}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke">
    <path vector-effect="non-scaling-stroke" d="M400 250c-74 0-128 58-128 140 0 60 22 112 56 146 20 20 44 32 72 32s52-12 72-32c34-34 56-86 56-146 0-82-54-140-128-140Z"/>
    <path vector-effect="non-scaling-stroke" d="M344 552v52c0 18-10 32-28 38l-112 38c-66 22-110 82-110 152v168"/>
    <path vector-effect="non-scaling-stroke" d="M456 552v52c0 18 10 32 28 38l112 38c66 22 110 82 110 152v168"/>
    <path vector-effect="non-scaling-stroke" d="M330 652c18 38 42 58 70 58s52-20 70-58"/>
  </g>
  <g fill="none" stroke="${C.marino300}" stroke-width="1.5" stroke-linecap="round" vector-effect="non-scaling-stroke">
    <path vector-effect="non-scaling-stroke" d="M140 250V568M128 250h24M128 568h24"/>
    <path vector-effect="non-scaling-stroke" d="M140 290h8M140 330h8M140 370h14M140 410h8M140 450h8M140 490h14M140 530h8"/>
  </g>
</svg>`,
);
