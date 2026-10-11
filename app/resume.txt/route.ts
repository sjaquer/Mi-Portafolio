import { resumeTxt } from "@/lib/plain-text";

export const dynamic = "force-static";

export function GET() {
  return new Response(resumeTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
