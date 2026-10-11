import { existsSync } from "node:fs";
import { join } from "node:path";
import { cvPdfPath } from "@/lib/cv-path";

export { cvPdfPath };

/** PDF exportado del .docx vigente (02-PRD.md §8.5). Se comprueba en el build. */
export const hasCvPdf = existsSync(join(process.cwd(), "public", cvPdfPath));
