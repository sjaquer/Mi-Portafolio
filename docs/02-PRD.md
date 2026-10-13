# 02 · PRD — Portafolio sjaquer.is-a.dev v2

> Documento de requisitos de producto. Define **qué** se construye y **por qué**.
> El **cómo se ve** está en `03-DESIGN.md`; el **cómo se construye y se mide**, en `04-TECH-SEO-MEDICION.md`.

---

## 1. Problema

La web anterior presentaba a un "Full-Stack Developer & AI Integration Specialist" con estética genérica de IA. El objetivo profesional y la experiencia real demostrable hoy corresponden a **desarrollo web, automatización de procesos e integraciones de sistemas** (con proyección y dirección de carrera hacia MarTech). La web debe reflejar con máxima fidelidad lo que Sebastián sabe y puede demostrar hoy.

## 2. Objetivo del producto

Que la web sea **la prueba de trabajo** de Sebastián: un sitio rápido, claro y técnicamente sólido que demuestre lo que él sabe hacer (construir herramientas funcionales, automatizar procesos manuales y conectar plataformas vía APIs), y que convierta visitas de reclutadores en entrevistas y contactos.

## 3. Posicionamiento

**Quién:** Sebastián Jaque, estudiante de último ciclo de Administración y Negocios Internacionales. Construye herramientas web con Next.js y automatizaciones con Python para reducir fricción operativa en negocios.

**Qué hace:** desarrollo web (Next.js, TypeScript, PostgreSQL), automatización de procesos y bots (Python, Playwright, RPA), e integración de plataformas (APIs REST, Shopify, CRM, email transaccional).

**Diferencial:** entiende el problema de negocio antes de escribir código y diseña herramientas que ahorran horas de trabajo manual. Formación en negocios + rigor técnico construyendo.

**Tono:** builder, no gurú. Concreto, en primera persona, sin superlativos. Ver `06-CONTENIDO.md`.

**Frase de posicionamiento (canónica, usar igual en todos los canales):**

> Construyo herramientas web y automatizaciones que reducen tareas manuales y conectan sistemas con APIs.

## 4. Audiencias

| # | Audiencia | Llega desde | Tiempo que da | Qué necesita ver | Acción que buscamos |
|---|---|---|---|---|---|
| 1 | **Reclutador / talento** | CV, LinkedIn, portal de empleo | 30–60 s | Quién es, qué rol busca, experiencia, que sea creíble | Descargar CV · ir a LinkedIn |
| 2 | **Jefe técnico o de marketing** (decide la contratación) | Enlace del reclutador | 3–5 min | Cómo piensa, profundidad técnica, resultados medidos | Leer un caso completo · contactar |
| 3 | **Cliente PYME** (freelance) | LinkedIn, recomendación, Google | 1–2 min | Qué problemas resuelve, ejemplos parecidos a su negocio | Escribir por WhatsApp o formulario |
| 4 | **Red de LinkedIn** | Publicaciones de "Notas" | 2–4 min | Una idea útil | Leer, seguir en LinkedIn, volver |

**Prioridad hasta enero 2027:** audiencias 1 y 2 (búsqueda de empleo). La 3 se mantiene con una sección ligera.

## 5. Objetivos y métricas de éxito

| Objetivo | Métrica (evento GA4) | Meta inicial (primeros 60 días) |
|---|---|---|
| Convertir visitas de reclutadores | `cv_download` / sesiones | ≥ 8 % |
| Generar contactos | `generate_lead` (formulario, WhatsApp, email) | ≥ 2 % de sesiones |
| Demostrar profundidad | `case_study_read` (≥ 75 % de scroll) / vistas de caso | ≥ 35 % |
| Crecer audiencia en LinkedIn | sesiones con `utm_source=linkedin` | Tendencia creciente mes a mes |
| Ser encontrado | Impresiones en Search Console | Primeras consultas no de marca en 90 días |
| Calidad técnica | Lighthouse móvil en las 4 categorías | ≥ 95 |
| Velocidad real | LCP (p75 móvil) | < 2,0 s |

Las metas son hipótesis iniciales: se revisan con datos reales al día 30. Eso también forma parte del caso de estudio.

## 6. Alcance

### Dentro (v2)
- Home, Proyectos (índice de casos + galería + laboratorio), casos en formato de artículo, Sobre mí, CV (HTML + PDF), Notas (blog, Fase 4), Contacto, Privacidad, 404.
- Diseño nuevo según `03-DESIGN.md`, claro por defecto con modo oscuro.
- SEO técnico, datos estructurados y medición completa (GA4 + GTM con consentimiento).
- Fuente única de datos que genera la web, `llms.txt`, `resume.txt` y JSON-LD.

