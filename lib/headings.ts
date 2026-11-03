import { readFileSync } from "node:fs";
import { join } from "node:path";
import { slugify } from "@/mdx-components";

export interface Heading {
  text: string;
  /** Mismo id que pone el `h2` de mdx-components, para que el ancla coincida. */
  id: string;
}

/**
 * Títulos de sección (`## `) de un MDX, leídos en el build. Alimentan el índice
 * "En esta página" de casos y notas desde el texto real, no desde una lista fija.
 */
export function headingsOf(slug: string, dir: "casos" | "notas"): Heading[] {
  const raw = readFileSync(join(process.cwd(), "content", dir, `${slug}.mdx`), "utf8");
  const out: Heading[] = [];
  let inFence = false;
  for (const line of raw.split("\n")) {
    if (line.startsWith("```")) inFence = !inFence;
    if (inFence || !line.startsWith("## ")) continue;
    const text = line.slice(3).trim();
    out.push({ text, id: slugify(text) });
  }
  return out;
}
