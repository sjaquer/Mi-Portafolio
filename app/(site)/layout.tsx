import { ClickTracker } from "@/components/analytics/click-tracker";
import { ConsoleGreeting } from "@/components/devtools/console-greeting";
import { ConsentBanner } from "@/components/analytics/consent-banner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only rounded-md bg-surface px-4 py-3 text-ink-900 focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-20"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="flex-1">
        {children}
      </main>
      <Footer />
      <ConsentBanner />
      <ClickTracker />
      <ConsoleGreeting />
    </>
  );
}
