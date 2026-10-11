import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Sebastián Jaque — Desarrollo web, automatización y MarTech";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    label: "Desarrollo web · Automatización · MarTech & CRO",
    title:
      "Construyo sitios y automatizaciones que conectan marketing, operaciones y datos — y mido si funcionan.",
  });
}
