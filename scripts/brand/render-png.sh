#!/usr/bin/env bash
# Rasteriza los íconos de app desde los SVG de marca (03-DESIGN.md §13.7).
# Requiere rsvg-convert (librsvg) e ImageMagick.
set -euo pipefail
cd "$(dirname "$0")/../.."

rsvg-convert -w 180 -h 180 public/brand/logo/monograma.svg -o public/apple-touch-icon.png
rsvg-convert -w 512 -h 512 public/brand/logo/monograma.svg -o public/icon-512.png
rsvg-convert -w 192 -h 192 public/brand/logo/monograma.svg -o public/icon-192.png

# Bajo 24 px se usa la versión simplificada, sin regla (§3.3).
tmp=$(mktemp -d)
rsvg-convert -w 16 -h 16 public/brand/logo/monograma-simple.svg -o "$tmp/16.png"
rsvg-convert -w 32 -h 32 public/brand/logo/monograma-simple.svg -o "$tmp/32.png"
magick "$tmp/16.png" "$tmp/32.png" app/favicon.ico
rm -rf "$tmp"

# Correos transaccionales (§13.4): monograma a 3× de 32 px.
rsvg-convert -w 96 -h 96 public/brand/logo/monograma.svg -o public/brand/email/monograma.png
echo "✓ PNG e ICO generados"
