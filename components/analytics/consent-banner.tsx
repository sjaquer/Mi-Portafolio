"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONSENT_OPEN_EVENT, readConsent, saveConsent, type ConsentChoice } from "@/lib/analytics";

const choiceButton =
  "inline-flex min-h-control-md flex-1 items-center justify-center rounded-md border border-border-strong bg-surface px-5 font-semibold text-ink-900 transition-colors duration-150 ease-standard hover:bg-surface-muted active:translate-y-px sm:flex-none";

/**
 * Banner de consentimiento (§19.2, 04 §4.2): discreto, abajo, "Aceptar" y "Rechazar"
 * con el mismo peso visual. Se reabre desde "Preferencias de medición" en el pie.
 */
export function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // La cookie solo existe en el navegador: se lee al montar.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (readConsent() === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (choice: ConsentChoice) => {
    saveConsent(choice);
    setOpen(false);
  };

  return (
    <section
      aria-labelledby="consent-title"
      className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-surface shadow-md"
    >
      <div className="mx-auto flex max-w-content flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-5 lg:px-6">
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
      onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}
    >
      Preferencias de medición
    </button>
  );
}
