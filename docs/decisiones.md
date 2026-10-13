# Decisiones

> Registro de decisiones del portafolio (04-TECH-SEO-MEDICION.md §4.6). Una entrada por decisión:
> qué se decidió, con qué dato y qué se espera ver. Es la materia prima del caso "Este portafolio"
> (Fase 6) y de las notas de Medición.

| Fecha | Decisión | Dato o motivo | Qué esperamos | Revisar el |
|---|---|---|---|---|
| 2026-10-11 | GA4 se carga tras la primera interacción, no durante la carga | Lighthouse móvil: el script de GA4 (176 KB) subía el bloqueo del hilo principal y bajaba Rendimiento a 93 | Rendimiento ≥ 95 sin perder sesiones con interacción | 2026-11-12 |
| 2026-10-11 | Consent Mode v2 con `analytics_storage` denegado por defecto y banner de igual peso | Ley 29733 y criterio de `/privacidad`; la tasa de aceptación será un dato en sí | Medir la tasa de aceptación del banner | 2026-11-12 |
| 2026-10-11 | Medición de clics con un solo listener delegado sobre `data-cta` | Evita volver de cliente los componentes de servidor; un solo punto de verdad para `cta_click` | Todos los botones con `data-cta` aparecen en DebugView | 2026-11-12 |
| 2026-10-11 | Migrar la web de Vite a Next.js en el mismo repo | Auditoría C1: el contenido no salía en el HTML | HTML completo en el servidor; Lighthouse SEO 100 | — |
| 2026-10-11 | Posicionamiento: desarrollo web + automatización de procesos + integraciones; MarTech solo como dirección de carrera | Experiencia demostrable hoy (`CLAUDE.md` regla 2) | Coherencia entre web, CV y LinkedIn | 2026-12-01 |
| 2026-10-12 | Publicar los 6 casos con el permiso institucional | Permiso confirmado; los casos de Wiener son la prueba más fuerte | Más `case_study_view` desde la home | 2026-11-12 |
| 2026-10-12 | GTM en `<head>` además de `TagLoader` | Decisión de Sebastián para que GTM detecte la etiqueta desde la carga | Medición completa; costo: Rendimiento 88–91 en lugar de ≈ 98 | 2026-11-12 |
| 2026-10-12 | Diseño v3 → v3.1 → v3.2: se probó una home con más capas y se simplificó por saturación | Revisión visual: datos repetidos y 4 tonos de fondo | Una sola banda invertida, tarjetas de 3 elementos, casos como artículos | 2026-11-12 |
| 2026-10-12 | Casos en formato de artículo con imagen 16:9 y minutos de lectura | Preferencia de lectura editorial; reclutadores escanean titular + resultado | Más clics en "Leer el caso" | 2026-11-12 |
| 2026-10-12 | Animaciones solo con `transform`, sin animar opacidad | Lighthouse marcó contraste insuficiente durante el revelado | Accesibilidad 100 estable | — |
| 2026-10-12 | Cada evento del `dataLayer` limpia los parámetros que no usa | QA en producción: `theme` y `cta_id` se arrastraban a `cv_download` y otros eventos | Informes de GA4 sin valores cruzados | 2026-11-12 |
| 2026-10-12 | Ejecutar todas las fases de una vez | Pedido de Sebastián; lo que queda depende de cuentas externas y datos | Web completa en producción; cierre en cuentas en `05` → Abierto | — |
| 2026-10-12 | CV en Word: encabezado "Integraciones" en lugar de "MarTech & CRO"; sin CRO ni GTM en habilidades | `CLAUDE.md` reglas 1 y 2: CV y web idénticos y sin presentarse como MarTech | Coherencia CV · web · `llms.txt` (verificada en QA) | — |
| 2026-10-12 | Dominio: se mantiene `sjaquer.is-a.dev` | Evita migrar dos veces mientras se acumulan datos y enlaces | Revisar si un dominio propio mejora la confianza en LinkedIn | 2027-02-01 |
| 2026-10-12 | Versión en inglés: se pospone hasta la acreditación B1 | Prioridad del plan: inglés → tesis → portafolio | Retomar con el CV en inglés alineado | 2027-01-15 |
| 2026-10-12 | Dearel queda como borrador | Falta base y método del −30 % (regla 2) | Publicar cuando exista el dato | — |
| 2026-10-12 | Revisión de código: `src/` heredado de Vite pasa a `components/blog-personal` y `content/poemas.ts` en kebab-case; se eliminan `AvatarIllustration`, `@mdx-js/react`, `public/ai.txt` (desactualizado) y `public/resume_en.txt` (datos inflados de la web antigua) | Una sola convención de estructura; nada público que contradiga el CV | Repo coherente; `ai.txt` generado desde `profile.ts` | — |
| 2026-10-12 | Cabeceras de seguridad en `next.config.ts` (nosniff, DENY, Referrer-Policy, Permissions-Policy, HSTS) y sin `X-Powered-By` | Se habían perdido al quitar `netlify.toml` | Puntaje de cabeceras A en securityheaders.com (CSP pendiente por GTM/Clarity) | 2026-11-12 |
| 2026-10-12 | Saludo en DevTools con API `sj.*` (rendimiento, eventos, stack, contacto, CV) | Muestra conocimiento de Performance API y medición a perfiles técnicos | Sin costo de carga (idle) | — |
| 2026-10-12 | Se elimina el blog personal (`/blog-personal`), sus poemas y `framer-motion`; se borra el `dist/` de Vite | No aporta a la narrativa profesional y era la única dependencia de animación | Repo más pequeño y enfocado | — |
| 2026-10-12 | Fuentes con `next/font/local` (variables latin de Inter y JetBrains Mono en `app/fonts/`) en lugar de `next/font/google` | El build en Vercel (Node 24, Turbopack) falló al resolver las fuentes de Google ("next/font/google queries have exactly one entry"); en local sí compilaba | Build reproducible sin red externa; mismo peso que antes (≈ 88 KB en total) | — |
| 2026-10-12 | Imágenes de portada de casos (16:9) y retrato (4:5) generadas e integradas como WebP optimizado en `public/img/` | Espacios reservados con `MediaFrame` completados sin CLS (pesos entre 51 y 138 KB, ≤ 200 KB) | Experiencia visual editorial completa sin saltos de layout | — |
| 2026-10-12 | Cuentas de Google en producción verificadas | GTM importado, 12 dimensiones y 3 eventos clave en GA4, sitemap.xml en Search Console verificado | Medición analítica en vivo en producción | — |
| 2026-10-13 | GTM sale de `<head>`: lo carga `TagLoader` tras la primera interacción o 5 s después de `load` | Auditoría de diseño y rendimiento: el snippet en `<head>` dejaba Rendimiento en 86–91 | Rendimiento ≥ 95 (medido: 95–98) sin perder las visitas que leen sin interactuar | 2026-11-13 |
| 2026-10-13 | Portadas de casos: planos SVG del flujo real en lugar de imágenes generadas | Las imágenes eran renders 3D con neón, brillos y vidrio: justo lo que prohíbe 03-DESIGN §6.6 y el prompt negativo de §10.7; además pesaban 76–158 KB | Coherencia de marca, 0 KB de imagen por portada y portadas que explican el proyecto | — |
| 2026-10-13 | Retrato con fondo marino-700 en lugar de verde lima | El lima no está en la paleta; §10.3 pide fondo neutro o marino. Se separó por color (`scripts/brand/retrato-fondo.py`), sin recorte manual | Mismo retrato en web, LinkedIn y CV; 59 → 38 KB | — |
| 2026-10-13 | Movimiento v4.0: trazado SVG, pulso por conector y aparición con opacidad **solo en gráficos** (el texto sigue sin desvanecerse) | Pedido de animaciones más vivas sin perder AA ni rendimiento | Accesibilidad 100 estable; 0 KB de JS añadido | — |
| 2026-10-13 | Pilar "IA en agencias" → "Herramientas e IA" | La tesis no encaja con el posicionamiento de desarrollo + automatización | Pilares coherentes con el rol | 2027-01-15 |
| 2026-10-13 | Métricas: "Minutos" → "1–2 h → 5–10 min" (estimado); −35 % y −30 % marcados como estimados | Regla 2: una métrica sin método se declara estimada | Ninguna cifra que no se pueda defender en una entrevista | — |
| 2026-10-13 | Redes: el marino es el fondo protagonista | Reconocimiento en el feed de LinkedIn | Identificar las piezas sin leer el nombre | 2026-12-01 |

## Hipótesis para la Fase 6 (se prueban con datos)

| # | Hipótesis | Métrica | Cambio a probar |
|---|---|---|---|
| H1 | Mostrar el resultado del caso en el titular aumenta los clics hacia los casos | `case_study_view` desde la home / sesiones | Titulares ya orientados a resultado: comparar con 30 días de datos |
| H2 | Un CTA de CV al final de cada caso aumenta las descargas de quienes leen un caso | `cv_download` con `cta_location=siguiente-paso` / `case_study_read` | Ya implementado; medir la tasa |
| H3 | Las visitas desde LinkedIn (UTM) leen más casos que las orgánicas | `case_study_read` por `session_source` | Publicar las 4 notas con UTM y comparar |

## Revisiones quincenales

Plantilla (15 min): qué páginas convierten · qué canal trae tráfico de calidad · qué se cambia.
