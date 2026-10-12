import { llmsTxt } from "@/lib/plain-text";

// ai.txt: mismo resumen que llms.txt, desde la fuente única (antes era un archivo
// escrito a mano que quedó desactualizado).
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
