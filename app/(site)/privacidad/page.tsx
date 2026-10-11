import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { profile } from "@/content/profile";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacidad",
  description: "Qué datos recoge este sitio, para qué se usan y cómo pedir que se eliminen.",
  path: "/privacidad",
});

const updated = "2026-10-11";

// Aviso breve alineado a la Ley 29733. Se amplía con el banner de consentimiento en la Fase 3.
export default function PrivacidadPage() {
  return (
    <Section>
      <div className="max-w-prose">
        <p className="mb-3 text-label-mono text-ink-500">Privacidad</p>
        <h1 className="text-h1">Aviso de privacidad</h1>
        <p className="mt-4 text-small text-ink-500">
          Actualizado: <time dateTime={updated}>{formatDate(updated)}</time>
        </p>

        <div className="mt-7 flex flex-col gap-4">
          <h2 className="mt-4 text-h3">Responsable</h2>
          <p>
            {profile.fullName}, {profile.location}. Contacto:{" "}
            <a
              href={`mailto:${profile.links.email}`}
              className="text-accent-600 underline underline-offset-4"
            >
              {profile.links.email}
            </a>
            .
          </p>

          <h2 className="mt-4 text-h3">Formulario de contacto</h2>
          <p>
            Si me escribes, recibo tu nombre, tu email, el motivo y tu mensaje. Los uso solo para
            responderte. Se envían por un servicio de email transaccional (Resend) a mi correo y no
            se guardan en una base de datos de este sitio ni se comparten con terceros para otros
            fines.
          </p>

          <h2 className="mt-4 text-h3">Medición y cookies</h2>
          <p>
            Con tu permiso, uso Google Analytics 4 (a través de Google Tag Manager) para saber qué
            páginas se visitan, desde qué canal se llega y qué botones se usan, de forma agregada.
            Si aceptas, se guardan las cookies <code>_ga</code> y <code>_ga_*</code> durante un
            máximo de 2 años. Más adelante podría sumar mapas de calor de Microsoft Clarity, también
            solo con tu permiso.
          </p>
          <p>
            Si rechazas, no se guarda ninguna cookie de medición: Google solo recibe señales sin
            identificadores (Consent Mode v2). No hay publicidad ni remarketing, y nunca envío tu
            nombre, tu email ni el contenido de tus mensajes.
          </p>
          <p>
            Tu elección se guarda 6 meses en una cookie propia (<code>sj_consent</code>). Puedes
            cambiarla cuando quieras desde «Preferencias de medición», al pie de cada página; al
            rechazar se borran las cookies de Google Analytics.
          </p>

          <h2 className="mt-4 text-h3">Tus derechos</h2>
          <p>
            Puedes pedir acceso, rectificación o eliminación de tus datos (derechos ARCO, Ley 29733)
            escribiendo a {profile.links.email}. Respondo dentro de los plazos que fija la ley.
          </p>
        </div>
      </div>
    </Section>
  );
}
