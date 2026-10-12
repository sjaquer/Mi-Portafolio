import Image from "next/image";
import type { Icon } from "@tabler/icons-react";
import { Monogram } from "@/components/brand/wordmark";

interface Props {
  /** Ruta de la imagen (de `findImage`) o null para el placeholder de marca. */
  src: string | null;
  alt: string;
  ratio: "video" | "portrait" | "square";
  sizes: string;
  priority?: boolean;
  /** Ícono del placeholder; sin ícono se muestra el monograma. */
  icon?: Icon;
  className?: string;
}

const ratios = { video: "aspect-video", portrait: "aspect-4/5", square: "aspect-square" };

/**
 * Espacio de imagen (03-DESIGN.md §6.8): muestra la imagen si existe o, mientras tanto,
 * un placeholder de marca (fondo tonal + retícula + ícono), nunca un hueco vacío.
 * La proporción fija evita saltos de layout (CLS).
 */
export function MediaFrame({
  src,
  alt,
  ratio,
  sizes,
  priority,
  icon: PlaceholderIcon,
  className = "",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-border bg-brand-50 ${ratios[ratio]} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="media-zoom object-cover"
        />
      ) : (
        <div aria-hidden className="absolute inset-0 flex items-center justify-center">
          <div className="dot-grid-full absolute inset-0" />
          {PlaceholderIcon ? (
            <PlaceholderIcon size={48} stroke={1.25} className="media-zoom relative text-ink-500" />
          ) : (
            <Monogram className="media-zoom relative size-9" labelled={false} />
          )}
        </div>
      )}
    </div>
  );
}
