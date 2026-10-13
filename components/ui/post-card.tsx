import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { PillarMotif } from "@/components/brand/pillar-motif";
import { pillarLabel, type Note } from "@/content/notas";
import { formatDate } from "@/lib/format";

/**
 * Nota del blog (§19.2): motivo del pilar, antetítulo (pilar · fecha · lectura), titular y
 * bajada. Mismo lenguaje que CaseArticle. Toda la pieza es clicable.
 */
export function PostCard({
  n,
  minutes,
  headingLevel = "h3",
  variant = "card",
}: {
  n: Note;
  minutes: number;
  headingLevel?: "h2" | "h3";
  /** card: motivo arriba · row: motivo al lado (índice de /notas). */
  variant?: "card" | "row";
}) {
  const Heading = headingLevel;
  const row = variant === "row";
  return (
    <article
      className={`group relative grid h-full gap-3 ${row ? "sm:grid-cols-12 sm:gap-6" : "grid-rows-[auto_auto_auto_1fr_auto]"}`}
    >
      <PillarMotif pillar={n.pillar} className={row ? "sm:col-span-5 lg:col-span-4" : "mb-2"} />
      <div className={`flex flex-col gap-3 ${row ? "sm:col-span-7 lg:col-span-8" : "contents"}`}>
        <p className="text-label-mono text-ink-500">
          {pillarLabel[n.pillar]} · <time dateTime={n.date}>{formatDate(n.date)}</time> · {minutes}{" "}
          min
        </p>
        <Heading className="text-h3">
          <Link
            href={`/notas/${n.slug}`}
            data-cta={`post_card_${n.slug}`}
            className="decoration-1 underline-offset-4 group-hover:underline after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-md focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-focus"
          >
            {n.title}
          </Link>
        </Heading>
        <p className="text-ink-700">{n.description}</p>
        <span
          aria-hidden
          className="mt-auto inline-flex items-center gap-2 text-small font-semibold text-accent-600"
        >
          Leer la nota
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
