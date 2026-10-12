# 06 · Contenido: voz, textos y Notas (blog + LinkedIn)

---

## 1. Voz

**Somos:** concretos, en primera persona, con números que tienen contexto, curiosos, honestos sobre lo que falta.
**No somos:** agencia, gurú, "experto", "visionario", "end-to-end", "transformación digital".

| En vez de | Escribe |
|---|---|
| "Soluciones escalables impulsadas por IA" | "Un bot de WhatsApp que filtra candidatos antes de que alguien los lea" |
| "Experto en automatización" | "Automaticé el envío de campañas a estudiantes segmentadas por facultad, carrera y ciclo" |
| "Llevemos tu negocio al siguiente nivel" | "¿Tienes un proceso que se repite cada semana? Cuéntamelo" |
| "+99 % de éxito" | "−35 % en tiempo por pedido, medido [N] semanas antes y después" |
| "Lideré" (en prácticas) | "Construí", "Implementé", "Diseñé", "Ejecuté" |

**Regla de las métricas:** qué cambió + cuánto + frente a qué + en qué periodo. Si falta algo, se dice ("estimado", "según el equipo") o se usa un resultado cualitativo.

---

## 2. Glosario fijo

| Término | Uso |
|---|---|
| Rol | "Desarrollo web · Automatización de procesos · Integraciones" |
| Frase de posicionamiento | "Construyo herramientas web y automatizaciones que reducen tareas manuales y conectan sistemas con APIs." |
| Cargos | Exactamente como en el CV (títulos contractuales) |
| Sección del blog | "Notas" |
| Proyectos de práctica | "Laboratorio" |

---

## 3. Textos de la Home (listos para usar)

**Antetítulo del hero** (mono): el rol, `DESARROLLO WEB · AUTOMATIZACIÓN DE PROCESOS · INTEGRACIONES`

**H1:** Sebastián Jaque
**Bajada (tamaño lead):** la frase canónica — "Construyo herramientas web y automatizaciones que reducen tareas manuales y conectan sistemas con APIs."
**Párrafo:** Estudiante de último ciclo de Administración y Negocios Internacionales. Construyo con Next.js, desarrollo automatizaciones con Python y conecto plataformas mediante APIs para ahorrar tiempo operativo. Actualmente desarrollo herramientas internas en la Universidad Norbert Wiener.
**CTA primario:** Descargar CV · **CTA secundario:** Ver proyectos
**Debajo de los botones (texto con ícono, no pastillas):** Disponible desde ene 2027 · Lima, Perú · remoto

**Prueba rápida — etiqueta:** `RESULTADOS MEDIDOS`
- **−35 %** · tiempo de procesamiento de pedidos · Big Jack Burgers
- **−30 %** · tareas administrativas manuales · Dearel
- **~2 min** · para enviar una campaña de 8 000 correos (antes, más de 4 h) · Norbert Wiener

**Casos — etiqueta:** `CASOS DE ESTUDIO` · **H2:** Proyectos con resultado · **Lead:** "El problema, las decisiones y lo que cambió, contado como un artículo corto." · **Botón:** Ver los N casos
**Qué hago — H2:** Tres cosas que hago bien
1. **Desarrollo web y herramientas internas** — Next.js, TypeScript, PostgreSQL y Docker. Ej.: plataforma de empleabilidad con 5 roles y acceso con Microsoft.
2. **Automatización de procesos y bots** — Python, Playwright (RPA), bots y Power Automate. Ej.: robot de consultas SUNAT y bots de filtrado de candidatos.
3. **Integración de APIs y comunicación** — APIs REST, webhooks, Shopify, CRM y email transaccional. Ej.: campañas segmentadas por facultad y ciclo ahorrando horas de trabajo.

**Experiencia — H2:** Dónde he trabajado
**Notas — H2:** Lo que estoy aprendiendo
**CTA final — H2:** ¿Buscas a alguien que entienda el negocio y lo lleve a código?
Texto: Disponible para roles junior desde enero 2027 como desarrollador web, analista de automatización o desarrollador de soluciones. Si tu equipo necesita conectar sistemas y ahorrar tiempo operativo, conversemos.
Botones: Descargar CV · Escribirme

---

## 4. Cómo escribir un caso (formato de artículo)

Cada caso se publica como un **artículo corto** (600–1 000 palabras, 3–5 min de lectura). Así se muestra en la home y en `/proyectos`: imagen, antetítulo (tipo · año · minutos de lectura), titular, bajada, resultado y "Leer el caso".

