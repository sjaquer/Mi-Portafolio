import { FigConnector, FigNode, step } from "@/components/brand/figure";

/**
 * Composición de marca del hero (03-DESIGN.md §6.9, §10.6 v4.2): reemplaza al retrato.
 * Monograma + el flujo de trabajo en tres nodos —descubrir, construir, medir— con el
 * nodo central (lo que construyo) sellado, y una mini barra de impacto. Decorativa:
 * el texto del hero la explica. Entra con el hero (`hero-in`) y se traza al cargar.
 */
const nodes = [
  { tag: "Descubro", title: "El problema" },
  { tag: "Construyo", title: "La solución" },
  { tag: "Mido", title: "El impacto" },
];

const NX = 12;
const NW = 208;
const NH = 56;
const YS = [84, 164, 244];
const CX = NX + NW / 2;
const bars = [20, 34, 26, 46];

export function HeroFigure({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      className={`fig block h-auto w-full ${className}`}
      aria-hidden
      focusable="false"
    >
      {/* Monograma, arriba a la derecha */}
      <g className="fig-fade">
        <rect x={248} y={4} width={56} height={56} rx={14} className="fill-brand" />
        <text
          x={276}
          y={42}
          textAnchor="middle"
          className="fill-bg font-mono lowercase"
          fontSize={26}
          fontWeight={700}
        >
          sj
        </text>
        <path d="M258 50h36" className="stroke-bg" strokeWidth={2} strokeLinecap="round" />
      </g>

      {/* Conectores verticales entre nodos */}
      {[0, 1].map((i) => (
        <FigConnector
          key={i}
          d={`M${CX} ${YS[i] + NH}V${YS[i + 1] - 2}`}
          head={{ x: CX, y: YS[i + 1] - 2, dir: "down" }}
          i={i + 1}
        />
      ))}

      {/* Tres nodos: el central es lo que construyo */}
      {nodes.map((nd, i) => (
        <FigNode key={nd.title} x={NX} y={YS[i]} w={NW} h={NH} highlight={i === 1} i={i}>
          <text
            x={NX + 16}
            y={YS[i] + 24}
            className="fill-ink-500 font-mono uppercase"
            fontSize={11}
            fontWeight={500}
            letterSpacing="0.06em"
          >
            {nd.tag}
          </text>
          <text
            x={NX + 16}
            y={YS[i] + 46}
            className="fill-ink-900 font-sans"
            fontSize={16}
            fontWeight={600}
          >
            {nd.title}
          </text>
        </FigNode>
      ))}

      {/* Mini barra de impacto, junto al nodo de medición */}
      <g aria-hidden>
        {bars.map((h, i) => (
          <rect
            key={i}
            x={236 + i * 20}
            y={300 - h}
            width={13}
            height={h}
            rx={3}
            className={`fig-fade ${i === bars.length - 1 ? "fill-success-700" : "fill-border-strong opacity-40"}`}
            style={step(2 + i * 0.5)}
          />
        ))}
      </g>
    </svg>
  );
}
