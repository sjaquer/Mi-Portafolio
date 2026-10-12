// Kit de marca para Figma (03-DESIGN.md §3–§12.9): un SVG por tablero, con textos vivos
// (Inter / JetBrains Mono), capas con nombre (id → nombre de capa en Figma) y fondos e
// imágenes en capas separadas. Arrastra los SVG a Figma: todo queda editable.
// Uso: node scripts/brand/figma-kit.mjs  →  design/figma/*.svg
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT = "design/figma";
mkdirSync(OUT, { recursive: true });

const C = {
  papel: "#FAFAF8",
  blanco: "#FFFFFF",
  gris50: "#F3F2EF",
  gris100: "#E4E2DD",
  gris400: "#8A9099",
  gris500: "#666C76",
  gris700: "#3D424B",
  tinta: "#14161A",
  marino50: "#EEF2F7",
  marino100: "#D6DFEA",
  marino300: "#8FA3BF",
  marino500: "#3F5E86",
  marino700: "#1F3A5F",
  marino900: "#13233A",
  azul50: "#EEF2FF",
  azul600: "#2350D9",
  azul700: "#1B40B3",
  verde: "#0B7350",
  verdeOsc: "#3FC08A",
  ambar: "#B54708",
  rojo: "#B42318",
  chart1: "#2350D9",
  chart2: "#D0611F",
  chart3: "#00897B",
};
const SANS = "Inter";
const MONO = "JetBrains Mono";

// Trazados del logo ya generados (texto convertido a contornos).
const paths = readFileSync("components/brand/paths.ts", "utf8");
const pick = (key) => paths.match(new RegExp(`${key}: "([^"]+)"`))[1];
const WORDMARK = { viewBox: pick("viewBox"), d: pick("  d") };
const MONO_LETTERS = pick("letters");
const MONO_RULE = pick("rule");

// Rol y frase desde la fuente única (content/profile.ts), como el sitio.
const profileSrc = readFileSync("content/profile.ts", "utf8");
const ROLE = profileSrc.match(/role: "([^"]+)"/)[1];
const TAGLINE = profileSrc.match(/tagline:\s*"([^"]+)"/)[1];
const SITE = "sjaquer.is-a.dev";

