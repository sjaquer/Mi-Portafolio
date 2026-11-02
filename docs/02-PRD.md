# 02 · PRD — Portafolio sjaquer.is-a.dev v2

> Documento de requisitos de producto. Define **qué** se construye y **por qué**.
> El **cómo se ve** está en `03-DESIGN.md`; el **cómo se construye y se mide**, en `04-TECH-SEO-MEDICION.md`.

---

## 1. Problema

La web anterior presentaba a un "Full-Stack Developer & AI Integration Specialist" con estética genérica de laboratorio de IA. El objetivo profesional real es **Analista de Producto / Product Engineer (Junior)**: desarrollo web centrado en el usuario, automatización de procesos operativos e integraciones de sistemas para negocio. La web debe funcionar como la mejor prueba de que Sebastián sabe descubrir problemas, diseñar flujos limpios, construir soluciones funcionales de punta a punta y medir su impacto.

## 2. Objetivo del producto

Que la web sea **la prueba de trabajo** de Sebastián: un producto digital rápido, claro y medido que demuestre en sí mismo su capacidad de análisis de producto, diseño de experiencia y desarrollo técnico, y que convierta visitas de reclutadores y líderes técnicos en entrevistas y contactos.

## 3. Posicionamiento

**Quién:** Sebastián Jaque, estudiante de 10.º ciclo de Administración y Negocios Internacionales que construye herramientas web y automatizaciones para resolver problemas reales de negocio.

**Qué hace hoy (demostrable):** análisis de requerimientos y diseño de producto (flujos de usuario, wireframes en Figma), desarrollo web con Next.js y TypeScript, automatización de flujos operativos con Python (Playwright, bots 24/7) e integración de plataformas vía APIs (Shopify, CRM, email transaccional y bases de datos relacionales).

**Hacia dónde va:** Analista de Producto / Product Engineer. Une formación en administración y negocio con destreza técnica de construcción e instrumentación analítica (GA4). A largo plazo: liderar producto o crear productos digitales propios.

**Diferencial:** entiende el problema de negocio y las necesidades de los usuarios antes de escribir una línea de código; diseña flujos intuitivos; construye herramientas modulares y explica con total transparencia técnica por qué tomó cada decisión.

**Tono:** builder y analista, no gurú. Concreto, en primera persona, apoyado en datos y sin superlativos. Ver `06-CONTENIDO.md`.

**Frase de posicionamiento (canónica, usar igual en todos los canales):**

> Construyo herramientas web y automatizaciones pensadas para que la gente las entienda y las use sin complicarse.

## 4. Audiencias

| # | Audiencia | Llega desde | Tiempo que da | Qué necesita ver | Acción que buscamos |
|---|---|---|---|---|---|
| 1 | **Reclutador / talento** | CV, LinkedIn, portal de empleo | 30–60 s | Quién es, rol objetivo (Analista de Producto / Product Engineer Jr), experiencia creíble | Descargar CV · ir a LinkedIn |
| 2 | **Líder de Producto / Tech Lead / Gerente de Operaciones** | Enlace del reclutador | 3–5 min | Cómo piensa el producto, rigor técnico, decisiones y resultados medidos | Leer un caso completo · contactar |
| 3 | **Cliente PYME / Negocio** (freelance) | LinkedIn, recomendación, Google | 1–2 min | Qué fricciones operativas resuelve, herramientas similares a su necesidad | Escribir por WhatsApp o formulario |
| 4 | **Comunidad profesional** | Publicaciones de "Notas" en LinkedIn | 2–4 min | Aprendizaje técnico o de producto útil y honesto | Leer, conectar en LinkedIn |

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

