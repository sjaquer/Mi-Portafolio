import { notes } from "@/content/notas";
import { profile } from "@/content/profile";

export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(
    /[<>&'"]/g,
    (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]!,
  );

/** RSS de las Notas (02-PRD.md §8.6). */
export function GET() {
  const items = notes
    .map((n) => {
      const url = `${profile.siteUrl}/notas/${n.slug}`;
      return `    <item>
      <title>${esc(n.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${n.date}T12:00:00-05:00`).toUTCString()}</pubDate>
      <description>${esc(n.description)}</description>
    </item>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Notas · ${esc(profile.name)}</title>
    <link>${profile.siteUrl}/notas</link>
    <atom:link href="${profile.siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${esc(profile.tagline)}</description>
    <language>es-PE</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
