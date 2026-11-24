import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { MeasureRule } from "@/components/brand/measure-rule";
import { PillarMotif } from "@/components/brand/pillar-motif";
import { ChapterRail } from "@/components/sections/chapter-rail";
import { CvButton } from "@/components/sections/cv-button";
import { ImpactTabs, type ImpactItem } from "@/components/sections/impact-tabs";
import { Button } from "@/components/ui/button";
import { CaseArticle } from "@/components/ui/case-article";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { Section, SectionHeader } from "@/components/ui/section";
import { Timeline } from "@/components/ui/timeline";
import { cases } from "@/content/casos";
import { notes, pillarLabel } from "@/content/notas";
import { profile } from "@/content/profile";
import { formatDate } from "@/lib/format";
import { jsonLdGraph, profilePageJsonLd } from "@/lib/jsonld";
import { readingTime } from "@/lib/reading-time";

// Home (v5.0 — 5 capítulos concentrados + scroll dinámico, 03-DESIGN.md).

const expOf = (org: string) => profile.experience.find((e) => e.org.startsWith(org))!;
const bigJackExp = expOf("Big Jack");
const wienerExp = expOf("Universidad Privada Norbert Wiener");
const freelanceExp = expOf("Freelance");

const impactItems: ImpactItem[] = [
  {
    id: "big-jack",
    org: "Big Jack Burgers",
    shortMetric: bigJackExp.metric!.value,
    value: bigJackExp.metric!.value,
    beforeLabel: "Antes · ciclo base por orden",
    afterLabel: "Después · ecosistema en tiempo real",
    afterPercent: 65,
    label: bigJackExp.metric!.label,
    context: `Big Jack Burgers · ${bigJackExp.metric!.context}`,
    detail: bigJackExp.highlights[0],
    caseHref: "/proyectos/pedidos-big-jack",
    caseLabel: "Leer caso Big Jack Burgers",
    countUp: true,
  },
  {
    id: "uwiener-difusion",
    org: "UWiener · Difusión",
    shortMetric: wienerExp.metric!.value,
    value: wienerExp.metric!.value,
    before: wienerExp.metric!.before,
    beforeLabel: "Antes · 1–2 h manual por campaña",
    afterLabel: "Después · envío segmentado por lotes",
    afterPercent: 12,
    label: wienerExp.metric!.label,
    context: wienerExp.metric!.context,
    detail: wienerExp.highlights[1],
    caseHref: "/proyectos/difusion-correo-wiener",
    caseLabel: "Leer caso Difusión Masiva",
    countUp: false,
  },
  {
    id: "retail-integraciones",
    org: "Retail · Integraciones",
    shortMetric: freelanceExp.metric!.value,
    value: freelanceExp.metric!.value,
    beforeLabel: "Antes · carga manual entre plataformas",
    afterLabel: "Después · sincronización por API y webhooks",
    afterPercent: 70,
    label: freelanceExp.metric!.label,
    context: freelanceExp.metric!.context,
    detail: freelanceExp.highlights[0],
    caseHref: "/proyectos",
    caseLabel: "Explorar proyectos y casos",
    countUp: true,
  },
];

// Casos destacados: solo los publicables en este build (07-PROYECTOS.md §3).
const featured = cases.filter((c) => c.featured).slice(0, 3);

const capabilities = [
  { num: "01", title: "Web y CMS internos", stack: "Next.js · PostgreSQL · Docker" },
  { num: "02", title: "Automatización y RPA", stack: "Python · Playwright · IA local" },
  { num: "03", title: "Datos e integraciones API", stack: "Webhooks · Shopify · CRM" },
] as const;

const chapters = [
  { id: "inicio", num: "01", label: "Perfil" },
  { id: "resultados", num: "02", label: "Impacto" },
  { id: "casos", num: "03", label: "Proyectos" },
  { id: "experiencia", num: "04", label: "Trayectoria" },
  ...(notes.length > 0 ? [{ id: "notas", num: "05", label: "Notas" }] : []),
] as const;

