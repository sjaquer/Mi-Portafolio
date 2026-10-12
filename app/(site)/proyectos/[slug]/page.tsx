import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { CaseTracker } from "@/components/analytics/case-tracker";
import { CvButton } from "@/components/sections/cv-button";
import { Button } from "@/components/ui/button";
import { MeasureRule } from "@/components/brand/measure-rule";
import { CaseFacts } from "@/components/ui/case-facts";
import { Metric } from "@/components/ui/metric";
import { slugify } from "@/mdx-components";
import { DraftNotice } from "@/components/ui/draft-notice";
import { Container } from "@/components/ui/container";
import { caseTypeLabel, cases, getCase } from "@/content/casos";
import { profile } from "@/content/profile";
import { jsonLdGraph } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

// Plantilla obligatoria de todos los casos (02-PRD.md §8.3): base del índice "En esta página".
const caseSections = ["Contexto", "Problema", "Enfoque", "Solución", "Resultado", "Qué aprendí"];

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const c = getCase((await params).slug)!;
  return pageMetadata({ title: c.title, description: c.subtitle, path: `/proyectos/${c.slug}` });
}

// Plantilla obligatoria de caso (02-PRD.md §8.3).
export default async function CasePage({ params }: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const { default: Body } = await import(`@/content/casos/${slug}.mdx`);
  // Siguiente caso solo si hay otro publicado.
  const next = cases.length > 1 ? cases[(cases.indexOf(c) + 1) % cases.length] : null;
  const url = `${profile.siteUrl}/proyectos/${c.slug}`;

  const jsonLd = jsonLdGraph(
    {
      "@type": "CreativeWork",
      name: c.title,
      description: c.subtitle,
      url,
      dateModified: c.updatedAt,
      inLanguage: "es-PE",
      author: { "@id": `${profile.siteUrl}/#person` },
      keywords: c.stack.join(", "),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: profile.siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Proyectos",
          item: `${profile.siteUrl}/proyectos`,
        },
        { "@type": "ListItem", position: 3, name: c.title, item: url },
      ],
    },
  );

  return (
    <article>
      <CaseTracker slug={c.slug} type={c.type} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Container className="pt-6 pb-8 lg:pb-9">
        <Button
          href="/proyectos"
          variant="ghost"
          size="sm"
          cta="case_back"
          className="mb-6 -ml-4"
          icon={<IconArrowLeft size={16} stroke={1.5} aria-hidden className="-order-1" />}
        >
          Proyectos
        </Button>
        <div className="mb-4 empty:hidden">
          <DraftNotice item={c} />
        </div>
        {/* Lo primero que ve un reclutador: qué es y qué resultado tuvo (02-PRD.md §8.3). */}
        <header className="grid gap-7 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-3 text-label-mono text-ink-500">
              Caso · {caseTypeLabel[c.type]} · {c.year}
            </p>
            <h1 className="max-w-prose text-h1">{c.title}</h1>
            <p className="mt-4 max-w-prose text-lead">{c.subtitle}</p>
          </div>
          <div className="border-l-2 border-border pl-5 lg:col-span-4">
            <p className="mb-2 text-label-mono text-ink-500">Resultado</p>
            <Metric {...c.result} />
          </div>
        </header>
        <MeasureRule className="mt-7" />
        <div className="mt-7">
          <CaseFacts c={c} />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="text-body lg:col-span-8">
            <Body />
          </div>
          <aside className="hidden lg:col-span-3 lg:col-start-10 lg:block">
            <nav aria-label="En esta página" className="sticky top-9">
              <p className="mb-3 text-label-mono text-ink-500">En esta página</p>
              <ul className="flex flex-col border-l border-border">
                {caseSections.map((s) => (
                  <li key={s}>
                    <a
                      href={`#${slugify(s)}`}
                      className="-ml-px flex min-h-control-sm items-center border-l-2 border-transparent pl-4 text-small text-ink-700 hover:border-ink-900 hover:text-ink-900"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </Container>

      <nav aria-label="Siguiente paso" className="border-t border-border bg-surface py-8">
        <Container className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-prose">
            <p className="mb-2 text-label-mono text-ink-500">
              {next ? "Siguiente caso" : "¿Te sirve este perfil?"}
            </p>
            <p className="text-h3 font-semibold text-ink-900">
              {next ? next.title : "Descarga el CV o revisa los demás proyectos."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              href={next ? `/proyectos/${next.slug}` : "/proyectos"}
              variant="secondary"
              size="lg"
              cta="case_next"
              icon={<IconArrowRight size={20} stroke={1.5} aria-hidden />}
            >
              {next ? "Ver el caso" : "Ver proyectos"}
            </Button>
            <CvButton location="case" />
          </div>
        </Container>
      </nav>
    </article>
  );
}
