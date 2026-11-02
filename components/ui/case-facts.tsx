import { IconArrowUpRight } from "@tabler/icons-react";
import { StatusBadge } from "@/components/ui/status-badge";
import { TagList } from "@/components/ui/tag";
import type { CaseStudy } from "@/content/casos";

/** Ficha del caso como lista de definiciones (§19.2). */
export function CaseFacts({ c }: { c: CaseStudy }) {
  const rows = [
    ["Contexto", c.context],
    ["Mi rol", c.role],
    ["Duración", c.duration],
  ] as const;
  return (
    <dl className="grid gap-5 rounded-lg border border-border bg-surface p-5 sm:grid-cols-2">
      {rows.map(([term, value]) => (
        <div key={term} className="flex flex-col gap-1">
          <dt className="text-label-mono text-ink-500">{term}</dt>
          <dd className="text-ink-900">{value}</dd>
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <dt className="text-label-mono text-ink-500">Estado</dt>
        <dd>
          <StatusBadge status={c.status} />
        </dd>
      </div>
      {c.links && (
        <div className="flex flex-col gap-2 sm:col-span-2">
          <dt className="text-label-mono text-ink-500">Enlace oficial</dt>
          <dd className="flex flex-wrap gap-x-5">
            {c.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cta={`case_${c.slug.replace(/-/g, "_")}_official_link`}
                className="inline-flex min-h-control-md items-center gap-1 font-semibold text-accent-600 underline-offset-4 hover:underline"
              >
                {l.label}
                <IconArrowUpRight size={16} stroke={1.5} aria-hidden />
                <span className="sr-only">(se abre en una pestaña nueva)</span>
              </a>
            ))}
          </dd>
        </div>
      )}
      <div className="flex flex-col gap-2 sm:col-span-2">
        <dt className="text-label-mono text-ink-500">Stack</dt>
        <dd>
          <TagList label="Stack" items={c.stack} />
        </dd>
      </div>
    </dl>
  );
}
