import Link from "next/link";
import { ConsentPreferencesButton } from "@/components/analytics/consent-banner";
import { MeasureRule } from "@/components/brand/measure-rule";
import { Container } from "@/components/ui/container";
import { profile } from "@/content/profile";
import { formatDate } from "@/lib/format";
import { mainNav } from "@/lib/nav";

const linkClass =
  "inline-flex min-h-control-md items-center text-small text-ink-700 underline-offset-4 hover:text-ink-900 hover:underline";

const legalLink =
  "inline-flex min-h-control-md items-center text-small text-ink-500 underline-offset-4 hover:text-ink-900 hover:underline";

const social = [
  { href: profile.links.linkedin, label: "LinkedIn", cta: "footer_linkedin" },
  { href: profile.links.github, label: "GitHub", cta: "footer_github" },
  { href: `mailto:${profile.links.email}`, label: "Email", cta: "footer_email" },
];

/** Pie con wordmark compacto, la regla de medición y tres columnas de navegación (§19.2). */
export function Footer() {
  const buildDate = process.env.BUILD_DATE ?? profile.updatedAt;
  const year = new Date(buildDate).getFullYear();

  return (
    <footer className="border-t border-border bg-bg py-7">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <p className="font-mono text-body font-medium text-brand">{profile.handle}</p>
            <MeasureRule className="mt-3" />
            <p className="mt-3 max-w-prose text-small text-ink-500">{profile.role}</p>
            <p className="mt-1 text-small text-ink-500">{profile.location} · remoto</p>
          </div>

          <nav aria-label="Pie de página" className="md:col-span-2">
            <p className="text-label-mono text-ink-500">Sitio</p>
            <ul className="mt-2 flex flex-col">
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

          <nav aria-label="Redes y contacto" className="md:col-span-2">
            <p className="text-label-mono text-ink-500">Contacto</p>
            <ul className="mt-2 flex flex-col">
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
          </nav>

          <nav aria-label="Legal" className="col-span-2 md:col-span-3">
            <p className="text-label-mono text-ink-500">Legal</p>
            <ul className="mt-2 flex flex-col">
              <li>
                <Link href="/privacidad" data-cta="footer_privacy" className={legalLink}>
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" data-cta="footer_terms" className={legalLink}>
                  Condiciones de uso
                </Link>
              </li>
              <li>
                <ConsentPreferencesButton className={legalLink} />
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <p className="text-small text-ink-500">
            Actualizado: <time dateTime={buildDate}>{formatDate(buildDate)}</time>
          </p>
          <p className="text-small text-ink-500">
            © {year} {profile.name}
          </p>
        </div>

        {/* Firma de cierre (v4.3): el handle de borde a borde, en tono fantasma. Es un
            gráfico (SVG con textLength), no texto: ocupa justo el ancho en cualquier
            pantalla y no entra en el cálculo de contraste. El nombre ya está en el pie. */}
        <svg
          aria-hidden
          focusable="false"
          viewBox="0 0 420 100"
          className="mt-6 block h-auto w-full select-none"
        >
          <text
            x={0}
            y={76}
            textLength={420}
            lengthAdjust="spacingAndGlyphs"
            className="fill-border font-mono"
            fontSize={100}
            fontWeight={600}
          >
            {profile.handle}
          </text>
        </svg>
      </Container>
    </footer>
  );
}
