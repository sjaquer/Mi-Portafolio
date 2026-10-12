import type { Metadata } from "next";
import Body from "@/content/legal/terminos.mdx";
import { LegalPage } from "@/components/sections/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Condiciones de uso",
  description:
    "Condiciones de uso de sjaquer.is-a.dev: propiedad intelectual, marcas de terceros, exactitud de la información, enlaces externos y ley aplicable.",
  path: "/terminos",
});

export default function TerminosPage() {
  return (
    <LegalPage label="Legal" title="Condiciones de uso" updated="2026-10-12">
      <Body />
    </LegalPage>
  );
}