### 4.1 Las tres piezas de un caso

| Pieza | Dónde | Qué contiene |
|---|---|---|
| **Ficha** | `content/casos/index.ts` | Los datos que se ven en la tarjeta y en la cabecera |
| **Cuerpo** | `content/casos/<slug>.mdx` | El artículo |
| **Imagen** | `public/img/casos/<slug>.webp` | Portada 16:9 (opcional; sin ella se ve el placeholder de marca) |

Los minutos de lectura se calculan solos a partir del MDX. La página, la imagen OG, el sitemap y el JSON-LD se generan solos al agregar la ficha.

### 4.2 La ficha (`index.ts`)

| Campo | Regla | Ejemplo |
|---|---|---|
| `slug` | URL corta, en español, sin fecha | `difusion-correo-wiener` |
| `title` | **Titular = resultado**, no el nombre del proyecto; ≤ 70 caracteres | "Campañas de 8 000 correos en 2 minutos, con baja automática" |
| `subtitle` | **Bajada**: qué es y cómo funciona, en una frase de ≤ 200 caracteres | "Sistema interno de difusión con segmentación…" |
| `problem` | Una línea: qué dolía | "Las campañas se enviaban a mano…" |
| `result` | `value` + `label` + `context` (base, periodo, método). `measured: true` si es una medición aunque no sea % | `~2 min` · "por campaña de 8 000 destinatarios (antes, más de 4 h)" |
| `type` | `web` · `automatizacion` · `datos` | — |
| `context`, `role`, `duration`, `year`, `stack` (≤ 4), `status` | Ficha del caso | — |
| `featured` | `true` en los 3 casos de la home | — |
| `institutional` | `true` si es de la universidad (requiere el permiso de `07-PROYECTOS.md` §3) | — |

### 4.3 El cuerpo (`<slug>.mdx`)

Secciones fijas con `##` (alimentan el índice "En esta página"):

```mdx
## Contexto
Qué negocio, qué área, qué situación. 1–2 párrafos.

## Problema
3–4 viñetas: qué dolía y cómo se notaba.

## Enfoque
Cómo lo pensé. Incluye al menos una decisión y una cosa descartada:

<Callout title="Decisión: …">Qué decidí y por qué.</Callout>
<Callout title="Lo que descarté" variant="warning">Qué no hice y por qué.</Callout>

## Solución
<FlowDiagram label="Arquitectura" steps={[
  { tag: "Entrada", title: "…", items: ["…"] },
  { tag: "Lo que construí", title: "…", items: ["…"], highlight: true },
  { tag: "Salida", title: "…", items: ["…"] },
]} />
Un párrafo con lo que hace la solución.

## Resultado
<Metric value="−35 %" label="qué cambió" context="base, periodo y método" />
Lo que cambió, con su base. Si no hay cifra, resultado cualitativo honesto.

## Qué aprendí
2–3 viñetas, incluida una cosa que harías distinto.
```

**Componentes disponibles:** `<Callout>` (decisión o advertencia), `<FlowDiagram>` (3–5 pasos, uno destacado), `<Metric>` (cifra con contexto). Los comentarios `{/* TODO(Sebastián): … */}` no se publican.

### 4.4 Reglas de escritura
- **Titular = resultado.** "Pedidos 35 % más rápidos en una hamburguesería" > "Big Jack RP".
- Párrafos de 2–4 líneas. Una idea por párrafo. Primera persona.
- Muestra **una decisión que descartaste** y por qué: es lo que más convence a un jefe técnico.
- Diagrama antes que descripción de arquitectura.
- Toda cifra con base, periodo y método (§1). Sin dato, resultado cualitativo.
- Privacidad: ningún dato real de personas en capturas; nada de nombres de servidores, cuentas ni estructura interna (`07-PROYECTOS.md` §3).

### 4.5 La imagen
Captura con datos simulados o imagen editorial generada con el prompt base (`03-DESIGN.md` §10.7). 16:9, 1600 × 900, WebP/AVIF ≤ 200 KB, en `public/img/casos/<slug>.webp`. Aparece sola en la tarjeta y en la cabecera del caso.

---

## 5. Notas: blog + espacio LinkedIn

### 5.1 Propósito
Mostrar cómo piensas y que estás aprendiendo en público, construir red en LinkedIn y generar búsquedas de nicho hacia la web. La web es la **versión canónica**; LinkedIn, la **distribución**.

### 5.2 Pilares

