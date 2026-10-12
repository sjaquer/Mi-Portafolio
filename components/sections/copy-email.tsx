"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useState } from "react";

/** Copia el email al portapapeles y lo anuncia (aria-live). Útil en escritorio sin cliente de correo. */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }
  const Icon = copied ? IconCheck : IconCopy;
  return (
    <button
      type="button"
      onClick={copy}
      data-cta="contact_copy_email"
      className="inline-flex min-h-control-md items-center gap-2 text-small font-semibold text-ink-700 underline-offset-4 hover:text-ink-900 hover:underline"
    >
      <Icon size={16} stroke={1.5} aria-hidden />
      <span aria-live="polite">{copied ? "Email copiado" : "Copiar email"}</span>
    </button>
  );
}
