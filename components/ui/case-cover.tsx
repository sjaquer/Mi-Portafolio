import type { CaseStudy } from "@/content/casos";

/**
 * Portada generada del caso (03-DESIGN.md §6.8): fondo tonal + retícula + 3 nodos del
 * diagrama, con el que construí destacado. SVG en línea, decorativo.
 */
export function CaseCover({ c }: { c: CaseStudy }) {
  const [a, b, d] = c.cover;
  const id = `dots-${c.slug}`;
  const node = (x: number, label: string, highlight: boolean) => (
    <g>
      <rect
        x={x}
        y={62}
        width={104}
        height={56}
        rx={8}
        className={highlight ? "fill-surface stroke-brand" : "fill-surface stroke-border-strong"}
        strokeWidth={highlight ? 2 : 1.25}
      />
      <text
        x={x + 52}
        y={95}
        textAnchor="middle"
        className="fill-ink-900"
        style={{ font: "500 12px var(--font-jetbrains-mono), monospace" }}
      >
        {label}
      </text>
    </g>
  );
  return (
    <svg viewBox="0 0 400 180" aria-hidden focusable="false" className="block w-full">
      <defs>
        <pattern id={id} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" className="fill-border-strong" opacity="0.45" />
        </pattern>
      </defs>
      <rect width="400" height="180" className="fill-brand-50" />
      <rect width="400" height="180" fill={`url(#${id})`} />
      <g className="stroke-ink-500" strokeWidth="1.25" fill="none">
        <path d="M128 90H144M138 85L144 90L138 95" />
        <path d="M256 90H272M266 85L272 90L266 95" />
      </g>
      {node(20, a, false)}
      {node(148, b, true)}
      {node(276, d, false)}
    </svg>
  );
}