const leadNote = notes[0];
const listNotes = notes.slice(1, 4);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdGraph(profilePageJsonLd())).replace(/</g, "\\u003c"),
        }}
      />

      <ChapterRail chapters={chapters} />

      {/* 01. Hero editorial monumental (100svh, §14 / v5.0): tipografía de gran contraste,
          regla dibujada y compresión sutil ligada al scroll al bajar al capítulo 02. */}
      <section
        id="inicio"
        aria-labelledby="hero-title"
        className="hero-stage hero-ambient relative flex min-h-[calc(100svh-var(--spacing-header)-0.75rem)] flex-col justify-between overflow-x-clip py-6 lg:py-8"
      >
        <Container className="hero-compress flex flex-1 flex-col justify-between gap-7">
          {/* Barra superior de especificaciones del plano */}
          <div className="hero-in flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-border pb-4">
            <p className="text-label-mono text-ink-500">
              01 / {profile.role}
            </p>
            <p className="flex items-center gap-2 text-label-mono text-ink-700">
              <span aria-hidden className="relative ml-1 flex size-2 shrink-0 items-center justify-center">
                <span className="pulse-ring absolute inset-0 rounded-full border border-success-700" />
                <span className="size-2 rounded-full bg-success-700" />
              </span>
              <span>
                Disponible desde ene 2027 · {profile.location} · remoto
              </span>
            </p>
          </div>

          {/* Bloque central protagonista */}
          <div className="my-auto py-4 lg:py-6">
            <h1 id="hero-title" className="hero-in text-hero max-w-[16ch] text-ink-900">
              Entiendo el problema.
              <br />
              <span className="hero-gradient-text">Construyo el producto.</span>
            </h1>

            <MeasureRule draw className="mt-6 lg:mt-7" />

            <div className="hero-in mt-6 grid gap-6 lg:mt-7 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <p className="max-w-prose text-lead text-ink-900">{profile.tagline}</p>
                <p className="mt-3 font-mono text-small text-ink-500">
                  Next.js · TypeScript · Python · PostgreSQL · APIs · UX de producto
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:col-span-6 lg:items-end">
                <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
                  <CvButton location="hero" className="w-full sm:w-auto" />
                  <Button
                    href="/proyectos"
                    variant="secondary"
                    size="lg"
                    cta="hero_projects"
                    className="w-full sm:w-auto"
                    icon={<IconArrowRight size={20} stroke={1.5} aria-hidden />}
                  >
                    Ver proyectos
                  </Button>
                </div>

                {featured[0] && (
                  <Link
                    href={`/proyectos/${featured[0].slug}`}
                    data-cta="hero_featured_case"
                    className="group inline-flex min-h-control-sm items-center gap-3 border-t border-border pt-3 text-small text-ink-700 transition-colors duration-150 ease-standard hover:text-ink-900"
                  >
                    <span className="shrink-0 font-mono text-label whitespace-nowrap text-accent-600 uppercase tabular-nums">
                      En producción · {featured[0].result.value}
                    </span>
                    <span className="line-clamp-1 font-semibold text-ink-900 decoration-1 underline-offset-4 group-hover:underline">
                      {featured[0].title}
                    </span>
                    <IconArrowRight
                      size={16}
                      stroke={1.5}
                      aria-hidden
                      className="shrink-0 text-accent-600 transition-transform duration-200 ease-standard group-hover:translate-x-1 motion-reduce:transform-none"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Guía inferior hacia el capítulo 02 */}
          <div className="flex items-center justify-between border-t border-border pt-4 text-label-mono text-ink-500">
            <span>02 · Impacto medido</span>
            <a
              href="#resultados"
              data-cta="hero_scroll_cue"
              className="group inline-flex min-h-control-sm items-center gap-2 text-ink-700 transition-colors duration-150 ease-standard hover:text-ink-900"
            >
              Deslizar
              <IconArrowDown
                size={16}
                stroke={1.5}
                aria-hidden
                className="transition-transform duration-200 ease-standard group-hover:translate-y-0.5 motion-reduce:transform-none"
              />
            </a>
          </div>
        </Container>
      </section>

      {/* 02. Impacto: banda invertida única con selector interactivo y comparador visual (§6.7 / v7.0). */}
      <section
        id="resultados"
        aria-labelledby="resultados-title"
        className="surface-inverse band-ambient py-8 lg:py-9"
      >
        <Container>
          <p className="mb-3 flex items-center gap-2 text-label-mono text-cyan-600">
            <span aria-hidden className="size-2 shrink-0 rounded-full bg-current" />
            02 / Impacto medido
          </p>
          <h2 id="resultados-title" className="text-h2 text-ink-900">
            Resultados con base y periodo
          </h2>
          <MeasureRule className="mt-4 mb-6" />
          <ImpactTabs items={impactItems} />
        </Container>
      </section>

      {/* 03. Proyectos: scrollytelling con cabecera sticky y tarjetas que se apilan al bajar.
          Importante: sin overflow-hidden en ningún ancestro para no romper position: sticky. */}
      {featured.length > 0 && (
        <Section id="casos" aria-labelledby="casos-title">
          <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-8">
            <div className="lg:sticky lg:top-[calc(var(--spacing-header)+2.5rem)] lg:col-span-4">
              <SectionHeader
                id="casos-title"
                label="03 / Casos de estudio"
                title="Proyectos con resultado"
                lead="El problema real, las decisiones que tomé y el impacto que quedó en producción."
                tone="accent"
                flush
              />

              <ul
                aria-label="Capacidades principales"
                className="mt-6 flex flex-col gap-2 border-t border-border pt-4"
              >
                {capabilities.map((cap) => (
                  <li key={cap.num} className="flex items-baseline gap-3">
                    <span className="font-mono text-label text-ink-500 tabular-nums">{cap.num}</span>
                    <span className="text-small font-medium text-ink-700">{cap.title}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button
                  href="/proyectos"
                  variant="secondary"
                  cta="home_all_projects"
                  className="w-full sm:w-auto"
                  icon={<IconArrowRight size={20} stroke={1.5} aria-hidden />}
                >
                  Ver los {cases.length} casos
                </Button>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-6 lg:col-span-8 lg:mt-0 lg:gap-8">
              {featured.map((c, i) => (
                <div
                  key={c.slug}
                  className="case-stack-card case-card-surface rounded-lg border border-border bg-surface p-5 shadow-sm lg:sticky lg:p-6"
                  style={{ top: `calc(var(--spacing-header) + ${2.5 + i * 1.5}rem)` }}
                >
                  <p className="mb-3 font-mono text-label text-ink-500 tabular-nums">
                    0{i + 1} / 0{featured.length}
                  </p>
                  <CaseArticle c={c} minutes={readingTime(c.slug)} variant="card" />
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* 04. Trayectoria viva: eje vertical dibujado progresivamente con el scroll. */}
      <Section id="experiencia" aria-labelledby="experiencia-title" className="border-t border-border">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            id="experiencia-title"
            label="04 / Experiencia"
            title="Dónde he trabajado"
            flush
          />
          <Button
            href="/cv"
            variant="secondary"
            className="w-full sm:w-auto"
            cta="home_cv_html"
            icon={<IconArrowRight size={20} stroke={1.5} aria-hidden />}
          >
            Ver el CV completo
          </Button>
        </div>
        <Timeline items={profile.experience.slice(0, 3)} compact animatedRail />
      </Section>

      {/* 05. Notas: composición editorial asimétrica (1 protagonista + lista técnica). */}
      {notes.length > 0 && leadNote && (
        <Section id="notas" aria-labelledby="notas-title" className="border-t border-border">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              id="notas-title"
              label="05 / Notas"
              title="Lo que estoy aprendiendo"
              tone="cyan"
              flush
            />
            <Button
              href="/notas"
              variant="secondary"
              cta="home_all_notes"
              className="w-full sm:w-auto"
              icon={<IconArrowRight size={20} stroke={1.5} aria-hidden />}
            >
              Ver todas las notas
            </Button>
          </div>

          <div className="grid gap-7 lg:grid-cols-12 lg:items-start">
            <article className="group relative flex flex-col gap-4 lg:col-span-7">
              <div className="media-reveal">
                {leadNote.cover ? (
                  <MediaFrame
                    src={leadNote.cover}
                    alt=""
                    ratio="video"
                    sizes="(min-width: 1024px) 620px, 100vw"
                  />
                ) : (
                  <PillarMotif pillar={leadNote.pillar} />
                )}
              </div>
              <p className="text-label-mono text-ink-500 tabular-nums">
                {pillarLabel[leadNote.pillar]} ·{" "}
                <time dateTime={leadNote.date}>{formatDate(leadNote.date)}</time> ·{" "}
                {readingTime(leadNote.slug, "notas")} min
              </p>
              <h3 className="text-h2">
                <Link
                  href={`/notas/${leadNote.slug}`}
                  data-cta={`post_card_${leadNote.slug}`}
                  className="decoration-1 underline-offset-4 group-hover:underline after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-md focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-focus"
                >
                  {leadNote.title}
                </Link>
              </h3>
              <p className="max-w-prose text-lead text-ink-700">{leadNote.description}</p>
              <span
                aria-hidden
                className="inline-flex items-center gap-2 text-small font-semibold text-accent-600"
              >
                Leer la nota
                <IconArrowRight
                  size={16}
                  stroke={1.5}
                  className="transition-transform duration-200 ease-standard group-hover:translate-x-1 motion-reduce:transform-none"
                />
              </span>
            </article>

            {listNotes.length > 0 && (
              <ol className="divide-y divide-border border-t border-border lg:col-span-5 lg:border-t-0">
                {listNotes.map((n) => (
                  <li key={n.slug} className="reveal py-5 first:pt-0 last:pb-0">
                    <article className="group relative flex items-start gap-4">
                      <div className="w-[6.5rem] shrink-0 sm:w-[7.5rem]">
                        {n.cover ? (
                          <MediaFrame
                            src={n.cover}
                            alt=""
                            ratio="video"
                            sizes="120px"
                          />
                        ) : (
                          <PillarMotif pillar={n.pillar} />
                        )}
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col gap-2">
                        <p className="text-label-mono text-ink-500 tabular-nums">
                          {pillarLabel[n.pillar]} · <time dateTime={n.date}>{formatDate(n.date)}</time>{" "}
                          · {readingTime(n.slug, "notas")} min
                        </p>
                        <h3 className="text-body font-semibold text-ink-900">
                          <Link
                            href={`/notas/${n.slug}`}
                            data-cta={`home_note_list_${n.slug}`}
                            className="decoration-1 underline-offset-4 group-hover:underline after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-md focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-focus"
                          >
                            {n.title}
                          </Link>
                        </h3>
                        <span
                          aria-hidden
                          className="inline-flex items-center gap-2 text-small font-semibold text-accent-600"
                        >
                          Leer
                          <IconArrowRight
                            size={14}
                            stroke={1.5}
                            className="transition-transform duration-200 ease-standard group-hover:translate-x-1 motion-reduce:transform-none"
                          />
                        </span>
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </Section>
      )}

      {/* Cierre: panel arquitectónico con la regla de medición (kit de firma §6.9). */}
      <section aria-labelledby="cta-final" className="border-t border-border py-8 lg:py-9">
        <Container>
          <div className="reveal case-card-surface rounded-lg border border-border bg-surface p-6 lg:p-8">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-label-mono text-ink-500">
              <span>Disponible desde enero 2027</span>
              <span aria-hidden className="hidden text-border-strong sm:inline">
                /
              </span>
              <span>Respuesta en 1–2 días hábiles</span>
            </p>
            <MeasureRule className="mt-3" />
            <div className="mt-5 max-w-prose">
              <h2 id="cta-final" className="text-h2">
                ¿Buscas a alguien que entienda el problema y construya la solución?
              </h2>
              <p className="mt-4 text-lead">
                Busco mi primer rol formal en análisis de producto o desarrollo de soluciones, desde
                enero 2027. Si tu equipo necesita a alguien que baje un requerimiento complejo a un
                flujo claro, construya la herramienta y mida si funciona, conversemos.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end">
              <CvButton location="final" className="w-full sm:w-auto" />
              <Button
                href="/contacto"
                variant="secondary"
                size="lg"
                cta="final_contact"
                className="w-full sm:w-auto"
              >
                Escribirme
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
