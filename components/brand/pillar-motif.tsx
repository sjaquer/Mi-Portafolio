import type { ReactNode } from "react";
import {
  Dimension,
  FigConnector,
  FigNode,
  FigureFrame,
  Seal,
  step,
} from "@/components/brand/figure";
import type { Pillar } from "@/content/notas";

const W = 640;
const H = 240;

/**
 * Motivo gráfico de cada pilar de contenido (03-DESIGN.md §12.2): la misma figura identifica
 * al pilar en la web, la imagen OG y las piezas de LinkedIn. Abstracto, sin texto; solo
 * neutros + marino, el destacado con el sello de 3 marcas. Decorativo.
 */
export function PillarMotif({ pillar, className = "" }: { pillar: Pillar; className?: string }) {
  return (
    <FigureFrame viewBox={`0 0 ${W} ${H}`} className={`aspect-8/3 ${className}`}>
      {motifs[pillar]}
    </FigureFrame>
  );
}

/** Construyendo: arquitectura de 3 capas, la del medio (lo que construí) destacada, con cota. */
const construyendo = (
  <>
    {[0, 1].map((i) => (
      <FigConnector
        key={i}
        d={`M320 ${70 + i * 60}V${86 + i * 60}`}
        head={{ x: 320, y: 86 + i * 60, dir: "down" }}
        i={i + 1}
      />
    ))}
    {[0, 1, 2].map((i) => (
      <FigNode key={i} x={200} y={28 + i * 60} w={240} h={40} highlight={i === 1} i={i}>
        <path
          d={`M220 ${48 + i * 60}h${i === 1 ? 96 : 64}`}
          className="stroke-border-strong"
          strokeWidth={6}
          strokeLinecap="round"
        />
      </FigNode>
    ))}
    <g transform="rotate(90 480 108)">
      <Dimension x1={400} x2={560} y={108} i={3} />
    </g>
  </>
);

/** Automatización: disparador → pasos → resultado, en una línea con pulso. */
const centers = [96, 232, 368, 504];
const half = [30, 48, 48, 30];
const pymes = (
  <>
    {[0, 1, 2].map((i) => {
      const x1 = centers[i] + half[i] + 2;
      const x2 = centers[i + 1] - half[i + 1] - 4;
      return <FigConnector key={i} d={`M${x1} 120H${x2}`} head={{ x: x2, y: 120 }} i={i + 1} />;
    })}
    <g className="fig-fade" style={step(0)}>
      <circle
        cx={96}
        cy={120}
        r={30}
        className="fill-surface stroke-border-strong"
        strokeWidth={1.5}
      />
      <path d="M90 106l14 14-14 14" className="stroke-ink-500" strokeWidth={1.5} fill="none" />
    </g>
    {[1, 2].map((i) => (
      <FigNode key={i} x={centers[i] - 48} y={92} w={96} h={56} highlight={i === 1} i={i} />
    ))}
    <g className="fig-fade" style={step(3)}>
      <circle cx={504} cy={120} r={30} className="fill-surface stroke-brand" strokeWidth={2} />
      <path d="M491 120l9 9 17-17" className="stroke-brand" strokeWidth={2} fill="none" />
    </g>
  </>
);

/** Medición: barras en gris + una en marino (estrategia "gris + un acento", §9.1) sobre una regla. */
const bars = [56, 88, 72, 120, 104, 148, 132];
const medicion = (
  <>
    {bars.map((h, i) => (
      <rect
        key={i}
        x={140 + i * 52}
        y={184 - h}
        width={32}
        height={h}
        rx={4}
        className={`fig-fade ${i === 5 ? "fill-brand" : "fill-border-strong opacity-40"}`}
        style={step(i * 0.5)}
      />
    ))}
    <Seal x={146 + 5 * 52} y={184 - 148 - 18} />
    <path d="M120 192H520" pathLength={1} className="fig-draw stroke-ink-500" strokeWidth={1.5} />
    <path
      d={Array.from({ length: 21 }, (_, i) => `M${120 + i * 20} 192v${i % 5 === 0 ? 12 : 6}`).join(
        "",
      )}
      className="fig-fade stroke-border-strong"
      strokeWidth={1.5}
      style={step(2)}
    />
  </>
);

/** Herramientas e IA: texto desordenado → modelo → datos en filas (extraer y estructurar). */
const herramientas = (
  <>
    <FigNode x={72} y={48} w={136} h={144} i={0}>
      {[0, 1, 2, 3, 4, 5].map((r) => (
        <path
          key={r}
          d={`M92 ${76 + r * 18}h${[96, 72, 88, 56, 92, 64][r]}`}
          className="stroke-border-strong"
          strokeWidth={4}
          strokeLinecap="round"
        />
      ))}
    </FigNode>
    <FigConnector d="M208 120H266" head={{ x: 266, y: 120 }} i={1} />
    <FigNode x={272} y={92} w={96} h={56} highlight i={1}>
      <circle cx={320} cy={120} r={10} className="fill-none stroke-brand" strokeWidth={2} />
    </FigNode>
    <FigConnector d="M368 120H426" head={{ x: 426, y: 120 }} i={2} />
    <FigNode x={432} y={48} w={136} h={144} i={3}>
      {[0, 1, 2, 3].map((r) => (
        <g key={r}>
          {r < 3 && (
            <path d={`M432 ${84 + r * 36}H568`} className="stroke-border" strokeWidth={1.5} />
          )}
          <path
            d={`M448 ${68 + r * 36}h32M496 ${68 + r * 36}h${[56, 40, 52, 44][r]}`}
            className="stroke-border-strong"
            strokeWidth={4}
            strokeLinecap="round"
          />
        </g>
      ))}
    </FigNode>
  </>
);

const motifs: Record<Pillar, ReactNode> = {
  construyendo,
  pymes,
  medicion,
  herramientas,
};
