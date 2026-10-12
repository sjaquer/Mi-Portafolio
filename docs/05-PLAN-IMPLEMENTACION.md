# 05 · Plan de implementación por fases

> Cada fase tiene objetivo, tareas, criterio de "terminado" y un **tiempo máximo**. Si se pasa del tiempo, se recorta alcance, no se mueve la fecha.
>
> **Regla de prioridad (no negociable):** inglés B1 → tesis → GA4 / Google UX → cierre de prácticas → portafolio. Si una fase del portafolio choca con un hito de esa lista, gana el hito.

---

## Calendario resumido

| Fase        | Qué                                                                 | Ventana              | Tiempo máx.        | Choca con                                          |
| ----------- | -------------------------------------------------------------------- | -------------------- | ------------------- | -------------------------------------------------- |
| **0** | Correcciones urgentes en la web actual                               | **Dom 11 oct** | 3 h                 | — (antes de postular esta semana)                 |
| **1** | Fundaciones: repo, sistema de diseño, SEO base                      | 12 – 17 oct         | 6 h (≈1 h/día)    | Matrícula inglés 14 oct · Resend 18 oct         |
| **2** | MVP: páginas núcleo + 2 casos →**reemplaza la web vieja**   | 19 – 31 oct         | 10 h                | Tesis 25 oct · contacto agencias 31 oct           |
| **3** | Medición completa (GA4 + GTM + consentimiento)                      | 1 – 12 nov          | 6 h                 | Certificación GA4 12 nov (**se refuerzan**) |
| —          | Pausa total                                                          | 13 – 22 nov         | 0 h                 | Cierre académico + viaje a Panamá                |
| **4** | Notas (blog) + flujo con LinkedIn + 2 casos más                     | 23 nov – 20 dic     | 1 nota/semana + 4 h | Encuestas tesis 30 nov · UX 15 dic · B1 22 dic   |
| **5** | QA y lanzamiento (se ejecuta al cerrar cada fase 2–4)               | Continuo             | 1 h por lanzamiento | —                                                 |
| **6** | Iteración y optimización con datos reales + caso "este portafolio" | Ene 2027             | 4 h/mes             | Titulación                                        |

## Estado al 12 oct 2026 — todas las fases ejecutadas

Por decisión de Sebastián ("hazlo sin importar la fecha"), las fases 0 a 6 se ejecutaron el 11 y 12 de octubre. **Todo lo que depende del código está terminado.** Lo que queda abierto depende de cuentas externas (Google, Resend, LinkedIn), de datos que solo existen con el tiempo o de una decisión tuya.

**Hecho (código y contenido)**

- Web en Next.js 16 + React 19 + Tailwind 4 + MDX, 45 rutas estáticas, lint y tipos limpios, en producción en `sjaquer.is-a.dev`.
- Sistema de diseño v3.3, marca completa (logo, favicon, íconos, kit de Figma con retrato y plantillas), OG por página.
- Fuente única `content/profile.ts`; CV en Word alineado al posicionamiento y PDF regenerado.
- 7 casos publicados (Empleabilidad, Difusión, Formularios y NPS, Feria Virtual, Reqlut Bot, Big Jack, **Este portafolio**) + Dearel como borrador.
- **Notas**: `/notas`, `/notas/[slug]`, filtro por pilar, RSS, `BlogPosting`, `post_read`, bloque de LinkedIn, "Últimas notas" en la home y **4 notas publicadas**.
- Medición: Consent Mode v2, 9 eventos tipados con parámetros limpios, contenedor importable `docs/gtm/eventos-sitio.json`, QA en producción.

**Abierto (solo tú puedes hacerlo)**

1. ⬜ **Cuentas de Google** (≈ 40 min, `04-TECH-SEO-MEDICION.md` §4.8): importar el contenedor de eventos en GTM, publicar, dimensiones y eventos clave en GA4, sitemap en Search Console.
2. ⬜ **Resend:** `RESEND_API_KEY` y `CONTACT_FROM_EMAIL` en Vercel; probar envío correcto (error y honeypot ya probados).
3. ⬜ **LinkedIn:** publicar las 4 notas con la plantilla de `06` §5.5 (enlace con UTM en el primer comentario) y pegar cada URL en `linkedinUrl` de `content/notas/index.ts`; UTM en Destacados.
4. ⬜ **Decisión de rendimiento:** GTM en `<head>` (hoy, Rendimiento 88–91) o tras la primera interacción (≈ 98). Ver `decisiones.md`.
5. ⬜ **Datos** de `07-PROYECTOS.md` §4 en los casos, base del −30 % para publicar Dearel y la línea "fuera del trabajo" en `/sobre-mi`.
6. ⬜ **Revisión en dispositivos reales** (Chrome Android de gama media y Safari iOS).
7. ⬜ **Iteración con datos** (Fase 6): con 30–60 días de datos, revisar el embudo y probar las hipótesis H1–H3 de `decisiones.md`.