### Fuera (por ahora)
- Versión en inglés (se evalúa en 2027, cuando cierre la acreditación B1).
- CMS externo (el contenido vive en archivos del repo).
- Comentarios en el blog (la conversación ocurre en LinkedIn).
- Animaciones 3D / WebGL.
- Dominio propio (opcional en Fase 6; `is-a.dev` es válido).

## 7. Mapa del sitio

```
/                       Home
/proyectos              Índice de casos (artículos) + galería + laboratorio
/proyectos/[slug]       Caso de estudio (artículo)
/sobre-mi               Historia, forma de trabajar, foto
/cv                     CV en HTML + botón de descarga PDF
/notas                  Blog / espacio LinkedIn (índice con filtro por pilar)
/notas/[slug]           Nota
/contacto               Formulario + WhatsApp + email
/privacidad             Aviso de privacidad y medición
/404
/llms.txt  /resume.txt  /sitemap.xml  /robots.txt  /rss.xml   (generados)
```

Redirecciones 301 desde los fragmentos antiguos no son necesarias (los `#` no llegan al servidor), pero se elimina el sitemap viejo.

## 8. Requisitos por página

### 8.1 Home

Orden de secciones y propósito de cada una:

1. **Hero** — Antetítulo con el rol, `h1` con el nombre, **frase de posicionamiento** como bajada, resumen, CTA primario **Descargar CV** y secundario **Ver proyectos** (a todo el ancho en el celular), disponibilidad y ubicación con ícono, y **retrato real** (4:5) a la derecha en escritorio y debajo en el celular.
2. **Resultados medidos** — banda marino (la única de la página) con 3 resultados verificables y su contexto: −35 % tiempo de pedidos (Big Jack), −30 % tareas manuales (Dearel), campaña de 8 000 correos de horas a tan solo minutos (Norbert Wiener). Sin "+6 proyectos" ni "99 %".
3. **Casos de estudio en formato de artículo** — los 3 casos con `featured`: uno destacado (imagen grande + texto) y dos en tarjeta, cada uno con imagen 16:9, antetítulo (tipo · año · minutos de lectura), titular, bajada, resultado y "Leer el caso". Botón "Ver los N casos".
4. **Qué hago** — 3 bloques concretos: Desarrollo web y herramientas internas (Next.js) · Automatización de procesos y bots (Python, Playwright) · Integración de APIs y comunicación (Shopify, CRM, email transaccional). Cada uno con un ejemplo real, no una promesa.
5. **Experiencia resumida** — línea de tiempo compacta, títulos reales.
6. **Últimas notas** — las 3 notas más recientes y botón "Ver todas las notas".
7. **CTA final** — "¿Buscas a alguien que entienda el negocio y lo lleve a código?" + Descargar CV + Contactar.

**Criterios de aceptación**
- [x] Nombre, rol y CTA primario visibles sin scroll en 360×740.
- [x] Un único `h1` con nombre y rol.
- [ ] Ninguna cifra sin contexto (qué, base, periodo). *Pendiente: base y método del −30 % de Dearel.*
- [x] Ningún elemento decorativo por encima del contenido en el LCP.

### 8.2 Proyectos — índice
- Cifras arriba (casos, sitios y herramientas, proyectos de práctica).
- **Casos como índice de artículos** con filtro por tipo (Todos · Web · Automatización · Datos / Medición; botones con `aria-pressed` y conteo anunciado): el primero destacado, el resto en filas con miniatura.
- **Galería** (Nivel B de `07-PROYECTOS.md`): lista ligera sin cajas ni etiquetas, con enlace al sitio en vivo cuando existe.
- **Laboratorio**: proyectos de práctica, visualmente secundarios, al final (TaskZenith y ORDEV al fondo).

### 8.3 Caso de estudio — plantilla obligatoria

```
Título (= resultado) + bajada · Resultado junto al título · Portada 16:9: plano SVG del flujo (`CaseCover`)
Ficha:   Cliente/contexto · Mi rol · Duración · Stack · Estado (en producción / en QA / entregado / prototipo)
Índice "En esta página" fijo en escritorio (anclas en cada sección)
1. Contexto        ¿Qué negocio y qué situación?
2. Problema        ¿Qué dolía y cómo se notaba?
3. Enfoque         Decisiones y por qué (incluye lo que se descartó)
4. Solución        Arquitectura (diagrama) + capturas con datos simulados
5. Resultado       Métrica con base, periodo y método — o resultado cualitativo honesto
6. Qué aprendí     1–3 aprendizajes
CTA: Siguiente caso · Descargar CV
```

