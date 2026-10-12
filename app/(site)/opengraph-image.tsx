import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Sebastián Jaque — Desarrollo web y automatización de procesos";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    label: "Desarrollo web · Automatización de procesos · Integraciones",
    title:
      "Construyo herramientas web y automatizaciones que reducen tareas manuales y conectan sistemas con APIs.",
  });
}
