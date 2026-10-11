import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Contactar a Sebastián Jaque";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    label: "Contacto",
    title: "Hablemos",
    description: "Empleo en MarTech, desarrollo web o automatización, o un proyecto.",
  });
}
