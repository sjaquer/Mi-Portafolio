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

          <h2 className="mt-4 text-h3">Medición</h2>
          <p>
            Este sitio usa Google Analytics 4 para saber qué páginas se visitan y desde qué canal se
            llega, de forma agregada. No envío a Google tu nombre, tu email ni el contenido de tus
            mensajes. La IP se anonimiza.
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
