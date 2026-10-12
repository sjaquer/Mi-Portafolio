"use client";

import { IconLoader2 } from "@tabler/icons-react";
import Link from "next/link";
import { useActionState, useEffect, useId, useRef } from "react";
import { sendContact, type ContactState } from "@/app/(site)/contacto/actions";
import { track } from "@/lib/analytics";

const fieldBase =
  "w-full rounded-sm border bg-surface px-3 text-body text-ink-900 placeholder:text-ink-500 aria-invalid:border-danger-700";

/** Formulario de 4 campos (§19.2, §19.3): label siempre visible, errores en línea, aria-live. */
export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, {
    status: "idle",
  });
  // Medición (04 §4.3): generate_lead al enviar bien, form_error por campo inválido.
  // Solo se mide el motivo elegido y el nombre del campo; nunca lo que escribió la persona.
  const lastReason = useRef<string | undefined>(undefined);
  const submit = (formData: FormData) => {
    lastReason.current = String(formData.get("reason") ?? "") || undefined;
    action(formData);
  };
  useEffect(() => {
    if (state.status === "success") {
      track({ event: "generate_lead", lead_channel: "form", lead_reason: lastReason.current });
    } else if (state.status === "error") {
      Object.keys(state.fieldErrors ?? {}).forEach((field) =>
        track({ event: "form_error", field }),
      );
    }
  }, [state]);

  const id = useId();
  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-lg border border-border bg-surface p-5">
        <p className="text-h3 font-semibold text-ink-900">Mensaje enviado.</p>
        <p className="mt-2">Gracias. Te respondo en un plazo de 1 a 2 días hábiles.</p>
      </div>
    );
  }

  const field = (name: keyof typeof errors) => ({
    id: `${id}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
  });

  const errorText = (name: keyof typeof errors) =>
    errors[name] && (
      <p id={`${id}-${name}-error`} className="mt-1 text-small text-danger-700">
        {errors[name]}
      </p>
    );

  const label = (name: string, text: string) => (
    <label htmlFor={`${id}-${name}`} className="mb-2 block text-small font-semibold text-ink-900">
      {text}
    </label>
  );

  return (
    <form action={submit} noValidate className="flex flex-col gap-5">
      <div aria-live="polite" className="empty:hidden">
        {state.status === "error" && (
          <p className="rounded-md border border-danger-700 bg-surface p-4 text-small text-danger-700">
            {state.message}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {label("name", "Nombre")}
          <input
            {...field("name")}
            type="text"
            autoComplete="name"
            required
            className={`${fieldBase} h-control-md border-border-strong`}
          />
          {errorText("name")}
        </div>
        <div>
          {label("email", "Email")}
          <input
            {...field("email")}
            type="email"
            autoComplete="email"
            required
            className={`${fieldBase} h-control-md border-border-strong`}
          />
          {errorText("email")}
        </div>
      </div>

      <div>
        {label("reason", "Motivo")}
        <select
          {...field("reason")}
          defaultValue=""
          required
          className={`${fieldBase} h-control-md border-border-strong`}
        >
          <option value="" disabled>
            Elige una opción
          </option>
          <option value="empleo">Empleo</option>
          <option value="proyecto">Proyecto</option>
          <option value="otro">Otro</option>
        </select>
        {errorText("reason")}
      </div>

      <div>
        {label("message", "Mensaje")}
        <textarea
          {...field("message")}
          rows={6}
          required
          className={`${fieldBase} border-border-strong py-3`}
        />
        {errorText("message")}
      </div>

      {/* Honeypot: invisible para personas y lectores de pantalla. */}
      <div aria-hidden className="absolute -left-10 size-px overflow-hidden">
        <label htmlFor={`${id}-company`}>Empresa</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="text-small text-ink-500">
        Uso tus datos solo para responder este mensaje y te llegará una confirmación a tu correo.
        Más detalles en el{" "}
        <Link href="/privacidad" className="underline underline-offset-4 hover:text-ink-900">
          aviso de privacidad
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={pending}
        data-cta="contact_submit"
        className="inline-flex h-control-lg w-full items-center justify-center gap-2 rounded-md bg-accent-600 px-5 font-semibold text-on-accent transition-colors duration-150 ease-standard hover:bg-accent-700 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:self-start"
      >
        {pending ? (
          <>
            <IconLoader2 size={16} stroke={1.5} aria-hidden className="animate-spin" />
            Enviando…
          </>
        ) : (
          "Enviar mensaje"
        )}
      </button>
    </form>
  );
}
