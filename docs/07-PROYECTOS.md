# 07 · Inventario y selección de proyectos

> Fuente: `PROYECTOS_UWIENER.md` (oct. 2026), 16 proyectos UWiener + 4 externos.
> Criterio: ¿este proyecto prueba que sabes **construir herramientas web, automatizar procesos manuales y conectar sistemas**? (Desarrollo web · Automatización de procesos · Integraciones)

---

## 0. Estado (12 oct 2026)

| Pieza | Estado |
|---|---|
| Permiso escrito de la jefatura (§3.1) | ✅ Confirmado por Sebastián · interruptor `institutionalPermission = true` en `content/casos/index.ts` |
| Nivel A · casos 1–5 | ✅ Publicados (Empleabilidad, Difusión, Formularios y NPS, Feria Virtual, Reqlut Bot) |
| Big Jack | ✅ Publicado (adelantado desde la Fase 4) |
| Dearel | 🟡 Borrador en `content/casos/integracion-shopify-crm-dearel.mdx` (visible en `pnpm dev`); se publica al tener la base y el método del −30 % |
| Este portafolio | ✅ Publicado (`/proyectos/este-portafolio`) |
| Nivel C · notas | ✅ "Validé 1 200 correos…" publicada en `/notas` |
| Nivel B · galería | ✅ Landings de graduación, WCCA Posgrado, página de Empleabilidad, Portal de Bolsa Laboral, LogINV, Sistema Obra |
| Imágenes de portada | ✅ `public/img/casos/<slug>.webp` (editoriales, sin rostros) |
| Datos de §4 | ⬜ Pendientes en todos los casos (marcados con `TODO(Sebastián)` en los MDX) |

## 1. Lectura general

Tu historia real es más fuerte que la que contaba la web: en cuatro meses construiste la **infraestructura de desarrollo web, automatización y comunicación** de un área de la universidad. Formularios que capturan datos → base central → segmentación → campañas de correo con lista de exclusión → encuestas NPS → tableros. Todo desarrollado con Next.js, Python, PostgreSQL y APIs para ahorrar tiempo operativo. Ese es el hilo del portafolio.

Dos cosas que cambian respecto a lo planeado:
- **El envío por WhatsApp se retiró.** Ya no debe presentarse como función actual (el CV se corrigió).
- **Empleabilidad Wiener ya está en producción** (`empleabilidad.uwiener.edu.pe`, oct. 2026) y la usan alumnos, egresados y empresas; el 22 de octubre es la plataforma de la Feria Virtual de Empleabilidad. Es el caso estrella de la Fase 2: se publica en cuanto llegue el permiso.

---

## 2. Clasificación

### Nivel A — Casos de estudio completos (5)

| # | Caso (título orientado a resultado) | Proyectos que lo forman | Por qué para tu perfil | Métrica defendible |
|---|---|---|---|---|
| 1 | **Una plataforma de empleabilidad propia para reemplazar tres de terceros** | 9 · Empleabilidad Wiener | Producto web completo: roles, Entra ID, IA con criterio legal, E2E con Playwright, Docker. Lo hiciste solo. | En producción (oct. 2026) · 5 roles · diseñada para 500–2 000 usuarios recurrentes · MVP 11/14 |
| 2 | **Campañas de 8 000 correos en 2 minutos, con baja automática** | 1 · Difusión (+16 · Validación de correos) | Automatización y comunicación: segmentación, personalización, envío por lotes, cumplimiento Ley 29733, entregabilidad | >4 h → ~2 min por campaña de 8 000 · 1 200+ correos verificados, 530+ válidos confirmados en la 1.ª pasada |
| 3 | **Encuestas con identidad validada y datos que se analizan solos** | 2 · Portal de formularios (+13 · Dashboard encuesta) | Captura de datos de calidad (DNI contra padrón, anti-abuso), NPS, encuestas personalizadas por empresa, tablero | ~3 000 respuestas analizadas · encuestas por empresa sin crear formularios a mano |
| 4 | **Una feria virtual que limpia sus propias inscripciones** | 10 · Feria Virtual | Embudo de evento: página por empresa generada desde datos, CTA de calendario, estado antes/después, normalización de datos | Cualitativo: fin de la limpieza manual de inscripciones (pide el número de inscritos al área) |
| 5 | **Un bot que publica ofertas laborales 24/7 con IA local** | 11 · Reqlut Bot | Automatización con IA bien diseñada: LLM local + respaldo, segunda revisión, OCR, trazabilidad | Pide el dato: ofertas/semana y horas manuales evitadas |

### Nivel B — Galería (tarjeta corta con captura y enlace, sin caso largo)

| Proyecto | Ángulo | Nota |
|---|---|---|
| 3 + 4 · Landings de graduación (pregrado y posgrado) | Una base reutilizada para dos públicos; FAQ para bajar consultas repetidas; SEO técnico | **Públicas:** enlázalas en vivo |
| 5 · Página de Empleabilidad y Alumni | Arquitectura de información + formulario de leads + WhatsApp | Las cifras (85 %, 15 000, 500) son **del área**, no tuyas: no las uses como resultado propio |
| 6 · Portal de Bolsa Laboral | Propuesta de valor para registrarse (dos audiencias) | Indica si fue prototipo o se publicó |
| 7 · WCCA Posgrado | Integración sobre WordPress conservando los píxeles de Google Ads, Meta, LinkedIn y TikTok | Muy MarTech: menciónalo explícitamente |
| B · LogINV | PWA de inventario con escáner de códigos y 4 idiomas | Producto propio; aclara si tuvo cliente real |
| A · Sistema Obra | Inventario en tiempo real con Firestore | Proyecto comunitario/voluntario |

