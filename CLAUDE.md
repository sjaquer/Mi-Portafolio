# CLAUDE.md — sjaquer-web

Portafolio de Sebastián Jaque (Desarrollo web · Automatización · MarTech & CRO). Next.js App Router + TypeScript + Tailwind v4 + MDX. Despliegue en Netlify.

## Lee antes de trabajar
- `docs/02-PRD.md` — qué se construye y criterios de aceptación.
- `docs/03-DESIGN.md` — tokens, componentes, reglas visuales. **Fuente de verdad visual.**
- `docs/04-TECH-SEO-MEDICION.md` — arquitectura, SEO, presupuesto de rendimiento, eventos de medición.
- `docs/05-PLAN-IMPLEMENTACION.md` — fase actual y tareas.
- `docs/06-CONTENIDO.md` — voz y textos.
- `docs/07-PROYECTOS.md` — qué proyectos se publican, cómo y con qué reglas de privacidad.

## Reglas
1. **Fuente única:** todo dato del perfil (cargos, fechas, certificaciones, métricas) vive en `content/profile.ts` o en los MDX de `content/`. Nunca escribirlo a mano en componentes.
2. **Honestidad:** cargos tal como en el CV; certificaciones con nombre y emisor reales; ninguna métrica sin contexto (qué, cuánto, base, periodo). No inventar cifras.
3. **Diseño:** solo tokens de `tokens.css` / `@theme`. Nada de colores, tamaños o espacios fuera de la escala. Un solo botón `primary` visible por pantalla. Sin neón, glassmorphism ni WebGL; los únicos degradados permitidos son los tonales de `03-DESIGN.md` §6.7.
4. **Rendimiento:** Server Components por defecto; `"use client"` solo para interacción. Respetar el presupuesto (LCP < 2 s, JS home < 100 KB, CLS < 0,05).
5. **Accesibilidad:** WCAG 2.2 AA; un `h1` por página; foco visible; área táctil ≥ 44 px; `alt` en imágenes.
6. **Medición:** todo botón lleva `data-cta`; los eventos se envían solo con `track()` de `lib/analytics.ts` (tipado). Nunca datos personales a GA4.
7. **Privacidad:** capturas y ejemplos con datos simulados. Nada de datos reales de Norbert Wiener ni de clientes.
8. **Idioma:** interfaz y contenido en español (es-PE). Nombres de eventos GA4 en inglés, `snake_case`.

## Comandos
- `pnpm dev` · `pnpm build` · `pnpm lint` · `pnpm lhci` (Lighthouse CI)

## Antes de dar algo por terminado
Build sin errores, lint limpio, Lighthouse ≥ 95 en la página tocada, revisión con teclado, y si hay eventos nuevos: verificados en GTM Preview.
