import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Proyectos de Sebastián Jaque";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    label: "Proyectos",
    title: "Proyectos con resultado",
    description: "Casos con el problema, las decisiones y lo que cambió, con su base y su periodo.",
  });
}
