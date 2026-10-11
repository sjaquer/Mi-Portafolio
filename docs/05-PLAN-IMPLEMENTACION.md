# 05 · Plan de implementación por fases

> Cada fase tiene objetivo, tareas, criterio de "terminado" y un **tiempo máximo**. Si se pasa del tiempo, se recorta alcance, no se mueve la fecha.
>
> **Regla de prioridad (no negociable):** inglés B1 → tesis → GA4 / Google UX → cierre de prácticas → portafolio. Si una fase del portafolio choca con un hito de esa lista, gana el hito.

---

## Calendario resumido

| Fase | Qué | Ventana | Tiempo máx. | Choca con |
|---|---|---|---|---|
| **0** | Correcciones urgentes en la web actual | **Dom 11 oct** | 3 h | — (antes de postular esta semana) |
| **1** | Fundaciones: repo, diseño, logo, favicon y plantillas Figma | 12 – 17 oct | 7 h (≈1 h/día) | Matrícula inglés 14 oct · Resend 18 oct |
| **2** | MVP: páginas núcleo + 2 casos → **reemplaza la web vieja** | 19 – 31 oct | 10 h | Tesis 25 oct · contacto agencias 31 oct |
| **3** | Medición completa (GA4 + GTM + consentimiento) | 1 – 12 nov | 6 h | Certificación GA4 12 nov (**se refuerzan**) |
| — | Pausa total | 13 – 22 nov | 0 h | Cierre académico + viaje a Panamá |
| **4** | Notas (blog) + flujo con LinkedIn + 2 casos más | 23 nov – 20 dic | 1 nota/semana + 4 h | Encuestas tesis 30 nov · UX 15 dic · B1 22 dic |
| **5** | QA y lanzamiento (se ejecuta al cerrar cada fase 2–4) | Continuo | 1 h por lanzamiento | — |
| **6** | Iteración CRO con datos reales + caso "este portafolio" | Ene 2027 | 4 h/mes | Titulación |

---

## Fase 0 · Correcciones urgentes — domingo 11 oct (máx. 3 h)

**Objetivo:** que la web actual no contradiga tu CV ni contenga nada indefendible, antes de enviar postulaciones esta semana. No se rediseña nada.

**Tareas**
1. [ ] **Medir la línea base** en PageSpeed Insights (móvil y escritorio). Guardar capturas en `/docs/baseline/`. *(10 min)*
2. [ ] **Corregir `llms.txt` y `resume.txt`** *(45 min)*:
   - Título: "Desarrollo web · Automatización · MarTech & CRO".
   - Certificaciones con nombre y emisor reales (ver tabla A2 de la auditoría).
   - Cargo en Big Jack: "Operaciones y Marketing".
   - Educación: "Administración y Negocios Internacionales — en curso, egreso dic. 2026".
   - Inglés: "Intermedio (acreditación B1 en curso)".
   - Agregar Norbert Wiener (Practicante Pre Profesional, jun 2026 – actualidad).
   - Quitar "Experienced software engineer".
3. [ ] **Metadatos de la home** *(15 min)*:
   - `title`: `Sebastián Jaque — Desarrollo web, MarTech y CRO | Lima`
   - `description`: `Estudiante de último ciclo que construye sitios con Next.js, automatizaciones e integraciones, y mide su impacto con GA4. Lima, Perú.`
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

## Fase 1 · Fundaciones y Activos de Marca — 12 al 17 oct (máx. 7 h)

**Objetivo:** proyecto nuevo con bases técnicas sólidas, identidad gráfica vectorial lista, plantillas en Figma armadas y todo el sistema de tokens operativo.

**Tareas**

1. [ ] **Creación del repositorio y setup base** *(45 min)*:
   - Crear repo `sjaquer-web` con Next.js (App Router) + TypeScript + Tailwind v4 + ESLint + Prettier.
   - Configurar despliegue automático en Vercel con URL de previsualización.
   - Copiar `/docs` y `CLAUDE.md` actualizados a la raíz del nuevo repositorio.

2. [ ] **Activos de identidad y marca en SVG** *(45 min)*:
   - `public/brand/logo/wordmark.svg`: "Sebastián Jaque" en Inter SemiBold (600), `letter-spacing: -0.02em` y versión oscura `wordmark-dark.svg`.
   - `public/brand/logo/monograma.svg`: lienzo 64×64 px, radio 14 px, `sj` en JetBrains Mono SemiBold (600) + regla de medición de 3 marcas técnicas (§3.2 de `03-DESIGN.md`).
   - `public/brand/avatar-silhouette.svg`: ilustración vectorial minimalista/silueta sutil monocroma (trazo 1,5 px, técnico plano) para el estado transitorio del Hero (§10.6 de `03-DESIGN.md`).
   - Favicons e iconos de aplicación: `public/favicon.svg` (con soporte para modo claro/oscuro vía CSS), `public/favicon.ico` (32 px simplificado sin regla), `public/apple-touch-icon.png` (180 px) y `public/icon-512.png`.

