# 05 · Plan de implementación por fases

> Cada fase tiene objetivo, tareas, criterio de "terminado" y un **tiempo máximo**. Si se pasa del tiempo, se recorta alcance, no se mueve la fecha.
>
> **Regla de prioridad (no negociable):** inglés B1 → tesis → GA4 / Google UX → cierre de prácticas → portafolio. Si una fase del portafolio choca con un hito de esa lista, gana el hito.

---

## Calendario resumido

| Fase | Qué | Ventana | Tiempo máx. | Choca con |
|---|---|---|---|---|
| **0** | Correcciones urgentes en la web actual | **Dom 11 oct** | 3 h | — (antes de postular esta semana) |
| **1** | Fundaciones: repo, sistema de diseño, SEO base | 12 – 17 oct | 6 h (≈1 h/día) | Matrícula inglés 14 oct · Resend 18 oct |
| **2** | MVP: páginas núcleo + 2 casos → **reemplaza la web vieja** | 19 – 31 oct | 10 h | Tesis 25 oct · contacto agencias 31 oct |
| **3** | Medición completa (GA4 + GTM + consentimiento) | 1 – 12 nov | 6 h | Certificación GA4 12 nov (**se refuerzan**) |
| — | Pausa total | 13 – 22 nov | 0 h | Cierre académico + viaje a Panamá |
| **4** | Notas (blog) + flujo con LinkedIn + 2 casos más | 23 nov – 20 dic | 1 nota/semana + 4 h | Encuestas tesis 30 nov · UX 15 dic · B1 22 dic |
| **5** | QA y lanzamiento (se ejecuta al cerrar cada fase 2–4) | Continuo | 1 h por lanzamiento | — |
| **6** | Iteración y optimización con datos reales + caso "este portafolio" | Ene 2027 | 4 h/mes | Titulación |

---

## Fase 0 · Correcciones urgentes — domingo 11 oct (máx. 3 h)

**Objetivo:** que la web actual no contradiga tu CV ni contenga nada indefendible, antes de enviar postulaciones esta semana. No se rediseña nada.

**Tareas**
1. [ ] **Medir la línea base** en PageSpeed Insights (móvil y escritorio). Guardar capturas en `/docs/baseline/`. *(10 min)*
2. [ ] **Corregir `llms.txt` y `resume.txt`** *(45 min)*:
   - Título: "Desarrollo web · Automatización de procesos · Integraciones".
   - Certificaciones con nombre y emisor reales (ver tabla A2 de la auditoría).
   - Cargo en Big Jack: "Operaciones y Marketing".
   - Educación: "Administración y Negocios Internacionales — en curso, egreso dic. 2026".
   - Inglés: "Intermedio (acreditación B1 en curso)".
   - Agregar Norbert Wiener (Practicante Pre Profesional, jun 2026 – actualidad).
   - Quitar "Experienced software engineer".
3. [ ] **Metadatos de la home** *(15 min)*:
   - `title`: `Sebastián Jaque — Desarrollo web y automatización de procesos | Lima`
   - `description`: `Construyo herramientas web y automatizaciones que reducen tareas manuales y conectan sistemas con APIs. Estudiante de Administración y Negocios Internacionales. Lima, Perú.`
   - Mismos textos en `og:` y `twitter:`. Quitar `meta keywords`.
