# 04 · Tecnología, SEO, rendimiento y medición

> Cómo se construye, cómo se encuentra y cómo se mide. Esta instrumentación técnica y de analítica demuestra rigor de ingeniería web y medición de producto: trátala como entregable, no como configuración.

---

## 1. Stack

| Capa | Elección | Por qué |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | HTML generado en el build (SSG), metadatos por página, `next/image`, `next/font`, `next/og`. Es además el stack que pides en tus postulaciones. |
| Estilos | **Tailwind CSS v4** con tokens de `03-DESIGN.md` vía `@theme` | Sin CSS muerto, consistente con el sistema |
| Contenido | **MDX** en el repo + **Velite** (o `content-collections`) para tipar y validar | Casos y notas con frontmatter validado por esquema (Zod) |
| Datos del perfil | `content/profile.ts` (fuente única) | Genera web, `llms.txt`, `resume.txt`, JSON-LD y CV HTML |
| Formulario | Server Action + **Resend** + validación Zod | Ya lo estás evaluando para Norbert Wiener: reutilizas aprendizaje |
| Correos | `lib/email/templates.ts`: notificación (`reply_to` = remitente; si falla, el formulario muestra error) + confirmación al remitente (si falla, no bloquea). Timeout de 10 s por envío | Diseño en `03-DESIGN.md` §13.4.1 |
| Medición | **GTM + GA4** con Consent Mode v2; **Search Console**; **Microsoft Clarity** (mapas de calor) | Stack estándar de analítica web y medición de producto |
| Hosting | **Vercel** (despliegue nativo para Next.js) | Despliegue por rama, preview URLs por PR, Edge Network optimizada para Next.js App Router |
| Calidad | ESLint, Prettier, Lighthouse CI en cada PR, `@axe-core` | Calidad verificable, no declarada |
| Dominio | `sjaquer.is-a.dev` (se mantiene). Opcional después: dominio propio | Evita migrar dos veces |

**Por qué no seguir con la SPA de Vite:** el problema C1 (contenido solo en el cliente) es estructural. Migrar a SSG lo resuelve de raíz y alinea la web con tu stack objetivo.

### Estructura del repositorio

```
/app
  /(site)/page.tsx                 Home
  /(site)/proyectos/page.tsx
  /(site)/proyectos/[slug]/page.tsx
  /(site)/sobre-mi/page.tsx
  /(site)/cv/page.tsx
  /(site)/notas/page.tsx
  /(site)/notas/[slug]/page.tsx
  /(site)/contacto/page.tsx
  /llms.txt/route.ts               Generado desde content/profile.ts
  /resume.txt/route.ts             Generado desde content/profile.ts
  /rss.xml/route.ts
  sitemap.ts  robots.ts  not-found.tsx  layout.tsx  tokens.css
/components   (ui/, sections/, analytics/)
/content
  profile.ts                       ← FUENTE ÚNICA
  /casos/*.mdx
  /notas/*.mdx
/lib          (seo.ts, analytics.ts, jsonld.ts)
/public       (cv/CV-Sebastian-Jaque.pdf, img/)
/docs         (estos documentos)
CLAUDE.md
```

### Fuente única (`content/profile.ts`)

```ts
export const profile = {
  name: "Sebastián Jaque",
  fullName: "Sebastián Emiliano Jaque Reátegui",
  role: "Desarrollo web · Automatización de procesos · Integraciones",
  tagline: "Construyo herramientas web y automatizaciones que reducen tareas manuales y conectan sistemas con APIs.",
  location: "Lima, Perú",
  availability: "Disponible para roles junior desde enero 2027",
  languages: [{ name: "Español", level: "Nativo" }, { name: "Inglés", level: "Intermedio (acreditación B1 en curso)" }],
  experience: [
    { org: "Universidad Privada Norbert Wiener", title: "Practicante Pre Profesional", from: "2026-06", to: null, /* … */ },
    // títulos REALES, idénticos al CV
  ],
  certifications: [
    { name: "Artificial Intelligence Professional Certification (CAIPC)", issuer: "CertiProf", year: 2025 },
    { name: "Curso oficial SQL Server: Bases de Datos Relacionales", issuer: "Idat (Microsoft Learning Partner)", year: 2025 },
    { name: "Power BI", issuer: "Intercorp / Zegel", year: 2025 },
    { name: "Generative AI for Executives", issuer: "Amazon Web Services", year: 2025 },
  ],
  links: { linkedin: "https://www.linkedin.com/in/sjaquer", github: "https://github.com/sjaquer", email: "sjaquer@outlook.es" },
  updatedAt: "2026-10-10",
} as const;
```

Regla: **ningún texto sobre tu experiencia se escribe fuera de este archivo o de los MDX.**

