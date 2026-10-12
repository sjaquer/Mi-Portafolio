import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMapPin,
  IconBriefcase,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { Monogram } from "@/components/brand/wordmark";
import { TagList } from "@/components/ui/tag";
import { profile } from "@/content/profile";

const current = profile.experience[0];

const rows = [
  {
    Icon: IconBriefcase,
    term: "Ahora",
    value: `${current.title.split(" — ")[0]} · ${current.org.replace("Universidad Privada ", "U. ")}`,
  },
  { Icon: IconCalendarEvent, term: "Disponibilidad", value: "Roles junior desde ene 2027" },
  { Icon: IconMapPin, term: "Ubicación", value: `${profile.location} · remoto` },
];

const iconLink =
  "inline-flex size-control-md items-center justify-center rounded-md border border-border text-ink-700 transition-colors duration-150 ease-standard hover:border-border-strong hover:text-ink-900";

/** Ficha de perfil del hero (03-DESIGN.md §10.6 v3.0): información en lugar de un placeholder. */
export function ProfileCard() {
  return (
    <aside
      aria-label="Ficha de perfil"
      className="relative rounded-lg border border-border bg-surface p-5 shadow-md"
    >
      <div className="flex items-center gap-4">
        <Monogram className="size-7 shrink-0" labelled={false} />
        <div className="min-w-0">
          <p className="font-semibold text-ink-900">{profile.name}</p>
          <p className="text-small text-ink-500">{profile.role}</p>
        </div>
      </div>

      <dl className="mt-5 flex flex-col gap-3 border-t border-border pt-5">
        {rows.map(({ Icon, term, value }) => (
          <div key={term} className="flex flex-col gap-1">
            <dt className="flex items-center gap-2 text-label-mono text-ink-500">
              <Icon size={16} stroke={1.5} aria-hidden className="shrink-0" />
              {term}
            </dt>
            <dd className="pl-5 text-small text-ink-900">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 border-t border-border pt-5">
        <TagList
          label="Stack principal"
          items={["Next.js", "TypeScript", "PostgreSQL", "GA4", "GTM"]}
        />
      </div>

      <div className="mt-5 flex gap-2">
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="profile_linkedin"
          aria-label="LinkedIn de Sebastián Jaque"
          className={iconLink}
        >
          <IconBrandLinkedin size={20} stroke={1.5} aria-hidden />
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="profile_github"
          aria-label="GitHub de Sebastián Jaque"
          className={iconLink}
        >
          <IconBrandGithub size={20} stroke={1.5} aria-hidden />
        </a>
      </div>
    </aside>
  );
}
