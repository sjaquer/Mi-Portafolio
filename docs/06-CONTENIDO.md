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
| Rol | "Desarrollo web · Automatización · MarTech & CRO" |
| Frase de posicionamiento | "Construyo sitios y automatizaciones que conectan marketing, operaciones y datos — y mido si funcionan." |
| Cargos | Exactamente como en el CV (títulos contractuales) |
| Sección del blog | "Notas" |
| Proyectos de práctica | "Laboratorio" |

---

## 3. Textos de la Home (listos para usar)

**Etiqueta sobre el hero** (mono): `LIMA, PERÚ · DISPONIBLE DESDE ENE 2027`

**H1:** Sebastián Jaque
**Rol (debajo, tamaño lead):** Desarrollo web, automatización y medición para equipos de marketing y operaciones.
**Párrafo:** Estudiante de último ciclo de Administración y Negocios Internacionales. Construyo con Next.js, conecto sistemas con APIs y mido el impacto con GA4. Hoy desarrollo herramientas internas en el área de empleabilidad de la Universidad Norbert Wiener.
**CTA primario:** Descargar CV · **CTA secundario:** Ver proyectos

**Prueba rápida — etiqueta:** `RESULTADOS`
- **−35 %** · tiempo de procesamiento de pedidos · Big Jack Burgers
- **−30 %** · tareas administrativas manuales · Dearel
- **~2 min** · para enviar una campaña de 8 000 correos (antes, más de 4 h) · Norbert Wiener

**Casos — H2:** Proyectos con resultado
**Qué hago — H2:** Tres cosas que hago bien
1. **Sitios y herramientas web** — Next.js, PostgreSQL y Docker. Ej.: plataforma de empleabilidad con 5 roles y acceso con Microsoft.
2. **Automatización e integraciones** — APIs, WhatsApp, email transaccional. Ej.: campañas segmentadas por facultad y ciclo.
3. **Medición y conversión** — GA4, GTM, embudos. Ej.: este sitio, instrumentado de punta a punta.

**Experiencia — H2:** Dónde he trabajado
**Notas — H2:** Lo que estoy aprendiendo
**CTA final — H2:** ¿Buscas a alguien que construya y mida?
Texto: Estoy buscando mi primer rol en MarTech, desarrollo web o automatización. Si tu equipo necesita a alguien que entienda el negocio y lo lleve a código, hablemos.
Botones: Descargar CV · Escribirme

---

## 4. Cómo escribir un caso

- **Título = resultado**, no nombre del proyecto. "Pedidos 35 % más rápidos en una hamburguesería" > "Big Jack RP".
- Párrafos de 2–4 líneas. Una idea por párrafo.
- Muestra **una decisión que descartaste** y por qué: es lo que más convence a un jefe técnico.
- Diagrama antes que descripción de arquitectura.
- Termina con "Qué aprendí" honesto, incluyendo lo que harías distinto.
- Revisa privacidad: ningún dato real de personas en capturas.

---

## 5. Notas: blog + espacio LinkedIn

### 5.1 Propósito
Mostrar cómo piensas y que estás aprendiendo en público, construir red en LinkedIn y generar búsquedas de nicho hacia la web. La web es la **versión canónica**; LinkedIn, la **distribución**.

### 5.2 Pilares

| Pilar | Qué cuenta | Ejemplo de título |
|---|---|---|
| **Construyendo** | Notas de proyectos reales (sin datos privados) | "Migré una base de datos de SQLite a PostgreSQL sin detener el sistema: lo que salió mal" |
| **Medición y CRO** | Lo que aprendes en GA4 / GTM aplicado a tu web | "Mis primeros 6 eventos en GA4 y por qué los nombré así" |
| **Automatización para PYMES** | Problemas cotidianos de negocios y cómo se resuelven | "3 tareas que una tienda pequeña puede automatizar este mes" |
| **IA en agencias** (tesis) | Hallazgos de tu investigación, cuando sean públicos | "Cómo usan la IA generativa las agencias de marketing en Lima: primeros datos" |

Proporción sugerida: 40 % Construyendo · 30 % Medición · 20 % PYMES · 10 % Tesis.

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

### 5.6 Frontmatter de una nota

```yaml
---
title: "Mis primeros 6 eventos en GA4 y por qué los nombré así"
description: "Cómo diseñé el plan de medición de mi portafolio: eventos, conversiones y errores que evité."
date: 2026-11-24
pillar: medicion
readingTime: auto
linkedinUrl: ""        # se completa después de publicar en LinkedIn
draft: false
---
```

### 5.7 Primeras 6 notas (backlog)

1. Cómo y por qué rediseñé mi portafolio (con la auditoría como punto de partida). — *Construyendo*
2. Mis primeros 6 eventos en GA4 y por qué los nombré así. — *Medición*
3. Migrar de SQLite a PostgreSQL en un proyecto real: lo que no sale en los tutoriales. — *Construyendo*
4. Envíos masivos de correo sin caer en spam: SMTP vs. servicios transaccionales. — *Construyendo* (sale del informe de Resend, sin datos internos)
5. 3 tareas que una tienda pequeña puede automatizar este mes. — *PYMES*
6. 30 días de datos de mi portafolio: qué aprendí sobre cómo llegan los reclutadores. — *Medición* (enero)

### 5.8 Qué no publicar
- Datos, capturas o nombres de la Universidad Norbert Wiener o de clientes sin autorización.
- Opiniones sobre empleadores o compañeros.
- Resultados de la tesis antes de la sustentación, salvo datos agregados que tu asesor apruebe.
