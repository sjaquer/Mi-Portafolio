"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Enlace de navegación que marca la sección actual con aria-current (WCAG: ubicación). */
export function NavLink({
  href,
  cta,
  className,
  children,
  onClick,
}: {
  href: string;
  cta: string;
  className: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      data-cta={cta}
      aria-current={active ? "page" : undefined}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
