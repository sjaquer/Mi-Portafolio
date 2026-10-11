import { existsSync } from "node:fs";
import { join } from "node:path";

/** PDF exportado del .docx vigente (02-PRD.md §8.5). Se comprueba en el build. */
export const cvPdfPath = "/cv/CV-Sebastian-Jaque.pdf";
export const hasCvPdf = existsSync(join(process.cwd(), "public", cvPdfPath));
