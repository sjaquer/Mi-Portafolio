import type { Metadata } from "next";
import Body from "@/content/legal/privacidad.mdx";
import { LegalPage } from "@/components/sections/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aviso de privacidad",
  description:
    "Qué datos recoge este sitio, para qué, con qué proveedores, cuánto tiempo se guardan y cómo ejercer tus derechos (Ley 29733).",
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return (
    <LegalPage label="Privacidad" title="Aviso de privacidad" updated="2026-10-12">
      <Body />
    </LegalPage>
  );
}
