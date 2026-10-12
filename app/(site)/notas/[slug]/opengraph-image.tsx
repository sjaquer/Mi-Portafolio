import { getNote, notes, pillarLabel } from "@/content/notas";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Nota de Sebastián Jaque";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const n = getNote((await params).slug)!;
  return renderOg({ label: `Nota · ${pillarLabel[n.pillar]}`, title: n.title });
}
