import type { YearMonth } from "@/content/profile";

const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

/** "2025-11" → "nov 2025" (03-DESIGN.md §2.3). */
export function formatYearMonth(ym: string): string {
  const [year, month] = ym.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

/** Rango con raya corta: "nov 2025 – actualidad". */
export function formatRange(from: YearMonth, to: YearMonth | null): string {
  return `${formatYearMonth(from)} – ${to ? formatYearMonth(to) : "actualidad"}`;
}

/** "2026-10-11" o "2026-10-11T00:00:00-05:00" → "11 oct 2026". */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.slice(0, 10).split("-");
  return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`;
}
