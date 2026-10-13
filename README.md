# sjaquer-web

Portafolio de **Sebastián Jaque** — Desarrollo web · Automatización de procesos · Integraciones.
Sitio en `sjaquer.is-a.dev`. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + MDX, desplegado en Vercel.

## Empezar

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

| Comando | Qué hace |
|---|---|
| `pnpm build` · `pnpm start` | Build de producción (todo estático) y servidor |
| `pnpm check` | Lint + TypeScript + formato (antes de cada commit) |
| `pnpm lint` · `pnpm typecheck` · `pnpm format` | Por separado |
| `pnpm lhci` | Lighthouse CI con los umbrales de `docs/04-TECH-SEO-MEDICION.md` §3.1 |
| `pnpm cv:pdf` | Exporta el CV de Word a `public/cv/CV-Sebastian-Jaque.pdf` (LibreOffice + fuente Carlito) |
| `pnpm brand` | Logo, monograma, favicon e íconos |
| `pnpm brand:figma` | Kit de marca para Figma en `design/figma/` |

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Datos del perfil (fuente única) | `content/profile.ts` → web, `/cv`, `/llms.txt`, `/resume.txt`, JSON-LD |
| Casos de estudio | Ficha en `content/casos/index.ts` + artículo en `content/casos/<slug>.mdx` (formato: `docs/06-CONTENIDO.md` §4) |
| Notas (blog) | Ficha en `content/notas/index.ts` + texto en `content/notas/<slug>.mdx` (formato: `docs/06-CONTENIDO.md` §5) · RSS en `/rss.xml` |
| GTM | `docs/gtm/eventos-sitio.json` (contenedor importable con los 9 eventos) |
| Imágenes | `public/img/retrato.webp` (4:5) · portadas de casos como planos SVG (`cover` en `content/casos/index.ts`) |
| CV | `content/cv/CV-Sebastian-Jaque.docx` → `public/cv/CV-Sebastian-Jaque.pdf` |
| Diseño | `app/tokens.css` (tokens) · `components/` (`ui`, `layout`, `sections`, `brand`, `analytics`, `devtools`) |
| Textos para Google y redes | `lib/seo.ts` (metadatos) · `docs/06-CONTENIDO.md` §2b (LinkedIn, GitHub) · `/llms.txt` y `/ai.txt` generados |
| Consola del navegador | `components/devtools/console-greeting.tsx` — escribe `sj.ayuda()` en DevTools |
| Medición | `lib/analytics.ts` (`track()` tipado) · `components/analytics/` (consentimiento, clics, casos) |
| Páginas legales | `content/legal/privacidad.mdx` · `content/legal/terminos.mdx` (plantilla `components/sections/legal-page.tsx`) |
| Correos del formulario | `lib/email/templates.ts` · vista previa en `pnpm dev` → `/dev/correos?tipo=notificacion` o `?tipo=confirmacion` · copias en `design/emails/` |
| Variables de entorno | `.env.example` (GTM, GA4, Resend) |

## Documentación

| # | Archivo | Responde a |
|---|---|---|
| — | `CLAUDE.md` | Reglas del repo para personas y agentes |
| 1 | `docs/01-AUDITORIA.md` | Punto de partida (10 oct 2026) |
| 2 | `docs/02-PRD.md` | Qué se construye, para quién y cómo se mide el éxito |
| 3 | `docs/03-DESIGN.md` | Manual de marca y sistema de diseño (fuente de verdad visual) |
| 4 | `docs/04-TECH-SEO-MEDICION.md` | Stack, SEO, rendimiento y plan de medición |
| 5 | `docs/05-PLAN-IMPLEMENTACION.md` | Fases, estado y pendientes |
| 6 | `docs/06-CONTENIDO.md` | Voz, textos, formato de casos y Notas |
| 7 | `docs/07-PROYECTOS.md` | Qué proyectos se publican y con qué reglas |
| — | `docs/decisiones.md` | Registro de decisiones con dato y fecha de revisión |
| — | `design/figma/README.md` | Cómo usar el kit de marca en Figma |

## Estado
Todas las fases ejecutadas en código. Lo abierto (cuentas de Google, Resend, LinkedIn, datos) está en `docs/05-PLAN-IMPLEMENTACION.md` → "Estado al 12 oct 2026".
