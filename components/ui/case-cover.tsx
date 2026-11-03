import { Dimension, FigConnector, FigNode, FigureFrame, step } from "@/components/brand/figure";
import { caseTypeTone, toneSvg, type CaseStudy, type CaseType } from "@/content/casos";
import { isMeasured } from "@/content/profile";

const W = 640;
const NW = 124;
const NH = 64;
const GAP = 28;
const ROW = [104, 168];
const COTA_Y = 300;

/** Ícono simple por tipo de caso (v4.2), en el color del caso. Decorativo. */
function TypeIcon({ type, className }: { type: CaseType; className: string }) {
  const g = {
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (type === "web")
    return (
      <g className={className} {...g}>
        <rect x={560} y={28} width={48} height={36} rx={6} />
        <path d="M560 40h48M568 34h.5M574 34h.5M580 34h.5" />
      </g>
    );
  if (type === "automatizacion")
    return (
      <g className={className} {...g}>
        <path d="M588 26l-16 22h14l-2 16 16-22h-14z" />
      </g>
    );
  // datos: tres barras ascendentes
  return (
    <g className={className} {...g}>
      <path d="M566 62V50M582 62V40M598 62V30" strokeWidth={4} />
    </g>
  );
}

interface CoverProps {
  c: CaseStudy;
  /** En la página del caso la figura se anuncia; en tarjetas es decorativa. */
  labelled?: boolean;
  className?: string;
}

const ariaLabel = (c: CaseStudy) =>
  `Diagrama: ${c.cover.label}. ${c.cover.nodes.map((nd) => nd.title).join(" → ")}.`;

/**
 * Portada de un caso como plano de su flujo real (03-DESIGN.md §6.8, v4.2).
 * Dos composiciones del mismo plano (v4.3): la horizontal en escalera desde 640 px y una
 * cuadrada para el celular, con los nodos en Z (2 × 2) a escala casi 1:1. Antes la
 * horizontal se encogía al 56 % y sus etiquetas quedaban en ~7 px, ilegibles.
 */
export function CaseCover({ c, labelled = false, className = "" }: CoverProps) {
  return (
    <div className={className}>
      <MobileCover c={c} labelled={labelled} className="aspect-square sm:hidden" />
      <WideCover c={c} labelled={labelled} className="hidden aspect-video sm:block" />
    </div>
  );
}

/* ── Celular: 360 × 360, nodos en Z ─────────────────────────────────────── */
const M = { W: 360, PAD: 20, NW: 150, NH: 60, ROWS: [88, 196], COTA_Y: 322 };

function MobileCover({ c, labelled, className }: CoverProps) {
  const { label, nodes, highlight } = c.cover;
  const col = (i: number) => M.PAD + (i % 2) * (M.NW + (M.W - 2 * M.PAD - 2 * M.NW));
  const row = (i: number) => M.ROWS[Math.floor(i / 2)];
  const measured = isMeasured(c.result);
  const sv = toneSvg[caseTypeTone[c.type]];
  const xEnd = M.W - M.PAD;

  // Conectores en orden de lectura: → en la fila, y de la fila 1 a la 2 un codo hacia abajo.
  const connectors = nodes.slice(0, -1).map((_, i) => {
    const sameRow = Math.floor(i / 2) === Math.floor((i + 1) / 2);
    if (sameRow) {
      const y = row(i) + M.NH / 2;
      const x2 = col(i + 1) - 2;
      return { d: `M${col(i) + M.NW} ${y}H${x2}`, head: { x: x2, y } };
    }
    const xa = col(i) + M.NW / 2;
    const xb = col(i + 1) + M.NW / 2;
    const ya = row(i) + M.NH;
    const yb = row(i + 1) - 2;
    const ym = ya + 22;
    return { d: `M${xa} ${ya}V${ym}H${xb}V${yb}`, head: { x: xb, y: yb, dir: "down" as const } };
  });

  return (
    <FigureFrame
      viewBox={`0 0 ${M.W} ${M.W}`}
      label={labelled ? ariaLabel(c) : undefined}
      className={className}
    >
      <text
        x={M.PAD}
        y={36}
        className="fill-ink-500 font-mono uppercase"
        fontSize={11}
        fontWeight={500}
        letterSpacing="0.06em"
      >
        {label}
      </text>
      <g transform="translate(-264 -6)">
        <TypeIcon type={c.type} className={sv.stroke} />
      </g>

      {connectors.map((k, i) => (
        <FigConnector key={i} d={k.d} head={k.head} i={i + 1} pulseClass={sv.stroke} />
      ))}

      {nodes.map((nd, i) => (
        <FigNode
          key={nd.title}
          x={col(i)}
          y={row(i)}
          w={M.NW}
          h={M.NH}
          highlight={i === highlight}
          accentStroke={sv.stroke}
          i={i}
        >
          <text
            x={col(i) + 14}
            y={row(i) + 24}
            className="fill-ink-500 font-mono uppercase"
            fontSize={10.5}
            fontWeight={500}
            letterSpacing="0.06em"
          >
            {nd.tag}
          </text>
          <text
            x={col(i) + 14}
            y={row(i) + 46}
            className="fill-ink-900 font-sans"
            fontSize={15}
            fontWeight={600}
          >
            {nd.title}
          </text>
        </FigNode>
      ))}

      <Dimension x1={M.PAD} x2={xEnd} y={M.COTA_Y} i={nodes.length} />
      <g className="fig-fade font-mono" style={step(nodes.length + 1)}>
        {c.result.before && (
          <text x={M.PAD} y={M.COTA_Y - 18} className="fill-ink-500" fontSize={17} fontWeight={500}>
            {c.result.before}
          </text>
        )}
        <text
          x={xEnd}
          y={M.COTA_Y - 18}
          textAnchor="end"
          className={measured ? "fill-success-700" : "fill-ink-900"}
          fontSize={28}
          fontWeight={600}
          letterSpacing="-0.02em"
        >
          {c.result.value}
        </text>
      </g>
    </FigureFrame>
  );
}

/* ── Desde 640 px: 640 × 360, nodos en escalera ────────────────────────── */
function WideCover({ c, labelled, className = "" }: CoverProps) {
  const { label, nodes, highlight } = c.cover;
  const n = nodes.length;
  const x0 = (W - (n * NW + (n - 1) * GAP)) / 2;
  const x = (i: number) => x0 + i * (NW + GAP);
  const y = (i: number) => ROW[i % 2];
  const xEnd = x(n - 1) + NW;
  const measured = isMeasured(c.result);
  const sv = toneSvg[caseTypeTone[c.type]];
  const bars = [26, 40, 32, 52];

  return (
    <FigureFrame
      viewBox={`0 0 ${W} 360`}
      label={labelled ? ariaLabel(c) : undefined}
      className={className}
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
      <TypeIcon type={c.type} className={sv.stroke} />

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
            pulseClass={sv.stroke}
          />
        );
      })}

      {nodes.map((nd, i) => (
        <FigNode
          key={nd.title}
          x={x(i)}
          y={y(i)}
          w={NW}
          h={NH}
          highlight={i === highlight}
          accentStroke={sv.stroke}
          i={i}
        >
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

      {/* Mini gráfico de barras del resultado (v4.2), en el color del caso. */}
      <g aria-hidden>
        {bars.map((h, i) => (
          <rect
            key={i}
            x={x0 + i * 26}
            y={COTA_Y - 44 - h}
            width={18}
            height={h}
            rx={3}
            className={`fig-fade ${i === bars.length - 1 ? sv.fill : sv.soft}`}
            style={step(n + 0.5 + i * 0.5)}
          />
        ))}
      </g>

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
