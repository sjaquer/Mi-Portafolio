import type { Metadata } from "next";
import { IconArrowUpRight } from "@tabler/icons-react";
import { MiniFlow } from "@/components/brand/mini-flow";
import { CaseGrid } from "@/components/sections/case-grid";
import { Section, SectionHeader } from "@/components/ui/section";
import { DraftNotice } from "@/components/ui/draft-notice";
import { cases, gallery, lab } from "@/content/casos";
import { readingTime } from "@/lib/reading-time";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Proyectos",
  description:
    "Casos de estudio con resultado medido, sitios y herramientas, y proyectos de práctica de Sebastián Jaque: desarrollo web, automatización de procesos e integraciones.",
  path: "/proyectos",
});

// Listado (02-PRD.md §8.2): casos con filtro, galería (Nivel B) y laboratorio.
export default function ProyectosPage() {
  return (
    <>
      <Section>
        <p className="mb-3 text-label-mono text-ink-500">Proyectos</p>
        <h1 className="text-h1">{cases.length > 0 ? "Proyectos con resultado" : "Proyectos"}</h1>
        <p className="mt-4 max-w-prose text-lead">
          {cases.length > 0
            ? "Cada caso cuenta el problema, las decisiones que tomé — incluidas las que descarté — y lo que cambió, con su base y su periodo."
            : "Los casos de estudio completos se publican a fines de octubre de 2026. Mientras tanto, aquí están los sitios, herramientas y proyectos de práctica."}
        </p>
        <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-small">
          {(
            [
              [cases.length, "casos con resultado"],
              [gallery.length, "sitios y herramientas"],
              [lab.length, "proyectos de práctica"],
            ] as const
          )
            .filter(([n]) => n > 0)
            .map(([n, label]) => (
              <div key={label} className="flex items-baseline gap-2">
                <dt className="sr-only">{label}</dt>
                <dd className="font-mono text-h3 font-semibold text-ink-900">{n}</dd>
                <span aria-hidden className="text-ink-500">
                  {label}
                </span>
              </div>
            ))}
        </dl>
      </Section>

      {cases.length > 0 && (
        <Section aria-labelledby="casos-title" className="border-t border-border">
          <h2 id="casos-title" className="sr-only">
            Casos de estudio
          </h2>
          <CaseGrid
            items={cases.map((c) => ({
              c,
              minutes: readingTime(c.slug),
            }))}
          />
        </Section>
      )}

      {gallery.length > 0 && (
        <Section aria-labelledby="galeria" className="border-t border-border">
          <SectionHeader
            id="galeria"
            label="Galería"
            title="Sitios y herramientas"
            lead="Proyectos más pequeños, en una tarjeta: qué son, qué resuelven y dónde encaja lo que construí."
          />
          <ul className="grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <li key={g.name} className="reveal flex flex-col gap-3 border-t border-border pt-5">
                <DraftNotice item={g} />
                <MiniFlow steps={g.flow} />
                <h3 className="text-h3">{g.name}</h3>
                <p>{g.angle}</p>
                {g.href && (
                  <a
                    href={g.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta={`gallery_${g.name.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`}
                    className="inline-flex min-h-control-md w-fit items-center gap-1 text-small font-semibold text-accent-600 underline-offset-4 hover:underline"
                  >
                    {g.hrefLabel ?? `Ver ${g.name}`}
                    <IconArrowUpRight size={16} stroke={1.5} aria-hidden />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section aria-labelledby="laboratorio" className="border-t border-border bg-surface-muted">
        <SectionHeader
          id="laboratorio"
          label="Laboratorio"
          title="Laboratorio y repositorios adicionales"
          lead="Lo que construyo para aprender una herramienta o probar una idea. Sin clientes ni métricas."
        />
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">Proyectos de práctica con su stack, año y código</caption>
          <thead>
            <tr className="border-b border-border-strong text-label-mono text-ink-500">
              <th scope="col" className="py-3 pr-4 font-medium">
                Proyecto
              </th>
              <th scope="col" className="hidden py-3 pr-4 font-medium md:table-cell">
                Stack
              </th>
              <th scope="col" className="py-3 text-right font-medium">
                Año
              </th>
            </tr>
          </thead>
          <tbody>
            {lab.map((p) => (
              <tr key={p.name} className="border-b border-border align-top">
                <th scope="row" className="py-4 pr-4 font-normal">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta={`lab_${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`}
                    className="inline-flex min-h-control-md items-center gap-1 font-semibold text-ink-900 underline-offset-4 hover:text-accent-600 hover:underline"
                  >
                    {p.name}
                    <IconArrowUpRight size={16} stroke={1.5} aria-hidden />
                    <span className="sr-only">(código en GitHub)</span>
                  </a>
                  <p className="max-w-prose text-small text-ink-700">{p.description}</p>
                </th>
                <td className="hidden py-4 pr-4 font-mono text-small text-ink-500 md:table-cell">
                  {p.stack.join(" · ")}
                </td>
                <td className="py-4 text-right font-mono text-small text-ink-500">{p.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </>
  );
}
