// Avatar provisional (03-DESIGN.md §10.6) en línea para que siga el tema claro/oscuro.
// Misma geometría que public/brand/avatar-silhouette.svg (scripts/brand/build-assets.mjs).
export function AvatarIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 1000"
      className={className}
      role="img"
      aria-label="Ilustración provisional del retrato de Sebastián Jaque"
    >
      <rect width="800" height="1000" className="fill-surface-muted" />
      <g
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-brand"
      >
        <path
          vectorEffect="non-scaling-stroke"
          d="M400 250c-74 0-128 58-128 140 0 60 22 112 56 146 20 20 44 32 72 32s52-12 72-32c34-34 56-86 56-146 0-82-54-140-128-140Z"
        />
        <path
          vectorEffect="non-scaling-stroke"
          d="M344 552v52c0 18-10 32-28 38l-112 38c-66 22-110 82-110 152v168"
        />
        <path
          vectorEffect="non-scaling-stroke"
          d="M456 552v52c0 18 10 32 28 38l112 38c66 22 110 82 110 152v168"
        />
        <path vectorEffect="non-scaling-stroke" d="M330 652c18 38 42 58 70 58s52-20 70-58" />
      </g>
      <g fill="none" strokeWidth="1.5" strokeLinecap="round" className="stroke-border-strong">
        <path vectorEffect="non-scaling-stroke" d="M140 250V568M128 250h24M128 568h24" />
        <path
          vectorEffect="non-scaling-stroke"
          d="M140 290h8M140 330h8M140 370h14M140 410h8M140 450h8M140 490h14M140 530h8"
        />
      </g>
    </svg>
  );
}
