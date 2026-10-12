import {
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGoogleAnalytics,
  IconBrandNextjs,
  IconBrandPython,
  IconBrandReact,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandTypescript,
  IconDatabase,
} from "@tabler/icons-react";

const tools = [
  { Icon: IconBrandNextjs, name: "Next.js" },
  { Icon: IconBrandReact, name: "React" },
  { Icon: IconBrandTypescript, name: "TypeScript" },
  { Icon: IconBrandTailwind, name: "Tailwind CSS" },
  { Icon: IconDatabase, name: "PostgreSQL" },
  { Icon: IconBrandSupabase, name: "Supabase" },
  { Icon: IconBrandPython, name: "Python" },
  { Icon: IconBrandDocker, name: "Docker" },
  { Icon: IconBrandGoogleAnalytics, name: "GA4 · GTM" },
  { Icon: IconBrandFigma, name: "Figma" },
];

/** Herramientas con ícono de marca monocromo (03-DESIGN.md §7). */
export function StackStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`border-t border-border pt-6 ${className}`}>
      <p className="mb-4 text-label-mono text-ink-500">Herramientas con las que trabajo</p>
      <ul className="flex flex-wrap gap-x-6 gap-y-4">
        {tools.map(({ Icon, name }) => (
          <li key={name} className="flex items-center gap-2 text-small text-ink-700">
            <Icon size={20} stroke={1.5} aria-hidden className="text-ink-500" />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
