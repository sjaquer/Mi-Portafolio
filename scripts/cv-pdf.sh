#!/usr/bin/env bash
# Exporta el CV vigente (content/cv/CV-Sebastian-Jaque.docx) a PDF descargable (02-PRD.md §8.5).
# Requiere LibreOffice y la fuente Carlito (métricas idénticas a Calibri, la fuente del .docx).
set -euo pipefail
cd "$(dirname "$0")/.."
fc-match Calibri | grep -qi carlito || echo "Aviso: Carlito no está instalada; el PDF puede cambiar de maquetación." >&2
tmp=$(mktemp -d)
soffice --headless --convert-to pdf --outdir "$tmp" content/cv/CV-Sebastian-Jaque.docx >/dev/null
mv "$tmp/CV-Sebastian-Jaque.pdf" public/cv/CV-Sebastian-Jaque.pdf
rm -rf "$tmp"
echo "✓ public/cv/CV-Sebastian-Jaque.pdf"
