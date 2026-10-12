import {
  IconArrowRight,
  IconBrowser,
  IconCalendarEvent,
  IconMapPin,
  IconPlugConnected,
  IconRoute,
} from "@tabler/icons-react";
import Link from "next/link";
import { CvButton } from "@/components/sections/cv-button";
import { Button } from "@/components/ui/button";
import { CaseArticle } from "@/components/ui/case-article";
import { MediaFrame } from "@/components/ui/media-frame";
import { PostCard } from "@/components/ui/post-card";
import { Container } from "@/components/ui/container";
import { Metric } from "@/components/ui/metric";
import { Section, SectionHeader } from "@/components/ui/section";
import { Timeline } from "@/components/ui/timeline";
import { cases } from "@/content/casos";
import { notes } from "@/content/notas";
import { profile } from "@/content/profile";
import { findImage } from "@/lib/images";
import { jsonLdGraph, profilePageJsonLd } from "@/lib/jsonld";
import { readingTime } from "@/lib/reading-time";

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
    title: "Desarrollo web y herramientas internas",
    body: "Next.js, TypeScript, PostgreSQL y Docker.",
    example: "Plataforma de empleabilidad con 5 roles y acceso con Microsoft.",
    href: "/proyectos/bolsa-de-trabajo-wiener",
  },
  {
    Icon: IconRoute,
    title: "Automatización de procesos y bots",
    body: "Python, Playwright (RPA), bots y Power Automate.",
    example: "Robot de consultas SUNAT y bots de filtrado de candidatos.",
    href: undefined,
  },
  {
    Icon: IconPlugConnected,
    title: "Integración de APIs y comunicación",
    body: "APIs REST, webhooks, Shopify, CRM y email transaccional.",
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

      {/* 1. Hero: fondo tonal (§6.7), texto + espacio de retrato (§10.6). La entrada solo
          mueve (no aparece desde transparente) para no retrasar el LCP. */}
      <section
        aria-labelledby="hero-title"
        className="relative isolate overflow-hidden bg-(image:--gradient-hero) pt-7 pb-8 lg:pt-9 lg:pb-9"
      >
        <div aria-hidden className="dot-grid absolute inset-0 -z-10" />
        <Container className="grid items-center gap-7 lg:grid-cols-12 lg:gap-8">
          <div className="hero-in lg:col-span-7">
            <p className="text-label-mono text-ink-500">{profile.role}</p>
            <h1 id="hero-title" className="mt-4 text-display">
              {profile.name}
            </h1>
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
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <MediaFrame
              src={findImage("retrato")}
              alt={`Retrato de ${profile.name}`}
              ratio="portrait"
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 66vw, 75vw"
              priority
              className="mx-auto w-3/4 shadow-md sm:w-2/3 lg:w-full"
            />
          </div>
        </Container>
      </section>

      {/* 2. Prueba rápida: banda de identidad (§6.7, §15.4). */}
      <section aria-labelledby="resultados" className="surface-inverse py-8 lg:py-9">
        <Container>
          <h2 id="resultados" className="mb-6 text-label-mono text-ink-500">
            Resultados medidos
          </h2>
          <ul className="grid gap-6 md:grid-cols-3">
            {proof.map((m) => (
              <li key={m.label} className="reveal border-l-2 border-border pl-5">
                <Metric {...m} />
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
                image={findImage(`casos/${featured[0].slug}`)}
                minutes={readingTime(featured[0].slug)}
                variant="featured"
              />
            </div>
            <ul className="grid gap-7 border-t border-border pt-8 md:grid-cols-2">
              {featured.slice(1).map((c) => (
                <li key={c.slug} className="reveal">
                  <CaseArticle
                    c={c}
                    image={findImage(`casos/${c.slug}`)}
                    minutes={readingTime(c.slug)}
                    variant="card"
                  />
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
          {services.map(({ Icon, ...s }, i) => (
            <li key={s.title} className="reveal flex flex-col gap-3">
              <span
                aria-hidden
                className="inline-flex size-7 items-center justify-center rounded-md border border-border bg-bg text-ink-900"
              >
                <Icon size={24} stroke={1.5} />
              </span>
              <h3 className="text-h3">{s.title}</h3>
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

      {/* 6. Últimas notas (02-PRD.md §8.1). */}
      {notes.length > 0 && (
        <Section aria-labelledby="notas" className="border-t border-border">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <SectionHeader id="notas" label="Notas" title="Lo que estoy aprendiendo" flush />
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
              <li key={n.slug} className="reveal border-t border-border pt-5">
                <PostCard n={n} minutes={readingTime(n.slug, "notas")} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* 7. CTA final */}
      <section aria-labelledby="cta-final" className="border-t border-border py-8 lg:py-9">
        <Container className="grid items-end gap-7 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="cta-final" className="text-h2">
              ¿Buscas a alguien que entienda el negocio y lo lleve a código?
            </h2>
            <p className="mt-4 max-w-prose text-lead">
              Disponible para roles junior desde enero 2027 como desarrollador web, analista de
              automatización o desarrollador de soluciones. Si tu equipo necesita conectar sistemas
              y ahorrar tiempo operativo, conversemos.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
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
        </Container>
      </section>
    </>
  );
}
