import type { Metadata } from "next";
import { IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Timeline } from "@/components/ui/timeline";
import { profile } from "@/content/profile";
import { cvPdfPath, hasCvPdf } from "@/lib/cv";
import { formatDate, formatRange } from "@/lib/format";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "CV",
  description: `CV de ${profile.name}: ${profile.role}. Experiencia, educación, certificaciones e idiomas.`,
  path: "/cv",
});

// CV en HTML generado desde la fuente única (02-PRD.md §8.5).
function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section
      aria-labelledby={id}
      className="grid gap-4 border-t border-border py-7 md:grid-cols-12 md:gap-5"
    >
      <h2 id={id} className="text-label-mono text-ink-500 md:col-span-3">
        {title}
      </h2>
      <div className="md:col-span-9">{children}</div>
    </section>
  );
}

export default function CvPage() {
  return (
    <Container className="py-8 lg:py-9">
      <header className="flex flex-col gap-5 pb-7 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-h1">{profile.fullName}</h1>
          <p className="mt-3 text-lead text-ink-900">{profile.role}</p>
          <p className="mt-2 text-small text-ink-500">
            {profile.location} ·{" "}
            <a
              href={`mailto:${profile.links.email}`}
              className="underline underline-offset-4 hover:text-ink-900"
            >
              {profile.links.email}
            </a>{" "}
            ·{" "}
            <a
              href={profile.links.linkedin}
              className="underline underline-offset-4 hover:text-ink-900"
            >
              LinkedIn
            </a>{" "}
            ·{" "}
            <a
              href={profile.links.github}
              className="underline underline-offset-4 hover:text-ink-900"
            >
              GitHub
            </a>
          </p>
        </div>
        {hasCvPdf && (
          <Button
            href={cvPdfPath}
            download
            size="lg"
            cta="cv_page_download"
            icon={<IconDownload size={20} stroke={1.5} aria-hidden />}
          >
            Descargar PDF
          </Button>
        )}
      </header>

      <Block id="perfil" title="Perfil">
        <p className="max-w-prose text-lead text-ink-900">{profile.tagline}</p>
        <p className="mt-3 max-w-prose">{profile.summary}</p>
        <p className="mt-3 text-small text-ink-500">{profile.availability}.</p>
      </Block>

      <Block id="experiencia" title="Experiencia">
        <Timeline items={profile.experience} />
      </Block>

      <Block id="educacion" title="Educación">
        <ul className="flex flex-col gap-3">
          {profile.education.map((e) => (
            <li key={e.org}>
              <p className="font-semibold text-ink-900">{e.degree}</p>
              <p>
                {e.org} ·{" "}
                <span className="font-mono text-small text-ink-500">
                  {formatRange(e.from, e.to)}
                </span>
              </p>
              <p className="text-small text-ink-500">{e.status}</p>
            </li>
          ))}
        </ul>
      </Block>

      <Block id="certificaciones" title="Certificaciones">
        <ul className="flex flex-col gap-2">
          {profile.certifications.map((c) => (
            <li key={c.name}>
              <span className="text-ink-900">{c.name}</span>{" "}
              <span className="text-ink-500">
                · {c.issuer}, {c.year}
              </span>
            </li>
          ))}
          {profile.certificationsInProgress.map((c) => (
            <li key={c.name}>
              <span className="text-ink-900">{c.name}</span>{" "}
              <span className="text-ink-500">· {c.issuer} · en curso</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block id="habilidades" title="Habilidades">
        <dl className="flex flex-col gap-3">
          {(
            [
              ["Desarrollo web", profile.skills.web],
              ["Backend y datos", profile.skills.data],
              ["Marketing y analítica", profile.skills.martech],
              ["Automatización e integraciones", profile.skills.automation],
            ] as const
          ).map(([term, items]) => (
            <div key={term}>
              <dt className="font-semibold text-ink-900">{term}</dt>
              <dd>{items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block id="idiomas" title="Idiomas">
        <ul className="flex flex-col gap-1">
          {profile.languages.map((l) => (
            <li key={l.name}>
              <span className="text-ink-900">{l.name}:</span> {l.level}
            </li>
          ))}
        </ul>
      </Block>

      <p className="border-t border-border pt-5 text-small text-ink-500">
        Actualizado: <time dateTime={profile.updatedAt}>{formatDate(profile.updatedAt)}</time>
      </p>
    </Container>
  );
}
