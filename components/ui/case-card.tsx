import Link from "next/link";
import { DraftNotice } from "@/components/ui/draft-notice";
import { caseTypeLabel, type CaseStudy } from "@/content/casos";

/**
 * Tarjeta de caso (§19.2, densidad §14.6): etiqueta (tipo · año), título y resultado.
 * El estado, el problema y el stack viven en la página del caso.
 * Toda la tarjeta es clicable con un solo enlace (el del título, extendido con ::after).
 */
export function CaseCard({ c, headingLevel = "h3" }: { c: CaseStudy; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const measured = c.result.measured ?? (/\d/.test(c.result.value) && /[%−+]/.test(c.result.value));
  return (
    <article className="group relative flex h-full flex-col gap-4 rounded-lg border border-border bg-surface p-5 transition duration-200 ease-standard hover:-translate-y-px hover:border-border-strong hover:shadow-md motion-reduce:hover:translate-y-0">
      <DraftNotice item={c} />
      <p className="text-label-mono text-ink-500">
        {caseTypeLabel[c.type]} · {c.year}
      </p>
      <Heading className="text-h3">
        <Link
          href={`/proyectos/${c.slug}`}
          data-cta={`case_card_${c.slug}`}
          className="group-hover:underline group-hover:underline-offset-4 after:absolute after:inset-0 after:rounded-lg after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-focus"
        >
          {c.title}
        </Link>
      </Heading>
      <p className="mt-auto border-t border-border pt-4 text-small text-ink-700">
        <span
          className={`mr-2 font-mono text-body font-semibold ${measured ? "text-success-700" : "text-ink-900"}`}
        >
          {c.result.value}
        </span>
        {c.result.label}
      </p>
    </article>
  );
}
