import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "CV de Sebastián Jaque";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    label: "CV",
    title: "Sebastián Jaque",
    description: "Desarrollo web · Automatización · MarTech & CRO",
  });
}
