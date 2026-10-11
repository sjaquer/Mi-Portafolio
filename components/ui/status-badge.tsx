import { IconCircleCheck, IconFlask, IconPackage, IconProgressCheck } from "@tabler/icons-react";
import { caseStatusLabel, type CaseStatus } from "@/content/casos";

const icons = {
  produccion: IconCircleCheck,
  qa: IconProgressCheck,
  entregado: IconPackage,
  prototipo: IconFlask,
};

/** Estado de un proyecto (§19.2): ícono + texto, nunca solo color. */
export function StatusBadge({ status }: { status: CaseStatus }) {
  const Icon = icons[status];
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-small text-ink-700">
      <Icon size={16} stroke={1.5} aria-hidden />
      {caseStatusLabel[status]}
    </span>
  );
}
