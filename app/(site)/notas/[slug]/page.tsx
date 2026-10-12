import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IconArrowLeft, IconBrandLinkedin, IconMessageCircle } from "@tabler/icons-react";
import { PostTracker } from "@/components/analytics/post-tracker";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PostCard } from "@/components/ui/post-card";
import { getNote, notes, pillarLabel } from "@/content/notas";
import { profile } from "@/content/profile";
import { formatDate } from "@/lib/format";
import { jsonLdGraph } from "@/lib/jsonld";
import { readingTime } from "@/lib/reading-time";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps<"/notas/[slug]">): Promise<Metadata> {
  const n = getNote((await params).slug)!;
  return pageMetadata({ title: n.title, description: n.description, path: `/notas/${n.slug}` });
}

// Nota (02-PRD.md §8.6): cuerpo en MDX, cierre con LinkedIn y nota relacionada.
export default async function NotePage({ params }: PageProps<"/notas/[slug]">) {
  const { slug } = await params;
  const n = getNote(slug);
  if (!n) notFound();

  const { default: Body } = await import(`@/content/notas/${slug}.mdx`);
  const minutes = readingTime(slug, "notas");
  const related =
    notes.find((o) => o.slug !== slug && o.pillar === n.pillar) ??
    notes.find((o) => o.slug !== slug);
  const url = `${profile.siteUrl}/notas/${n.slug}`;

  const jsonLd = jsonLdGraph(
    {
      "@type": "BlogPosting",
      headline: n.title,
      description: n.description,
      datePublished: n.date,
      dateModified: n.date,
      inLanguage: "es-PE",
      url,
      mainEntityOfPage: url,
      image: `${url}/opengraph-image`,
      author: { "@id": `${profile.siteUrl}/#person` },
      publisher: { "@id": `${profile.siteUrl}/#person` },
      articleSection: pillarLabel[n.pillar],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: profile.siteUrl },
        { "@type": "ListItem", position: 2, name: "Notas", item: `${profile.siteUrl}/notas` },
        { "@type": "ListItem", position: 3, name: n.title, item: url },
      ],
    },
  );

  return (
    <article>
      <PostTracker slug={n.slug} pillar={n.pillar} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Container className="pt-6 pb-8 lg:pb-9">
        <Button href="/notas" variant="ghost" size="sm" cta="post_back" className="mb-6 -ml-4">
          <IconArrowLeft size={16} stroke={1.5} aria-hidden />
          Notas
        </Button>
        <header className="max-w-prose">
          <p className="mb-3 text-label-mono text-ink-500">
            {pillarLabel[n.pillar]} · <time dateTime={n.date}>{formatDate(n.date)}</time> ·{" "}
            {minutes} min de lectura
          </p>
          <h1 className="text-h1">{n.title}</h1>
          <p className="mt-4 text-lead">{n.description}</p>
        </header>
        <div className="mt-8 border-t border-border pt-8 text-body">
          <Body />
        </div>

        {/* Cierre: la conversación sigue en LinkedIn (06-CONTENIDO.md §5). */}
        <aside
          aria-label="Seguir la conversación"
          className="mt-8 flex max-w-prose flex-col gap-4 rounded-lg border border-border bg-surface p-5"
        >
          <p className="font-semibold text-ink-900">
            ¿Te sirvió? La conversación sigue en LinkedIn.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            {n.linkedinUrl && (
              <Button
                href={n.linkedinUrl}
                external
                variant="secondary"
                cta="post_comment_linkedin"
                className="w-full sm:w-auto"
                icon={<IconMessageCircle size={20} stroke={1.5} aria-hidden />}
              >
                Comentar en LinkedIn
              </Button>
            )}
            <Button
              href={profile.links.linkedin}
              external
              variant="secondary"
              cta="post_follow_linkedin"
              className="w-full sm:w-auto"
              icon={<IconBrandLinkedin size={20} stroke={1.5} aria-hidden />}
            >
              Seguirme en LinkedIn
            </Button>
          </div>
        </aside>
      </Container>

      {related && (
        <section aria-labelledby="relacionada" className="border-t border-border bg-surface py-8">
          <Container>
            <h2 id="relacionada" className="mb-5 text-label-mono text-ink-500">
              Otra nota
            </h2>
            <div className="max-w-prose">
              <PostCard n={related} minutes={readingTime(related.slug, "notas")} />
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}
