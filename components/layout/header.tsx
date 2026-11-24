import Link from "next/link";
import { Monogram, Wordmark } from "@/components/brand/wordmark";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { NavLink } from "@/components/layout/nav-link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/lib/nav";

/** Header flotante con vidrio técnico controlado (v6.0): cápsula centrada sobre el contenido. */
export function Header() {
  return (
    <header className="pointer-events-none sticky top-0 z-30 px-3 pt-3 sm:px-5">
      <div className="glass-surface header-float pointer-events-auto mx-auto flex h-header max-w-content items-center justify-between gap-4 rounded-full px-4 sm:px-5">
        <Link
          href="/"
          data-cta="nav_home"
          className="-mx-2 flex min-h-control-md items-center gap-3 rounded-full px-2 text-ink-900"
        >
          <Monogram className="hidden size-6 shrink-0 sm:block" labelled={false} />
          <Wordmark className="h-4 w-auto" />
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    cta={`nav_${item.href.slice(1)}`}
                    className="relative inline-flex min-h-control-md items-center rounded-full px-3 text-small font-semibold text-ink-700 transition-colors duration-150 ease-standard hover:bg-surface-muted hover:text-ink-900 aria-[current=page]:bg-surface-muted aria-[current=page]:text-ink-900 aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-4 aria-[current=page]:after:bottom-1 aria-[current=page]:after:border-b-2 aria-[current=page]:after:border-ink-900 aria-[current=page]:after:content-['']"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <Button href="/cv" variant="secondary" size="sm" cta="header_cv" className="rounded-full">
            CV
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
