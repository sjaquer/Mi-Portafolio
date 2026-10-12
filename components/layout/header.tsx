import Link from "next/link";
import { Monogram, Wordmark } from "@/components/brand/wordmark";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { NavLink } from "@/components/layout/nav-link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { mainNav } from "@/lib/nav";

/** Header sticky de 64 px (§19.2). El borde inferior aparece al hacer scroll, solo con CSS. */
export function Header() {
  return (
    <header className="header-scroll sticky top-0 z-10 border-b border-transparent bg-bg">
      <Container className="flex h-header items-center justify-between gap-4">
        <Link
          href="/"
          data-cta="nav_home"
          className="-mx-2 flex min-h-control-md items-center gap-3 rounded-sm px-2 text-ink-900"
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
                    className="relative inline-flex min-h-control-md items-center rounded-md px-3 text-small font-semibold text-ink-700 hover:bg-surface-muted hover:text-ink-900 aria-[current=page]:text-ink-900 aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3 aria-[current=page]:after:bottom-1 aria-[current=page]:after:border-b-2 aria-[current=page]:after:border-ink-900 aria-[current=page]:after:content-['']"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <Button href="/cv" variant="secondary" size="sm" cta="header_cv">
            CV
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
