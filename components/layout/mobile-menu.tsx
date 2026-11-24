"use client";

import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { useRef } from "react";
import { NavLink } from "@/components/layout/nav-link";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/lib/nav";

const iconButton =
  "inline-flex size-control-md items-center justify-center rounded-full text-ink-900 transition-colors duration-150 ease-standard hover:bg-surface-muted";

let supportsDisplayTransition: boolean | undefined;
function canTransitionDisplay() {
  if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
  if (!window.CSS?.supports?.("transition-behavior", "allow-discrete") || !document.body) {
    return false;
  }
  const probe = document.createElement("div");
  probe.style.cssText = "transition: display 1s allow-discrete !important; display: block;";
  document.body.appendChild(probe);
  probe.getBoundingClientRect();
  probe.style.display = "none";
  supportsDisplayTransition = getComputedStyle(probe).display === "block";
  probe.remove();
  return supportsDisplayTransition;
}

function supportsTopLayerExit() {
  return Boolean(window.CSS?.supports?.("overlay", "auto") && canTransitionDisplay());
}

/**
 * Menú móvil con <dialog> modal flotante en vidrio técnico (v6.0): trampa de foco, Escape
 * y fondo inerte nativos, más salida animada segura cuando falta soporte de `overlay`.
 */
export function MobileMenu() {
  const dialog = useRef<HTMLDialogElement>(null);

  const closeMenu = async () => {
    const el = dialog.current;
    if (!el || !el.open) return;
    if (!supportsTopLayerExit()) {
      el.setAttribute("data-closing", "");
      const animations = el.getAnimations({ subtree: true });
      if (animations.length > 0) {
        await Promise.race([
          Promise.allSettled(animations.map((a) => a.finished)),
          new Promise((r) => setTimeout(r, 400)),
        ]);
      }
      if (!el.hasAttribute("data-closing")) return;
      el.removeAttribute("data-closing");
    }
    el.close();
  };

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
        className="mobile-sheet glass-surface m-3 ml-auto w-[calc(100%-1.5rem)] max-w-sm rounded-lg p-0 text-ink-900"
        onCancel={(e) => {
          e.preventDefault();
          void closeMenu();
        }}
        onClick={(e) => e.target === e.currentTarget && void closeMenu()}
      >
        <div className="flex h-header items-center justify-between border-b border-border px-5">
          <span className="font-mono text-label text-ink-500 uppercase">Navegación</span>
          <button
            type="button"
            className={iconButton}
            aria-label="Cerrar menú"
            data-cta="nav_menu_close"
            onClick={() => void closeMenu()}
            autoFocus
          >
            <IconX size={24} stroke={1.5} aria-hidden />
          </button>
        </div>
        <nav aria-label="Principal" className="p-4">
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  cta={`nav_${item.href.slice(1)}`}
                  className="flex min-h-control-md items-center rounded-md px-4 text-h3 font-semibold text-ink-900 transition-colors duration-150 ease-standard hover:bg-surface-muted aria-[current=page]:bg-surface-muted"
                  onClick={() => void closeMenu()}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-border p-4">
          <Button
            href="/cv"
            variant="secondary"
            size="md"
            cta="mobile_menu_cv"
            className="w-full"
            icon={<IconArrowRight size={20} stroke={1.5} aria-hidden />}
            onClick={() => void closeMenu()}
          >
            Ver CV completo
          </Button>
        </div>
      </dialog>
    </div>
  );
}
