import { readFileSync } from "node:fs";
import { join } from "node:path";

/** Minutos de lectura de un caso (≈ 200 palabras por minuto), calculados en el build. */
export function readingTime(slug: string): number {
  const raw = readFileSync(join(process.cwd(), "content/casos", `${slug}.mdx`), "utf8");
  const text = raw
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#*_>`[\]()]/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
