import type { Metadata } from "next";
import { IconArrowUpRight } from "@tabler/icons-react";
import { CaseCard } from "@/components/ui/case-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";
import { caseTypeLabel, cases, lab, type CaseType } from "@/content/casos";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Proyectos",
  description:
    "Casos de estudio con resultado medido: una plataforma de empleabilidad para una universidad y un sistema de pedidos para una hamburguesería en Lima.",
  path: "/proyectos",
});

const types = Object.keys(caseTypeLabel) as CaseType[];

// Listado (02-PRD.md §8.2). El filtro por tipo es un índice de anclas: cero JavaScript.
export default function ProyectosPage() {
  const groups = types
    .map((t) => ({ type: t, items: cases.filter((c) => c.type === t) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <Section>
        <p className="mb-3 text-label-mono text-ink-500">Proyectos</p>
        <h1 className="text-h1">Proyectos con resultado</h1>
        <p className="mt-4 max-w-prose text-lead">
          Cada caso cuenta el problema, las decisiones que tomé — incluidas las que descarté — y lo
          que cambió, con su base y su periodo.
        </p>
        <nav aria-label="Filtrar por tipo" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <li key={g.type}>
                <a
                  href={`#${g.type}`}
                  data-cta={`projects_filter_${g.type}`}
                  className="inline-flex min-h-control-md items-center rounded-full border border-border-strong px-4 text-small font-semibold text-ink-900 hover:bg-surface-muted"
                >
                  {caseTypeLabel[g.type]}{" "}
                  <span className="ml-2 font-mono text-ink-500">{g.items.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Section>

      {groups.map((g) => (
        <Section
          key={g.type}
          id={g.type}
          aria-labelledby={`${g.type}-title`}
          className="scroll-mt-8 border-t border-border"
        >
          <h2 id={`${g.type}-title`} className="mb-6 text-label-mono text-ink-500">
            {caseTypeLabel[g.type]}
          </h2>
          <ul className="grid gap-5 md:grid-cols-2">
            {g.items.map((c) => (
              <li key={c.slug}>
                <CaseCard c={c} />
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <Section aria-labelledby="laboratorio" className="border-t border-border bg-surface-muted">
        <SectionHeader
          id="laboratorio"
          label="Laboratorio"
          title="Proyectos de práctica"
          lead="Lo que construyo para aprender una herramienta o probar una idea. Sin clientes ni métricas."
        />
        <ul className="grid gap-5 sm:grid-cols-2">
          {lab.map((p) => (
            <li key={p.name} className="flex flex-col gap-3 border-t border-border pt-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-h3">{p.name}</h3>
                <span className="font-mono text-small text-ink-500">{p.year}</span>
              </div>
              <p>{p.description}</p>
              <TagList label="Stack" items={p.stack} />
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cta={`lab_${p.name.toLowerCase().replace(/\s+/g, "_")}`}
                className="inline-flex min-h-control-md w-fit items-center gap-1 text-small font-semibold text-accent-600 underline-offset-4 hover:underline"
              >
                Código de {p.name} en GitHub
                <IconArrowUpRight size={16} stroke={1.5} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
