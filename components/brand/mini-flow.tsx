import { FigConnector, FigNode } from "@/components/brand/figure";

const NW = 84;
const GAP = 24;
const Y = 14;
const NH = 36;

/**
 * Flujo mínimo de 3 pasos (03-DESIGN.md §8.1, §11.2): ancla visual de cada servicio.
 * El paso central es el que construyo; un pulso recorre el flujo al entrar en pantalla.
 * Decorativo: el texto del servicio lo explica.
 */
export function MiniFlow({ steps }: { steps: readonly [string, string, string] }) {
  const x = (i: number) => 1 + i * (NW + GAP);
  return (
    <svg
      viewBox={`0 0 ${x(2) + NW + 1} 64`}
      aria-hidden
      focusable="false"
      className="fig block h-auto w-full"
    >
      {[0, 1].map((i) => (
        <FigConnector
          key={i}
          d={`M${x(i) + NW} ${Y + NH / 2}H${x(i + 1) - 2}`}
          head={{ x: x(i + 1) - 2, y: Y + NH / 2 }}
          i={i + 1}
        />
      ))}
      {steps.map((s, i) => (
        <FigNode key={s} x={x(i)} y={Y} w={NW} h={NH} highlight={i === 1} i={i}>
          <text
            x={x(i) + NW / 2}
            y={Y + NH / 2 + 4}
            textAnchor="middle"
            className="fill-ink-900 font-mono uppercase"
            fontSize={11}
            fontWeight={500}
            letterSpacing="0.06em"
          >
            {s}
          </text>
        </FigNode>
      ))}
    </svg>
  );
}