| Pilar | Qué cuenta | Ejemplo de título |
|---|---|---|
| **Construyendo** | Notas de proyectos reales (sin datos privados) | "Migré una base de datos de SQLite a PostgreSQL sin detener el sistema: lo que salió mal" |
| **Aprendiendo medición** | Lo que aprendes de GA4 / GTM aplicado a tu web (como aprendizaje, no como especialidad: `CLAUDE.md` regla 2) | "Mis primeros 6 eventos en GA4 y por qué los nombré así" |
| **Automatización para PYMES** | Problemas cotidianos de negocios y cómo se resuelven | "3 tareas que una tienda pequeña puede automatizar este mes" |
| **IA en agencias** (tesis) | Hallazgos de tu investigación, cuando sean públicos | "Cómo usan la IA generativa las agencias de marketing en Lima: primeros datos" |

Proporción sugerida: 40 % Construyendo · 30 % Automatización para PYMES · 20 % Aprendiendo medición · 10 % Tesis.

### 5.3 Cadencia
- **1 nota por semana** desde la Fase 4 (no antes: el inglés y la tesis van primero).
- Día fijo: martes o miércoles, entre 8:00 y 10:00 (Lima). Ajustar con tus propios datos de LinkedIn tras 6 publicaciones.

### 5.4 Flujo por nota (≈90 min)

1. **Idea** (10 min): de `/docs/decisiones.md`, del trabajo de la semana o de una pregunta que te hicieron.
2. **Borrador en la web** (40 min): MDX, 500–900 palabras, estructura problema → qué hice → resultado → aprendizaje.
3. **Versión LinkedIn** (20 min): no copiar el artículo. Texto nativo de 150–250 palabras con la idea central (plantilla abajo).
4. **Publicar** (10 min): web primero; luego LinkedIn. El enlace con UTM va en el **primer comentario**: es una práctica habitual porque se suele observar que los enlaces en el cuerpo reducen el alcance (comprobarlo con tus propios datos).
5. **Cerrar el ciclo** (10 min): pegar la URL del post de LinkedIn en el frontmatter (`linkedinUrl`) para que la nota muestre "Comentar en LinkedIn".

### 5.5 Plantilla de publicación en LinkedIn

```
[Gancho: un problema concreto o un resultado en una línea]

[Contexto en 2 líneas: dónde, qué pasaba]

Lo que hice:
→ [paso 1]
→ [paso 2]
→ [paso 3]

Resultado: [cifra con contexto, o resultado cualitativo honesto]

Lo que aprendí: [1 línea]

[Pregunta abierta para comentarios]

(Escribí el detalle técnico en mi web, enlace en el primer comentario.)
```

### 5.6 Ficha de una nota

Igual que los casos: la ficha vive en `content/notas/index.ts` y el texto en `content/notas/<slug>.mdx`. Los minutos de lectura, la imagen OG, el RSS, el sitemap y el JSON-LD se generan solos.

```ts
{
  slug: "eventos-ga4-portafolio",
  title: "Mis primeros 9 eventos en GA4 y por qué los nombré así",
  description: "Cómo diseñé la medición de mi portafolio…",   // 140–160 caracteres
  date: "2026-10-12",
  pillar: "medicion",            // construyendo · pymes · medicion · tesis
  linkedinUrl: "",               // se completa después de publicar en LinkedIn (paso 5 de §5.4)
  draft: false,
}
```

### 5.7 Primeras 6 notas (backlog)

1. ✅ Cómo y por qué rediseñé mi portafolio (con la auditoría como punto de partida). — *Construyendo*
2. ✅ Mis primeros 9 eventos en GA4 y por qué los nombré así. — *Aprendiendo medición*
3. Migrar de SQLite a PostgreSQL en un proyecto real: lo que no sale en los tutoriales. — *Construyendo*
4. Envíos masivos de correo sin caer en spam: SMTP vs. servicios transaccionales. — *Construyendo* (sale del informe de Resend, sin datos internos)
5. ✅ 3 tareas que una tienda pequeña puede automatizar este mes. — *PYMES*
5b. ✅ Validé 1 200 correos antes de una campaña (Nivel C de `07-PROYECTOS.md`). — *Construyendo*
6. 30 días de datos de mi portafolio: qué aprendí sobre cómo llegan los reclutadores. — *Medición* (enero)

### 5.8 Qué no publicar
- Datos, capturas o nombres de la Universidad Norbert Wiener o de clientes sin autorización.
- Opiniones sobre empleadores o compañeros.
- Resultados de la tesis antes de la sustentación, salvo datos agregados que tu asesor apruebe.