---

## 2. SEO técnico

### 2.1 Por página
- `metadata` de Next.js con `title`, `description`, `alternates.canonical`, `openGraph`, `twitter`.
- Plantilla de título: `%s — Sebastián Jaque`. Home: `Sebastián Jaque — Desarrollo web y automatización de procesos | Lima`.
- Descripciones de 140–160 caracteres, únicas, con la intención de búsqueda de esa página.
- **Imagen OG por página** generada con `next/og` (1200×630): título de la página + nombre + paleta del sistema. Resuelve C2 y hace que cada nota se vea bien al compartirla en LinkedIn.
- Un `h1` por página; encabezados en orden.
- URLs en español, cortas y sin fechas: `/proyectos/bolsa-de-trabajo-wiener`, `/notas/eventos-ga4-con-gtm`.

### 2.2 Datos estructurados (JSON-LD)

| Página | Tipos |
|---|---|
| Home / Sobre mí | `ProfilePage` con `mainEntity: Person` (nombre, `jobTitle`, `alumniOf`, `knowsAbout`, `sameAs` → LinkedIn y GitHub) |
| Caso de estudio | `CreativeWork` + `BreadcrumbList` |
| Nota | `BlogPosting` (autor, fechas, imagen) + `BreadcrumbList` |
| Todas | `WebSite` (una vez, en el layout) |

