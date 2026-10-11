import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="contenido" className="flex-1">
        <Section>
          <p className="mb-3 text-label-mono text-ink-500">Error 404</p>
          <h1 className="text-h1">Esta página no existe</h1>
          <p className="mt-4 max-w-prose text-lead">
            Puede que el enlace esté desactualizado. Los proyectos y el CV siguen aquí.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/" size="lg" cta="404_home">
              Ir al inicio
            </Button>
            <Button href="/proyectos" variant="secondary" size="lg" cta="404_projects">
              Ver proyectos
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
