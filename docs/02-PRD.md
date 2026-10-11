# 02 · PRD — Portafolio sjaquer.is-a.dev v2

> Documento de requisitos de producto. Define **qué** se construye y **por qué**.
> El **cómo se ve** está en `03-DESIGN.md`; el **cómo se construye y se mide**, en `04-TECH-SEO-MEDICION.md`.

---

## 1. Problema

La web actual presenta a un "Full-Stack Developer & AI Integration Specialist" con estética de laboratorio de IA. El objetivo profesional real es MarTech / desarrollo web y CRO / automatización. La web no ayuda a conseguir esos puestos y contiene afirmaciones que dañan la credibilidad (ver `01-AUDITORIA.md`).

## 2. Objetivo del producto

Que la web sea **la prueba de trabajo** de Sebastián: un sitio rápido, claro y medido que demuestre en sí mismo lo que él sabe hacer (construir, medir y optimizar experiencias web), y que convierta visitas en entrevistas y contactos.

## 3. Posicionamiento

**Quién:** Sebastián Jaque, estudiante de último ciclo de Administración y Negocios Internacionales que construye herramientas web y automatizaciones para negocio.

**Qué hace:** desarrollo web con Next.js, automatización de procesos e integraciones, y medición de marketing (GA4, GTM, CRO).

**Diferencial:** entiende el problema de negocio antes de escribir código, y mide si la solución funcionó.

**Tono:** builder, no gurú. Concreto, en primera persona, sin superlativos. Ver `06-CONTENIDO.md`.

**Frase de posicionamiento (canónica, usar igual en todos los canales):**

> Construyo sitios y automatizaciones que conectan marketing, operaciones y datos — y mido si funcionan.

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
- Home, Proyectos (listado + casos), Sobre mí, CV (HTML + PDF), Notas (blog), Contacto, 404.
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
/proyectos              Listado de casos
/proyectos/[slug]       Caso de estudio
/sobre-mi               Historia, forma de trabajar, foto
/cv                     CV en HTML + botón de descarga PDF
/notas                  Blog / espacio LinkedIn
/notas/[slug]           Artículo
/contacto               Formulario + WhatsApp + email
/privacidad             Aviso de privacidad y medición
/404
/llms.txt  /resume.txt  /sitemap.xml  /robots.txt  /rss.xml   (generados)
```

Redirecciones 301 desde los fragmentos antiguos no son necesarias (los `#` no llegan al servidor), pero se elimina el sitemap viejo.

## 8. Requisitos por página

### 8.1 Home

Orden de secciones y propósito de cada una:

1. **Hero** — En una pantalla de móvil: nombre, rol, frase de posicionamiento, foto, disponibilidad ("Disponible para roles junior desde enero 2027 · Lima / remoto"), CTA primario **Descargar CV**, CTA secundario **Ver proyectos**.
2. **Prueba rápida** — 3 resultados verificables con su contexto (−35 % tiempo de pedidos en Big Jack; −30 % tareas manuales en Dearel; campaña de 8 000 correos de más de 4 h a ~2 min en Norbert Wiener). Sin "+6 proyectos" ni "99 %".
3. **Casos destacados** — 3 tarjetas (Wiener, Big Jack, Dearel o Bot WhatsApp), cada una con problema, resultado y stack. Enlace a cada caso.
4. **Qué hago** — 3 bloques concretos: Desarrollo web (Next.js) · Automatización e integraciones · Medición y CRO. Cada uno con un ejemplo real, no una promesa.
5. **Experiencia resumida** — línea de tiempo compacta, títulos reales.
6. **Últimas notas** — 3 entradas del blog con enlace a LinkedIn.
7. **CTA final** — "¿Buscas a alguien que construya y mida?" + Descargar CV + Contactar.

**Criterios de aceptación**
- [ ] Nombre, rol y CTA primario visibles sin scroll en 360×740.
- [ ] Un único `h1` con nombre y rol.
- [ ] Ninguna cifra sin contexto (qué, base, periodo).
- [ ] Ningún elemento decorativo por encima del contenido en el LCP.

### 8.2 Proyectos — listado
- Filtro simple por tipo: Web · Automatización · Datos / Medición.
- Tarjetas con: título, una línea de problema, resultado principal, stack (máx. 4 etiquetas), año.
- Sección aparte "Laboratorio" para proyectos de práctica (TaskMe, TaskZenith, ORDEV), visualmente secundaria.

### 8.3 Caso de estudio — plantilla obligatoria

```
Título + subtítulo (resultado en una frase)
Ficha:   Cliente/contexto · Mi rol · Duración · Stack · Estado (en producción / entregado / prototipo)
1. Contexto        ¿Qué negocio y qué situación?
2. Problema        ¿Qué dolía y cómo se notaba?
3. Enfoque         Decisiones y por qué (incluye lo que se descartó)
4. Solución        Arquitectura (diagrama) + capturas con datos simulados
5. Resultado       Métrica con base, periodo y método — o resultado cualitativo honesto
6. Qué aprendí     1–3 aprendizajes
CTA: Siguiente caso · Descargar CV
```

**Privacidad:** los repositorios de Norbert Wiener y clientes son privados. Las capturas usan **datos simulados**; nunca nombres, correos ni datos reales de estudiantes o clientes. Si un cliente no autoriza su nombre, se usa una descripción ("marca de hamburguesas en Lima").

**Casos v2 (orden de producción):**
Selección y justificación completas en `07-PROYECTOS.md`.

1. Sistema de difusión por correo con segmentación y lista de exclusión — Norbert Wiener. *(MVP)*
2. Plataforma Empleabilidad Wiener — Norbert Wiener, en producción y en uso desde oct. 2026 (`empleabilidad.uwiener.edu.pe`); base de la feria virtual del 22 oct. *(MVP)*
3. Portal de formularios y encuestas NPS — Norbert Wiener.
4. Feria Virtual de Empleabilidad 2026 — Norbert Wiener.
5. Reqlut Bot: publicación automática de ofertas con IA — Norbert Wiener.
6. Sistema de pedidos — Big Jack Burgers · Integración Shopify + CRM — Dearel.
7. **Este portafolio** (se escribe al cerrar la Fase 3, con antes / después medido): tu primer caso explícito de CRO y medición.

### 8.4 Sobre mí
- Foto real, historia breve en primera persona (de Administración al código), cómo trabajo (3–4 principios), qué estoy aprendiendo ahora (GA4, Google UX), fuera del trabajo (1 línea).

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
