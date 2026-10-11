import Link from "next/link";
import { Container } from "@/components/ui/container";
import { profile } from "@/content/profile";
import { formatDate } from "@/lib/format";
import { mainNav } from "@/lib/nav";

const linkClass =
  "inline-flex min-h-control-md items-center text-small text-ink-700 underline-offset-4 hover:text-ink-900 hover:underline";

const social = [
  { href: profile.links.linkedin, label: "LinkedIn", cta: "footer_linkedin" },
  { href: profile.links.github, label: "GitHub", cta: "footer_github" },
  { href: `mailto:${profile.links.email}`, label: "Email", cta: "footer_email" },
];

/** Pie con wordmark compacto, enlaces, redes y fecha del build (§19.2). */
export function Footer() {
  const buildDate = process.env.BUILD_DATE ?? profile.updatedAt;

  return (
    <footer className="border-t border-border bg-bg py-7">
      <Container className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-body font-medium text-brand">{profile.handle}</p>
          <p className="max-w-prose text-small text-ink-500">{profile.role}</p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
          <nav aria-label="Pie de página">
            <ul className="flex flex-col">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-cta={`footer_${item.href.slice(1)}`}
                    className={linkClass}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex flex-col" aria-label="Redes y contacto">
            {social.map((s) => (
              <li key={s.cta}>
                <a
                  href={s.href}
                  data-cta={s.cta}
                  className={linkClass}
                  {...(!s.href.startsWith("mailto:") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="mt-6">
        <p className="text-small text-ink-500">
          Actualizado: <time dateTime={buildDate}>{formatDate(buildDate)}</time>
        </p>
      </Container>
    </footer>
  );
}
