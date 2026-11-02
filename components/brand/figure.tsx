import type { CSSProperties, ReactNode } from "react";

/**
 * Primitivas de las figuras SVG de marca (03-DESIGN.md §8 y §11.2): planos con nodos,
 * conectores ortogonales y cotas. Solo tokens (clases fill-/stroke-), así funcionan en
 * claro, oscuro y dentro de la banda invertida. La animación es CSS (globals.css, `.fig-*`).
 */

/** Escalonado de la animación: cada pieza entra `i` pasos después de la primera. */
export const step = (i: number) => ({ "--i": i }) as CSSProperties;

interface FrameProps {
  viewBox: string;
  /** Con etiqueta, la figura se anuncia como imagen; sin ella es decorativa. */
  label?: string;
  className?: string;
  children: ReactNode;
}

/** Lienzo de la figura (v4.2): fondo tonal plano, sin retícula (§6.7). El SVG encima. */
export function FigureFrame({ viewBox, label, className = "", children }: FrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-border bg-surface-muted ${className}`}
    >
      <svg
        viewBox={viewBox}
        className="fig media-zoom relative block h-full w-full"
        {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
        focusable="false"
      >
        {children}
      </svg>
    </div>
  );
}

interface NodeProps {
  x: number;
  y: number;
  w: number;
  h: number;
  /** El componente que construí o que cambió (§8.1). */
  highlight?: boolean;
  i?: number;
  /** Clase de trazo del destacado (color del caso, v4.2). Por defecto marino. */
  accentStroke?: string;
  children?: ReactNode;
}

/** Nodo de diagrama: rectángulo de radio 8 con borde de 1,5 (2 si es el destacado). */
export function FigNode({
  x,
  y,
  w,
  h,
  highlight,
  i = 0,
  accentStroke = "stroke-brand",
  children,
}: NodeProps) {
  return (
    <g className="fig-fade" style={step(i)}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        className={`fill-surface ${highlight ? accentStroke : "stroke-border-strong"}`}
        strokeWidth={highlight ? 2 : 1.5}
      />
      {highlight && <Seal x={x + 12} y={y - 14} className={accentStroke} />}
      {children}
    </g>
  );
}

/** Sello: las 3 marcas del monograma (§6.1) sobre el nodo destacado. */
export function Seal({ x, y, className = "stroke-brand" }: { x: number; y: number; className?: string }) {
  return (
    <path
      d={`M${x} ${y}v8M${x + 6} ${y + 2}v6M${x + 12} ${y + 2}v6`}
      className={className}
      strokeWidth={2}
      strokeLinecap="round"
    />
  );
}

interface ConnectorProps {
  d: string;
  /** Punta de flecha en (x, y) apuntando a la derecha o hacia abajo. */
  head?: { x: number; y: number; dir?: "right" | "down" };
  i?: number;
  /** Un punto recorre el conector una vez (§11.2). */
  pulse?: boolean;
  /** Clase de trazo del pulso (color del caso, v4.2). Por defecto marino. */
  pulseClass?: string;
}

/** Conector de 1,5 px que se traza al entrar en pantalla, con punta simple y pulso opcional. */
export function FigConnector({ d, head, i = 0, pulse = true, pulseClass = "stroke-brand" }: ConnectorProps) {
  const tip =
    head &&
    (head.dir === "down"
      ? `M${head.x - 4} ${head.y - 6}L${head.x} ${head.y}L${head.x + 4} ${head.y - 6}`
      : `M${head.x - 6} ${head.y - 4}L${head.x} ${head.y}L${head.x - 6} ${head.y + 4}`);
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d={d}
        pathLength={1}
        className="fig-draw stroke-ink-500"
        strokeWidth={1.5}
        style={step(i)}
      />
      {tip && (
        <path d={tip} className="fig-fade stroke-ink-500" strokeWidth={1.5} style={step(i + 1)} />
      )}
      {pulse && (
        <path
          d={d}
          pathLength={1}
          className={`fig-pulse ${pulseClass}`}
          strokeWidth={4}
          style={step(i)}
        />
      )}
    </g>
  );
}

interface DimensionProps {
  x1: number;
  x2: number;
  y: number;
  i?: number;
}

/** Cota de plano (§6.1): línea con topes en los extremos, como "de X a Y". */
export function Dimension({ x1, x2, y, i = 0 }: DimensionProps) {
  return (
    <g fill="none" className="stroke-border-strong" strokeWidth={1.5} strokeLinecap="round">
      <path d={`M${x1} ${y - 8}v16M${x2} ${y - 8}v16`} className="fig-fade" style={step(i)} />
      <path d={`M${x1} ${y}H${x2}`} pathLength={1} className="fig-draw" style={step(i)} />
    </g>
  );
}
