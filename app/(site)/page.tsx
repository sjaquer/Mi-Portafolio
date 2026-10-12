import { IconArrowRight, IconBrowser, IconChartLine, IconRoute } from "@tabler/icons-react";
import Link from "next/link";
import { MeasureRule } from "@/components/brand/measure-rule";
import { ProfileCard } from "@/components/sections/profile-card";
import { StackStrip } from "@/components/sections/stack-strip";
import { CvButton } from "@/components/sections/cv-button";
import { Button } from "@/components/ui/button";
import { CaseCard } from "@/components/ui/case-card";
import { Container } from "@/components/ui/container";
import { Metric } from "@/components/ui/metric";
import { Section, SectionHeader } from "@/components/ui/section";
import { Timeline } from "@/components/ui/timeline";
import { cases } from "@/content/casos";
import { profile } from "@/content/profile";
import { jsonLdGraph, profilePageJsonLd } from "@/lib/jsonld";

// Home (02-PRD.md §8.1). Textos de 06-CONTENIDO.md §3. "Últimas notas" llega en la Fase 4.

// Prueba rápida (06-CONTENIDO.md §3): Big Jack, Dearel y Norbert Wiener, desde la fuente única.
const metricOf = (org: string) => profile.experience.find((e) => e.org.startsWith(org))!.metric!;
const bigJack = metricOf("Big Jack");
const proof = [
  { ...bigJack, context: `Big Jack Burgers · ${bigJack.context}` },
  metricOf("Dearel"),
  metricOf("Universidad Privada Norbert Wiener"),
];

// Casos destacados: solo los publicables en este build (07-PROYECTOS.md §3).
const featured = cases.filter((c) => c.featured).slice(0, 3);

const services = [
  {
    Icon: IconBrowser,
    title: "Sitios y herramientas web",
    body: "Next.js, PostgreSQL y Docker.",
    example: "Plataforma de empleabilidad con 5 roles y acceso con Microsoft.",
    href: "/proyectos/bolsa-de-trabajo-wiener",
  },
  {
    Icon: IconRoute,
    title: "Automatización e integraciones",
    body: "APIs, WhatsApp, email transaccional.",
    example: "Campañas segmentadas por facultad y ciclo.",
    href: "/proyectos/difusion-correo-wiener",
  },
  {
    Icon: IconChartLine,
    title: "Medición y conversión",
    body: "GA4, GTM, embudos.",
    example: "Este sitio, instrumentado de punta a punta.",
    href: undefined,
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

      {/* 1. Hero: fondo tonal + retícula que se desvanece (§6.7). Sin animación: pinta el LCP. */}
      <section
        aria-labelledby="hero-title"
        className="relative isolate overflow-hidden bg-(image:--gradient-hero) pt-7 pb-8 lg:pt-10 lg:pb-9"
      >
        <div aria-hidden className="dot-grid absolute inset-0 -z-10" />
        <Container className="grid items-center gap-7 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-label-mono text-ink-700">
              <span aria-hidden className="size-2 rounded-full bg-ink-900" />
              Lima, Perú · Disponible desde ene 2027
            </p>
            <h1 id="hero-title" className="text-display">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-prose text-lead text-ink-900">
              Desarrollo web, automatización y medición para equipos de marketing y operaciones.
            </p>
            <p className="mt-4 max-w-prose">{profile.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CvButton location="hero" />
              <Button
                href="/proyectos"
                variant="secondary"
                size="lg"
                cta="hero_projects"
                icon={<IconArrowRight size={20} stroke={1.5} aria-hidden />}
              >
                Ver proyectos
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9">
            <ProfileCard />
          </div>
        </Container>
      </section>

      {/* 2. Prueba rápida: banda de identidad (§6.7, §15.4). */}
      <section aria-labelledby="resultados" className="surface-inverse py-8 lg:py-9">
        <Container>
          <div className="mb-7 flex flex-col gap-4">
            <h2 id="resultados" className="text-label-mono text-ink-500">
              Resultados medidos
            </h2>
            <MeasureRule className="opacity-60" />
          </div>
          <ul className="grid gap-6 md:grid-cols-3">
            {proof.map((m) => (
              <li key={m.label} className="reveal border-l-2 border-border pl-5">
                <Metric {...m} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. Casos destacados */}
      {featured.length > 0 && (
        <Section aria-labelledby="casos">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <SectionHeader id="casos" label="Casos" title="Proyectos con resultado" flush />
            <Button
              href="/proyectos"
              variant="ghost"
              className="-mx-5"
              cta="home_all_projects"
              icon={<IconArrowRight size={20} stroke={1.5} aria-hidden />}
            >
              Ver los {cases.length} casos
            </Button>
          </div>
          <ul
            className={`grid gap-5 md:grid-cols-2 ${featured.length > 2 ? "lg:grid-cols-3" : ""}`}
          >
            {featured.map((c) => (
              <li key={c.slug} className="reveal">
                <CaseCard c={c} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* 4. Qué hago */}
      <Section aria-labelledby="que-hago" className="border-t border-border bg-surface">
        <SectionHeader id="que-hago" label="Qué hago" title="Tres cosas que hago bien" />
        <ol className="grid gap-6 md:grid-cols-3">
          {services.map(({ Icon, ...s }, i) => (
            <li key={s.title} className="reveal flex flex-col gap-3">
              <span
                aria-hidden
                className="inline-flex size-7 items-center justify-center rounded-md border border-border bg-bg text-ink-900"
              >
                <Icon size={24} stroke={1.5} />
              </span>
              <h3 className="text-h3">
                <span className="mr-2 font-mono text-small font-medium text-ink-500">0{i + 1}</span>
                {s.title}
              </h3>
              <p>{s.body}</p>
              <p className="text-small text-ink-500">
                Ej.:{" "}
                {s.href ? (
                  <Link
                    href={s.href}
                    data-cta={`home_service_${i + 1}`}
                    className="text-ink-700 underline underline-offset-4 hover:text-ink-900"
                  >
                    {s.example}
                  </Link>
                ) : (
                  s.example
                )}
              </p>
            </li>
          ))}
        </ol>
        <StackStrip className="mt-8" />
      </Section>

      {/* 5. Experiencia resumida */}
      <Section aria-labelledby="experiencia" className="border-t border-border">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <SectionHeader id="experiencia" label="Experiencia" title="Dónde he trabajado" flush />
          <Button
            href="/cv"
            variant="ghost"
            className="-mx-5"
            cta="home_cv_html"
            icon={<IconArrowRight size={20} stroke={1.5} aria-hidden />}
          >
            Ver el CV completo
          </Button>
        </div>
        <Timeline items={profile.experience.slice(0, 3)} compact />
      </Section>

      {/* 7. CTA final: segunda banda de identidad. */}
      <section aria-labelledby="cta-final" className="surface-inverse py-8 lg:py-9">
        <Container className="grid items-end gap-7 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mb-3 text-label-mono text-ink-500">Siguiente paso</p>
            <h2 id="cta-final" className="text-h1">
              ¿Buscas a alguien que construya y mida?
            </h2>
            <p className="mt-4 max-w-prose text-lead">
              Estoy buscando mi primer rol en MarTech, desarrollo web o automatización. Si tu equipo
              necesita a alguien que entienda el negocio y lo lleve a código, hablemos.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <CvButton location="final" />
            <Button href="/contacto" variant="secondary" size="lg" cta="final_contact">
              Escribirme
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
