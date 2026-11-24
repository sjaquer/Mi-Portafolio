interface FigureProps {
  /** Ruta de la imagen en /public, p. ej. "/img/notas/mi-nota-02.webp". */
  src: string;
  /** Descripción concreta de lo que se ve (obligatorio para accesibilidad). */
  alt: string;
  /** Leyenda opcional al pie de la imagen. */
  caption?: string;
  /** Marca la figura con etiqueta de privacidad ("Datos de referencia, no reales"). */
  simulated?: boolean;
  /** "auto" respeta la proporción intrínseca; "video" fuerza 16:9 con object-cover. */
  ratio?: "auto" | "video";
  className?: string;
}

/**
 * Figura editorial para casos y notas en MDX (§6.5, §20 v7.0).
 * Permite insertar capturas con datos simulados o diagramas de apoyo dentro de blogs y casos.
 */
export function Figure({
  src,
  alt,
  caption,
  simulated = false,
  ratio = "auto",
  className = "",
}: FigureProps) {
  const showFooter = Boolean(caption || simulated);
  return (
    <figure
      className={`case-card-surface my-7 overflow-hidden rounded-lg border border-border bg-surface p-2 shadow-sm sm:p-3 ${className}`}
    >
      <div className="overflow-hidden rounded-md border border-border bg-surface-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={ratio === "video" ? "aspect-video w-full object-cover" : "block h-auto w-full"}
        />
      </div>
      {showFooter && (
        <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-1 text-small text-ink-500">
          {caption ? <span>{caption}</span> : <span />}
          {simulated && (
            <span className="font-mono text-label text-ink-500 uppercase">
              Datos de referencia, no reales
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
