import { IconEyeOff } from "@tabler/icons-react";
import { pendingReason, type CaseStudy, type GalleryItem } from "@/content/casos";

/**
 * Solo aparece en `next dev`: en producción lo no publicable ni siquiera se genera.
 * Recuerda por qué un caso o una tarjeta todavía no sale (07-PROYECTOS.md §3).
 */
export function DraftNotice({ item }: { item: CaseStudy | GalleryItem }) {
  const reason = pendingReason(item);
  if (!reason) return null;
  return (
    <p className="relative z-10 inline-flex items-center gap-2 rounded-sm border border-warning-700 px-3 py-1 text-small text-warning-700">
      <IconEyeOff size={16} stroke={1.5} aria-hidden />
      Borrador · {reason}
    </p>
  );
}
