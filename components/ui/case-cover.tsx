import { Dimension, FigConnector, FigNode, FigureFrame, step } from "@/components/brand/figure";
import type { CaseStudy } from "@/content/casos";
import { isMeasured } from "@/content/profile";

const W = 640;
const NW = 124;
const NH = 64;
const GAP = 28;
const ROW = [104, 168];
const COTA_Y = 300;

/**
 * Portada de un caso como plano de su flujo real (03-DESIGN.md §6.8 v4.0): 3–4 nodos en
 * escalera, el que construí destacado con el sello, y una cota con el resultado al pie.
 * Se traza al entrar en pantalla (§11.2). Reemplaza a las imágenes generadas.
 */
export function CaseCover({
  c,
  labelled = false,
  className = "",
}: {
  c: CaseStudy;
  /** En la página del caso la figura se anuncia; en tarjetas es decorativa. */
  labelled?: boolean;
  className?: string;
}) {
  const { label, nodes, highlight } = c.cover;
  const n = nodes.length;
  const x0 = (W - (n * NW + (n - 1) * GAP)) / 2;
  const x = (i: number) => x0 + i * (NW + GAP);
  const y = (i: number) => ROW[i % 2];
  const xEnd = x(n - 1) + NW;
  const measured = isMeasured(c.result);

  return (
    <FigureFrame
      viewBox={`0 0 ${W} 360`}
      label={
        labelled ? `Diagrama: ${label}. ${nodes.map((nd) => nd.title).join(" → ")}.` : undefined
      }
      className={`aspect-video ${className}`}
    >
      <text
        x={x0}
        y={52}
        className="fill-ink-500 font-mono uppercase"
        fontSize={13}
        fontWeight={500}
        letterSpacing="0.06em"
      >
        {label}
      </text>

      {nodes.slice(0, -1).map((_, i) => {
        const x1 = x(i) + NW;
        const y1 = y(i) + NH / 2;
        const x2 = x(i + 1);
        const y2 = y(i + 1) + NH / 2;
        const xm = x1 + GAP / 2;
        return (
          <FigConnector
            key={i}
            d={`M${x1} ${y1}H${xm}V${y2}H${x2 - 2}`}
            head={{ x: x2 - 2, y: y2 }}
            i={i + 1}
          />
        );
      })}

      {nodes.map((nd, i) => (
        <FigNode key={nd.title} x={x(i)} y={y(i)} w={NW} h={NH} highlight={i === highlight} i={i}>
          <text
            x={x(i) + 12}
            y={y(i) + 24}
            className="fill-ink-500 font-mono uppercase"
            fontSize={11}
            fontWeight={500}
            letterSpacing="0.06em"
          >
            {nd.tag}
          </text>
          <text
            x={x(i) + 12}
            y={y(i) + 47}
            className="fill-ink-900 font-sans"
            fontSize={15}
            fontWeight={600}
          >
            {nd.title}
          </text>
        </FigNode>
      ))}

      <Dimension x1={x0} x2={xEnd} y={COTA_Y} i={n} />
      <g className="fig-fade font-mono" style={step(n + 1)}>
        {c.result.before && (
          <text x={x0} y={COTA_Y - 18} className="fill-ink-500" fontSize={18} fontWeight={500}>
            {c.result.before}
          </text>
        )}
        <text
          x={xEnd}
          y={COTA_Y - 18}
          textAnchor="end"
          className={measured ? "fill-success-700" : "fill-ink-900"}
          fontSize={24}
          fontWeight={600}
        >
          {c.result.value}
        </text>
      </g>
    </FigureFrame>
  );
}
