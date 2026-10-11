import Link from "next/link";
import { TagList } from "@/components/ui/tag";
import { StatusBadge } from "@/components/ui/status-badge";
import { caseTypeLabel, type CaseStudy } from "@/content/casos";

/**
 * Tarjeta de caso (§19.2): toda la tarjeta es clicable con un solo enlace
 * (el del título, extendido con ::after), así el lector de pantalla oye un único destino.
 */
export function CaseCard({ c, headingLevel = "h3" }: { c: CaseStudy; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const numeric = /\d/.test(c.result.value) && /[%−+]/.test(c.result.value);
  return (
    <article className="group relative flex h-full flex-col gap-5 rounded-lg border border-border bg-surface p-5 transition-shadow duration-150 ease-standard hover:shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-label-mono text-ink-500">
          {caseTypeLabel[c.type]} · {c.year}
        </span>
        <StatusBadge status={c.status} />
      </div>

      <div className="flex flex-col gap-3">
        <Heading className="text-h3">
          <Link
            href={`/proyectos/${c.slug}`}
            data-cta={`case_card_${c.slug}`}
            className="group-hover:underline group-hover:underline-offset-4 after:absolute after:inset-0 after:rounded-lg after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-focus"
          >
            {c.title}
          </Link>
        </Heading>
        <p className="text-ink-700">{c.problem}</p>
      </div>

      <div className="mt-auto flex flex-col gap-1 border-t border-border pt-4">
        <p
          className={
            numeric
              ? "font-mono text-h3 font-semibold text-success-700"
              : "font-mono text-h3 font-semibold text-ink-900"
          }
        >
          {c.result.value}
        </p>
        <p className="text-small text-ink-700">{c.result.label}</p>
      </div>

      <TagList label="Stack" items={c.stack} />
    </article>
  );
}
