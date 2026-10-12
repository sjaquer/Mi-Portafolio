import type { Metadata } from "next";
import { IconBrandLinkedin, IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import { ContactForm } from "@/components/sections/contact-form";
import { Section } from "@/components/ui/section";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contacto",
  description:
    "Escríbeme por formulario, WhatsApp o email para oportunidades en desarrollo web, automatización de procesos o integraciones, o para un proyecto.",
  path: "/contacto",
});

const whatsappText = encodeURIComponent("Hola, Sebastián. Vi tu web y quería conversar sobre ");

const channels = [
  {
    href: `https://wa.me/${profile.links.whatsapp}?text=${whatsappText}`,
    label: "WhatsApp",
    detail: "Respuesta más rápida",
    cta: "contact_whatsapp",
    Icon: IconBrandWhatsapp,
    external: true,
  },
  {
    href: `mailto:${profile.links.email}`,
    label: profile.links.email,
    detail: "Email",
    cta: "contact_email",
    Icon: IconMail,
    external: false,
  },
  {
    href: profile.links.linkedin,
    label: "LinkedIn",
    detail: "linkedin.com/in/sjaquer",
    cta: "contact_linkedin",
    Icon: IconBrandLinkedin,
    external: true,
  },
];

// 02-PRD.md §8.7: formulario corto, WhatsApp con mensaje prellenado y email.
export default function ContactoPage() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-3 text-label-mono text-ink-500">Contacto</p>
          <h1 className="text-h1">Hablemos</h1>
          <p className="mt-4 mb-7 max-w-prose text-lead">
            ¿Tu equipo busca a alguien que construya y mida? ¿Tienes un proceso que se repite cada
            semana? Cuéntamelo.
          </p>
          <ContactForm />
        </div>

        <aside aria-labelledby="otras-vias" className="lg:col-span-4 lg:col-start-9">
          <h2 id="otras-vias" className="mb-4 text-label-mono text-ink-500">
            Otras vías
          </h2>
          <ul className="flex flex-col gap-3">
            {channels.map(({ href, label, detail, cta, Icon, external }) => (
              <li key={cta}>
                <a
                  href={href}
                  data-cta={cta}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex min-h-control-lg items-center gap-3 rounded-md border border-border bg-surface px-4 py-3 hover:bg-surface-muted"
                >
                  <Icon size={24} stroke={1.5} aria-hidden className="shrink-0 text-ink-500" />
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate font-semibold text-ink-900">{label}</span>
                    <span className="text-small text-ink-500">{detail}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-small text-ink-500">{profile.location} · remoto</p>
        </aside>
      </div>
    </Section>
  );
}
