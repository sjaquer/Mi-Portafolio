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

## Revisiones quincenales

Plantilla (15 min): qué páginas convierten · qué canal trae tráfico de calidad · qué se cambia.