/** Parte un texto en líneas de hasta `max` caracteres (SVG no ajusta texto). */
function wrap(str, max) {
  const lines = [];
  let line = "";
  for (const w of str.split(" ")) {
    if ((line + " " + w).trim().length > max) {
      lines.push(line.trim());
      line = w;
    } else line += " " + w;
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
}

/** Incrusta una imagen del sitio (base64) para que viaje dentro del SVG a Figma. */
function embed(path) {
  const ext = path.split(".").pop();
  const mime = ext === "jpg" ? "image/jpeg" : `image/${ext}`;
  return `data:${mime};base64,${readFileSync(path).toString("base64")}`;
}
const wmH = Number(WORDMARK.viewBox.split(" ")[3]);

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

/** Texto vivo; `lines` permite saltos de línea manuales (SVG no ajusta texto). */
function text(
  id,
  x,
  y,
  lines,
  {
    size = 16,
    weight = 400,
    fill = C.tinta,
    family = SANS,
    lh = 1.2,
    tracking = 0,
    upper = false,
    anchor = "start",
  } = {},
) {
  const arr = Array.isArray(lines) ? lines : [lines];
  const ls = tracking ? ` letter-spacing="${(tracking * size).toFixed(2)}"` : "";
  const tspans = arr
    .map(
      (l, i) =>
        `<tspan x="${x}" ${i === 0 ? `y="${y}"` : `dy="${(size * lh).toFixed(1)}"`}>${esc(upper ? l.toUpperCase() : l)}</tspan>`,
    )
    .join("");
  return `<text id="${id}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}"${ls}>${tspans}</text>`;
}

const rect = (id, x, y, w, h, fill, extra = "") =>
  `<rect id="${id}" x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${extra}/>`;

/** Monograma (§3.2) como grupo editable, con el texto en contornos. */
function monogram(id, x, y, size, { bg = C.marino700, fg = C.papel } = {}) {
  const s = size / 64;
  return `<g id="${id}" transform="translate(${x} ${y}) scale(${s})">
    <rect id="Fondo" width="64" height="64" rx="14" fill="${bg}"/>
    <path id="sj" d="${MONO_LETTERS}" fill="${fg}"/>
    <path id="Regla" d="${MONO_RULE}" stroke="${fg}" stroke-width="2" stroke-linecap="round" fill="none"/>
  </g>`;
}

/** Wordmark en contornos a una altura dada. */
function wordmark(id, x, y, height, fill) {
  const s = height / wmH;
  return `<g id="${id}" transform="translate(${x} ${y}) scale(${s.toFixed(4)})"><path d="${WORDMARK.d}" fill="${fill}"/></g>`;
}

/** Regla de medición (§6.1): marcas cada `step`, una larga cada 5. */
function ruler(
  id,
  x,
  y,
  width,
  { step = 8, color = C.gris400, stroke = 1.5, short = 6, long = 12 } = {},
) {
  let d = "";
  for (let i = 0, px = 0; px <= width; i++, px += step) {
    const h = i % 5 === 0 ? long : short;
    d += `M${(x + px).toFixed(1)} ${y + long - h}V${y + long}`;
  }
  return `<path id="${id}" d="${d}" stroke="${color}" stroke-width="${stroke}" fill="none"/>`;
}

/** Retícula de puntos (§6.2) como capa independiente. */
function dotGrid(id, w, h, { gap = 24, color = C.marino500, opacity = 0.3 } = {}) {
  let dots = "";
  for (let y = gap / 2; y < h; y += gap)
    for (let x = gap / 2; x < w; x += gap)
      dots += `<rect x="${x}" y="${y}" width="1.5" height="1.5" />`;
  return `<g id="${id}" fill="${color}" opacity="${opacity}">${dots}</g>`;
}

function board(file, w, h, name, body) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<g id="${name}">
${body}
</g>
</svg>
`;
  writeFileSync(`${OUT}/${file}`, svg);
  console.log("✓", `${OUT}/${file}`);
}

// ── 01 · Logotipo (§3) ──────────────────────────────────────────────────────
board(
  "01-logotipo.svg",
  1600,
  1100,
  "01 · Logotipo",
  `
${rect("Fondo", 0, 0, 1600, 1100, C.papel)}
${text("Título", 80, 110, "Logotipo", { size: 48, weight: 600, tracking: -0.02 })}
${text("Nota", 80, 150, "Wordmark y monograma en contornos (listos para exportar) + versión de texto vivo para editar.", { size: 18, fill: C.gris500 })}
${text("Etiqueta wordmark", 80, 240, "Wordmark principal · Inter SemiBold 600 · tracking −0,02 em", { size: 14, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}
${wordmark("Wordmark · contornos · tinta", 80, 270, 60, C.tinta)}
${text("Wordmark · texto vivo", 80, 430, "Sebastián Jaque", { size: 78, weight: 600, tracking: -0.02 })}
<g id="Wordmark · sobre marino">${rect("Fondo marino", 860, 260, 660, 220, C.marino700, 'rx="16"')}${wordmark("Wordmark · papel", 905, 340, 60, C.papel)}</g>
${text("Etiqueta compacto", 80, 560, "Wordmark compacto · JetBrains Mono 500", { size: 14, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}
${text("Compacto · texto vivo", 80, 640, "sjaquer", { size: 64, weight: 500, family: MONO, fill: C.marino700 })}
${text("Etiqueta monograma", 80, 760, "Monograma 64 × 64 · radio 14 · regla de 3 marcas (§3.2)", { size: 14, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}
${monogram("Monograma · positivo", 80, 800, 192)}
${monogram("Monograma · negativo", 320, 800, 192, { bg: C.blanco, fg: C.marino700 })}
${monogram("Monograma · monocromo", 560, 800, 192, { bg: C.tinta, fg: C.blanco })}
<g id="Monograma · texto vivo (editable)">
  <rect id="Fondo" x="800" y="800" width="192" height="192" rx="42" fill="${C.marino700}"/>
  ${text("sj", 850, 912, "sj", { size: 78, weight: 600, family: MONO, fill: C.papel })}
  ${ruler("Regla", 845, 930, 40, { step: 18, color: C.papel, stroke: 6, short: 12, long: 18 })}
</g>
<g id="Tamaños mínimos">
  ${monogram("Favicon 32", 1100, 830, 32)}${monogram("Favicon 16", 1150, 846, 16)}
  ${text("Nota tamaños", 1100, 900, ["Mínimo: 16 px (favicon).", "Bajo 24 px se quita la regla."], { size: 16, fill: C.gris500, lh: 1.5 })}
</g>
`,
);

// ── 02 · Color (§4) ─────────────────────────────────────────────────────────
const swatches = [
  [
    "Principales",
    [
      ["Papel", C.papel],
      ["Tinta", C.tinta],
      ["Marino", C.marino700],
      ["Azul acción", C.azul600],
      ["Verde resultado", C.verde],
    ],
  ],
  [
    "Neutros",
    [
      ["gris-0", C.blanco],
      ["gris-50", C.gris50],
      ["gris-100", C.gris100],
      ["gris-400", C.gris400],
      ["gris-500", C.gris500],
      ["gris-700", C.gris700],
    ],
  ],
  [
    "Marino",
    [
      ["marino-50", C.marino50],
      ["marino-100", C.marino100],
      ["marino-300", C.marino300],
      ["marino-500", C.marino500],
      ["marino-700", C.marino700],
      ["marino-900", C.marino900],
    ],
  ],
  [
    "Azul y estado",
    [
      ["azul-50", C.azul50],
      ["azul-600", C.azul600],
      ["azul-700", C.azul700],
      ["ámbar", C.ambar],
      ["rojo", C.rojo],
      ["verde (oscuro)", C.verdeOsc],
    ],
  ],
  [
    "Gráficos (§9)",
    [
      ["serie 1", C.chart1],
      ["serie 2", C.chart2],
      ["serie 3", C.chart3],
      ["otros", C.gris400],
    ],
  ],
];
let colorBody = `${rect("Fondo", 0, 0, 1600, 1300, C.papel)}${text("Título", 80, 110, "Color", { size: 48, weight: 600, tracking: -0.02 })}`;
swatches.forEach(([group, items], gi) => {
  const y = 190 + gi * 215;
  colorBody += `<g id="${group}">${text("Grupo", 80, y, group, { size: 14, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}`;
  items.forEach(([n, hex], i) => {
    const x = 80 + i * 240;
    colorBody += `<g id="${n}">${rect("Muestra", x, y + 20, 220, 110, hex, `rx="10" stroke="${C.gris100}"`)}${text("Nombre", x, y + 160, n, { size: 16, weight: 600 })}${text("Hex", x, y + 182, hex, { size: 14, family: MONO, fill: C.gris500 })}</g>`;
  });
  colorBody += "</g>";
});
board("02-color.svg", 1600, 1300, "02 · Color", colorBody);

// ── 03 · Tipografía (§5) ────────────────────────────────────────────────────
const typeRows = [
  ["Display · Inter 600", 72, 600, SANS, "Construyo y mido"],
  ["Título · Inter 600", 56, 600, SANS, "Proyectos con resultado"],
  ["Subtítulo · Inter 400", 36, 400, SANS, "Sitios y automatizaciones medidas"],
  [
    "Texto · Inter 400",
    28,
    400,
    SANS,
    "Construyo sitios y automatizaciones que conectan marketing, operaciones y datos.",
  ],
  ["Métrica · JetBrains Mono 600", 120, 600, MONO, "−35 %"],
  ["Etiqueta · JetBrains Mono 500", 22, 500, MONO, "CASO · AUTOMATIZACIÓN · 2026"],
];
let typeBody = `${rect("Fondo", 0, 0, 1600, 1250, C.papel)}${text("Título", 80, 110, "Tipografía", { size: 48, weight: 600, tracking: -0.02 })}`;
let ty = 200;
typeRows.forEach(([label, size, weight, fam, sample]) => {
  typeBody += `<g id="${label}">${text("Etiqueta", 80, ty, label, { size: 14, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}${text("Muestra", 80, ty + size + 8, sample, { size, weight, family: fam, tracking: size > 40 && fam === SANS ? -0.02 : 0, fill: fam === MONO && size > 40 ? C.verde : C.tinta })}</g>`;
  ty += size + 90;
});
board("03-tipografia.svg", 1600, 1250, "03 · Tipografía", typeBody);

// ── 04 · Elementos gráficos (§6, §7, §19) ───────────────────────────────────
const tag = (id, x, y, label) =>
  `<g id="${id}">${rect("Borde", x, y, label.length * 9 + 28, 30, C.blanco, `rx="6" stroke="${C.gris100}"`)}${text("Texto", x + 14, y + 20, label, { size: 13, family: MONO, fill: C.gris700 })}</g>`;
const node = (id, x, y, tagLabel, title, items, hl = false) =>
  `<g id="${id}">${rect("Caja", x, y, 260, 150, C.blanco, `rx="8" stroke="${hl ? C.marino700 : C.gris400}" stroke-width="${hl ? 2 : 1.5}"`)}${text("Etiqueta", x + 18, y + 32, tagLabel, { size: 12, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}${text("Título", x + 18, y + 60, title, { size: 16, weight: 600 })}${text("Ítems", x + 18, y + 88, items, { size: 14, fill: C.gris700, lh: 1.5 })}</g>`;
board(
  "04-elementos.svg",
  1600,
  1500,
  "04 · Elementos gráficos",
  `
${rect("Fondo", 0, 0, 1600, 1500, C.papel)}
${text("Título", 80, 110, "Elementos gráficos", { size: 48, weight: 600, tracking: -0.02 })}
${text("E1", 80, 200, "Regla de medición · separador (§6.1)", { size: 14, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}
${ruler("Regla · separador", 80, 220, 1440)}
${text("E2", 80, 320, "Cota · antes / después", { size: 14, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}
<g id="Cota"><path id="Línea" d="M80 380H700M80 368V392M700 368V392" stroke="${C.gris400}" stroke-width="1.5" fill="none"/>${text("Valor", 390, 362, "más de 4 h → ~2 min", { size: 18, family: MONO, fill: C.tinta, anchor: "middle" })}</g>
${text("E3", 80, 470, "Etiquetas de stack (§6.3)", { size: 14, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}
${tag("Tag · Next.js", 80, 490, "Next.js")}${tag("Tag · PostgreSQL", 200, 490, "PostgreSQL")}${tag("Tag · GA4", 350, 490, "GA4")}
${text("E4", 80, 600, "Ficha de métrica", { size: 14, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}
<g id="Ficha de métrica">${rect("Línea", 80, 625, 2, 120, C.gris100)}${text("Cifra", 104, 690, "−35 %", { size: 56, weight: 600, family: MONO, fill: C.verde })}${text("Qué", 104, 722, "tiempo de procesamiento por pedido", { size: 18 })}${text("Contexto", 104, 745, "4 semanas antes vs. después", { size: 14, fill: C.gris500 })}</g>
${text("E5", 820, 470, "Botones (§19.1)", { size: 14, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}
<g id="Botón primario">${rect("Fondo", 820, 490, 210, 52, C.azul600, 'rx="10"')}${text("Texto", 925, 523, "Descargar CV", { size: 18, weight: 600, fill: C.blanco, anchor: "middle" })}</g>
<g id="Botón secundario">${rect("Fondo", 1050, 490, 210, 52, C.blanco, `rx="10" stroke="${C.gris400}"`)}${text("Texto", 1155, 523, "Ver proyectos", { size: 18, weight: 600, anchor: "middle" })}</g>
${text("E6", 820, 600, "Estado (ícono + texto)", { size: 14, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}
<g id="Estado · En producción">${rect("Borde", 820, 620, 170, 34, C.blanco, `rx="17" stroke="${C.gris100}"`)}<circle id="Ícono" cx="842" cy="637" r="7" fill="none" stroke="${C.gris700}" stroke-width="1.5"/>${text("Texto", 858, 643, "En producción", { size: 15, fill: C.gris700 })}</g>
${text("E7", 80, 860, "Nodos de diagrama (§8.1)", { size: 14, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}
${node("Nodo · Público", 80, 890, "Público", "Segmentación", ["Carrera, sede, facultad", "Periodo de egreso"])}
<path id="Flecha 1" d="M350 965H380M372 958L380 965L372 972" stroke="${C.gris500}" stroke-width="1.5" fill="none"/>
${node("Nodo · Control (destacado)", 390, 890, "Control", "Lista de exclusión", ["Bajas aplicadas siempre", "Ley 29733"], true)}
<path id="Flecha 2" d="M660 965H690M682 958L690 965L682 972" stroke="${C.gris500}" stroke-width="1.5" fill="none"/>
${node("Nodo · Envío", 700, 890, "Envío", "Lotes", ["Rotación de cuentas", "Registro de auditoría"])}
${text("E8", 80, 1130, "Retícula de puntos (§6.2)", { size: 14, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}
<g id="Muestra retícula" transform="translate(80 1150)">${rect("Fondo", 0, 0, 600, 260, C.marino900, 'rx="12"')}${dotGrid("Puntos", 600, 260)}</g>
${text("Nota íconos", 820, 1150, ["Íconos: Tabler Icons, contorno, trazo 1,5 px (§7).", "Plugin de Figma: «Tabler Icons»."], { size: 16, fill: C.gris500, lh: 1.6 })}
`,
);

// ── 05 · Banner LinkedIn 1584 × 396 (§12.9.3) ───────────────────────────────
board(
  "05-banner-linkedin.svg",
  1584,
  396,
  "Banner LinkedIn · 1584×396",
  `
${rect("Fondo", 0, 0, 1584, 396, C.marino900)}
${dotGrid("Retícula", 1584, 396, { opacity: 0.25 })}
<g id="Zona segura · foto de perfil (ocultar al exportar)" opacity="0.35">${rect("Zona", 0, 236, 380, 160, "none", `stroke="${C.marino300}" stroke-dasharray="6 6"`)}</g>
<g id="Contenido">
  ${text("Rol", 420, 128, ROLE, { size: 16, weight: 500, family: MONO, fill: C.marino100, upper: true, tracking: 0.06 })}
  ${text("Frase", 420, 180, wrap(TAGLINE, 60), { size: 30, weight: 600, fill: C.papel, lh: 1.3 })}
  ${ruler("Regla", 420, 262, 960, { color: C.marino500, stroke: 1 })}
</g>
${text("URL", 1536, 348, "sjaquer.is-a.dev", { size: 16, weight: 500, family: MONO, fill: C.marino300, anchor: "end" })}
`,
);

// ── 06 · Post LinkedIn 4:5 1080 × 1350 (§12.9.4) ────────────────────────────
function post(file, dark) {
  const bg = dark ? C.marino700 : C.papel,
    fg = dark ? C.papel : C.tinta,
    sub = dark ? C.marino100 : C.gris500;
  board(
    file,
    1080,
    1350,
    `Post 4:5 · ${dark ? "marino" : "papel"}`,
    `
${rect("Fondo", 0, 0, 1080, 1350, bg)}
<g id="Header">${text("Pilar", 80, 120, "Automatización", { size: 22, weight: 500, family: MONO, fill: sub, upper: true, tracking: 0.06 })}${monogram("Monograma", 960, 88, 40, dark ? { bg: C.papel, fg: C.marino700 } : {})}</g>
${text("Titular", 80, 300, ["Pedidos 35 % más", "rápidos en una", "hamburguesería"], { size: 72, weight: 600, fill: fg, lh: 1.05, tracking: -0.02 })}
<g id="Bloque de evidencia">
  ${text("Métrica", 80, 760, "−35 %", { size: 130, weight: 600, family: MONO, fill: dark ? C.verdeOsc : C.verde })}
  ${text("Contexto", 80, 830, ["tiempo por pedido · 4 semanas antes", "vs. después"], { size: 28, fill: sub, lh: 1.4 })}
</g>
<g id="Footer">${ruler("Regla", 80, 1170, 920, { color: dark ? C.marino300 : C.gris400, stroke: 2, short: 8, long: 16, step: 10 })}${text("Nombre", 80, 1250, "Sebastián Jaque", { size: 24, weight: 600, fill: fg })}${text("URL", 1000, 1250, "sjaquer.is-a.dev", { size: 22, weight: 500, family: MONO, fill: sub, anchor: "end" })}</g>
`,
  );
}
post("06-post-papel.svg", false);
post("07-post-marino.svg", true);

// ── 08 · Carrusel 5 láminas (§12.9.5) ───────────────────────────────────────
const slides = [
  [
    "Portada",
    "Automatización",
    ["Campañas de 8 000", "correos en 2 minutos"],
    "Cómo lo construí, en 5 láminas →",
  ],
  [
    "Paso 1",
    "1 · El problema",
    ["Envíos a mano", "y bajas que se perdían"],
    "Más de 4 h por campaña.",
  ],
  [
    "Paso 2",
    "2 · El control",
    ["Lista de exclusión", "antes de cada envío"],
    "Ley 29733, siempre.",
  ],
  ["Resultado", "Resultado", ["~2 min"], "por campaña de 8 000 destinatarios (antes, más de 4 h)"],
  [
    "Cierre",
    "Lo que aprendí",
    ["La velocidad era el", "síntoma; el problema", "era el control."],
    `Detalle en ${SITE}`,
  ],
];
let car = "";
slides.forEach(([name, label, title, foot], i) => {
  const ox = i * 1120;
  const metric = name === "Resultado";
  car += `<g id="Lámina ${i + 1} · ${name}" transform="translate(${ox} 0)">
  ${rect("Fondo", 0, 0, 1080, 1350, i === 0 ? C.marino700 : C.papel)}
  ${text("Pilar", 80, 120, label, { size: 22, weight: 500, family: MONO, fill: i === 0 ? C.marino100 : C.gris500, upper: true, tracking: 0.06 })}
  ${text("Paginación", 1000, 120, `${i + 1}/${slides.length}`, { size: 20, weight: 500, family: MONO, fill: i === 0 ? C.marino100 : C.gris500, anchor: "end" })}
  ${text("Titular", 80, metric ? 620 : 400, title, metric ? { size: 160, weight: 600, family: MONO, fill: C.verde } : { size: 72, weight: 600, fill: i === 0 ? C.papel : C.tinta, lh: 1.08, tracking: -0.02 })}
  ${text("Apoyo", 80, metric ? 700 : 760, foot, { size: 30, fill: i === 0 ? C.marino100 : C.gris500 })}
  ${ruler("Regla", 80, 1200, 920, { color: i === 0 ? C.marino300 : C.gris400, stroke: 2, short: 8, long: 16, step: 10 })}
  ${text("Firma", 80, 1270, "Sebastián Jaque · sjaquer.is-a.dev", { size: 22, weight: 500, family: MONO, fill: i === 0 ? C.marino100 : C.gris500 })}
</g>`;
});
board("08-carrusel.svg", slides.length * 1120 - 40, 1350, "Carrusel 4:5 · 5 láminas", car);

// ── 09 · Open Graph 1200 × 630 (§12.9.6) ────────────────────────────────────
board(
  "09-open-graph.svg",
  1200,
  630,
  "Open Graph · 1200×630",
  `
${rect("Fondo", 0, 0, 1200, 630, C.papel)}
<g id="Header">${text("Etiqueta", 64, 100, "Caso · Automatización · 2026", { size: 22, weight: 500, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}${monogram("Monograma", 1088, 64, 48)}</g>
${text("Titular", 64, 260, ["Campañas de 8 000 correos", "en 2 minutos, con baja automática"], { size: 52, weight: 600, lh: 1.1, tracking: -0.02 })}
${text("Descripción", 64, 410, "~2 min · por campaña de 8 000 destinatarios", { size: 26, fill: C.gris500 })}
<g id="Footer">${ruler("Regla", 64, 500, 1072)}${text("Nombre", 64, 560, "Sebastián Jaque", { size: 24, weight: 600 })}${text("URL", 1136, 560, "sjaquer.is-a.dev", { size: 24, weight: 500, family: MONO, fill: C.marino700, anchor: "end" })}</g>
`,
);

// ── 10 · Imágenes: avatar provisional y favicon (editables) ─────────────────
const avatar = readFileSync("public/brand/avatar-silhouette.svg", "utf8").replace(
  /<svg[^>]*>|<\/svg>/g,
  "",
);
const PORTRAIT = "public/img/retrato.webp";
const hasPortrait = existsSync(PORTRAIT);
board(
  "10-imagenes.svg",
  1600,
  1100,
  "10 · Imágenes y fondos",
  `
${rect("Fondo", 0, 0, 1600, 1100, C.papel)}
${text("Título", 80, 110, "Imágenes y fondos", { size: 48, weight: 600, tracking: -0.02 })}
${
  hasPortrait
    ? `<g id="Retrato (§10.2) · public/img/retrato"><rect id="Marco" x="80" y="160" width="640" height="800" rx="16" fill="${C.marino50}"/><image id="Foto" x="80" y="160" width="640" height="800" preserveAspectRatio="xMidYMid slice" href="${embed(PORTRAIT)}"/></g>`
    : `<g id="Avatar provisional (§10.6) · reemplazar por foto" transform="translate(80 160) scale(0.85)">${avatar}</g>`
}
<g id="Marco de captura (§6.5)" transform="translate(860 160)">
  ${rect("Marco", 0, 0, 660, 420, C.gris50, `rx="16" stroke="${C.gris100}"`)}
  ${rect("Barra navegador", 24, 24, 612, 32, C.blanco, 'rx="8"')}
  <circle cx="44" cy="40" r="5" fill="${C.gris100}"/><circle cx="62" cy="40" r="5" fill="${C.gris100}"/><circle cx="80" cy="40" r="5" fill="${C.gris100}"/>
  ${rect("Captura (pegar imagen aquí, datos simulados)", 24, 64, 612, 332, C.blanco, `rx="8"`)}
  ${text("Instrucción", 330, 238, "Captura con datos simulados", { size: 18, fill: C.gris500, anchor: "middle" })}
</g>
<g id="Fondo banner · marino + retícula" transform="translate(860 640)">${rect("Fondo", 0, 0, 660, 300, C.marino900, 'rx="12"')}${dotGrid("Retícula", 660, 300, { opacity: 0.25 })}</g>
`,
);

// ── 11 · Artículo de caso para compartir 1200 × 630 (formato CaseArticle) ───
const COVER = "public/img/casos/difusion-correo-wiener.webp";
board(
  "11-articulo-caso.svg",
  1200,
  630,
  "Artículo de caso · 1200×630",
  `
${rect("Fondo", 0, 0, 1200, 630, C.papel)}
<g id="Imagen del caso (16:9) · reemplazar">
  ${rect("Marco", 48, 48, 560, 534, C.marino50, 'rx="16"')}
  ${existsSync(COVER) ? `<image id="Foto" x="48" y="48" width="560" height="534" preserveAspectRatio="xMidYMid slice" href="${embed(COVER)}"/>` : ""}
</g>
<g id="Texto">
  ${text("Antetítulo", 648, 110, "Automatización · 2026 · 2 min de lectura", { size: 16, weight: 500, family: MONO, fill: C.gris500, upper: true, tracking: 0.06 })}
  ${text("Titular", 648, 176, ["Campañas de 8 000", "correos en 2 minutos,", "con baja automática"], { size: 44, weight: 600, lh: 1.12, tracking: -0.02 })}
  ${text("Métrica", 648, 380, "~2 min", { size: 40, weight: 600, family: MONO, fill: C.verde })}
  ${text("Contexto", 648, 416, ["por campaña de 8 000 destinatarios", "(antes, más de 4 h)"], { size: 20, fill: C.gris500, lh: 1.4 })}
  ${text("Leer", 648, 500, "Leer el caso →", { size: 20, weight: 600, fill: C.azul600 })}
</g>
<g id="Pie">${monogram("Monograma", 648, 530, 40)}${text("URL", 1152, 558, SITE, { size: 18, weight: 500, family: MONO, fill: C.marino700, anchor: "end" })}</g>
`,
);
