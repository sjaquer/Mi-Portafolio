import { IconArrowRight, IconChartDots3, IconRoute, IconBrowser } from "@tabler/icons-react";
import Link from "next/link";
import { DraftNotice } from "@/components/ui/draft-notice";
import { MediaFrame } from "@/components/ui/media-frame";
import { caseTypeLabel, type CaseStudy, type CaseType } from "@/content/casos";

const typeIcon: Record<CaseType, typeof IconBrowser> = {
  web: IconBrowser,
  automatizacion: IconRoute,
  datos: IconChartDots3,
};

interface Props {
  c: CaseStudy;
  image: string | null;
  minutes: number;
  /** featured: imagen grande al lado · row: miniatura al lado · card: imagen arriba. */
  variant?: "featured" | "row" | "card";
  headingLevel?: "h2" | "h3";
  /** Solo para la primera imagen visible de la página (LCP). */
  priority?: boolean;
}

/**
 * Caso en formato de artículo (03-DESIGN.md §19.2): imagen, antetítulo (tipo · año ·
 * lectura), titular, bajada y resultado. Toda la pieza es clicable con un solo enlace.
 */
export function CaseArticle({
  c,
  image,
  minutes,
  variant = "row",
  headingLevel = "h3",
  priority,
}: Props) {
  const Heading = headingLevel;
  const featured = variant === "featured";
  const layout = {
    featured: {
      root: "md:grid-cols-12 md:items-center md:gap-7",
      media: "md:col-span-6",
      body: "md:col-span-6",
    },
    row: {
      root: "sm:grid-cols-12 sm:gap-6",
      media: "sm:col-span-5 lg:col-span-4",
      body: "sm:col-span-7 lg:col-span-8",
    },
    card: { root: "", media: "", body: "" },
  }[variant];
  const measured = c.result.measured ?? (/\d/.test(c.result.value) && /[%−+]/.test(c.result.value));

  return (
    <article className={`group relative grid gap-5 ${layout.root}`}>
      <MediaFrame
        src={image}
        alt=""
        ratio="video"
        icon={typeIcon[c.type]}
        priority={priority}
        sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
        className={layout.media}
      />
      <div className={`flex flex-col gap-3 ${layout.body}`}>
        <DraftNotice item={c} />
        <p className="text-label-mono text-ink-500">
          {caseTypeLabel[c.type]} · {c.year} · {minutes} min de lectura
        </p>
        <Heading className={featured ? "text-h2" : "text-h3"}>
          <Link
            href={`/proyectos/${c.slug}`}
            data-cta={`case_article_${c.slug}`}
            className="decoration-1 underline-offset-4 group-hover:underline after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-lg focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-focus"
          >
            {c.title}
          </Link>
        </Heading>
        <p className={featured ? "text-lead text-ink-700" : "text-ink-700"}>{c.subtitle}</p>
        <p className="text-small text-ink-700">
          <span
            className={`mr-2 font-mono text-body font-semibold ${measured ? "text-success-700" : "text-ink-900"}`}
          >
            {c.result.value}
          </span>
          {c.result.label}
        </p>
        <span
          aria-hidden
          className="mt-1 inline-flex items-center gap-2 text-small font-semibold text-accent-600"
        >
          Leer el caso
          <IconArrowRight
            size={16}
            stroke={1.5}
            className="transition-transform duration-200 ease-standard group-hover:translate-x-1 motion-reduce:transform-none"
          />
        </span>
      </div>
    </article>
  );
}
