/** Etiqueta de stack o categoría: mono, borde 1 px, sin acento (§6.3, §19.2). */
export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border px-3 py-1 font-mono text-label text-ink-700">
      {children}
    </span>
  );
}

export function TagList({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