---

## Fase 0 · Correcciones urgentes — domingo 11 oct (máx. 3 h)

**Objetivo:** que la web actual no contradiga tu CV ni contenga nada indefendible, antes de enviar postulaciones esta semana. No se rediseña nada.

**Tareas**

1. [X] **Medir la línea base** en PageSpeed Insights (móvil y escritorio). Guardar capturas en `/docs/baseline/`. *(10 min)*
2. [X] **Corregir `llms.txt` y `resume.txt`** *(45 min)*:
    - Título: "Desarrollo web · Automatización de procesos · Integraciones".
    - Certificaciones con nombre y emisor reales (ver tabla A2 de la auditoría).
    - Cargo en Big Jack: "Operaciones y Marketing".
    - Educación: "Administración y Negocios Internacionales — en curso, egreso dic. 2026".
    - Inglés: "Intermedio (acreditación B1 en curso)".
    - Agregar Norbert Wiener (Practicante Pre Profesional, jun 2026 – actualidad).
    - Quitar "Experienced software engineer".
3. [X] **Metadatos de la home** *(15 min)*:
    - `title`: `Sebastián Jaque — Desarrollo web y automatización de procesos | Lima`
    - `description`: `Construyo herramientas web y automatizaciones que reducen tareas manuales y conectan sistemas con APIs. Estudiante de Administración y Negocios Internacionales. Lima, Perú.`
    - Mismos textos en `og:` y `twitter:`. Quitar `meta keywords`.
