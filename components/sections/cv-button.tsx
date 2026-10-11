import { IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { cvPdfPath, hasCvPdf } from "@/lib/cv";

interface Props {
  location: string;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
}

/**
 * CTA del CV: descarga el PDF si existe; si todavía no se subió, lleva a la versión HTML.
 * Así nunca hay un botón que termine en un 404.
 */
export function CvButton({ location, variant = "primary", size = "lg" }: Props) {
  const icon = (Icon: typeof IconDownload) => <Icon size={20} stroke={1.5} aria-hidden />;
  return hasCvPdf ? (
    <Button
      href={cvPdfPath}
      download
      variant={variant}
      size={size}
      cta={`${location}_cv_download`}
      icon={icon(IconDownload)}
    >
      Descargar CV
    </Button>
  ) : (
    <Button
      href="/cv"
      variant={variant}
      size={size}
      cta={`${location}_cv`}
      icon={icon(IconArrowRight)}
    >
      Ver CV
    </Button>
  );
}