3. [ ] **Plantillas de marca en Figma** *(1 h)*:
   - Crear archivo de diseño en Figma siguiendo las especificaciones de `03-DESIGN.md` §12.9:
     - Configurar Estilos Locales (Colores: papel `#FAFAF8`, superficie `#FFFFFF`, tinta `#14161A`, marino `#1F3A5F`, azul acción `#2350D9`, verde métrica `#0B7350`; Tipografías: Inter y JetBrains Mono).
     - Componente Monograma y Favicon (64 × 64 px).
     - Banner de LinkedIn (1584 × 396 px) con zona segura izquierda de 380 px para el avatar, frase de posicionamiento y URL.
     - Plantilla de post de LinkedIn 4:5 (1080 × 1350 px) con Auto-Layout, header con pilar + monograma, titular en Inter 600, bloque de métrica/diagrama y footer con separador de regla (§6.1).
     - Plantilla de Carrusel (1080 × 1350 px, slides 1 a 7 con layout de portada, pasos, resultado medido y cierre).
     - Plantilla de Open Graph / Portada de Blog (1200 × 630 px).

4. [ ] **Tipografía y Tokens en código** *(1 h)*:
   - Configurar fuentes Inter y JetBrains Mono con `next/font/google` (cero saltos de layout, optimizadas localmente).
   - Crear `app/tokens.css` y configurar `@theme` en Tailwind v4 con los tokens semánticos claros y oscuros de `03-DESIGN.md` §22:
     - Marino de identidad (`#1F3A5F`), Azul de acción (`#2350D9`), Verde de resultado (`#0B7350`).
     - Paleta de gráficos de datos (`--chart-1`, `--chart-2`, `--chart-3`, `--chart-other`).
     - Variables de fuente `--font-sans` y `--font-mono`.
   - Implementar soporte para alternar modo claro/oscuro (`data-theme="dark"`) con preferencia del sistema.

5. [ ] **Fuente única de datos (`content/profile.ts`)** *(45 min)*:
   - Archivo TypeScript tipado que centraliza todos los datos del perfil idénticos al CV y la auditoría:
     - Rol canónico: "Desarrollo web · Automatización · MarTech & CRO".
     - Frase de posicionamiento canónica.
     - Experiencia profesional verídica (Norbert Wiener, Big Jack, Dearel).
     - Métricas con contexto (base, periodo y método).
     - Certificaciones reales con emisor exacto.

6. [ ] **Generación de rutas y metadatos dinámicos** *(45 min)*:
   - Generadores automáticos desde `profile.ts`:
     - `/llms.txt` y `/resume.txt`
     - `app/sitemap.ts` y `app/robots.ts`

7. [ ] **Componentes base accesibles (WCAG 2.2 AA)** *(1,5 h)*:
   - `Container` y `Section` con escala de espaciado estándar.
   - `SectionHeader` con etiqueta mono y `h2`.
   - `Button`: 4 variantes (primary, secondary, outline, ghost), 3 tamaños, atributo obligatorio `data-cta` para analítica. Un solo botón `primary` visible por pantalla.
   - `Tag`: etiqueta mono con borde de 1 px para stack y categorías.
   - `Metric`: cifra en JetBrains Mono verde + línea de contexto obligatorio.
   - `ThemeToggle`: botón accesible para alternar tema claro / oscuro / sistema.
   - `Header`: wordmark interactivo, navegación y enlace a CV con menú móvil accesible.
   - `Footer`: wordmark compacto, enlaces, redes y fecha de build automática.

8. [ ] **Utilidades SEO y Datos Estructurados** *(30 min)*:
   - `lib/seo.ts`: generador de metadatos Open Graph, Twitter y títulos en formato `es-PE`.
   - `lib/jsonld.ts`: esquemas `Person` y `WebSite` sincronizados con `profile.ts`.

9. [ ] **Lighthouse CI y validación** *(15 min)*:
   - Configurar lhci con los umbrales de `04-TECH-SEO-MEDICION.md` §3.1 (LCP < 2 s, JS inicial < 100 KB, CLS < 0,05).

**Terminado cuando:**
- Los archivos SVG de marca y favicon existen en `/public/brand/`.
- El archivo de Figma tiene los estilos y plantillas listos para duplicar y publicar piezas.
- Una página de prueba renderiza con solo tokens y componentes sin errores de consola.
- `llms.txt`, `resume.txt` y sitemap se generan correctamente desde `profile.ts`.
- Lighthouse alcanza ≥ 95 en la URL de previsualización en Vercel.

---

## Fase 2 · MVP — 19 al 31 oct (máx. 10 h)

**Objetivo:** reemplazar la web vieja con una versión más pequeña pero correcta. **Se lanza con 2 casos, no con 5.**

**Tareas**
1. [ ] **Home** completa según PRD §8.1 (hero, prueba rápida, casos, qué hago, experiencia, CTA final). *(3 h)*
2. [ ] **Caso 1:** Plataforma de bolsa de trabajo — Norbert Wiener. Capturas con datos simulados + diagrama de arquitectura. *(2,5 h)*
3. [ ] **Caso 2:** Sistema de pedidos — Big Jack Burgers. *(1,5 h)*
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
5. [ ] Caso 3: integración Shopify + CRM — Dearel. Caso 4: comunicación omnicanal — Wiener. *(1,5 h c/u)*

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

## Fase 6 · Iteración CRO — enero 2027

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
