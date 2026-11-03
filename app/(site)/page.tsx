import { IconArrowRight, IconCalendarEvent, IconMapPin } from "@tabler/icons-react";
import Link from "next/link";
import { MeasureRule } from "@/components/brand/measure-rule";
import { HeroFigure, HeroSteps } from "@/components/brand/hero-figure";
import { MiniFlow } from "@/components/brand/mini-flow";
import { CvButton } from "@/components/sections/cv-button";
import { Button } from "@/components/ui/button";
import { CaseArticle } from "@/components/ui/case-article";
import { PostCard } from "@/components/ui/post-card";
import { Container } from "@/components/ui/container";
import { Metric } from "@/components/ui/metric";
import { Section, SectionHeader } from "@/components/ui/section";
import { Timeline } from "@/components/ui/timeline";
import { cases } from "@/content/casos";
import { notes } from "@/content/notas";
import { profile } from "@/content/profile";
import { jsonLdGraph, profilePageJsonLd } from "@/lib/jsonld";
import { readingTime } from "@/lib/reading-time";

// Home (02-PRD.md §8.1). Textos de 06-CONTENIDO.md §3. "Últimas notas" llega en la Fase 4.

// Prueba rápida (06-CONTENIDO.md §3): Big Jack, Freelance y Norbert Wiener, desde la fuente única.
const metricOf = (org: string) => profile.experience.find((e) => e.org.startsWith(org))!.metric!;
const bigJack = metricOf("Big Jack");
const proof = [
  { ...bigJack, context: `Big Jack Burgers · ${bigJack.context}` },
  metricOf("Freelance"),
  metricOf("Universidad Privada Norbert Wiener"),
];

// Casos destacados: solo los publicables en este build (07-PROYECTOS.md §3).
const featured = cases.filter((c) => c.featured).slice(0, 3);

