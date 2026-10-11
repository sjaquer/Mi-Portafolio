# Decisiones

> Registro de decisiones del portafolio (04-TECH-SEO-MEDICION.md §4.6). Una entrada por decisión:
> qué se decidió, con qué dato y qué se espera ver. Es la materia prima del caso "Este portafolio"
> (Fase 6) y de las notas de Medición.

| Fecha | Decisión | Dato o motivo | Qué esperamos | Revisar el |
|---|---|---|---|---|
| 2026-10-11 | GA4 se carga tras la primera interacción, no durante la carga | Lighthouse móvil: el script de GA4 (176 KB) subía el bloqueo del hilo principal y bajaba Rendimiento a 93 | Rendimiento ≥ 95 sin perder sesiones con interacción | 2026-11-12 |
| 2026-10-11 | Consent Mode v2 con `analytics_storage` denegado por defecto y banner de igual peso | Ley 29733 y criterio de `/privacidad`; la tasa de aceptación será un dato en sí | Medir la tasa de aceptación del banner | 2026-11-12 |
| 2026-10-11 | Medición de clics con un solo listener delegado sobre `data-cta` | Evita volver de cliente los componentes de servidor; un solo punto de verdad para `cta_click` | Todos los botones con `data-cta` aparecen en DebugView | 2026-11-12 |

## Revisiones quincenales

Plantilla (15 min): qué páginas convierten · qué canal trae tráfico de calidad · qué se cambia.
