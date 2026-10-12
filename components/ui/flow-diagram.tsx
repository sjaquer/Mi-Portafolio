import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";
import { Fragment } from "react";

interface Step {
  tag: string;
  title: string;
  items?: string[];
  /** El componente que construí o que cambió (§8.1): máximo uno o dos. */
  highlight?: boolean;
}

/**
 * Diagrama de flujo o arquitectura en HTML (§8.1): nodos con etiqueta mono,
 * lectura de izquierda a derecha en escritorio y de arriba abajo en móvil.
 * Al ser HTML, el texto es legible a cualquier ancho y accesible.
 */
export function FlowDiagram({ label, steps }: { label: string; steps: Step[] }) {
  return (
    <figure className="@container my-7">
      <ol aria-label={label} className="flex flex-col items-stretch gap-2 @4xl:flex-row">
        {steps.map((step, i) => (
          <Fragment key={step.title}>
            <li
              className={`flex flex-1 flex-col gap-2 rounded-md bg-surface p-4 ${
                step.highlight ? "border-2 border-brand" : "border border-border-strong"
              }`}
            >
              <span className="text-label-mono text-ink-500">{step.tag}</span>
              <span className="text-small font-semibold text-ink-900">{step.title}</span>
              {step.items && (
                <ul className="flex flex-col gap-1 text-small text-ink-700">
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
            {i < steps.length - 1 && (
              <li aria-hidden className="flex items-center justify-center text-ink-500">
                <IconArrowDown size={20} stroke={1.5} className="@4xl:hidden" />
                <IconArrowRight size={20} stroke={1.5} className="hidden @4xl:block" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
      <figcaption className="mt-3 text-label-mono text-ink-500">{label}</figcaption>
    </figure>
  );
}