// Cada servicio con su flujo mínimo (§8.1): el paso central es el que construyo.
const services = [
  {
    flow: ["Interfaz", "API", "Datos"] as const,
    title: "Desarrollo web y herramientas internas",
    body: "Apps y paneles que reemplazan planillas y procesos a mano. Next.js, TypeScript, PostgreSQL y Docker.",
    example: "Plataforma de empleabilidad con 5 roles y acceso con Microsoft.",
    href: "/proyectos/bolsa-de-trabajo-wiener",
  },
  {
    flow: ["Disparador", "Bot", "Resultado"] as const,
    title: "Automatización de procesos y bots",
    body: "Bots y RPA que se encargan del trabajo repetitivo sin supervisión. Python, Playwright y Power Automate.",
    example: "Robot de consultas SUNAT y bots de filtrado de candidatos.",
    href: "/proyectos/reqlut-bot",
  },
  {
    flow: ["Tienda", "API", "CRM"] as const,
    title: "Integración de APIs y comunicación",
    body: "Conecto tiendas, CRMs y correo para que los datos fluyan sin copiar y pegar. APIs REST, webhooks, Shopify y email transaccional.",
    example: "Campañas segmentadas por facultad y ciclo ahorrando horas de trabajo.",
    href: "/proyectos/difusion-correo-wiener",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdGraph(profilePageJsonLd())).replace(/</g, "\\u003c"),
        }}
      />

      {/* 1. Hero (v4.2): fondo de página limpio, texto + composición de marca animada
          (§6.9, §10.6), sin retrato. Entra con fade + ascenso escalonado (§11). */}
      <section
        aria-labelledby="hero-title"
        className="relative isolate overflow-hidden pt-6 pb-8 lg:pt-8 lg:pb-9"
      >
        <Container className="grid items-center gap-x-8 gap-y-4 lg:grid-cols-12">
          <p className="hero-in text-label-mono text-ink-500 lg:col-span-12">{profile.role}</p>
          <div className="hero-in lg:col-span-6 lg:row-start-2">
            {/* Firma: la regla de medición se traza bajo el nombre (§11.2). */}
            <div className="w-fit">
              <h1 id="hero-title" className="text-display">
                {profile.name}
              </h1>
              <MeasureRule draw className="mt-3" />
            </div>
            <p className="mt-5 max-w-prose text-lead text-ink-900">{profile.tagline}</p>
            <p className="mt-4 max-w-prose">{profile.summary}</p>
            <div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-small text-ink-700">
                <li className="flex items-center gap-2">
                  <IconCalendarEvent size={20} stroke={1.5} aria-hidden className="text-ink-500" />
                  Disponible desde ene 2027
                </li>
                <li className="flex items-center gap-2">
                  <IconMapPin size={20} stroke={1.5} aria-hidden className="text-ink-500" />
                  {profile.location} · remoto
                </li>
              </ul>
            </div>
            {/* Ancla visual en móvil: el hero no queda solo de texto (§14.6). */}
            <div className="mt-7 lg:hidden">
              <HeroSteps />
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:block">
            <HeroFigure className="mx-auto max-w-md" />
          </div>
        </Container>
      </section>

      {/* 2. Prueba rápida: banda de identidad (§6.7, §15.4). */}
      <section aria-labelledby="resultados" className="surface-inverse py-8 lg:py-9">
        <Container>
          <h2 id="resultados" className="flex items-center gap-2 text-label-mono text-accent-600">
            <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-current" />
            Resultados con base y periodo
          </h2>
          <MeasureRule className="mt-4 mb-6" />
          <ul className="grid gap-6 md:grid-cols-3">
            {proof.map((m, i) => (
              <li key={m.label} className="reveal flex h-full border-l-2 border-accent-600 pl-5">
                <Metric {...m} reserveBefore countUp={i < 2} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. Casos en formato de artículo: uno destacado + lista (§19.2). */}
      {featured.length > 0 && (
        <Section aria-labelledby="casos">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              id="casos"
              label="Casos de estudio"
              title="Proyectos con resultado"
              lead="El problema, las decisiones y lo que cambió, contado como un artículo corto."
              tone="amber"
              flush
            />
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
          <div className="flex flex-col gap-8">
            <div className="reveal">
              <CaseArticle
                c={featured[0]}
                minutes={readingTime(featured[0].slug)}
                variant="featured"
              />
            </div>
            <ul className="grid gap-7 border-t border-border pt-8 md:grid-cols-2">
              {featured.slice(1).map((c) => (
                <li key={c.slug} className="reveal h-full">
                  <CaseArticle c={c} minutes={readingTime(c.slug)} variant="card" />
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {/* 4. Qué hago */}
      <Section aria-labelledby="que-hago" className="border-t border-border">
        <SectionHeader id="que-hago" label="Qué hago" title="Tres cosas que hago bien" />
        <ol className="grid gap-6 md:grid-cols-3">
          {services.map(({ flow, ...s }, i) => (
            <li key={s.title} className="reveal flex h-full flex-col gap-3">
              <MiniFlow steps={flow} />
              <h3 className="text-h3">{s.title}</h3>
              <p>{s.body}</p>
              <p className="mt-auto flex items-start gap-2 text-small">
                <span className="shrink-0 pt-px font-mono text-label text-ink-500">Ej.</span>
                {s.href ? (
                  <Link
                    href={s.href}
                    data-cta={`home_service_${i + 1}`}
                    className="text-ink-700 underline decoration-border-strong underline-offset-4 hover:text-ink-900 hover:decoration-ink-900"
                  >
                    {s.example}
                  </Link>
                ) : (
                  <span className="text-ink-700">{s.example}</span>
                )}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 5. Experiencia resumida */}
      <Section aria-labelledby="experiencia" className="border-t border-border">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <SectionHeader id="experiencia" label="Experiencia" title="Dónde he trabajado" flush />
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
        <Timeline items={profile.experience.slice(0, 3)} compact />
      </Section>

      {/* 6. Últimas notas (02-PRD.md §8.1). */}
      {notes.length > 0 && (
        <Section aria-labelledby="notas" className="border-t border-border">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              id="notas"
              label="Notas"
              title="Lo que estoy aprendiendo"
              tone="teal"
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
          <ul className="grid gap-7 md:grid-cols-3">
            {notes.slice(0, 3).map((n) => (
              <li key={n.slug} className="reveal h-full">
                <PostCard n={n} minutes={readingTime(n.slug, "notas")} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* 7. CTA final: panel de cierre con la regla de medición (kit de firma §6.9). */}
      <section aria-labelledby="cta-final" className="border-t border-border py-8 lg:py-9">
        <Container>
          <div className="rounded-lg border border-border bg-surface p-6 lg:p-8">
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
