import { IconArrowRight } from "@tabler/icons-react";
import { AvatarIllustration } from "@/components/brand/avatar-illustration";
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

const bigJack = cases.find((c) => c.slug === "pedidos-big-jack")!;
const wiener = cases.find((c) => c.slug === "bolsa-de-trabajo-wiener")!;
const dearel = profile.experience.find((e) => e.org === "Dearel")!;

const proof = [
  { ...bigJack.result, context: `Big Jack Burgers · ${bigJack.result.context}` },
  { ...dearel.metric!, context: "Dearel · ago – nov 2025" },
  {
    value: "Oct 2026",
    label: "lanzamiento de la plataforma de empleabilidad",
    context: "Universidad Norbert Wiener · único desarrollador",
  },
];

const services = [
  {
    title: "Sitios y herramientas web",
    body: "Next.js, PostgreSQL y Docker.",
    example: "Bolsa de trabajo con CMS por roles.",
  },
  {
    title: "Automatización e integraciones",
    body: "APIs, WhatsApp, email transaccional.",
    example: "Campañas segmentadas por facultad y ciclo.",
  },
  {
    title: "Medición y conversión",
    body: "GA4, GTM, embudos.",
    example: "Este sitio, instrumentado de punta a punta.",
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

      {/* 1. Hero */}
      <section aria-labelledby="hero-title" className="pt-7 pb-8 lg:pt-10 lg:pb-9">
        <Container className="grid items-center gap-7 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="mb-4 text-label-mono text-ink-500">
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
          <div className="hidden md:col-span-4 md:block">
            <AvatarIllustration className="w-full rounded-lg border border-border" />
          </div>
        </Container>
      </section>

      {/* 2. Prueba rápida */}
      <Section aria-labelledby="resultados" className="border-t border-border">
        <h2 id="resultados" className="mb-6 text-label-mono text-ink-500">
          Resultados
        </h2>
        <ul className="grid gap-5 md:grid-cols-3">
          {proof.map((m) => (
            <li key={m.label} className="border-l-2 border-border pl-5">
              <Metric {...m} />
            </li>
          ))}
        </ul>
      </Section>

      {/* 3. Casos destacados */}
      <Section aria-labelledby="casos" className="border-t border-border">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <SectionHeader id="casos" label="Casos" title="Proyectos con resultado" flush />
          <Button
            href="/proyectos"
            variant="ghost"
            className="-mx-5"
            cta="home_all_projects"
            icon={<IconArrowRight size={20} stroke={1.5} aria-hidden />}
          >
            Ver todos los proyectos
          </Button>
        </div>
        <ul className="grid gap-5 md:grid-cols-2">
          {[wiener, bigJack].map((c) => (
            <li key={c.slug}>
              <CaseCard c={c} />
            </li>
          ))}
        </ul>
      </Section>

      {/* 4. Qué hago */}
      <Section aria-labelledby="que-hago" className="border-t border-border">
        <SectionHeader id="que-hago" label="Qué hago" title="Tres cosas que hago bien" />
        <ol className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-2">
              <span className="font-mono text-small text-ink-500">0{i + 1}</span>
              <h3 className="text-h3">{s.title}</h3>
              <p>{s.body}</p>
              <p className="text-small text-ink-500">Ej.: {s.example}</p>
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
            variant="ghost"
            className="-mx-5"
            cta="home_cv_html"
            icon={<IconArrowRight size={20} stroke={1.5} aria-hidden />}
          >
            Ver el CV completo
          </Button>
        </div>
        <Timeline items={profile.experience} compact />
      </Section>

      {/* 7. CTA final */}
      <section
        aria-labelledby="cta-final"
        className="border-t border-border bg-surface py-8 lg:py-9"
      >
        <Container>
          <div className="max-w-prose">
            <h2 id="cta-final" className="text-h2">
              ¿Buscas a alguien que construya y mida?
            </h2>
            <p className="mt-4 text-lead">
              Estoy buscando mi primer rol en MarTech, desarrollo web o automatización. Si tu equipo
              necesita a alguien que entienda el negocio y lo lleve a código, hablemos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CvButton location="final" />
              <Button href="/contacto" variant="secondary" size="lg" cta="final_contact">
                Escribirme
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
