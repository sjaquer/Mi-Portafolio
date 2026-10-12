"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { useRef } from "react";
import { NavLink } from "@/components/layout/nav-link";
import { mainNav } from "@/lib/nav";

const iconButton =
  "inline-flex size-control-md items-center justify-center rounded-md text-ink-900 hover:bg-surface-muted";

/**
 * Menú móvil con <dialog> modal: trampa de foco, Escape y fondo inerte nativos.
 * Al cerrar, el foco vuelve al botón que lo abrió.
 */
export function MobileMenu() {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className={iconButton}
        aria-haspopup="dialog"
        aria-label="Abrir menú"
        data-cta="nav_menu_open"
        onClick={() => dialog.current?.showModal()}
      >
        <IconMenu2 size={24} stroke={1.5} aria-hidden />
      </button>

      <dialog
        ref={dialog}
        aria-label="Menú"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-bg p-0 text-ink-900 backdrop:bg-ink-900/40"
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
      >
        <div className="flex h-header items-center justify-end border-b border-border px-4">
          <button
            type="button"
            className={iconButton}
            aria-label="Cerrar menú"
            data-cta="nav_menu_close"
            onClick={() => dialog.current?.close()}
            autoFocus
          >
            <IconX size={24} stroke={1.5} aria-hidden />
          </button>
        </div>
        <nav aria-label="Principal" className="px-4 py-5">
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  cta={`nav_${item.href.slice(1)}`}
                  className="flex min-h-control-md items-center rounded-md px-3 text-h3 font-semibold hover:bg-surface-muted aria-[current=page]:bg-surface-muted"
                  onClick={() => dialog.current?.close()}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </div>
  );
}
