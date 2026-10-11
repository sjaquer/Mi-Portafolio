import type { ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/ui/callout";
import { FlowDiagram } from "@/components/ui/flow-diagram";
import { Metric } from "@/components/ui/metric";

// Estilos de texto largo (Prose, §19.2): 68 caracteres, enlaces subrayados, ritmo de la escala.
const components: MDXComponents = {
  h2: (props) => <h2 className="mt-8 mb-4 text-h2 first:mt-0" {...props} />,
  h3: (props) => <h3 className="mt-6 mb-3 text-h3" {...props} />,
  p: (props) => <p className="mb-4 max-w-prose" {...props} />,
  ul: (props) => <ul className="mb-4 flex max-w-prose list-disc flex-col gap-2 pl-5" {...props} />,
  ol: (props) => (
    <ol className="mb-4 flex max-w-prose list-decimal flex-col gap-2 pl-5" {...props} />
  ),
  a: (props) => (
    <a className="text-accent-600 underline underline-offset-4 hover:text-accent-700" {...props} />
  ),
  strong: (props) => <strong className="font-semibold text-ink-900" {...props} />,
  code: (props) => (
    <code
      className="rounded-sm bg-surface-muted px-1 font-mono text-small text-ink-900"
      {...props}
    />
  ),
  Callout,
  FlowDiagram,
  Metric: (props: ComponentProps<typeof Metric>) => (
    <div className="my-6">
      <Metric {...props} />
    </div>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
