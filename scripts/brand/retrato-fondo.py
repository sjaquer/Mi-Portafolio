"""
Cambia el fondo de color de un retrato en escala de grises por un color de marca
(03-DESIGN.md §10.3). Separa cada píxel en "gris del sujeto + fondo de color", así que
conserva pelo y gafas sin recorte manual. Solo sirve si el sujeto es gris y el fondo saturado.

Uso:  python3 -I scripts/brand/retrato-fondo.py <entrada> <salida.png> [hex=1F3A5F]
Luego: magick <salida.png> -quality 82 -define webp:method=6 public/img/retrato.webp
Necesita numpy, Pillow e ImageMagick (`magick`).
"""

import os
import subprocess
import sys
import tempfile

import numpy as np
from PIL import Image

src, out = sys.argv[1], sys.argv[2]
bg_hex = sys.argv[3] if len(sys.argv) > 3 else "1F3A5F"
M = np.array([int(bg_hex[i : i + 2], 16) for i in (0, 2, 4)], dtype=np.float64)

P = np.asarray(Image.open(src).convert("RGB")).astype(np.float64)
R, G, B = P[..., 0], P[..., 1], P[..., 2]
H, W = G.shape


def box(a, r, axis):
    pad = [(0, 0)] * a.ndim
    pad[axis] = (r + 1, r)
    c = np.cumsum(np.pad(a, pad, mode="edge"), axis=axis)
    n = a.shape[axis]
    return (np.take(c, np.arange(2 * r + 1, 2 * r + 1 + n), axis=axis) - np.take(c, np.arange(n), axis=axis)) / (2 * r + 1)


def blur(a, r):
    """Aproximación gaussiana con tres pasadas de caja."""
    r = max(1, r // 2)
    for _ in range(3):
        a = box(box(a, r, 0), r, 1)
    return a


def flood(mask, seeds):
    """Píxeles de `mask` conectados a alguna semilla (relleno de ImageMagick)."""
    with tempfile.TemporaryDirectory() as tmp:
        m, f = os.path.join(tmp, "m.png"), os.path.join(tmp, "f.png")
        Image.fromarray(np.where(mask, 255, 0).astype(np.uint8)).save(m)
        draws = [arg for x, y in seeds if mask[y, x] for arg in ("-draw", f"color {x},{y} floodfill")]
        subprocess.run(["magick", m, "-fill", "rgb(128,128,128)", *draws, f], check=True)
        return np.asarray(Image.open(f).convert("L")) == 128


# 1. Color del fondo (dirección L0) y su brillo local k, extrapolado bajo el sujeto.
chroma = G - B
pure = (chroma / np.maximum(G, 1) > 0.6) & (G > 4)
L0 = np.array([np.median(R[pure] / G[pure]), 1.0, np.median(B[pure] / G[pure])])
k, w = np.where(pure, G, 0.0), pure.astype(np.float64)
kmap, covered = np.ones_like(G), np.zeros_like(G)
for r in (12, 40, 120):
    bk, bw = blur(k, r), blur(w, r)
    fill = (covered < 0.5) & (bw > 1e-3)
    kmap[fill] = (bk / np.maximum(bw, 1e-6))[fill]
    covered = np.maximum(covered, np.minimum(bw * 20, 1))
kmap = np.maximum(kmap, 1)

# 2. Mezcla: P = gris + v·L0  →  fracción de fondo = v / k.
v = np.clip(chroma / (L0[1] - L0[2]), 0, None)
bg = np.clip(v / kmap, 0, 1)
gray_premult = (P - v[..., None] * L0).mean(axis=2)

# 3. Máscara sólida: rellena motas de compresión dentro del sujeto y descarta islas del fondo.
exterior = flood(bg >= 0.5, [(0, 0), (W - 1, 0), (0, H // 3), (W - 1, H // 3), (0, H // 2), (W - 1, H // 2)])
solid = flood(~exterior, [(W // 2, int(H * 0.6)), (W // 2, H - 1)])

alpha = bg.copy()
alpha[blur(solid.astype(np.float64), 24) < 0.02] = 1.0  # fondo lejano: color puro
cut = 0.8  # en el exterior, lo dominado por el fondo pasa a fondo (evita halos en sombras)
alpha = np.where(exterior, np.where(alpha > cut, 1.0, np.clip((alpha - 0.5) / (cut - 0.5), 0, 1) * 0.5 + 0.5), alpha)
core = blur(solid.astype(np.float64), 6) > 0.98
alpha[core] = 0.0  # dentro del sujeto: sin fondo

# 4. Composición sobre el color de marca.
gray = np.where(core, P.mean(axis=2), np.clip(gray_premult / np.maximum(1 - alpha, 1e-3), 0, 255))
res = (1 - alpha)[..., None] * gray[..., None] + alpha[..., None] * M
Image.fromarray(np.clip(res, 0, 255).astype(np.uint8)).save(out)
print(f"Listo: {out} (fondo #{bg_hex})")
