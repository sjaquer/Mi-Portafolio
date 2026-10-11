import { caseTypeLabel, cases, getCase } from "@/content/casos";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Caso de estudio de Sebastián Jaque";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCase((await params).slug)!;
  return renderOg({
    label: `Caso · ${caseTypeLabel[c.type]} · ${c.year}`,
    title: c.title,
    description: `${c.result.value} · ${c.result.label}`,
  });
}
