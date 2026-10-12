import { existsSync } from "node:fs";
import { join } from "node:path";

const EXTENSIONS = ["avif", "webp", "jpg", "png"];

/**
 * Busca una imagen en public/img/<base>.{avif,webp,jpg,png} durante el build.
 * Devuelve la ruta pública o null: así cada espacio de imagen funciona antes y
 * después de que exista el archivo, sin tocar código (03-DESIGN.md §6.8).
 */
export function findImage(base: string): string | null {
  for (const ext of EXTENSIONS) {
    const rel = `/img/${base}.${ext}`;
    if (existsSync(join(process.cwd(), "public", rel))) return rel;
  }
  return null;
}
