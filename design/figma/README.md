# Kit de marca para Figma

Generado con `node scripts/brand/figma-kit.mjs` desde `03-DESIGN.md` (§3–§12.9). No editar los SVG a mano: cambia el script o edita en Figma.

## Importar
1. En Figma, crea un archivo "Marca · Sebastián Jaque".
2. Arrastra todos los `.svg` de esta carpeta al lienzo. Cada uno entra como un frame con capas con nombre.
3. Fuentes: **Inter** y **JetBrains Mono** (vienen en Figma como Google Fonts).

## Qué es editable
- **Textos:** todos son texto vivo (titulares, etiquetas, métricas, URL).
- **Logo:** el wordmark y el monograma vienen **en contornos** (para exportar idénticos al sitio) y también en **texto vivo** (para rediseñarlos).
- **Fondos, retículas y reglas:** capas separadas (`Fondo`, `Retícula`, `Regla`).
- **Imágenes:** el avatar provisional y el marco de captura están en `10-imagenes`; pega tu foto o captura (con datos simulados) dentro del marco.

| Archivo | Contenido |
|---|---|
| 01-logotipo | Wordmark, compacto, monograma (positivo, negativo, monocromo, texto vivo), tamaños mínimos |
| 02-color | Paleta completa con hex |
| 03-tipografia | Escala de piezas (§5.2) |
| 04-elementos | Regla, cota, etiquetas, ficha de métrica, botones, estado, nodos de diagrama, retícula |
| 05-banner-linkedin | 1584 × 396, con zona segura de la foto (capa a ocultar) |
| 06 / 07-post | Post 4:5 en papel y en marino |
| 08-carrusel | 5 láminas 1080 × 1350 |
| 09-open-graph | 1200 × 630 |
| 10-imagenes | Avatar, marco de captura, fondo con retícula |

## Volver al sitio
Si cambias el logo en Figma, exporta el monograma y el wordmark como SVG (texto en contornos) y pásamelos: hay que actualizar `public/brand/logo/`, `public/favicon.svg` y los trazados de `components/brand/paths.ts` (el header dibuja el logo en línea), y regenerar los íconos con `scripts/brand/render-png.sh`. Ojo: `build-assets.mjs` vuelve a crear el logo actual desde las fuentes, así que no hay que correrlo después de reemplazarlo.