**Privacidad:** los repositorios de Norbert Wiener y clientes son privados. Las capturas usan **datos simulados**; nunca nombres, correos ni datos reales de estudiantes o clientes. Si un cliente no autoriza su nombre, se usa una descripción ("marca de hamburguesas en Lima").

**Casos publicados (12 oct 2026):** Empleabilidad Wiener, Difusión por correo, Formularios y NPS, Feria Virtual, Reqlut Bot, Big Jack y Este portafolio. Permiso institucional confirmado (`07-PROYECTOS.md` §3). Dearel queda como borrador hasta tener la base del −30 %. Formato de escritura: `06-CONTENIDO.md` §4.

**Orden de producción original:**
Selección y justificación completas en `07-PROYECTOS.md`.

1. Sistema de difusión por correo con segmentación y lista de exclusión — Norbert Wiener. *(MVP)*
2. Plataforma Empleabilidad Wiener — Norbert Wiener, en producción y en uso desde oct. 2026 (`empleabilidad.uwiener.edu.pe`); base de la feria virtual del 22 oct. *(MVP)*
3. Portal de formularios y encuestas NPS — Norbert Wiener.
4. Feria Virtual de Empleabilidad 2026 — Norbert Wiener.
5. Reqlut Bot: publicación automática de ofertas con IA — Norbert Wiener.
6. Sistema de pedidos — Big Jack Burgers · Integración Shopify + CRM — Dearel.
7. **Este portafolio** (se escribe al cerrar la Fase 3): demostración técnica de Next.js, medición con GTM/GA4 y buenas prácticas de ingeniería web.

### 8.4 Sobre mí
- Foto real ✅, historia breve en primera persona (de Administración al código) ✅, cómo trabajo (4 principios) ✅, qué estoy aprendiendo ahora (GA4, Google UX, inglés) ✅, fuera del trabajo (1 línea) ⬜ pendiente de texto.

### 8.5 CV
- CV en HTML (indexable, accesible) generado desde la fuente única.
- Botón "Descargar PDF". El PDF se exporta del `.docx` vigente; nombre de archivo `CV-Sebastian-Jaque.pdf`.

### 8.6 Notas (blog / espacio LinkedIn)
Ver detalle en `06-CONTENIDO.md`. Requisitos funcionales:
- Artículos en MDX dentro del repo.
- Cada artículo: título, fecha, tiempo de lectura, etiquetas (pilar), imagen OG propia generada automáticamente, enlace "Comentar en LinkedIn" a la publicación correspondiente.
- Listado con filtro por pilar.
- RSS en `/rss.xml`.
- Bloque final en cada nota: "Sígueme en LinkedIn" (CTA a perfil) + nota relacionada.
- La web es la **versión canónica**; LinkedIn es la distribución.

### 8.7 Contacto
- Tres vías: formulario corto (nombre, email, motivo: empleo / proyecto / otro, mensaje), WhatsApp con mensaje prellenado, email.
- El formulario envía con un servicio transaccional (Resend), con validación del lado servidor, protección anti-spam (honeypot + límite de envíos) y mensaje de confirmación.
- Aviso de privacidad breve (Ley 29733): para qué se usan los datos.

## 9. Requisitos no funcionales

| Área | Requisito |
|---|---|
| Rendimiento | LCP < 2,0 s, INP < 200 ms, CLS < 0,05 (p75 móvil). JS de la home < 100 KB comprimido. |
| Accesibilidad | WCAG 2.2 AA. Navegable con teclado, foco visible, alt en imágenes, contraste verificado. |
| SEO | Todas las páginas con HTML completo en la respuesta del servidor; metadatos y OG únicos por página. |
| Privacidad | Medición con consentimiento (Consent Mode v2). Sin datos reales de terceros en capturas. |
| Mantenimiento | Un solo archivo de datos para perfil, experiencia, proyectos y certificaciones. |
| Honestidad | Títulos de cargo reales. Certificaciones con su nombre y emisor reales. Cada métrica con contexto. |

## 10. Riesgos

| Riesgo | Mitigación |
|---|---|
| El rediseño compite con inglés, tesis y GA4 | Fases con tiempo máximo; Fase 0 en una tarde; el MVP reemplaza la web vieja aunque no esté todo |
| Perfeccionismo visual | El sistema de diseño limita decisiones; se lanza con 2 casos, no con 5 |
| Exponer datos institucionales | Datos simulados; revisión de cada captura antes de publicar |
| Bajo tráfico para medir conversiones | Se reporta igual: tendencias, comportamiento y aprendizajes cualitativos |
