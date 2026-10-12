import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Notas de Sebastián Jaque";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    label: "Notas",
    title: "Lo que estoy aprendiendo",
    description: "Proyectos reales: qué problema había, qué hice y qué aprendí.",
  });
}