### Nivel C — Material para Notas (blog), no casos

| Proyecto | Nota posible |
|---|---|
| 16 · Validación de correos | "Validé 1 200 correos antes de una campaña: así se evita quemar una cuenta de envío" |
| 15 · Convenios (Office Scripts + Power Automate) | "Un Excel que no se rompe cuando alguien mueve una columna" |
| 14 · Empleo pertinente | "Medir si un egresado trabaja en lo que estudió: reglas OCDE en Python" (solo datos agregados) |
| D · SUNAT | "Automaticé mis declaraciones mensuales con Playwright" (sin credenciales ni montos) |

### No publicar (o solo para conversarlo en entrevista)

| Proyecto | Motivo |
|---|---|
| 12 · Búsqueda de egresados destacados | Rastrea perfiles de personas reales en LinkedIn y noticias. Las condiciones de uso de LinkedIn prohíben el scraping y el proyecto procesa datos personales; publicado, es un riesgo reputacional para ti y para la universidad. Si te preguntan por scraping o IA local, cuéntalo en entrevista, sin capturas. |
| 8 · BotTeams | Fuera de contexto, "unir automáticamente una lista de nombres a una reunión de Teams con cámara y micrófono apagados" puede leerse como inflar asistencia. No compensa el riesgo. |
| TaskZenith, ORDEV | Sin relación con tu objetivo. Si se quedan, que sea en "Laboratorio" al fondo. |

---

## 3. Reglas antes de publicar cualquier caso institucional

1. **Permiso por escrito** de tu jefatura en Empleabilidad para mencionar los sistemas y mostrar maquetas. Un correo corto basta (plantilla abajo).
2. **Datos simulados** en todas las capturas: nombres, DNI, correos, empresas aliadas y respuestas de encuestas inventados.
3. **Sin detalles de seguridad**: nada de nombres de servidores, rutas internas, cuentas de envío, estructura de la base de Synapse ni cómo se cifran contraseñas. Se describe el *qué*, no el *dónde*.
4. **Sin código institucional**: los repos siguen privados. Los diagramas de arquitectura se dibujan desde cero.
5. **Métricas propias vs. del área**: solo cifras que tu trabajo produjo, con su contexto.
6. **Empleabilidad Wiener** ya está en producción: se publica con el permiso del punto 1 y enlazando al sitio oficial.

**Plantilla de correo de permiso**

> Asunto: Autorización para mencionar proyectos en mi portafolio
>
> Hola [nombre]: estoy preparando mi portafolio profesional y me gustaría incluir una descripción general de los proyectos que desarrollé para el área (plataforma de empleabilidad, sistema de difusión, feria virtual y landings de graduación). Usaría solo capturas con datos ficticios, sin información de estudiantes, empresas ni detalles técnicos internos, y enlazaría a los sitios públicos de la universidad. ¿Me autorizas a hacerlo? Si prefieres revisar los textos antes de publicarlos, te los envío. Gracias.

---

## 4. Datos que faltan (pídelos o mídelos antes de escribir los casos)

| Caso | Dato | Dónde conseguirlo |
|---|---|---|
| 2 · Difusión | Cuántas campañas y destinatarios desde que está en uso | Registro de auditoría del propio sistema |
| 2 · Difusión | Tasa de rebote antes / después de validar correos | Informes de Microsoft 365 |
| 3 · Formularios | Respuestas recogidas por tipo de encuesta | Base de datos (Neon) |
| 4 · Feria | Inscritos, conferencias, visitas | Google Sheets + analítica del sitio |
| 5 · Reqlut Bot | Ofertas publicadas por semana; tiempo manual por oferta antes | Base SQLite del bot + estimación del equipo |
| 1 · Empleabilidad | Usuarios registrados y empresas aprobadas al primer mes | Panel de administración (primer mes en producción) |

Si un dato no existe, el caso usa un resultado cualitativo honesto. Nunca se estima "a ojo" un porcentaje.

---

## 5. Cómo cambia el plan

- **Fase 2 (MVP, 19–31 oct):** los dos casos de lanzamiento pasan a ser **Difusión (caso 2)** y **Empleabilidad Wiener (caso 1, ya en producción)**. Galería de landings en `/proyectos`. *(Hecho y ampliado el 12 oct: se publicaron los 5 casos del Nivel A + Big Jack.)*
- **Fase 4 (23 nov – 20 dic):** Dearel + completar los datos de §4 en los casos publicados. Las 4 notas de la fase salen del Nivel C.
- **Antes de la Fase 2:** enviar el correo de permiso (esta semana) y pedir los datos de la sección 4.

## 6. Correcciones al stack documentado

El informe indica que el despliegue se realiza en **Vercel** (`04-TECH-SEO-MEDICION.md` actualizado con Vercel). Pendiente de verificar: si la versión en vivo de sjaquer.is-a.dev ya es ese repo, el contenido debería salir renderizado en el HTML; la revisión del 10 oct no lo encontró (hallazgo C1 de la auditoría). Revisa que las páginas se generen estáticas y no como componentes de cliente.
