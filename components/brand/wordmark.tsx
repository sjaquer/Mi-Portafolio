import { monogramPath, wordmarkPath } from "@/components/brand/paths";

interface Props {
  className?: string;
  /** false si el texto ya está presente al lado (evita lectura doble). */
  labelled?: boolean;
}

/** Wordmark principal (03-DESIGN.md §3.1). Hereda el color con currentColor. */
export function Wordmark({ className, labelled = true }: Props) {
  return (
    <svg
      viewBox={wordmarkPath.viewBox}
      className={className}
      fill="currentColor"
      {...(labelled ? { role: "img", "aria-label": "Sebastián Jaque" } : { "aria-hidden": true })}
    >
      <path d={wordmarkPath.d} />
    </svg>
  );
}

/** Monograma `sj` con la marca de medición (§3.2). */
export function Monogram({ className, labelled = true }: Props) {
  return (
    <svg
      viewBox={monogramPath.viewBox}
      className={className}
      {...(labelled ? { role: "img", "aria-label": "Sebastián Jaque" } : { "aria-hidden": true })}
    >
      <rect width="64" height="64" rx="14" className="fill-brand" />
      <path d={monogramPath.letters} className="fill-bg" />
      <path
        d={monogramPath.rule}
        className="stroke-bg"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
