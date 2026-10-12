import { profile } from "@/content/profile";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = `${profile.name} — ${profile.role}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ label: profile.role, title: profile.tagline });
}
