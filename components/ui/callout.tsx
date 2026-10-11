import { IconAlertTriangle, IconBulb } from "@tabler/icons-react";
import type { ReactNode } from "react";

interface Props {
  title: string;
  variant?: "info" | "warning";
  children: ReactNode;
}

/** Aprendizaje o advertencia dentro de un caso (§19.2). Ícono + texto, nunca solo color. */
export function Callout({ title, variant = "info", children }: Props) {
  const warning = variant === "warning";
  const Icon = warning ? IconAlertTriangle : IconBulb;
  return (
    <aside
      className={`my-6 flex gap-3 rounded-lg border p-5 ${
        warning ? "border-warning-700/40 bg-surface" : "border-border bg-surface-muted"
      }`}
    >
      <Icon
        size={20}
        stroke={1.5}
        aria-hidden
        className={`mt-1 shrink-0 ${warning ? "text-warning-700" : "text-ink-500"}`}
      />
      <div className="flex flex-col gap-2 [&_p]:m-0">
        <p className="font-semibold text-ink-900">{title}</p>
        <div className="text-ink-700">{children}</div>
      </div>
    </aside>
  );
}