4. [X] **Imagen OG 1200×630** *(30 min)*: fondo claro, tu nombre, rol y URL. Reemplazar el ícono 512×512. Probar con el [Post Inspector de LinkedIn](https://www.linkedin.com/post-inspector/).
5. [X] **Textos visibles críticos** *(45 min)*:
    - Hero: cambiar "Code. Integrate AI. Scale." por tu nombre + rol + frase de posicionamiento (`06-CONTENIDO.md`, §3).
    - Quitar el bloque "99 %" y "Precision Engineering".
    - Big Jack: usar la misma métrica del CV (−35 % en tiempo de procesamiento).
    - Añadir botón "Descargar CV" en el hero (subir el PDF exportado del `.docx`).
6. [X] **robots.txt**: quitar `Host:`. *(5 min)*
7. [ ] Desplegar y revisar en el teléfono. *(10 min)*

**Terminado cuando:** no hay ninguna diferencia de cargo, fecha, certificación o métrica entre web, CV y LinkedIn; la tarjeta de LinkedIn se ve bien.

---

## Fase 1 · Fundaciones — 12 al 17 oct (máx. 6 h)

**Objetivo:** proyecto nuevo con todo lo que no se ve pero sostiene todo lo demás.

**Tareas**

1. [X] Partir del repo `Mi-Portafolio` (Next.js 16 + TypeScript + Tailwind 4 + MDX): verificar que las páginas se generan estáticas, ESLint, Prettier y previsualizaciones en Vercel. *(1 h)*
2. [X] Copiar `/docs` y `CLAUDE.md` al repo. *(5 min)*
3. [X] `tokens.css` + `@theme` de Tailwind según `03-DESIGN.md`; fuentes Inter + JetBrains Mono con `next/font` (`03-DESIGN.md` §5.1); tema claro/oscuro. *(1 h)*
4. [X] `content/profile.ts` como fuente única, con datos idénticos al CV. *(45 min)* — ⚠️ el encabezado del `.docx` quedó con "MarTech & CRO"; ver Pendiente 1.
5. [X] Rutas generadas: `llms.txt`, `resume.txt`, `sitemap.ts`, `robots.ts` desde `profile.ts`. *(1 h)*
6. [X] Componentes base: `Container`, `Section`, `SectionHeader`, `Button` (4 variantes, 3 tamaños, todos los estados), `Tag`, `Metric`, `Header`, `Footer`. *(1,5 h)*
7. [X] Utilidades SEO: `lib/seo.ts` (metadata por defecto) y `lib/jsonld.ts` (`Person`, `WebSite`). *(30 min)*
8. [X] Lighthouse CI configurado con los umbrales de `04-TECH-SEO-MEDICION.md` §3.1. *(15 min)*

**Terminado cuando:** una página de prueba usa solo tokens y componentes; `llms.txt` sale de `profile.ts`; Lighthouse ≥ 95 en la previsualización.

---

## Fase 2 · MVP — 19 al 31 oct (máx. 10 h)

**Antes de empezar (semana del 12 oct):** enviar el correo de permiso a tu jefatura y pedir los datos faltantes (`07-PROYECTOS.md` §3 y §4).

**Objetivo:** reemplazar la web vieja con una versión más pequeña pero correcta. **Se lanza con 2 casos, no con 5.**

**Tareas**

1. [X] **Home** completa según PRD §8.1 (hero, prueba rápida, casos, qué hago, experiencia, CTA final). *(3 h)*
2. [X] **Caso A:** Sistema de difusión por correo — Norbert Wiener (incluye validación de correos). Capturas con datos simulados + diagrama. *(2,5 h)*
3. [X] **Caso B:** Plataforma Empleabilidad Wiener — **ya en producción**; se publica con el permiso de `07-PROYECTOS.md` §3, enlazando al sitio oficial. Galería de landings (graduación, Empleabilidad, Posgrado) con enlaces en vivo. *(2 h)*
4. [X] `/proyectos` con los 2 casos + sección "Laboratorio" con los proyectos de práctica. *(45 min)*
5. [X] `/cv` (HTML desde `profile.ts` + PDF descargable) y `/sobre-mi`. *(1 h)*
6. [X] `/contacto` con formulario (Resend + Zod + honeypot) y WhatsApp. *(1 h)*
7. [X] Imágenes OG por página con `next/og`; JSON-LD de `ProfilePage` y casos. *(30 min)*
8. [ ] **Lanzamiento** (checklist de Fase 5): apuntar `sjaquer.is-a.dev` al nuevo proyecto. *(30 min)*

**Terminado cuando:** la web nueva está en producción, la vieja apagada, y un reclutador puede en menos de 60 s saber quién eres y descargar tu CV.

---

## Fase 3 · Medición — 1 al 12 nov (máx. 6 h)

**Objetivo:** la web pasa a ser un producto medido. **Hazla en paralelo con el estudio de la certificación GA4:** cada concepto del examen lo aplicas aquí el mismo día.

**Tareas**

1. [X] Crear cuenta GA4 + contenedor GTM; Consent Mode v2 con banner y `/privacidad`. *(1,5 h)*
2. [X] `lib/analytics.ts` tipado; `data-cta` en todos los botones; eventos de la tabla §4.3. *(1,5 h)*
3. [ ] Marcar conversiones (`cv_download`, `generate_lead`, `case_study_read`); registrar dimensiones personalizadas. *(30 min)* — guía en `04` §4.8, pasos 3–4.
4. [ ] Search Console + envío del sitemap; Clarity vía GTM (con consentimiento). *(30 min)* — Search Console verificado ✅, Clarity con consentimiento ✅ (verificado en producción); falta enviar el sitemap (`04` §4.8 paso 6).
5. [ ] QA de cada evento con GTM Preview + DebugView. *(1 h)* — QA automatizada en producción hecha (`04` §4.8); falta importar la etiqueta de eventos (`docs/gtm/eventos-sitio.json`) y confirmar en Preview/DebugView.
6. [ ] UTM en los enlaces de LinkedIn (perfil, Destacados) y en el PDF del CV. *(15 min)* — CV ✅; LinkedIn ⬜ (`04` §4.8 paso 7).
7. [ ] Exploración de embudo en GA4 + `/docs/decisiones.md` iniciado. *(45 min)* — `decisiones.md` ✅; exploración de embudo ⬜ (necesita datos).

**Terminado cuando:** cada evento aparece correcto en DebugView, rechazar el consentimiento no deja cookies `_ga`, y el embudo muestra datos.

---

## Pausa — 13 al 22 nov

Cero trabajo en el portafolio. Solo se revisa GA4 si ya tienes datos, 10 minutos, para tu primera nota.

---

## Fase 4 · Notas + LinkedIn + casos 3 y 4 — 23 nov al 20 dic

**Objetivo:** abrir el canal de contenido y completar los casos.

**Tareas**

1. [X] `/notas` y `/notas/[slug]` con MDX, pilares, tiempo de lectura, OG automático, RSS, JSON-LD `BlogPosting`. *(2 h)*
2. [X] Bloque "Comentar en LinkedIn" + "Sígueme en LinkedIn" al final de cada nota. *(30 min)* — "Comentar" aparece al completar `linkedinUrl`.
3. [X] Sección "Últimas notas" en la home. *(20 min)*
4. [X] **4 notas** publicadas en la web (eventos GA4, validación de correos, 3 tareas para PYMES, rediseño del portafolio). *(≈1,5 h c/u)* — falta publicarlas en LinkedIn.
5. [X] Casos: Form3ularios y NPS, Feria Virtual, Reqlut Bot y Big Jack publicados; Dearel como borrador hasta tener la base del −30 %. *(1,5 h c/u)*

**Terminado cuando:** 4 notas publicadas en la web y en LinkedIn con UTM, y 4 casos en `/proyectos`.

---

## Fase 5 · QA y lanzamiento (se aplica en cada salida)

Última ejecución: **12 oct 2026** (automatizada en el build de producción local y en `sjaquer.is-a.dev`).

- [ ] Lighthouse móvil ≥ 95 en Home, un caso y una nota. — Accesibilidad, Buenas prácticas y SEO **100** en las 4 páginas probadas; LCP 1,5–1,6 s; CLS ≤ 0,03. Rendimiento **88–91** por GTM en `<head>` (decisión pendiente, ver Abierto 4).
- [X] Navegación completa solo con teclado; foco visible. — Orden lógico, "Saltar al contenido", foco visible en todos los controles.
- [X] axe sin errores. — Auditoría de accesibilidad de Lighthouse (motor axe) sin fallos.
- [ ] Revisión en Chrome Android real (gama media) y Safari iOS. — Emulado a 390 px sin desbordes; falta dispositivo real.
- [X] Todas las capturas con datos simulados (revisión manual). — Las portadas son imágenes editoriales sin datos reales.
- [X] Metadatos y OG únicos. — 18 URLs del sitemap con título, descripción (≤ 160 car.), canonical y `og:image` únicos. Falta el Post Inspector de LinkedIn tras publicar.
- [X] Prueba de resultados enriquecidos sin errores. — JSON-LD válido en todas las páginas (`Person`, `WebSite`, `ProfilePage`, `CreativeWork`, `BlogPosting`, `BreadcrumbList`).
- [ ] Formulario: envío correcto, error y spam. — Error y honeypot ✅; envío correcto pendiente de Resend.
- [X] Eventos de medición verificados. — En producción (`04` §4.8) y `post_read` en local.
- [X] `llms.txt`, `resume.txt` y CV coinciden. — Mismo rol en los tres; sin "MarTech" ni "CRO".

## Fase 6 · Iteración y optimización — enero 2027

**Objetivo:** usar los datos para mejorar y convertir el proceso en tu caso de estudio estrella.

1. Revisar 60 días de datos: ¿qué canal trae descargas de CV? ¿dónde se abandona el embudo?
2. ✅ Hipótesis formuladas (H1–H3 en `decisiones.md`); se prueban cuando haya datos.
3. Implementar el cambio, medir 3–4 semanas, documentar en `/docs/decisiones.md`.
4. ✅ Publicado el **caso "Este portafolio"** (`/proyectos/este-portafolio`) y la nota "Por qué rediseñé mi portafolio"; se actualizará con los datos del embudo.
5. ✅ Evaluados dominio propio y versión en inglés: se mantiene `sjaquer.is-a.dev` y el inglés se retoma tras la acreditación B1 (ver `decisiones.md`).

---

## Seguimiento

Al cerrar cada fase, actualiza esta tabla:

| Fase | Estado | Fecha real  | Horas reales | Nota                                                                               |
| ---- | ------ | ----------- | ------------ | ---------------------------------------------------------------------------------- |
| 0    | ✅     | 11 oct 2026 | —           | Hecha sobre la web Vite; luego superada por la migración                          |
| 1    | ✅     | 11 oct 2026 | —           | Adelantada; Figma como kit en`design/figma/`                                     |
| 2    | ✅     | 12 oct 2026 | —           | En producción; Resend pendiente en Vercel                                         |
| 3    | 🟡     | 12 oct 2026 | —           | Código y QA en producción listos; faltan los pasos en las cuentas de`04` §4.8 |
| 4    | ✅     | 12 oct 2026 | —           | Notas, RSS y 4 notas; casos publicados; falta LinkedIn                             |
| 6    | 🟡     | 12 oct 2026 | —           | Caso "Este portafolio" y decisiones listos; iteración espera datos                |