Validar con la [Prueba de resultados enriquecidos](https://search.google.com/test/rich-results).

### 2.3 Archivos generados
- `sitemap.ts`: solo URLs reales (nada de `#`), con `lastModified` tomado del frontmatter.
- `robots.ts`: conservar la política actual hacia rastreadores de IA y redes sociales; **quitar** `Host:` y `crawl-delay`; quitar `/blog-personal` si la ruta no existe. *(Hecho: la ruta se eliminó; `disallow` queda en `/api/` y `/dev/`.)*
- `llms.txt` y `resume.txt`: generados desde `profile.ts`, con fecha de actualización.
- `rss.xml` para las notas.

### 2.4 Palabras clave objetivo (iniciales)

| Intención | Ejemplos | Página |
|---|---|---|
| Marca | "Sebastián Jaque", "sjaquer" | Home |
| Rol + ciudad | "desarrollador web junior Lima", "analista de automatización de procesos Lima", "desarrollador Next.js Perú" | Home, Sobre mí |
| Problema PYME | "automatizar WhatsApp para negocio", "integrar Shopify con Google Sheets" | Casos, notas |
| Aprendizaje técnico | "eventos GA4 con GTM Next.js", "migrar SQLite a PostgreSQL" | Notas |

No se persigue volumen: se busca que quien te googlee después de ver tu CV encuentre una web coherente, y que las notas atraigan búsquedas de nicho.

---

## 3. Rendimiento

### 3.1 Presupuesto (si se supera, el PR no se fusiona)

| Métrica | Límite (móvil, p75) |
|---|---|
| LCP | < 2,0 s |
| INP | < 200 ms |
| CLS | < 0,05 |
| JS de la home (comprimido) | < 100 KB |
| Peso total de la home | < 500 KB |
| Lighthouse (4 categorías) | ≥ 95 |

**Estado medido (12 oct 2026, Lighthouse móvil local):** Accesibilidad, Buenas prácticas y SEO 100 en todas las páginas; LCP 1,4–1,6 s; CLS ≈ 0. **Rendimiento 86–91** y JS de la home ≈ 140 KB (base de React + Next) + ≈ 176 KB de GTM/GA4. Dos desvíos conocidos, registrados en `docs/decisiones.md`: (1) el snippet de GTM se carga en `<head>` por decisión de Sebastián (12 oct), lo que sube el bloqueo del hilo principal; cargarlo tras la primera interacción (`components/analytics/tag-loader.tsx`, ya preparado) devuelve Rendimiento ≈ 98. (2) El JS base de Next 16 + React 19 supera por sí solo los 100 KB: el límite se interpreta como JS propio del sitio.

### 3.2 Prácticas
- Todo estático por defecto; Server Components; `"use client"` solo donde hay interacción (menú, tema, formulario, consentimiento).
- `next/font` con `display: swap` y subconjunto latino.
- `next/image` con `sizes` correctos; foto del hero con `priority`; el resto diferido.
- GTM: recomendado cargarlo **después** de la interacción o del consentimiento (`TagLoader`). Hoy también hay un snippet en `<head>` (`app/layout.tsx`); ver el estado medido en §3.1.
- Animaciones solo con CSS y solo `transform` (sin animar opacidad del contenido): no retrasan el LCP ni bajan el contraste.
- Nada de WebGL, ni librerías de animación pesadas (CSS basta).

### 3.3 Línea base (Fase 0)
Antes de tocar nada, medir la web actual en [PageSpeed Insights](https://pagespeed.web.dev/) (móvil y escritorio) y guardar captura + JSON en `/docs/baseline/`. Es el "antes" del caso de estudio del portafolio.

---

## 4. Plan de medición

> Esto es lo que te diferencia de otros juniors: la web está instrumentada como un producto real.

### 4.1 Arquitectura
`dataLayer` en el sitio → **GTM** (contenedor web) → **GA4**. Clarity también vía GTM. Search Console verificado por DNS o etiqueta HTML.

### 4.2 Consentimiento
- **Consent Mode v2**, estado por defecto `denied` para `analytics_storage` y `ad_storage`.
- Banner con "Aceptar" y "Rechazar" del mismo peso visual. Preferencia guardada en una cookie de primera parte.
- Aviso de privacidad en `/privacidad` (alineado a la Ley 29733): qué se mide, para qué, cómo revocarlo.

### 4.3 Eventos

| Evento | Cuándo se dispara | Parámetros | ¿Conversión? |
|---|---|---|---|
| `cta_click` | Clic en cualquier botón con `data-cta` | `cta_id`, `cta_location`, `page_type` | No |
| `cv_download` | Descarga del PDF | `cta_location` | ✅ Sí |
| `generate_lead` | Envío correcto del formulario, clic en WhatsApp o email | `lead_channel` (`form` / `whatsapp` / `email`), `lead_reason` | ✅ Sí |
| `outbound_click` | Clic a LinkedIn o GitHub | `link_domain`, `cta_location` | No |
| `case_study_view` | Carga de un caso | `case_slug`, `case_type` | No |
| `case_study_read` | 75 % de scroll en un caso | `case_slug` | ✅ Micro-conversión |
| `post_read` | 75 % de scroll en una nota | `post_slug`, `post_pillar` | No |
| `form_error` | Error de validación en el formulario | `field` | No (diagnóstico) |
| `theme_change` | Cambio de tema | `theme` | No |

**Convenciones:** nombres en `snake_case`, en inglés (estándar de GA4); parámetros personalizados registrados como dimensiones en GA4. Ningún dato personal (nombre, email) se envía jamás a GA4.

### 4.4 Implementación del `dataLayer`

```ts
// lib/analytics.ts
type Ev =
  | { event: "cta_click"; cta_id: string; cta_location: string; page_type: string }
  | { event: "cv_download"; cta_location: string }
  | { event: "generate_lead"; lead_channel: "form" | "whatsapp" | "email"; lead_reason?: string }
  | { event: "outbound_click"; link_domain: string; cta_location: string }
  | { event: "case_study_read" | "case_study_view"; case_slug: string; case_type?: string }
  | { event: "post_read"; post_slug: string; post_pillar: string };

export function track(e: Ev) {
  if (typeof window === "undefined") return;
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push(e);
}
```

Tipar los eventos evita errores de nombres, que son la causa más común de datos rotos en GA4.

### 4.5 UTM para LinkedIn
Todo enlace a la web desde LinkedIn lleva UTM:

| Ubicación | Parámetros |
|---|---|
| Sección Destacados del perfil | `utm_source=linkedin&utm_medium=profile&utm_campaign=featured` |
| Primer comentario de una publicación | `utm_source=linkedin&utm_medium=social&utm_campaign=nota-<slug>` |
| Mensajes a reclutadores | `utm_source=linkedin&utm_medium=dm&utm_campaign=postulacion` |
| CV (PDF) | `utm_source=cv&utm_medium=pdf&utm_campaign=2026-q4` |

Así sabrás qué canal trae reclutadores que descargan el CV.

### 4.6 Reportes
- Una **Exploración de embudo** en GA4: `session_start` → `case_study_view` → `case_study_read` → `cv_download` / `generate_lead`.
- Revisión quincenal (15 min): qué páginas convierten, qué canal trae tráfico de calidad, qué se cambia. Registrar decisiones en `/docs/decisiones.md`: es el material del caso de estudio y de tus notas.

### 4.7 QA de medición
- GTM en modo Preview + GA4 DebugView para cada evento antes de publicar.
- Comprobar que, con consentimiento rechazado, no se escriben cookies `_ga`.
- Checklist por evento: nombre correcto, parámetros presentes, se dispara una sola vez.

### 4.8 Cierre de la Fase 3 — estado verificado y guía en las cuentas

**Verificado en producción (`sjaquer.is-a.dev`, 12 oct 2026, navegador automatizado):**

| Comprobación | Resultado |
|---|---|
| GTM `GTM-PSWBGH5K` carga en todas las páginas | ✅ |
| Consentimiento **rechazado**: sin cookies `_ga`, Clarity no carga, GA4 solo envía señales sin identificadores (`gcs=G100`) | ✅ |
| Consentimiento **aceptado**: cookies `_ga`/`_ga_GDPBN9G1M5`, Clarity (`ywauop086w`) carga, `gcs=G101` | ✅ |
| Llegan a GA4: `cta_click`, `theme_change`, `cv_download`, `outbound_click`, `case_study_view`, `case_study_read`, `generate_lead` (email) | ✅ |
| `form_error` se registra en el `dataLayer` (4 campos) pero no llegó a GA4 | ⚠️ falta en el activador de GTM |
| `case_study_view` llega sin `case_type` | ⚠️ falta el parámetro en la etiqueta de GTM |
| Parámetros arrastrados entre eventos (p. ej. `theme` dentro de `cv_download`) | ✅ corregido en `lib/analytics.ts`: cada evento limpia los parámetros que no usa |
| `sitemap.xml` (18 URLs con notas y "Este portafolio") y `robots.txt` lo declara | ✅ |
| `post_read` (75 % de una nota) y clics de LinkedIn al final de la nota | ✅ verificado en local |
| RSS en `/rss.xml` anunciado en los metadatos | ✅ |
| Search Console verificado (meta + archivo `google4fab63528fff526b.html`) | ✅ |

**Pasos en las cuentas (≈ 40 min)**

1. **GTM — importar la etiqueta de eventos** (`docs/gtm/eventos-sitio.json`):
   Admin → *Importar contenedor* → elegir el archivo → espacio de trabajo actual → **Combinar** → *Cambiar el nombre de los objetos en conflicto*. Crea 12 variables `DLV - …`, la constante del ID de GA4, el activador `CE - Eventos del sitio (04 §4.3)` (los 9 eventos) y la etiqueta `GA4 - Eventos del sitio (04 §4.3)` con los 12 parámetros.
   Después **pausa o borra la etiqueta de eventos GA4 que ya tenías** (para no duplicar eventos). La etiqueta de Google (`page_view`) y la de Clarity se quedan como están.
2. **GTM — probar y publicar:** *Vista previa* → abrir el sitio → aceptar el consentimiento → hacer clic en Descargar CV, LinkedIn, un caso (bajar hasta el final), el email de contacto, enviar el formulario vacío y cambiar el tema. En Tag Assistant cada evento debe disparar la etiqueta una vez, con sus parámetros. Luego *Enviar* → *Publicar* con el nombre "Fase 3 · eventos 04 §4.3".
3. **GA4 — dimensiones personalizadas** (Administrar → Definiciones personalizadas → Crear, ámbito **Evento**): `cta_id`, `cta_location`, `page_type`, `lead_channel`, `lead_reason`, `link_domain`, `case_slug`, `case_type`, `post_slug`, `post_pillar`, `field`, `theme`. El nombre de la dimensión puede ser el mismo que el parámetro.
4. **GA4 — eventos clave** (Administrar → Eventos clave): marcar `cv_download`, `generate_lead` y `case_study_read`. No marcar `file_download` (lo crea la medición mejorada y duplica a `cv_download`).
5. **GA4 — DebugView:** con la vista previa de GTM abierta, comprobar en Administrar → DebugView que los eventos llegan con sus parámetros.
6. **Search Console:** Sitemaps → enviar `https://sjaquer.is-a.dev/sitemap.xml`.
7. **UTM en LinkedIn:** usar los enlaces de §4.5 (Destacados: `?utm_source=linkedin&utm_medium=profile&utm_campaign=featured`; mensajes: `?utm_source=linkedin&utm_medium=dm&utm_campaign=postulacion`). El PDF del CV ya lleva `utm_source=cv`.
8. **GA4 — exploración de embudo** (Explorar → Exploración de embudo, "embudo abierto"): pasos `session_start` → `case_study_view` → `case_study_read` → `cv_download` o `generate_lead`; desglose por `session_source` . Guardar como "Embudo portafolio". Se lee con datos a partir de 2–4 semanas.

**Terminado cuando:** los 9 eventos aparecen en DebugView con sus parámetros, rechazar el consentimiento no deja cookies `_ga` (✅ ya verificado) y el embudo existe en GA4.

---

## 5. Calidad y flujo de trabajo

- Rama por fase (`fase-1-fundaciones`, …), previsualización en Vercel por PR.
- Lighthouse CI con los umbrales de la sección 3.1.
- Revisión de accesibilidad con axe y navegación solo con teclado antes de cada lanzamiento.
- `CLAUDE.md` en la raíz con las reglas del proyecto, para que Claude Code / Cursor trabajen dentro del sistema (ver archivo incluido).
