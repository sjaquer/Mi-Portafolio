"use client";

import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useSyncExternalStore } from "react";
import { track } from "@/lib/analytics";
import { THEME_STORAGE_KEY, type ThemePreference } from "@/lib/theme";

const ORDER: ThemePreference[] = ["system", "light", "dark"];
const LABEL: Record<ThemePreference, string> = {
  system: "sistema",
  light: "claro",
  dark: "oscuro",
};
const ICON = { system: IconDeviceDesktop, light: IconSun, dark: IconMoon };

const listeners = new Set<() => void>();
const media = () => window.matchMedia("(prefers-color-scheme: dark)");

function read(): ThemePreference {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : "system";
}

function apply(pref: ThemePreference) {
  const dark = pref === "dark" || (pref === "system" && media().matches);
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Claro / oscuro / sistema (§19.2). Un solo botón que rota entre los tres estados. */
export function ThemeToggle() {
  const pref = useSyncExternalStore(subscribe, read, () => "system" as const);

  // En modo sistema, sigue los cambios del sistema operativo.
  useEffect(() => {
    if (pref !== "system") return;
    const mq = media();
    const onChange = () => apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [pref]);

  const next = ORDER[(ORDER.indexOf(pref) + 1) % ORDER.length];
  const Icon = ICON[pref];

  function cycle() {
    if (next === "system") localStorage.removeItem(THEME_STORAGE_KEY);
    else localStorage.setItem(THEME_STORAGE_KEY, next);
    apply(next);
    track({ event: "theme_change", theme: next });
    listeners.forEach((l) => l());
  }

  return (
    <button
      type="button"
      onClick={cycle}
      data-cta="theme_toggle"
      aria-label={`Tema: ${LABEL[pref]}. Cambiar a ${LABEL[next]}`}
      className="inline-flex size-control-md items-center justify-center rounded-md text-ink-700 transition-colors duration-150 ease-standard hover:bg-surface-muted hover:text-ink-900"
    >
      <Icon size={20} stroke={1.5} aria-hidden />
    </button>
  );
}
