import type { Metadata } from "next";
import { HeroFigure } from "@/components/brand/hero-figure";
import { MeasureRule } from "@/components/brand/measure-rule";
import { CvButton } from "@/components/sections/cv-button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { profile } from "@/content/profile";
import { jsonLdGraph, profilePageJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sobre mí",
  description:
    "Estudiante de Administración y Negocios Internacionales que construye herramientas web y automatizaciones para negocio, y mide si funcionan.",
  path: "/sobre-mi",
});

// 02-PRD.md §8.4. TODO(Sebastián): revisar la historia en primera persona y agregar la línea
// "fuera del trabajo" (no hay dato en los documentos).

const principles = [
  {
    title: "Problema de negocio antes que código",
    body: "Entiendo qué proceso se repite, cuánto tiempo cuesta y quién lo sufre antes de diseñar una tabla o un componente.",
  },
  {
    title: "Ninguna métrica sin contexto",
    body: "Si digo que algo mejoró, digo cuánto, frente a qué y en qué periodo. Si no lo medí, lo digo.",
  },
  {
    title: "Documentar como si hubiera un equipo",
    body: "Aunque sea el único desarrollador, dejo decisiones, arquitectura y despliegue por escrito para que otros puedan operar lo que construyo.",
  },
  {
    title: "Rápido y accesible por defecto",
    body: "Una herramienta que tarda o que no se puede usar con teclado es una herramienta que no se usa.",
  },
];

const learning = [
  "Google Analytics 4: preparo la certificación y aplico cada concepto en la medición de este sitio.",
  "Diseño de experiencia de usuario con el programa Google UX Design.",
  "Inglés: acreditación B1 en curso.",
];

export default function SobreMiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdGraph(profilePageJsonLd())).replace(/</g, "\\u003c"),
        }}
      />
      <Section tight className="hero-ambient">
        <div className="grid gap-7 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="mb-3 flex items-center gap-2 text-label-mono text-ink-500">
              <span aria-hidden className="size-2 shrink-0 rounded-full bg-current text-accent-600" />
              Sobre mí
            </p>
            <h1 className="text-h1">De Administración al código</h1>
            <div className="mt-6 flex max-w-prose flex-col gap-4">
              <p className="text-lead text-ink-900">
                Estudio Administración y Negocios Internacionales en la Universidad Norbert Wiener y
                egreso en diciembre de 2026. En el camino descubrí que lo que más me gusta es
                convertir un proceso manual en una herramienta que funcione sola.
              </p>
              <p>
                Como freelance, desarrollé integraciones para retail conectando Shopify, el CRM y
                Google Sheets para eliminar la digitación manual de pedidos, además de plataformas
                de gestión de inventarios (LogINV) y cobranzas (PrestaFacilito). En Big Jack Burgers
                construí, como único programador, el sistema de pedidos y cocina en tiempo real.
                Hoy, en la Dirección de Desarrollo Profesional y Alumni de la universidad, lideré la
                plataforma de empleabilidad y los flujos de comunicación con estudiantes.
              </p>
              <p>
                Mi formación en negocios es la razón por la que empiezo preguntando qué tiene que
                cambiar y cómo lo vamos a medir. El código viene después.
              </p>
            </div>
          </div>
          <div className="hidden md:col-span-4 md:block">
            <HeroFigure className="mx-auto max-w-xs" />
          </div>
        </div>
      </Section>

      <Section aria-labelledby="como-trabajo" className="border-t border-border">
        <SectionHeader id="como-trabajo" label="Cómo trabajo" title="Cuatro principios" tone="accent" />
        <ol className="grid gap-6 md:grid-cols-2">
          {principles.map((p, i) => (
            <li
              key={p.title}
              className="reveal case-card-surface flex flex-col gap-2 rounded-lg border border-border bg-surface p-5 shadow-sm"
            >
              <span className="font-mono text-label text-accent-600 tabular-nums">0{i + 1}</span>
              <h3 className="text-h3">{p.title}</h3>
              <p className="text-ink-700">{p.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section aria-labelledby="aprendiendo" className="border-t border-border">
        <SectionHeader id="aprendiendo" label="Ahora" title="Qué estoy aprendiendo" tone="cyan" />
        <ul className="flex max-w-prose list-disc flex-col gap-2 pl-5">
          {learning.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </Section>

      <section className="border-t border-border py-8 lg:py-9">
        <Container>
          <div className="reveal case-card-surface rounded-lg border border-border bg-surface p-6 shadow-sm lg:p-8">
            <MeasureRule className="mb-5" />
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <p className="max-w-prose text-lead text-ink-900">{profile.availability}.</p>
              <CvButton location="about" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
