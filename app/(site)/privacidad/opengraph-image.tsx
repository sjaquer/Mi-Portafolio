import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Aviso de privacidad de sjaquer.is-a.dev";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    label: "Privacidad",
    title: "Aviso de privacidad",
    description: "Qué datos recoge este sitio, para qué se usan y cómo pedir que se eliminen.",
  });
}
