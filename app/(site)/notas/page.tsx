import type { Metadata } from "next";
import { IconBrandLinkedin, IconRss } from "@tabler/icons-react";
import { NoteList } from "@/components/sections/note-list";
import { Section } from "@/components/ui/section";
import { notes } from "@/content/notas";
import { profile } from "@/content/profile";
import { readingTime } from "@/lib/reading-time";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Notas",
  description:
    "Notas cortas sobre lo que construyo y lo que estoy aprendiendo: automatización de procesos, integraciones, desarrollo web y medición.",
  path: "/notas",
});

// Índice del blog (02-PRD.md §8.6). La web es la versión canónica; LinkedIn, la distribución.
export default function NotasPage() {
  return (
    <>
      <Section>
        <p className="mb-3 text-label-mono text-ink-500">Notas</p>
        <h1 className="text-h1">Lo que estoy aprendiendo</h1>
        <p className="mt-4 max-w-prose text-lead">
          Notas cortas sobre proyectos reales: qué problema había, qué hice y qué aprendí. La
          conversación sigue en LinkedIn.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-small">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="notes_follow_linkedin"
            className="inline-flex min-h-control-md items-center gap-2 font-semibold text-accent-600 underline-offset-4 hover:underline"
          >
            <IconBrandLinkedin size={20} stroke={1.5} aria-hidden />
            Seguirme en LinkedIn
          </a>
          <a
            href="/rss.xml"
            data-cta="notes_rss"
            className="inline-flex min-h-control-md items-center gap-2 font-semibold text-accent-600 underline-offset-4 hover:underline"
          >
            <IconRss size={20} stroke={1.5} aria-hidden />
            RSS
          </a>
        </div>
      </Section>
      <Section aria-labelledby="notas-lista" className="border-t border-border">
        <h2 id="notas-lista" className="sr-only">
          Todas las notas
        </h2>
        <NoteList items={notes.map((n) => ({ n, minutes: readingTime(n.slug, "notas") }))} />
      </Section>
    </>
  );
}