4. [ ] **Imagen OG 1200×630** *(30 min)*: fondo claro, tu nombre, rol y URL. Reemplazar el ícono 512×512. Probar con el [Post Inspector de LinkedIn](https://www.linkedin.com/post-inspector/).
5. [ ] **Textos visibles críticos** *(45 min)*:
   - Hero: cambiar "Code. Integrate AI. Scale." por tu nombre + rol + frase de posicionamiento (`06-CONTENIDO.md`, §3).
   - Quitar el bloque "99 %" y "Precision Engineering".
   - Big Jack: usar la misma métrica del CV (−35 % en tiempo de procesamiento).
   - Añadir botón "Descargar CV" en el hero (subir el PDF exportado del `.docx`).
6. [ ] **robots.txt**: quitar `Host:`. *(5 min)*
7. [ ] Desplegar y revisar en el teléfono. *(10 min)*

**Terminado cuando:** no hay ninguna diferencia de cargo, fecha, certificación o métrica entre web, CV y LinkedIn; la tarjeta de LinkedIn se ve bien.

---

## Fase 1 · Fundaciones — 12 al 17 oct (máx. 6 h)

**Objetivo:** proyecto nuevo con todo lo que no se ve pero sostiene todo lo demás.

**Tareas**
1. [ ] Partir del repo `Mi-Portafolio` (Next.js 16 + TypeScript + Tailwind 4 + MDX): verificar que las páginas se generan estáticas, ESLint, Prettier y previsualizaciones en Vercel. *(1 h)*
2. [ ] Copiar `/docs` y `CLAUDE.md` al repo. *(5 min)*
3. [ ] `tokens.css` + `@theme` de Tailwind según `03-DESIGN.md`; fuentes Inter + JetBrains Mono con `next/font` (`03-DESIGN.md` §5.1); tema claro/oscuro. *(1 h)*
4. [ ] `content/profile.ts` como fuente única, con datos idénticos al CV. *(45 min)*
5. [ ] Rutas generadas: `llms.txt`, `resume.txt`, `sitemap.ts`, `robots.ts` desde `profile.ts`. *(1 h)*
6. [ ] Componentes base: `Container`, `Section`, `SectionHeader`, `Button` (4 variantes, 3 tamaños, todos los estados), `Tag`, `Metric`, `Header`, `Footer`. *(1,5 h)*
7. [ ] Utilidades SEO: `lib/seo.ts` (metadata por defecto) y `lib/jsonld.ts` (`Person`, `WebSite`). *(30 min)*
8. [ ] Lighthouse CI configurado con los umbrales de `04-TECH-SEO-MEDICION.md` §3.1. *(15 min)*

**Terminado cuando:** una página de prueba usa solo tokens y componentes; `llms.txt` sale de `profile.ts`; Lighthouse ≥ 95 en la previsualización.

---

## Fase 2 · MVP — 19 al 31 oct (máx. 10 h)

**Antes de empezar (semana del 12 oct):** enviar el correo de permiso a tu jefatura y pedir los datos faltantes (`07-PROYECTOS.md` §3 y §4).

**Objetivo:** reemplazar la web vieja con una versión más pequeña pero correcta. **Se lanza con 2 casos, no con 5.**

**Tareas**
1. [ ] **Home** completa según PRD §8.1 (hero, prueba rápida, casos, qué hago, experiencia, CTA final). *(3 h)*
2. [ ] **Caso A:** Sistema de difusión por correo — Norbert Wiener (incluye validación de correos). Capturas con datos simulados + diagrama. *(2,5 h)*
3. [ ] **Caso B:** Plataforma Empleabilidad Wiener — **ya en producción**; se publica con el permiso de `07-PROYECTOS.md` §3, enlazando al sitio oficial. Galería de landings (graduación, Empleabilidad, Posgrado) con enlaces en vivo. *(2 h)*
4. [ ] `/proyectos` con los 2 casos + sección "Laboratorio" con los proyectos de práctica. *(45 min)*
5. [ ] `/cv` (HTML desde `profile.ts` + PDF descargable) y `/sobre-mi`. *(1 h)*
6. [ ] `/contacto` con formulario (Resend + Zod + honeypot) y WhatsApp. *(1 h)*
7. [ ] Imágenes OG por página con `next/og`; JSON-LD de `ProfilePage` y casos. *(30 min)*
8. [ ] **Lanzamiento** (checklist de Fase 5): apuntar `sjaquer.is-a.dev` al nuevo proyecto. *(30 min)*

**Terminado cuando:** la web nueva está en producción, la vieja apagada, y un reclutador puede en menos de 60 s saber quién eres y descargar tu CV.

---

## Fase 3 · Medición — 1 al 12 nov (máx. 6 h)

**Objetivo:** la web pasa a ser un producto medido. **Hazla en paralelo con el estudio de la certificación GA4:** cada concepto del examen lo aplicas aquí el mismo día.

**Tareas**
1. [ ] Crear cuenta GA4 + contenedor GTM; Consent Mode v2 con banner y `/privacidad`. *(1,5 h)*
2. [ ] `lib/analytics.ts` tipado; `data-cta` en todos los botones; eventos de la tabla §4.3. *(1,5 h)*
3. [ ] Marcar conversiones (`cv_download`, `generate_lead`, `case_study_read`); registrar dimensiones personalizadas. *(30 min)*
4. [ ] Search Console + envío del sitemap; Clarity vía GTM (con consentimiento). *(30 min)*
5. [ ] QA de cada evento con GTM Preview + DebugView. *(1 h)*
6. [ ] UTM en los enlaces de LinkedIn (perfil, Destacados) y en el PDF del CV. *(15 min)*
7. [ ] Exploración de embudo en GA4 + `/docs/decisiones.md` iniciado. *(45 min)*

**Terminado cuando:** cada evento aparece correcto en DebugView, rechazar el consentimiento no deja cookies `_ga`, y el embudo muestra datos.

---

## Pausa — 13 al 22 nov
Cero trabajo en el portafolio. Solo se revisa GA4 si ya tienes datos, 10 minutos, para tu primera nota.

---

## Fase 4 · Notas + LinkedIn + casos 3 y 4 — 23 nov al 20 dic

**Objetivo:** abrir el canal de contenido y completar los casos.

**Tareas**
1. [ ] `/notas` y `/notas/[slug]` con MDX, pilares, tiempo de lectura, OG automático, RSS, JSON-LD `BlogPosting`. *(2 h)*
2. [ ] Bloque "Comentar en LinkedIn" + "Sígueme en LinkedIn" al final de cada nota. *(30 min)*
3. [ ] Sección "Últimas notas" en la home. *(20 min)*
4. [ ] **1 nota por semana** siguiendo el flujo de `06-CONTENIDO.md` §5 (4 notas en la fase). *(≈1,5 h c/u)*
5. [ ] Casos: Formularios y NPS, Feria Virtual, Reqlut Bot, Big Jack y Dearel (`07-PROYECTOS.md`). Notas de la fase desde el Nivel C. *(1,5 h c/u)*

**Terminado cuando:** 4 notas publicadas en la web y en LinkedIn con UTM, y 4 casos en `/proyectos`.

---

## Fase 5 · QA y lanzamiento (se aplica en cada salida)

- [ ] Lighthouse móvil ≥ 95 en Home, un caso y una nota.
- [ ] Navegación completa solo con teclado; foco visible.
- [ ] axe sin errores.
- [ ] Revisión en Chrome Android real (gama media) y Safari iOS.
- [ ] Todas las capturas con datos simulados (revisión manual).
- [ ] Metadatos y OG únicos (Post Inspector de LinkedIn).
- [ ] Prueba de resultados enriquecidos sin errores.
- [ ] Formulario: envío correcto, error y spam.
- [ ] Eventos de medición verificados (desde Fase 3).
- [ ] `llms.txt`, `resume.txt` y CV coinciden.

---

## Fase 6 · Iteración y optimización — enero 2027

**Objetivo:** usar los datos para mejorar y convertir el proceso en tu caso de estudio estrella.

1. Revisar 60 días de datos: ¿qué canal trae descargas de CV? ¿dónde se abandona el embudo?
2. Formular 1–2 hipótesis (ejemplo: *"Mostrar el resultado del caso en el título de la tarjeta aumentará `case_study_view` desde la home"*).
3. Implementar el cambio, medir 3–4 semanas, documentar en `/docs/decisiones.md`.
4. Publicar el **caso 5: este portafolio** (antes/después de rendimiento, plan de medición, decisiones con datos) + una nota en LinkedIn.
5. Evaluar dominio propio y versión en inglés.

---

## Seguimiento

Al cerrar cada fase, actualiza esta tabla:

| Fase | Estado | Fecha real | Horas reales | Nota |
|---|---|---|---|---|
| 0 | ⬜ | | | |
| 1 | ⬜ | | | |
| 2 | ⬜ | | | |
| 3 | ⬜ | | | |
| 4 | ⬜ | | | |
| 6 | ⬜ | | | |