1. **Hero** — En una pantalla de móvil: nombre, rol ("Analista de Producto · Desarrollo Web · Automatización de Procesos"), frase de posicionamiento, foto, disponibilidad ("Disponible para roles junior desde enero 2027 · Lima / remoto"), CTA primario **Descargar CV**, CTA secundario **Ver proyectos**.
2. **Prueba rápida** — 3 resultados verificables con su contexto (−35 % tiempo de procesamiento en Big Jack Burgers; −30 % tareas manuales en integración e-commerce/retail; campañas de 8 000 correos de horas a 5–10 min en Norbert Wiener). Sin números inflados ni promesas vacías.
3. **Casos destacados** — Tarjetas representativas (Empleabilidad Wiener, Big Jack Burgers, Difusión UWiener o LogINV / Integración Retail), cada una con problema de usuario, solución y stack. Enlace a cada caso.
4. **Qué hago** — 3 bloques concretos: Análisis y desarrollo web de producto (Next.js) · Automatización de procesos e integraciones (Python, APIs) · Herramientas operativas y tableros de datos. Cada uno respaldado con un producto real.
5. **Experiencia resumida** — línea de tiempo compacta alineada al CV actualizado (Wiener, Big Jack Burgers, Freelance con retail y soluciones de producto, Neon Led Store, Zeus Maritime).
6. **Últimas notas** — 3 entradas con reflexiones de producto y desarrollo.
7. **CTA final** — "¿Buscas a alguien que entienda el problema y construya la solución?" + Descargar CV + Contactar.

**Criterios de aceptación**
- [ ] Nombre, rol y CTA primario visibles sin scroll en 360×740.
- [ ] Un único `h1` con nombre y rol.
- [ ] Ninguna cifra sin contexto (qué, base, periodo).
- [ ] Ningún elemento decorativo por encima del contenido en el LCP.

### 8.2 Proyectos — listado
- Filtro simple por tipo: Web · Automatización · Datos / Medición.
- Tarjetas con: título, una línea de problema, resultado principal, stack (máx. 4 etiquetas), año.
- Galería de herramientas y soluciones (LogINV, PrestaFacilito, Sistema Obra, etc.).
- Sección "Laboratorio" para proyectos de práctica (TaskMe, TaskZenith, ORDEV, HoneyNotes), visualmente secundaria.

### 8.3 Caso de estudio — plantilla obligatoria

```
Título + subtítulo (resultado en una frase)
Ficha:   Cliente/contexto · Mi rol · Duración · Stack · Estado (en producción / entregado / prototipo)
1. Contexto        ¿Qué negocio y qué situación?
2. Problema        ¿Qué dolía y cómo se notaba en el usuario/operación?
3. Enfoque         Descubrimiento, flujos y decisiones (incluye lo que se descartó)
4. Solución        Arquitectura (diagrama) + capturas con datos simulados
5. Resultado       Métrica con base, periodo y método — o resultado cualitativo honesto
6. Qué aprendí     1–3 aprendizajes de producto e ingeniería
CTA: Siguiente caso · Descargar CV
```

**Privacidad:** los repositorios de Norbert Wiener y clientes son privados. Las capturas usan **datos simulados**; nunca nombres, correos ni datos reales de estudiantes o clientes. Si un cliente no autoriza su nombre, se usa una descripción ("marca de hamburguesas en Lima").

**Casos v2:**
Selección y justificación completas en `07-PROYECTOS.md`.

1. Plataforma Empleabilidad Wiener — Norbert Wiener (Bolsa laboral, CV IA, feria virtual). *(MVP)*
2. Sistema de difusión por correo con segmentación y lista de exclusión — Norbert Wiener. *(MVP)*
3. Sistema de pedidos en tiempo real — Big Jack Burgers (Menú digital + WhatsApp IA + ERP cocina/despacho).
4. LogINV Agroindustrial — Sistema avanzado de inventarios multialmacén, alertas de caducidad y motor ROP.
5. PrestaFacilito — Plataforma de créditos y cobranzas con OCR de comprobantes.
6. Portal de formularios y encuestas NPS validadas — Norbert Wiener.
7. Reqlut Bot: servicio 24/7 de ingesta y publicación de ofertas con IA — Norbert Wiener.
8. Validación de instrumentos por juicio de expertos — Coeficiente V de Aiken con firma digital y PDF.
9. **Este portafolio**: arquitectura Next.js SSG, sistema de diseño, accesibilidad WCAG 2.2 AA y medición analítica con GA4/GTM.

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
