import { profile } from "@/content/profile";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = `CV de ${profile.name}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    label: "CV",
    title: profile.name,
    description: profile.role,
  });
}
