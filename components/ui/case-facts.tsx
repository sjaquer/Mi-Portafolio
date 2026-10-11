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
      <div className="flex flex-col gap-2 sm:col-span-2">
        <dt className="text-label-mono text-ink-500">Stack</dt>
        <dd>
          <TagList label="Stack" items={c.stack} />
        </dd>
      </div>
    </dl>
  );
}
