import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Sobre Sebastián Jaque";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    label: "Sobre mí",
    title: "De Administración al código",
    description: "Herramientas web y automatizaciones para negocio, medidas con datos.",
  });
}
