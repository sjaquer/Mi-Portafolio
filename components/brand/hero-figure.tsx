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

const STEPS = [
  { tag: "Descubro", title: "El problema" },
  { tag: "Construyo", title: "La solución" },
  { tag: "Mido", title: "El impacto" },
] as const;

/**
 * Versión compacta y horizontal para móvil: el hero no se queda sin ancla visual
 * (§14.6). Mismo lenguaje que `HeroFigure`, sin sello para que el trazo respire a
 * tamaño pequeño.
 */
export function HeroSteps({ className = "" }: { className?: string }) {
  const nw = 94;
  const nh = 54;
  const gap = 18;
  const y = 6;
  const x = (i: number) => i * (nw + gap);
  return (
    <svg
      viewBox={`0 0 ${x(2) + nw} 66`}
      className={`fig block h-auto w-full ${className}`}
      aria-hidden
      focusable="false"
    >
      {[0, 1].map((i) => (
        <FigConnector
          key={i}
          d={`M${x(i) + nw} ${y + nh / 2}H${x(i + 1) - 2}`}
          head={{ x: x(i + 1) - 2, y: y + nh / 2 }}
          i={i + 1}
        />
      ))}
      {STEPS.map((s, i) => (
        <FigNode key={s.title} x={x(i)} y={y} w={nw} h={nh} highlight={i === 1} seal={false} i={i}>
          <text
            x={x(i) + 12}
            y={y + 22}
            className="fill-ink-500 font-mono uppercase"
            fontSize={9}
            fontWeight={500}
            letterSpacing="0.06em"
          >
            {s.tag}
          </text>
          <text
            x={x(i) + 12}
            y={y + 41}
            className="fill-ink-900 font-sans"
            fontSize={13}
            fontWeight={600}
          >
            {s.title}
          </text>
        </FigNode>
      ))}
    </svg>
  );
}

export function HeroFigure({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      className={`fig fig-load block h-auto w-full ${className}`}
      aria-hidden
      focusable="false"
    >
      {/* Monograma: origen del flujo, centrado sobre la columna de nodos (§6.9). */}
      <g className="fig-fade">
        <rect x={CX - 28} y={2} width={56} height={56} rx={14} className="fill-brand" />
        <text
          x={CX}
          y={40}
          textAnchor="middle"
          className="fill-bg font-mono lowercase"
          fontSize={26}
          fontWeight={700}
        >
          sj
        </text>
        <path d={`M${CX - 18} 48h36`} className="stroke-bg" strokeWidth={2} strokeLinecap="round" />
      </g>

      {/* El monograma entra al flujo: "yo" → descubro. */}
      <FigConnector
        d={`M${CX} 58V${YS[0] - 2}`}
        head={{ x: CX, y: YS[0] - 2, dir: "down" }}
        i={0}
      />

      {/* Conectores verticales entre nodos */}
      {[0, 1].map((i) => (
        <FigConnector
          key={i}
          d={`M${CX} ${YS[i] + NH}V${YS[i + 1] - 2}`}
          head={{ x: CX, y: YS[i + 1] - 2, dir: "down" }}
          i={i + 1}
        />
      ))}

      {/* Señal continua: un punto recorre el conducto por detrás de los nodos,
          visible solo en los tramos entre ellos (datos pasando por el proceso). */}
      <path
        d={`M${CX} 58V272`}
        pathLength={1}
        className="fig-signal stroke-accent-600"
        strokeWidth={6}
        strokeLinecap="round"
        fill="none"
      />

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
            className={`bar-grow ${i === bars.length - 1 ? "fill-success-700" : "fill-border-strong opacity-40"}`}
            style={step(i)}
          />
        ))}
      </g>
    </svg>
  );
}
