import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Condiciones de uso de sjaquer.is-a.dev";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    label: "Legal",
    title: "Condiciones de uso",
    description: "Propiedad intelectual, marcas de terceros, enlaces y ley aplicable.",
  });
}
