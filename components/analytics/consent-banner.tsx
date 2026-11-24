"use client";

import Link from "next/link";
import { saveConsent, type ConsentChoice } from "@/lib/analytics";

const choiceButton =
  "inline-flex min-h-control-md flex-1 items-center justify-center rounded-full border border-border-strong bg-surface px-5 font-semibold text-ink-900 transition-colors duration-150 ease-standard hover:bg-surface-muted active:scale-[0.98] motion-reduce:active:scale-100 sm:flex-none";

/**
 * Banner de consentimiento (§19.2, 04 §4.2, v6.0): tarjeta flotante en vidrio técnico
 * controlado, abajo, "Aceptar" y "Rechazar" con el mismo peso visual. El markup va siempre
 * en el HTML; su visibilidad la controla `data-consent="ask"` en <html>, que fija
 * `consentInitScript` en <head> antes del primer pintado (sin impactar el LCP).
 */
export function ConsentBanner() {
  const choose = (choice: ConsentChoice) => {
    saveConsent(choice);
    // Oculta el banner al instante (CSS); el markup permanece en el DOM.
    document.documentElement.removeAttribute("data-consent");
  };

  return (
    <section
      data-consent-banner
      aria-labelledby="consent-title"
      className="glass-surface fixed inset-x-3 bottom-3 z-30 mx-auto max-w-content rounded-lg sm:inset-x-5 sm:bottom-4"
    >
      <div className="flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="max-w-prose">
          <h2 id="consent-title" className="text-small font-semibold text-ink-900">
            Medición del sitio
          </h2>
          <p className="text-small text-ink-700">
            Uso Google Analytics para saber qué páginas sirven y desde dónde llegan las visitas. Sin
            publicidad y sin datos personales.{" "}
            <Link href="/privacidad" className="underline underline-offset-4 hover:text-ink-900">
              Más detalles
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            data-cta="consent_reject"
            className={choiceButton}
            onClick={() => choose("denied")}
          >
            Rechazar
          </button>
          <button
            type="button"
            data-cta="consent_accept"
            className={choiceButton}
            onClick={() => choose("granted")}
          >
            Aceptar
          </button>
        </div>
      </div>
    </section>
  );
}

/** Botón del pie para cambiar la elección en cualquier momento (revocación, Ley 29733). */
export function ConsentPreferencesButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      data-cta="footer_consent_preferences"
      className={className}
      onClick={() => document.documentElement.setAttribute("data-consent", "ask")}
    >
      Preferencias de medición
    </button>
  );
}
