# 03 · DESIGN — Manual de marca personal y sistema de diseño

> **Fuente de verdad visual y verbal** de la marca Sebastián Jaque, para la web, el CV, LinkedIn, GitHub, presentaciones, documentos y cualquier pieza futura.
> Si una decisión no está aquí, se agrega aquí antes de implementarla o publicarla.
>
> **Versión:** 4.0 · **Actualizado:** 13 oct 2026 · **Responsable:** Sebastián Jaque

---

## Cómo usar este documento

| Parte | Qué contiene | Para quién / cuándo |
|---|---|---|
| **I. Marca** (§1–§2) | Esencia, personalidad, voz y escritura | Antes de escribir cualquier cosa: web, post, CV, mensaje a un reclutador |
| **II. Identidad visual** (§3–§11) | Logotipo, color, tipografía, elementos gráficos y kit de firma, iconos, diagramas, gráficos de datos, fotografía, movimiento | Antes de diseñar cualquier pieza, digital o impresa |
| **III. Aplicaciones** (§12–§13) | Redes sociales, formatos y plantillas; CV, OG, firma, slides, GitHub | Cuando produces una pieza concreta |
| **IV. Sistema de diseño web** (§14–§22) | Tokens, componentes y reglas de implementación del sitio | Al programar la web |
| **Anexos** (§23–§25) | Checklist antes de publicar, inventario de archivos, historial de cambios | Siempre, antes de publicar |

**Orden de precedencia:** `CLAUDE.md` (reglas del proyecto) → este documento → `06-CONTENIDO.md` (textos concretos y flujo editorial). Si dos documentos se contradicen, se corrige el de menor precedencia.

**Regla de oro de la marca:** *todo lo que publico debe poder defenderse en una entrevista.* Un diseño bonito con una cifra falsa es una pieza fallida.

---

# PARTE I · MARCA

## 1. Esencia

### 1.1 Plataforma de marca

| Elemento | Definición |
|---|---|
| **Propósito** | Que los equipos y negocios dejen de perder tiempo en tareas manuales que una buena herramienta o automatización puede resolver, conectando sistemas mediante código y APIs. |
| **Qué hago** | Desarrollo web (Next.js), automatización de procesos y bots (Python, Playwright, APIs), integración de sistemas (APIs REST, CRM, Shopify, email transaccional). |
| **Para quién** | Reclutadores y líderes de equipo en desarrollo web, automatización de procesos y soluciones de negocio (prioridad hasta ene 2027) · PYMES con procesos repetitivos. |
| **Diferencial** | Entiendo el problema de negocio antes de escribir código y diseño herramientas y flujos que ahorran horas de trabajo operativo. Formación en negocios + práctica real construyendo y automatizando. |
| **Rol (canónico)** | Desarrollo web · Automatización de procesos · Integraciones |
| **Frase de posicionamiento (canónica)** | Construyo herramientas web y automatizaciones que reducen tareas manuales y conectan sistemas con APIs. |
| **Idea de marca (interna)** | **Construir y conectar.** Todo lo visual y verbal sale de esta pareja: herramientas funcionales hechas con rigor técnico + flujos que eliminan fricción operativa. |
| **Metáfora visual** | **El plano.** Cada pieza se ve como un plano de ingeniería que se está dibujando: reglas, cotas, nodos y conectores. Lo que construí va marcado con el sello; lo que cambió, con una cota. |

La frase de posicionamiento y el rol se usan **literalmente iguales** en web, CV, LinkedIn, GitHub, `llms.txt` y firma de correo. Viven en `content/profile.ts`.

### 1.2 Personalidad

Cuatro rasgos. Cada pieza debe expresar al menos dos y no contradecir ninguno.

| Rasgo | Significa | Se nota en | No es |
|---|---|---|---|
| **Concreto** | Ejemplos reales antes que conceptos | Verbos de acción, nombres de herramientas, casos | Abstracto, "soluciones integrales" |
| **Medido** | Las afirmaciones tienen evidencia y contexto | Métricas con base y periodo, gráficos honestos | Cifras infladas, "99 % de éxito" |
| **Ordenado** | Claridad, estructura, nada sobra | Mucho blanco, retícula, jerarquía evidente | Frío, corporativo, rígido |
| **Cercano** | Primera persona, aprendiendo en público | Tono conversacional, "lo que salió mal" | Informal en exceso, memes, jerga |

**Arquetipo:** *el constructor* (builder), no el gurú. Muestra el taller, no el podio.

**Referencias de sensibilidad:** documentación de Linear, Vercel y Stripe; revistas técnicas sobrias; planos y cuadernos de ingeniería. **Anti-referencias:** portafolios de agencia, estética "laboratorio de IA", neón, cyberpunk, glassmorphism, renders 3D, plantillas de Canva genéricas.

### 1.3 Lo que la marca nunca hace
- Inflar cargos, certificaciones o métricas (ver `CLAUDE.md`, regla 2).
- Hablar como agencia ("te llevamos al siguiente nivel") o como gurú ("el secreto que nadie te cuenta").
- Mostrar datos reales de Norbert Wiener, clientes o personas.
- Opinar sobre empleadores o compañeros.
- Usar estética que contradiga el rol (IA futurista, hacker, crypto).

---

## 2. Identidad verbal

### 2.1 Voz (constante)
Concreta, en primera persona, con números que tienen contexto, curiosa y honesta sobre lo que falta. La tabla aplicada de "en vez de / escribe" y los textos listos para usar están en `06-CONTENIDO.md` §1–§3.

### 2.2 Tono (cambia según el canal)

| Contexto | Tono | Formalidad (1–5) | Ejemplo de apertura |
|---|---|---|---|
| Web (home, casos) | Claro, seguro, sobrio | 3 | "Construí una bolsa de trabajo con CMS por roles para ferias laborales." |
| CV | Factual, verbos en pasado | 4 | "Implementé un flujo de envío segmentado por facultad, carrera y ciclo." |
| LinkedIn (posts) | Conversacional, reflexivo | 2 | "Esta semana rompí la medición de mi web. Así lo arreglé." |
| Mensaje a reclutador | Directo, breve, respetuoso | 4 | "Hola, [nombre]. Vi la vacante de Analista de automatización y creo que encajo por dos razones:" |
| Comentarios / respuestas | Amable, agrega algo útil | 2 | "Buen punto. En mi caso lo resolví con…" |
| GitHub (README) | Técnico, instructivo | 3 | "Plataforma de gestión de pedidos. Next.js + PostgreSQL." |
| Correo a cliente PYME | Cercano, sin tecnicismos | 3 | "Lo que propongo es que los pedidos lleguen solos a una hoja, sin copiarlos." |

### 2.3 Estilo de escritura — mecánica

**Estructura**
- Una idea por párrafo; párrafos de 2–4 líneas. Frases de ≤ 25 palabras como norma.
- Empieza por lo importante (pirámide invertida): resultado → contexto → detalle.
- Verbos de acción en primera persona: *construí, implementé, diseñé, medí, automaticé, migré, ejecuté*. Nunca "lideré" en contextos de prácticas.
- Voz activa. "Migré la base de datos", no "la base de datos fue migrada".

**Ortografía y formato (es-PE, norma RAE)**

| Elemento | Regla | Correcto | Incorrecto |
|---|---|---|---|
| Porcentajes | Espacio fino o normal antes de % | 35 % | 35% |
| Signo menos en métricas | Signo menos real (U+2212) | −35 % | -35 % |
| Decimales | Coma | 2,5 s | 2.5 s |
| Miles | Espacio desde 10 000; sin separador hasta 9999 | 1200 · 12 000 | 1,200 · 12.000 |
| Moneda | Símbolo + espacio | S/ 1200 · USD 300 | S/.1200 |
| Fechas (texto) | Día + mes abreviado en minúscula + año | 11 oct 2026 | Oct. 11, 2026 |
| Fechas (datos, archivos) | ISO 8601 | 2026-10-11 | 11/10/26 |
| Horas | 24 h | 08:00 | 8 a. m. (salvo en posts informales) |
| Títulos | Tipo oración | Proyectos con resultado | Proyectos Con Resultado |
| Siglas | Sin puntos, en mayúsculas | GA4, CRO, API, PYME | G.A.4 |
| Extranjerismos técnicos | Sin cursiva si son nombres de producto; en cursiva si son términos comunes | Next.js, *dashboard* | "dashboard" |
| Rangos | Raya corta (–) sin espacios | 2024–2026 | 2024 - 2026 |
| Inciso | Raya larga (—) con espacios | sitios — y mido | sitios - y mido |
| Flecha de acción | → (U+2192) | Ver el caso → | Ver el caso >> |

**Regla de las métricas** (aplica a todo canal): *qué cambió + cuánto + frente a qué + en qué periodo + cómo se midió*. Si falta algo, se dice ("estimado", "según el equipo") o se usa un resultado cualitativo.

### 2.4 Vocabulario

| Usar | Evitar |
|---|---|
| construir, medir, automatizar, integrar, conectar, probar, aprender | revolucionar, potenciar, disruptivo, sinergia |
| herramienta, flujo, proceso, evento, embudo, conversión | solución integral, ecosistema, end-to-end, 360° |
| "estoy aprendiendo", "lo que salió mal", "lo que haría distinto" | "experto", "gurú", "visionario", "ninja", "rockstar" |
| resultado, evidencia, base, periodo | "increíble", "impresionante", "brutal" |
| "IA" cuando es relevante y concreto ("clasifica candidatos con un LLM") | "IA" como adorno ("impulsado por IA") |

### 2.5 Nombres y menciones
- **Nombre público:** Sebastián Jaque (con tilde siempre). Nombre completo solo en CV y documentos formales: Sebastián Emiliano Jaque Reátegui.
- **Handle:** `sjaquer` (minúsculas, sin @ en textos; con @ solo al mencionar en una red).
- **Empresas:** como en el CV. Si un cliente no autoriza su nombre: descripción ("marca de hamburguesas en Lima").
- **Herramientas:** con su grafía oficial: Next.js, PostgreSQL, Google Analytics 4 (GA4), Google Tag Manager (GTM), WhatsApp, Shopify, Docker, TypeScript.

### 2.6 Emojis, hashtags y signos
- **Emojis:** máximo 1 por post, nunca en títulos de la web ni en el CV. Preferir los símbolos tipográficos de marca: `→`, `·`, `—`, `✓`.
- **Hashtags (LinkedIn):** 3 como máximo, al final, en tipo camello: `#DesarrolloWeb #Automatizacion #NextJS`.
- **Exclamaciones:** máximo una por pieza. Nunca dobles (!!).
- **Mayúsculas sostenidas:** solo en etiquetas mono (§5.3), nunca para gritar.

---

# PARTE II · IDENTIDAD VISUAL

## 3. Logotipo

La marca es una **marca personal tipográfica**: el nombre es el logo. No hay isotipo ilustrado.

### 3.1 Versiones

| Versión | Construcción | Uso |
|---|---|---|
| **Wordmark principal** | "Sebastián Jaque" en Inter SemiBold (600), `letter-spacing: -0.02em` | Header de la web, CV, portada de slides, banner de LinkedIn |
| **Wordmark compacto** | `sjaquer` en JetBrains Mono Medium (500), minúsculas | Pies de pieza, marcas de agua, URL, GitHub |
| **Monograma** | `sj` en JetBrains Mono SemiBold (600) dentro de un cuadrado de esquinas redondeadas, con la **marca de medición** (§6.1) bajo las letras | Favicon, avatar de redes secundarias, sello en carruseles, app icon |

### 3.2 Construcción del monograma
- Lienzo cuadrado de **64 × 64 u**; radio de esquina **14 u** (≈ 22 %).
- Letras `sj` centradas ópticamente, altura de x = 24 u.
- Bajo las letras, una regla de 3 marcas verticales (alto 6 u, 4 u, 4 u; separación 6 u; trazo 2 u), alineada a la izquierda con la `s`. Es la firma gráfica "construir y medir".
- Versión positiva: fondo `marino-700` + letras `papel`. Versión negativa: fondo `papel` + letras `marino-700`. Versión monocroma: `tinta` o blanco.

Borrador vectorial de referencia (convertir texto a contornos antes de exportar el final):

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Sebastián Jaque">
  <rect width="64" height="64" rx="14" fill="#1F3A5F"/>
  <text x="14" y="38" font-family="JetBrains Mono" font-weight="600" font-size="26" fill="#FAFAF8">sj</text>
  <g stroke="#FAFAF8" stroke-width="2" stroke-linecap="round">
    <line x1="15" y1="46" x2="15" y2="52"/>
    <line x1="21" y1="48" x2="21" y2="52"/>
    <line x1="27" y1="48" x2="27" y2="52"/>
  </g>
</svg>
```

### 3.3 Área de protección y tamaños mínimos
- **Área de protección:** alrededor del wordmark, un espacio libre igual a la altura de la "S" mayúscula. Alrededor del monograma, ¼ de su ancho.
- **Tamaño mínimo:** wordmark 96 px de ancho en pantalla / 25 mm impreso. Monograma 16 px (favicon) / 8 mm impreso. Bajo 24 px, el monograma pierde la marca de medición (versión simplificada solo `sj`).

### 3.4 Combinaciones de color permitidas

| Fondo | Logo | Contraste |
|---|---|---|
| Papel `#FAFAF8` | Tinta `#14161A` | 17,3:1 ✅ |
| Papel `#FAFAF8` | Marino `#1F3A5F` | 11,0:1 ✅ |
| Marino `#1F3A5F` | Papel / blanco | 11,5:1 ✅ |
| Tinta `#14161A` | Papel `#FAFAF8` | 17,3:1 ✅ |
| Fotografía | Solo sobre zona plana y oscura/clara con contraste ≥ 4,5:1; si no, usar placa de color sólido | — |

### 3.5 Usos incorrectos
- ✗ Cambiar la tipografía, estirar, inclinar o rotar.
- ✗ Aplicar degradados, sombras, brillos, contornos o efectos de vidrio.
- ✗ Usar el azul de acción (`accent-600`) en el logo: el azul de acción es solo para cosas clicables.
- ✗ Colocarlo sobre fotos con fondo cargado.
- ✗ Escribir el nombre sin tilde o en Tipo Título dentro del handle (`SJaquer`).
- ✗ Añadir íconos de cerebro, circuitos, robots o "IA".

---

## 4. Color

Marca **sobria y casi monocroma**: 90 % neutros, un azul marino de identidad, un azul de acción y un verde que solo significa "resultado medido". Todos los contrastes están calculados con la fórmula WCAG 2.x.

### 4.1 Colores principales de marca

| Nombre | Hex | RGB | Rol |
|---|---|---|---|
| **Papel** | `#FAFAF8` | 250 250 248 | Fondo principal en todo medio. Blanco cálido, no blanco puro. |
| **Tinta** | `#14161A` | 20 22 26 | Texto y logotipo. Negro azulado, nunca `#000`. |
| **Marino** | `#1F3A5F` | 31 58 95 | **Color de identidad.** Viene del CV. Logo, portadas, banners, encabezados de documentos, fondos de piezas de redes. |
| **Azul acción** | `#2350D9` | 35 80 217 | **Solo lo clicable o accionable**: botones, enlaces, CTA en piezas. |
| **Verde resultado** | `#0B7350` | 11 115 80 | **Solo métricas medidas.** Si aparece verde, es un número con contexto. |

> CMYK y Pantone: no se definen hasta que haya una pieza impresa real. Se calcularán con el perfil de la imprenta y se agregarán aquí (no inventar equivalencias).

### 4.2 Paleta extendida (primitivos)

Los **primitivos** son la paleta completa. En la web nunca se usan directamente: se usan los **tokens semánticos** de §15, que apuntan a estos valores.

**Neutros (gris cálido-frío)**

| Paso | Hex | Uso habitual |
|---|---|---|
| `gris-0` | `#FFFFFF` | Superficies (tarjetas, inputs) |
| `gris-25` | `#FAFAF8` | **Papel** · fondo |
| `gris-50` | `#F3F2EF` | Bloques secundarios, marcos de capturas |
| `gris-100` | `#E4E2DD` | Bordes decorativos, separadores |
| `gris-200` | `#C9CDD4` | Texto de párrafo en modo oscuro |
| `gris-300` | `#A7ADB7` | Texto secundario en modo oscuro |
| `gris-400` | `#8A9099` | Bordes de inputs (3,2:1 sobre blanco) · serie "Otros" en gráficos |
| `gris-450` | `#6B717B` | Bordes de inputs en modo oscuro |
| `gris-500` | `#666C76` | Metadatos, leyendas (5,1:1 sobre papel) |
| `gris-700` | `#3D424B` | Párrafos largos (9,7:1 sobre papel) |
| `gris-800` | `#272B32` | Bordes en modo oscuro |
| `gris-850` | `#1D2026` | Bloques secundarios en modo oscuro |
| `gris-900` | `#171A1F` | Superficies en modo oscuro |
| `gris-950` | `#14161A` | **Tinta** |
| `gris-975` | `#0E1013` | Fondo en modo oscuro ("Noche") |
| `gris-ink-dark` | `#ECEDEF` | Texto principal en modo oscuro |

**Marino (identidad)**

| Paso | Hex | Uso | Contraste clave |
|---|---|---|---|
| `marino-50` | `#EEF2F7` | Fondos suaves de documentos y slides | Marino-700 encima 10,2:1 ✅ |
| `marino-100` | `#D6DFEA` | Texto claro sobre marino, bordes sobre marino | Sobre marino-700 8,5:1 ✅ |
| `marino-300` | `#8FA3BF` | Elementos gráficos secundarios sobre marino | Decorativo |
| `marino-500` | `#3F5E86` | Subtítulos en documentos, texto sobre papel | 6,4:1 sobre papel ✅ |
| `marino-700` | `#1F3A5F` | **Marino** | Blanco encima 11,5:1 ✅ |
| `marino-900` | `#13233A` | Fondos profundos (banner, portadas oscuras) | Texto `#ECEDEF` 13,5:1 ✅ |

**Azul acción**

| Paso | Hex | Uso | Contraste clave |
|---|---|---|---|
| `azul-50` | `#EEF2FF` | Fondo de etiquetas activas, resaltados | azul-700 encima 7,7:1 ✅ |
| `azul-300` | `#A3BAFF` | Hover en modo oscuro · enlace sobre marino | Sobre marino 6,0:1 ✅ |
| `azul-400` | `#7A9BFF` | Acción en modo oscuro | Sobre `#0E1013` 7,2:1 ✅ |
| `azul-500` | `#5B7FF0` | Serie 1 de gráficos en modo oscuro | Gráfico (≥ 3:1) |
| `azul-600` | `#2350D9` | **Azul acción** | 6,2:1 sobre papel ✅ · blanco encima 6,5:1 ✅ |
| `azul-700` | `#1B40B3` | Hover / activo | Blanco encima 8,6:1 ✅ |
| `azul-800` | `#17318A` | Texto de acción sobre `azul-50` en piezas | Sobre `azul-50` 10,2:1 ✅ |
| `azul-900` | `#1A2340` | Fondo de resaltado en modo oscuro | — |

**Semánticos (estado)**

| Familia | Claro (texto/ícono) | Fondo suave | Oscuro | Uso |
|---|---|---|---|---|
| **Verde resultado** | `#0B7350` (5,6:1 sobre papel) | `#E8F5EE` (texto encima 5,2:1) | `#3FC08A` | Métricas de resultado. Nada más. |
| **Rojo error** | `#B42318` (6,5:1 sobre blanco) | `#FEF3F2` (texto encima 6,0:1) | `#FF8A80` | Errores de formulario, advertencias graves |
| **Ámbar aviso** | `#B54708` (5,4:1 sobre blanco) | `#FFF7E6` (texto encima 5,1:1) | `#F5B54A` | `Callout` de advertencia, "en progreso" |

Los colores de estado **siempre** van con ícono + texto, nunca solo color.

### 4.3 Proporciones

| Medio | Neutros | Marino | Azul acción | Verde | Otros |
|---|---|---|---|---|---|
| Web | 90 % | ≈ 0–2 % (logo/OG) | ≈ 6 % | ≈ 2 % | — |
| Redes (piezas gráficas) | 30–40 % | **55–65 % (fondo marino-900)** | ≤ 5 % (solo CTA) | ≤ 5 % | — |
| CV y documentos | 85 % | 10 % (nombre, títulos) | ≤ 3 % (enlaces) | ≤ 2 % | — |
| Slides | 70 % | 20 % | ≤ 5 % | ≤ 5 % | gráficos según §9 |

### 4.4 Combinaciones aprobadas para texto

| Texto | Fondo | Contraste | Apto para |
|---|---|---|---|
| Tinta | Papel | 17,3:1 | Todo |
| `gris-700` | Papel | 9,7:1 | Párrafos |
| `gris-500` | Papel | 5,1:1 | Metadatos (≥ 14 px) |
| `gris-500` | `gris-50` | 4,7:1 | Metadatos en bloques |
| Papel / blanco | Marino | 11,0–11,5:1 | Todo |
| `marino-100` | Marino | 8,5:1 | Texto secundario sobre marino |
| `azul-300` | Marino | 6,0:1 | Enlaces o CTA sobre marino |
| `verde #3FC08A` | Marino | 5,0:1 | Métrica sobre marino |
| Blanco | Azul acción | 6,5:1 | Botones |
| ✗ `azul-400` | Marino | 4,4:1 | **No** para texto normal (solo ≥ 24 px) |
| ✗ `gris-400` | Papel | 3,1:1 | **No** para texto; solo bordes |

### 4.5 Reglas
- El azul de acción es **solo** para elementos clicables (o, en una pieza estática, el CTA). Nunca para decorar.
- El verde es **solo** para resultados medidos.
- El marino es la identidad; en la web aparece con moderación (logo, banda de resultados, retrato). **En redes es el fondo protagonista** (§12.4); en documentos, el color de títulos.
- Nada de degradados multicolor, neón, brillos ni glassmorphism. Los únicos degradados son los **tonales** de §6.7; todo lo demás, plano.
- Máximo 3 colores de la paleta (sin contar neutros) en una misma pieza.

---

## 5. Tipografía

### 5.1 Familias

| Familia | Rol | Pesos permitidos | Licencia |
|---|---|---|---|
| **Inter** | Todo el texto: titulares, párrafos, interfaz | 400 Regular · 600 SemiBold (500 Medium solo en UI pequeña) | SIL OFL, gratuita |
| **JetBrains Mono** | Métricas, etiquetas, stack, código, handle, fechas en piezas | 500 Medium · 600 SemiBold | SIL OFL, gratuita |

**Alternativas cuando Inter o JetBrains Mono no estén disponibles:**

| Entorno | Sustituto |
|---|---|
| Word / Google Docs / PowerPoint sin fuentes instaladas | **Geist** (texto) + **Geist Mono**; última opción del sistema: Arial + Consolas |
| Canva | Inter si está; si no, Roboto + "Roboto Mono" |
| Correo (firma) | Pila del sistema: `-apple-system, Segoe UI, Roboto, Arial, sans-serif` |

Nunca usar: tipografías script, display decorativas, serif de fantasía, "tech" futuristas (Orbitron y similares).

### 5.2 Escala fuera de la web (piezas y documentos)

| Rol | Redes (lienzo 1080 px) | Slides (1920 × 1080) | Documento (A4) |
|---|---|---|---|
| Titular | 72–96 px · 600 · interlineado 1,05 | 64–80 px · 600 | 20–24 pt · 600 |
| Subtítulo | 40–48 px · 400 | 36–40 px · 400 | 13–14 pt · 600 |
| Texto | 32–36 px · 400 · 1,4 | 28–32 px · 400 | 10–11 pt · 400 · 1,4 |
| Métrica | 120–160 px · JetBrains Mono 600 | 96–120 px · mono | 18–24 pt · mono |
| Etiqueta | 24–28 px · mono 500 · mayúsculas · tracking 0,06 em | 20–24 px · mono | 8–9 pt · mono |

La escala web (tokens) está en §16.

### 5.3 Reglas tipográficas
- Máximo **2 pesos** por pieza (400 y 600).
- Titulares en tipo oración; `letter-spacing: -0.02em` en tamaños grandes.
- **Etiqueta mono** (firma tipográfica de la marca): JetBrains Mono, mayúsculas, tracking +0,06 em, color `gris-500` o `marino-500`. Ej.: `CASO · AUTOMATIZACIÓN · 2026`.
- Ancho de línea: 45–75 caracteres (68 en la web).
- Alineación siempre a la izquierda. Nunca justificado ni centrado en párrafos (centrado solo en titulares de 1–2 líneas en piezas cuadradas).
- Métricas siempre en JetBrains Mono, con su línea de contexto debajo en Inter.

---

## 6. Elementos gráficos

El sistema gráfico se inspira en **planos y cuadernos de medición**: líneas finas, anotaciones, marcas de regla. Comunica "esto está construido y medido" sin decorar.

### 6.1 La marca de medición (firma gráfica)
Tres a cinco trazos verticales cortos alineados en una base, como una regla. Variantes:
- **Separador:** una regla horizontal de 1 px con marcas cada 8 u y una marca larga cada 40 u. Sustituye a las líneas divisorias decorativas en piezas de redes, portadas y OG.
- **Sello:** las 3 marcas del monograma (§3.2), junto a una métrica destacada.
- **Cota:** una línea con topes en los extremos y un número en mono encima (como una cota de plano) para señalar "de X a Y" en antes/después. En la web, toda métrica con valor de partida (`before` en `profile.ts`) se muestra así: `1–2 h ├────┤ 5–10 min`.
- **Regla trazada (v4.0):** la regla se dibuja de izquierda a derecha. Es la firma animada de la marca: bajo el nombre en el hero, al abrir un video o un carrusel animado.

Trazo: 1,5 px en pantalla (2 px en lienzos de 1080 px), color `gris-400` sobre papel o `marino-300` sobre marino. Nunca en azul de acción ni en verde.

### 6.2 Retícula visible (opcional)
Fondo de puntos de 1 px cada 24 u en `gris-100` (sobre papel) o `marino-500` al 30 % (sobre marino). Solo en portadas, OG y banners; nunca detrás de párrafos.

### 6.3 Etiquetas y fichas
- **Etiqueta mono** con borde de 1 px y radio 6 u para stack y categorías (`Next.js`, `GA4`).
- **Ficha de métrica:** cifra en mono verde + línea de contexto en `gris-500`. Ej.: **−35 %** / *tiempo por pedido · 4 semanas antes vs. después*.

### 6.4 Flecha
`→` es el único signo direccional. Indica acción, secuencia o "siguiente". No usar flechas curvas, 3D ni dibujadas a mano.

### 6.5 Marcos de captura
Toda captura de pantalla va dentro de un marco: fondo `gris-50`, radio 16 u, padding 24 u, borde 1 px `gris-100`. Sin mockups de dispositivos fotorrealistas; como máximo, una barra de navegador plana de 3 puntos grises.

### 6.6 Prohibido
Degradados multicolor o saturados, sombras largas, brillos, partículas, toroides, mallas 3D, renders isométricos con interfaces flotantes, cables o fibras luminosas, cerebros, circuitos, robots, "hologramas", texturas de ruido, glassmorphism, neón. Los únicos degradados permitidos son los **tonales** de §6.7.

### 6.7 Profundidad (v3.0)

La marca es sobria, no plana. La profundidad se construye con **capas de un mismo tono**, nunca con efectos.

**Degradados tonales**
- Solo entre dos valores **del mismo tono** y con una diferencia de luminancia mínima: papel `#FAFAF8` → marino-50 `#EEF2F7` (claro) o `#0E1013` → `#121A26` (oscuro).
- Forma: radial suave desde una esquina, o lineal vertical. Nunca detrás de un párrafo largo sin verificar contraste: `gris-500` sobre marino-50 da 4,7:1 ✅ y `azul-600` 5,8:1 ✅.
- Dónde: fondo del hero y bandas de identidad. Máximo uno por pantalla.
- Puede combinarse con la retícula de puntos (§6.2) desvanecida con una máscara.

**Superficies (de abajo hacia arriba)**

| Nivel | Uso | Claro | Oscuro |
|---|---|---|---|
| 0 · Fondo | Página | papel | `#0E1013` |
| 1 · Superficie | Tarjetas, fichas | blanco | `#171A1F` |
| 2 · Elevada | Tarjeta en hover, menús | blanco + `shadow-md` | `#1D2026` + borde |
| Invertida | Bandas de identidad | marino-900 `#13233A` | marino-900 `#13233A` |

**Banda invertida (identidad).** Una sección en marino-900 para marcar el punto más importante de la página (en la home: los resultados medidos). **Máximo una por página** (§14.6). Dentro de la banda, los tokens se redefinen (§15.4) para que los componentes funcionen sin cambios. Contrastes sobre `#13233A`: papel 15,1:1 · marino-100 11,7:1 · `#A9B8CC` 7,8:1 · azul `#A3BAFF` 8,3:1 · verde `#3FC08A` 6,9:1 ✅.

**Elevación.** Borde de 1 px en reposo. En hover, la tarjeta sube 2 px y gana `shadow-md`. `shadow-lg` solo para lo que flota (banner de consentimiento, menús).

### 6.8 Portadas e imágenes (v4.0)

| Espacio | Qué lleva | Cómo se produce |
|---|---|---|
| Retrato del hero y de /sobre-mi | Retrato principal real, fondo marino-700 (§10.2) | `public/img/retrato.webp`, 4:5, 1200 × 1500, ≤ 200 KB; aparece solo (`MediaFrame`) |
| Portada de cada caso | **Plano SVG del flujo real del caso** (`CaseCover`): etiqueta del flujo, 3–4 nodos en escalera, el que construí con sello, y una cota con el resultado | Datos en `content/casos/index.ts` → `cover` (títulos de nodo de ≤ 12 caracteres) |
| Cabecera y tarjeta de nota | **Motivo del pilar** (`PillarMotif`, §12.2) | Automático según el pilar de la nota |
| Capturas dentro de un caso | Captura con **datos simulados** en el marco de §6.5 | Manual, cuando aporte algo que el plano no cuenta |

**Por qué planos y no imágenes.** En la v3.2 las portadas eran imágenes generadas; terminaron siendo renders 3D con neón, brillos y vidrio, exactamente lo prohibido en §6.6. Un plano en SVG pesa < 10 KB, funciona en claro y oscuro, explica el proyecto en 3 segundos y no puede salirse de la paleta. **Regla:** ninguna portada de caso o nota es una imagen generada.

Mientras no hay retrato, `MediaFrame` muestra el placeholder de marca (fondo `brand-50` + retícula + monograma). La proporción fija evita saltos de layout.

### 6.9 Kit de firma (v4.0)

Seis piezas que, juntas o por separado, hacen reconocible cualquier pieza de la marca sin leer el nombre. Toda pieza (web, post, carrusel, slide, OG) usa **al menos dos**.

| Pieza | Qué es | Dónde aparece |
|---|---|---|
| **Etiqueta mono** | JetBrains Mono, mayúsculas, tracking 0,06 em (§5.3) | Antetítulos, pilar, numeración `n/N` |
| **Regla** | Marcas cada 8 u y una larga cada 40 u (§6.1) | Bajo el nombre, separadores, pies de pieza |
| **Sello** | Las 3 marcas del monograma | Sobre el nodo o la cifra protagonista |
| **Cota** | Línea con topes: "de X a Y" | Antes/después de una métrica |
| **Plano** | Nodos + conectores ortogonales (§8.1) | Portadas de casos, servicios, explicaciones |
| **Motivo de pilar** | Figura abstracta fija por pilar (§12.2) | Notas, OG, piezas de LinkedIn |

---

## 7. Iconografía

- **Familia única:** [Tabler Icons](https://tabler.io/icons) (ya usada en el proyecto). No mezclar con otras librerías.
- **Estilo:** solo variante de contorno (*outline*). Trazo **1,5 px** a 24 px; esquinas y terminaciones redondeadas.
- **Tamaños:** 16 px (en línea con texto pequeño) · 20 px (botones, listas) · 24 px (por defecto) · 32–48 px (piezas de redes, solo si comunica algo).
- **Color:** hereda el color del texto (`currentColor`). En botones, el mismo que el texto del botón.
- **Uso:** un ícono acompaña a un texto, no lo reemplaza (salvo controles universales: cerrar, menú, tema, con `aria-label`).
- **Logos de herramientas** (Next.js, GA4…): monocromos en `gris-500`, del mismo alto óptico, nunca a color en grupo.
- **No:** íconos rellenos, a color, con degradado, emojis como íconos, ilustraciones isométricas.

---

## 8. Ilustración, diagramas y vectores

La marca **no usa ilustración narrativa** (personajes, escenas). Usa **diagramas explicativos** vectoriales: arquitectura, flujos, embudos, antes/después.

### 8.1 Estilo de diagrama
- **Nodos:** rectángulos con radio 8 u, borde 1,5 px `gris-400`, fondo `gris-0`; texto Inter 14–16 px; etiqueta mono opcional encima (`API`, `DB`, `GTM`).
- **Nodo destacado:** el componente que construí o el que cambió, con borde `marino-700` 2 px. Solo uno o dos por diagrama.
- **Conectores:** líneas rectas u ortogonales de 1,5 px `gris-500`, con punta de flecha simple. Etiqueta del conector en mono 12 px.
- **Agrupaciones:** rectángulo de fondo `gris-50` sin borde, con etiqueta mono arriba a la izquierda ("Servidor", "Cliente", "Terceros").
- **Lectura:** de izquierda a derecha o de arriba abajo. Máximo 7–9 nodos; si hay más, dividir en dos diagramas.
- **Color:** solo neutros + marino. Azul acción solo si el diagrama es interactivo; verde solo para un resultado medido.

### 8.2 Especificación técnica de los vectores (SVG)
- `viewBox` definido, sin `width`/`height` fijos; escalable.
- Colores con `currentColor` o variables CSS para que funcionen en modo oscuro.
- Texto vivo en la web (accesible y traducible); convertido a contornos solo en piezas exportadas fuera de la web (redes, PDF).
- Trazos con `vector-effect: non-scaling-stroke` cuando el diagrama se escala.
- Optimizar con SVGO; ningún SVG > 30 KB.
- Incluir `<title>` y `role="img"`, o un texto alternativo equivalente en la página.
- Herramientas sugeridas: Figma o Excalidraw para bocetar → redibujar limpio en Figma → exportar SVG.

### 8.3 Plantillas base (en código, v4.0)

Las plantillas viven como componentes; para una pieza fuera de la web se captura la figura o se redibuja en Figma con las mismas medidas.

| Plantilla | Componente | Medidas |
|---|---|---|
| Plano de flujo (3–4 nodos en escalera + cota de resultado) | `components/ui/case-cover.tsx` | Lienzo 640 × 360; nodo 124 × 64, separación 28; filas en y = 104 y 168 |
| Flujo mínimo de 3 pasos | `components/brand/mini-flow.tsx` | Nodo 84 × 36, separación 24; el central destacado |
| Arquitectura de 3 capas · flujo disparador → resultado · barras + regla · texto → datos | `components/brand/pillar-motif.tsx` | Lienzo 640 × 240 (8:3) |
| Antes / después con cota | `Metric` con `before` (`components/ui/metric.tsx`) | Cota a todo el ancho disponible |
| Primitivas (marco, nodo, sello, conector con pulso, cota) | `components/brand/figure.tsx` | Trazo 1,5; destacado 2; radio 8 |

### 8.4 Reglas de las figuras en la web
- Solo clases de tokens (`fill-surface`, `stroke-border-strong`, `stroke-brand`…): así cambian solas en modo oscuro y dentro de la banda invertida.
- Una figura es **decorativa** (`aria-hidden`) cuando el texto de al lado ya dice lo mismo; en la página del caso se anuncia como imagen con su recorrido ("Diagrama: Flujo de un pedido. Menú digital → Webhook → Cocina → Inventario").
- Máximo un nodo destacado por figura (dos solo en arquitectura).
- Texto dentro de figuras: etiqueta mono 11–13 u y título Inter 600 de 15 u. Si no cabe en 12 caracteres, se acorta el título, no la letra.

---

## 9. Gráficos de datos

Los gráficos son evidencia: deben ser **honestos antes que bonitos**. Paleta validada con el script de la skill *dataviz* (separación para daltonismo, nitidez y contraste) en ambos modos.

### 9.1 Paleta categórica

| Orden | Nombre | Claro (fondo `#FFFFFF`) | Oscuro (fondo `#171A1F`) |
|---|---|---|---|
| 1 | Azul | `#2350D9` | `#5B7FF0` |
| 2 | Naranja | `#D0611F` | `#D9691F` |
| 3 | Petróleo | `#00897B` | `#14A08F` |
| — | Otros / referencia | `#8A9099` | `#6B717B` |

- **Máximo 3 series de color.** Validado con todas las combinaciones de pares en claro y oscuro (peor separación con daltonismo ΔE 11,2 claro / 14,3 oscuro; todas ≥ 3:1 contra el fondo). Una 4.ª serie se agrupa en "Otros" (gris) o se divide en gráficos pequeños.
- El orden es fijo: la serie 1 siempre es azul. El color sigue a la entidad, no a su posición en un ranking.
- **Estrategia preferida: "gris + un acento".** Todas las series en gris y solo la que importa en azul (o marino en piezas de marca). Es la opción más alineada con la marca.
- Dentro de un gráfico, el color identifica series, no estados. El verde resultado no se usa como serie; el petróleo es distinto y se acompaña siempre de etiqueta.

### 9.2 Secuencial y divergente
- **Secuencial** (magnitud, mapas de calor): un solo tono de claro a oscuro, de `azul-50` a `marino-900`.
- **Divergente** (positivo / negativo frente a una referencia): naranja ↔ gris neutro ↔ azul. Nunca rojo ↔ verde.

### 9.3 Anatomía
- Elegir la forma primero: si es un solo número, es una **ficha de métrica**, no un gráfico.
- Barras horizontales para comparar categorías; líneas para evolución temporal; nunca tortas de más de 3 porciones, nunca 3D, nunca doble eje.
- Eje Y de barras empieza en 0. Si no, se indica explícitamente.
- Marcas finas: líneas de 2 px, barras con 2 px de separación, puntos ≥ 8 px.
- Cuadrícula y ejes recesivos (`gris-100` / `gris-500`); sin bordes alrededor del gráfico.
- Etiquetas directas en las series (≤ 4) además de leyenda; nunca un número en cada punto.
- Texto en colores de texto (tinta / `gris-500`), nunca en el color de la serie.
- **Título = conclusión** ("El 60 % de las descargas de CV llegan desde LinkedIn"), subtítulo = qué se mide, base y periodo. **Fuente** siempre al pie (`Fuente: GA4, 1 nov – 31 dic 2026`).
- En la web: tooltip al pasar el cursor y una tabla alternativa accesible.

---

## 10. Fotografía

### 10.1 Concepto
**Persona real trabajando en un lugar real.** La foto debe decir "puedo sentarme con tu equipo mañana", no "soy un modelo de stock".

### 10.2 Tipos de foto

| Tipo | Descripción | Uso |
|---|---|---|
| **Retrato principal** | Busto, expresión tranquila, **sujeto en blanco y negro sobre fondo marino-700 liso** (v4.0) | Web (hero), LinkedIn, GitHub, CV si aplica. **La misma foto en todos los canales.** |
| **Retrato de trabajo** | Plano medio, en escritorio o pizarra, mirando la pantalla o explicando | Sobre mí, portadas de notas, posts de LinkedIn |
| **Detalle de proceso** | Manos en teclado, cuaderno con un diagrama, post-its de un embudo | Notas, carruseles |
| **Pantalla** | Captura limpia (no foto de monitor) con **datos simulados** | Casos de estudio |

### 10.3 Dirección técnica
- **Luz:** natural, lateral suave (ventana); evitar flash directo y luces de colores (RGB, neón).
- **Color:** balance neutro-cálido, saturación natural, contraste medio. Sin filtros de Instagram, sin teal & orange, sin blanco y negro salvo excepción justificada.
- **Fondo:** liso o poco cargado (pared clara, estantería ordenada). Si está desenfocado, que se reconozca un espacio de trabajo real. En el retrato principal, marino-700 liso.
- **Cambiar el fondo de un retrato:** si el sujeto está en blanco y negro sobre un fondo de color saturado, `python3 -I scripts/brand/retrato-fondo.py <entrada> <salida.png> 1F3A5F` separa el sujeto por color (conserva pelo y gafas) y lo compone sobre marino. Luego se exporta con `magick salida.png -quality 82 -define webp:method=6 public/img/retrato.webp`. Revisar siempre los bordes al 100 %.
- **Ropa:** lisa, sin logos ni estampados; tonos neutros o azul marino (armoniza con la paleta).
- **Encuadre del retrato:** cabeza y hombros, ojos en el tercio superior, aire a los lados para recortes 1:1, 4:5 y 16:9.
- **Retoque:** solo corrección de exposición, color y limpieza mínima de piel. Nada de cambiar facciones ni fondos generados con IA.
- **Actualización:** renovar el retrato principal cada 12–18 meses o si cambia mucho la apariencia.

### 10.4 Formatos de salida
- Web: AVIF/WebP vía `next/image`, ≤ 200 KB. Retrato hero ≥ 800 × 1000 px de origen.
- LinkedIn: 400 × 400 (mínimo), recomendado 800 × 800.
- Original archivado en `/brand/fotos/` (fuera de `public/`) con la fecha en el nombre: `2026-10-retrato-principal.jpg`.

### 10.5 Prohibido
Fotos de stock, avatares hiperrealistas de IA con estilos fantásticos/cyberpunk, fotos con terceros sin permiso, pantallas con datos reales, selfies de baja calidad, fotos de eventos con logos de terceros como protagonistas.

### 10.6 Retrato en la web e ilustración

**El hero muestra el retrato principal** (4:5, columna derecha en escritorio, debajo de los botones en el celular), con fondo marino-700 (v4.0). La versión anterior tenía fondo verde lima: fuera de paleta, retirada. Si falta `public/img/retrato.*`, el espacio muestra el placeholder de marca con el monograma (§6.8).

**Ilustración:** `public/brand/avatar-silhouette.svg` (trazo 1,5 px en `marino-700` o `tinta`, sin efectos) queda solo como recurso de piezas gráficas donde no convenga una foto. Nunca reemplaza al retrato en la web.

---

### 10.7 Prompt base de imágenes (v3.2)

Para generar imágenes editoriales coherentes con la marca: **fondos de piezas de redes, fotos de detalle de trabajo y apoyos de slides**. Desde la v4.0, las portadas de casos y notas **no** se generan (§6.8). Se escribe en inglés porque los generadores responden mejor; las variables van entre `{llaves}`.

**Qué se puede generar y qué no**
- ✅ Escenas de trabajo **sin rostros**, objetos, pantallas con interfaz genérica, composiciones abstractas basadas en diagramas.
- ❌ Retratos o avatares de Sebastián (§10.5), personas reconocibles, logos o marcas reales (Wiener, Big Jack, Google…), datos legibles que parezcan reales, estética "IA" (robots, cerebros, hologramas, neón).
- Toda imagen generada se revisa con el checklist de §23 antes de publicarse. **Lección de la v3.2:** el prompt negativo no basta; si la imagen tiene brillo, neón, vidrio o 3D, se descarta aunque "se vea bien".

**Prompt base (se antepone siempre)**

```text
Editorial photograph, quiet and precise. Natural soft daylight from a side window,
neutral-warm white balance, medium contrast, realistic textures. Muted palette:
warm off-white paper (#FAFAF8), deep navy (#1F3A5F, #13233A), soft greys (#E4E2DD, #8A9099),
one small accent of cobalt blue (#2350D9). Generous negative space on the {left|right} third
for text. Clean, uncluttered composition, shallow depth of field, shot on 35mm, f/2.8.
Calm, competent, "built and measured" mood. No people's faces.
```

**Prompt negativo (siempre)**

```text
faces, portraits, people looking at camera, logos, brand names, readable text, fake
dashboards with real-looking data, neon, glow, holograms, robots, brains, circuit boards,
3D render, glassmorphism, lens flare, purple, rainbow gradients, oversaturated colors,
stock photo smiles, clutter, watermark
```

**Variantes (se agregan al prompt base)**

| Uso | Proporción | Añadir al prompt |
|---|---|---|
| Apoyo de slide · trabajo | 16:9 | `top-down view of a desk with a printed flowchart, sticky notes in navy and grey arranged left to right, a ruler aligned under them, a coffee cup at the edge` |
| Apoyo de slide · medición | 16:9 | `close-up of a printed bar chart and a measuring ruler on off-white paper, a hand holding a pencil marking one bar, minimal and precise` |
| Fondo de pieza (LinkedIn, OG) | 4:5 o 1200×630 | `abstract macro texture of off-white paper with a faint dotted grid and a thin ruler line, very subtle, lots of empty space` |
| Detalle de trabajo | 4:5 | `hands typing on a laptop keyboard, seen from the side, out-of-focus monitor with a generic interface, no face visible` |

**Ajustes de salida:** exportar en la proporción del espacio (§6.8), corregir balance hacia neutro-cálido si sale frío, recortar dejando aire para el texto, comprimir a WebP/AVIF ≤ 200 KB y escribir un `alt` que describa la escena, no "imagen generada".

## 11. Movimiento

Principio: **el movimiento explica, no decora.** La marca se mueve como un plano que se dibuja: las líneas se trazan, los nodos aparecen y un pulso recorre el flujo una vez. Nada gira, rebota ni brilla.

### 11.1 Reglas base
- **Duraciones:** 150 ms (hover), 200 ms (menús), 600 ms (entrada del hero), 900 ms (regla del hero). En video y redes: transiciones de 200–400 ms; se prefieren cortes secos.
- **Curva:** `cubic-bezier(.2, 0, 0, 1)` (`--ease-standard`, salida suave). Las animaciones ligadas al scroll son lineales: la curva la pone el scroll.
- **Propiedades permitidas:** `transform`, `opacity` (solo en gráficos), `stroke-dashoffset` y `clip-path`. Nunca `width`, `top`, `filter` ni sombras animadas.
- **Rendimiento:** solo CSS (`@keyframes` y `animation-timeline: view()`/`scroll()`); **0 KB de JavaScript y ninguna librería**. Nunca sobre el elemento que pinta el LCP.
- **Accesibilidad:** con `prefers-reduced-motion: reduce` no hay ninguna animación; sin soporte de `animation-timeline`, todo aparece dibujado y estático. El estado final siempre es el de reposo: si la animación no corre, no falta nada.
- Sin parallax, sin cursores personalizados, sin contadores animados de cifras (una métrica se lee, no se celebra), sin bucles infinitos.

### 11.2 Catálogo (v4.0)

| Movimiento | Qué hace | Dónde | Implementación |
|---|---|---|---|
| **Trazado** | Una línea se dibuja de inicio a fin al entrar en pantalla | Conectores, cotas, regla de una figura | `.fig-draw` + `pathLength="1"` |
| **Aparición** | Fundido + subida de 8 px, escalonado con `--i` | **Solo gráficos**: nodos, motivos, topes de cota. El texto nunca se desvanece (contraste AA) | `.fig-fade` |
| **Pulso** | Un trazo corto de marino recorre cada conector, uno tras otro, una sola vez | Planos y flujos | `.fig-pulse` (trazo 4, `stroke-dasharray: .06 2`) |
| **Regla trazada** | La regla de medición se dibuja bajo el nombre al cargar (250 ms de espera, 900 ms) | Hero | `.rule-draw` (`clip-path`) |
| **Entrada del hero** | Los bloques suben 16 px escalonados (60 ms entre bloques, 600 ms), sin opacidad | Hero | `.hero-in` |
| **Revelado** | Sube 24 px al entrar en pantalla, sin opacidad | Tarjetas y listas bajo el pliegue | `.reveal` |
| **Microinteracciones** | Flechas que avanzan 4 px; portada que se acerca a 1,03 en 400 ms; subrayado del titular; botones 1 px abajo al presionar | Tarjetas y botones | Tailwind + `.media-zoom` |

Una figura (`.fig`) define su línea de tiempo de vista (`view-timeline-name: --fig`) y sus piezas la comparten, así todas avanzan juntas aunque sean elementos SVG. Los rangos: aparición `entry 10 % → 45 %`, trazado `entry 25 % → 55 %` y pulso `cover 28 % → 40 %`, cada uno desplazado por `--i` (12 % o 6 % por paso).

**Comportamiento conocido:** como el pulso va ligado al scroll, si la página se detiene justo en su rango, el trazo corto queda quieto a mitad del conector. Se acepta: se lee como "señal en tránsito".

### 11.3 Movimiento fuera de la web
- **Carrusel o post animado (GIF/MP4 de LinkedIn):** el mismo lenguaje. Abre con la regla trazada (≈ 0,9 s), los nodos aparecen escalonados, un pulso recorre el flujo y cierra en la cota con el resultado. Duración 4–8 s, sin bucle brusco (último cuadro = pieza estática completa).
- **Video corto (si se produce):** pantalla grabada limpia + subtítulos siempre (Inter 600, placa tinta al 85 %, máximo 2 líneas), música opcional sin letra, 30–60 s. Primer cuadro: la regla trazándose sobre marino.

---

# PARTE III · APLICACIONES

## 12. Redes y contenido

### 12.1 Canales y rol de cada uno

| Canal | Rol | Prioridad | Contenido |
|---|---|---|---|
| **Web (Notas)** | Versión canónica, profundidad, SEO | Alta | Artículos de 500–900 palabras (ver `06-CONTENIDO.md` §5) |
| **LinkedIn** | Distribución y red profesional | **Principal** | Posts de texto, carruseles, imagen única |
| **GitHub** | Prueba técnica | Media | README de perfil y de repos públicos |
| **Correo** | Conversión 1 a 1 | Media | Firma de marca, mensajes a reclutadores |
| Instagram / TikTok / X | — | Fuera de alcance hasta 2027 | No abrir sin un objetivo medible |

### 12.2 Pilares de contenido
Los cuatro pilares, su proporción y su cadencia están en `06-CONTENIDO.md` §5.2–§5.3. Cada pilar tiene una **etiqueta** y un **motivo gráfico** fijos (`PillarMotif`): el mismo en la tarjeta de la web, la cabecera de la nota, la imagen OG y la pieza de LinkedIn.

| Pilar | Etiqueta | Motivo (figura abstracta, sin texto) | Elemento dominante en piezas |
|---|---|---|---|
| Construyendo | `CONSTRUYENDO` | Arquitectura de 3 capas apiladas; la del medio (lo que construí) con sello; cota vertical a la derecha | Diagrama de arquitectura o captura enmarcada |
| Automatización para PYMES | `AUTOMATIZACIÓN PARA PYMES` | Disparador (círculo con ›) → 2 pasos → resultado (círculo con ✓ en marino), con pulso | Diagrama de flujo (disparador → resultado) |
| Aprendiendo medición | `APRENDIENDO MEDICIÓN` | 7 barras grises, una en marino con sello, sobre una regla | Gráfico de datos o ficha de métrica |
| Herramientas e IA | `HERRAMIENTAS E IA` | Documento con líneas desordenadas → nodo del modelo → tabla de datos en filas | Antes/después: texto suelto → datos estructurados |

El motivo de "Herramientas e IA" muestra **qué hace** la IA (extraer y estructurar), nunca cerebros, robots ni destellos (§1.3).

### 12.3 Formatos y medidas (LinkedIn y otros)

| Pieza | Medida | Zona segura | Notas |
|---|---|---|---|
| Foto de perfil | 800 × 800 (mín. 400) | Círculo central | Retrato principal (§10.2) |
| Banner de LinkedIn | 1584 × 396 | Dejar libre el tercio inferior izquierdo (foto de perfil) | Fondo marino, frase de posicionamiento, URL |
| Imagen única (post) | 1080 × 1350 (4:5) o 1200 × 1200 | Margen de 80 px | Una idea, un dato |
| Carrusel (PDF) | 1080 × 1350, 5–9 láminas | Margen de 80 px | Ver §12.5 |
| Imagen OG (enlace) | 1200 × 630 | Margen de 64 px; nada importante en los 40 px del borde | Generada con `next/og` |
| Portada de nota | 1200 × 630 | Igual que OG | Misma plantilla que OG |
| GitHub social preview | 1280 × 640 | Margen de 64 px | Por repositorio público |
| Video vertical (si aplica) | 1080 × 1920 | 250 px arriba y abajo libres | Subtítulos obligatorios |

### 12.4 Plantilla de pieza estática (imagen única y OG)

```
┌──────────────────────────────────────────┐
│ ETIQUETA MONO · PILAR          [sj]      │  ← etiqueta gris-500, monograma pequeño
│                                          │
│ Titular en Inter 600,                    │  ← máx. 2–3 líneas, tinta o papel
│ tipo oración                             │
│                                          │
│ −35 %                                    │  ← métrica en mono verde (si aplica)
│ tiempo por pedido · 4 semanas            │  ← contexto en gris-500
│                                          │
│ ┊┊┊┊│┊┊┊┊│┊┊┊┊│┊┊┊┊│                     │  ← separador regla (§6.1)
│ Sebastián Jaque · sjaquer.is-a.dev       │  ← pie mono (JetBrains Mono)
└──────────────────────────────────────────┘
```

- **Fondo (v4.0): marino-900 `#13233A` por defecto**, con retícula de puntos `marino-500` al 25 %. Texto en papel, secundario en `marino-100`, métricas en verde `#3FC08A`, CTA en `azul-300` (§4.4). **Papel** solo para piezas con mucho texto (> 20 palabras en la imagen), capturas de interfaz o gráficos de datos densos, y como lámina de contenido dentro de un carrusel de portada marino.
- Un solo mensaje por pieza. Si necesitas dos, es un carrusel.
- Texto en la imagen ≤ 20 palabras (sin contar el pie).

### 12.5 Carruseles
1. **Portada:** titular-promesa concreta + etiqueta del pilar + número de láminas (`1/7`).
2. **Láminas de contenido:** una idea por lámina; titular arriba, apoyo visual (diagrama, captura, métrica) abajo; numeración `n/N` en mono en la esquina.
3. **Lámina de resultado:** la evidencia (métrica con contexto o aprendizaje).
4. **Cierre:** "Lo que aprendí" en una línea + invitación: *"Detalle técnico en mi web (enlace en comentarios)"*. Nunca "Sígueme para más" como único mensaje.

Misma retícula en todas las láminas: margen 80 px, 4 columnas, titular siempre en la misma posición.

### 12.6 Texto de los posts
- Plantilla y flujo: `06-CONTENIDO.md` §5.4–§5.5.
- Primera línea = gancho concreto (problema o resultado). Nunca "¡Hola, red!".
- 150–250 palabras, párrafos de 1–2 líneas, listas con `→`.
- Enlace con UTM en el primer comentario (`04-TECH-SEO-MEDICION.md` §4.5).
- Cerrar con una pregunta abierta real.

### 12.7 Accesibilidad en redes
- **Texto alternativo** en toda imagen subida a LinkedIn (describe el contenido y el dato, no "imagen de…").
- Contraste ≥ 4,5:1 en todo texto de una pieza (usar §4.4).
- Tamaño mínimo de texto en piezas de 1080 px: 28 px.
- Subtítulos en todo video.
- No poner información solo en la imagen: lo esencial va también en el texto del post.

### 12.8 Interacción
- Responder comentarios en las primeras 24 h, con el mismo tono cercano.
- No debatir en público sobre empleadores ni temas ajenos a los pilares.
- Compartir contenido de otros solo si añades una línea propia de valor.

### 12.9 Especificaciones técnicas para diseño en Figma (Plantillas de Marca)

Para armar, editar y mantener las piezas gráficas en Figma con exactitud profesional, utiliza esta guía de tokens, dimensiones y auto-layout:

#### 12.9.1 Configuración global de Figma (Estilos Locales)
- **Color Styles:**
  - `Papel / Bg Light`: `#FAFAF8`
  - `Blanco / Surface`: `#FFFFFF`
  - `Tinta / Text Primary`: `#14161A`
  - `Gris 500 / Text Secondary`: `#666C76`
  - `Gris 100 / Border`: `#E4E2DD`
  - `Marino 700 / Brand`: `#1F3A5F`
  - `Marino 900 / Brand Deep`: `#13233A`
  - `Azul 600 / Action`: `#2350D9`
  - `Verde 700 / Metric`: `#0B7350`
- **Text Styles:**
  - `Display / Headline`: Inter 600 (SemiBold), 72 px, line-height: 105 %, tracking: -0.02 em.
  - `Title / Slide`: Inter 600, 56 px, line-height: 110 %, tracking: -0.01 em.
  - `Subhead`: Inter 400 (Regular), 36 px, line-height: 130 %.
  - `Body`: Inter 400, 28 px, line-height: 140 %.
  - `Metric Highlight`: JetBrains Mono 600, 120 px, line-height: 100 %.
  - `Mono Tag`: JetBrains Mono 500, 22 px, line-height: 140 %, tracking: 0.06 em, mayúsculas.
  - `Mono Small / Footer`: JetBrains Mono 500, 18 px, line-height: 140 %.

#### 12.9.2 Monograma y Favicon (Componente Figma)
- **Lienzo / Frame:** 64 × 64 px.
- **Corner Radius:** 14 px.
- **Relleno (Fill):** `#1F3A5F` (positivo) o `#FAFAF8` (negativo).
- **Texto central:** `sj` en JetBrains Mono 600, tamaño 26 px, fill `#FAFAF8` (x:14 px, baseline y:38 px).
- **Regla de medición (sub-vector):**
  - 3 líneas verticales con `stroke: 2 px`, `stroke-linecap: round`, fill `#FAFAF8`.
  - Línea 1: (x: 15, y1: 46 a y2: 52) → alto 6 px.
  - Línea 2: (x: 21, y1: 48 a y2: 52) → alto 4 px.
  - Línea 3: (x: 27, y1: 48 a y2: 52) → alto 4 px.
- **Exportación:** SVG para web/código, PNG 512×512 px para manifest.

#### 12.9.3 Banner de LinkedIn (1584 × 396 px)
- **Frame:** 1584 × 396 px. Fill `#13233A` (`marino-900`).
- **Retícula de fondo:** Patrón de puntos de 1 px cada 24 px en `#3F5E86` al 25 % de opacidad.
- **Zona segura izquierda:** Margen libre izquierdo de 380 px y margen inferior de 160 px (espacio reservado para foto de perfil de LinkedIn).
- **Contenido (Auto-Layout Vertical):**
  - Ubicación: x: 420 px, centrado vertical (y: 98 px), ancho: 960 px.
  - Item 1: Etiqueta Mono `DESARROLLO WEB · AUTOMATIZACIÓN DE PROCESOS · INTEGRACIONES` en JetBrains Mono 500, 16 px, color `#D6DFEA`.
  - Item 2: Frase principal `"Construyo herramientas web y automatizaciones que reducen tareas manuales y conectan sistemas con APIs."` en Inter 600, 32 px, color `#FAFAF8`.
  - Item 3: Separador de regla técnica (§6.1) con trazo 1 px en `#3F5E86`.
- **Firma inferior derecha:** `sjaquer.is-a.dev` en JetBrains Mono 500, 16 px, color `#8FA3BF`, fijada a 48 px del borde derecho e inferior.

#### 12.9.4 Plantilla de Post LinkedIn 4:5 (1080 × 1350 px)
- **Frame:** 1080 × 1350 px. Fill `#13233A` (`marino-900`, por defecto) o `#FAFAF8` (`papel`, ver §12.4).
- **Padding Auto-Layout:** 80 px en todos los lados.
- **Estructura en Auto-Layout Vertical (Separación entre bloques: 48 px):**
  1. **Header (Auto-Layout Horizontal, Space-Between):**
     - Izquierda: Etiqueta Mono del Pilar (ej. `AUTOMATIZACIÓN` o `CONSTRUYENDO`) en JetBrains Mono 500, 22 px, tracking 0.06 em, color `gris-500` / `marino-100`.
     - Derecha: Monograma `sj` en tamaño 40 × 40 px.
  2. **Titular (Headline):** Inter 600, 64–72 px, line-height: 105 %, color `tinta` (o `papel` si el fondo es marino). Máx. 2–3 líneas.
  3. **Bloque central (Evidencia / Visual):**
     - Variante Métrica: Métrica destacada en JetBrains Mono 600, 130 px, color `#3FC08A` sobre marino (`#0B7350` sobre papel) + línea de contexto en Inter 400, 28 px, `marino-100` (`gris-500` sobre papel). Si hay valor de partida, cota antes → después (§6.1) sobre la cifra.
     - Variante Motivo: el motivo del pilar (§12.2) a todo el ancho útil, trazo 2 px en `marino-300`, destacado en papel.
     - Variante Diagrama: Contenedor con borde 1.5 px en `gris-100`, con arquitectura o flujo de automatización limpio.
  4. **Footer:**
     - Separador de regla técnica (§6.1) a todo el ancho útil (920 px).
     - Línea de pie (Auto-Layout Horizontal, Space-Between): `Sebastián Jaque` (Inter 600, 24 px) y `sjaquer.is-a.dev` (JetBrains Mono 500, 22 px).

#### 12.9.5 Plantilla de Carrusel LinkedIn (1080 × 1350 px, 5–9 láminas)
- Mismo contenedor base que el post 4:5 con indicador de página `1/N` en la esquina superior derecha (JetBrains Mono 500, 20 px).
- **Lámina 1 (Portada):** fondo marino-900, titular grande, gancho claro, etiqueta del pilar, motivo del pilar en el tercio inferior, indicador `1/7`.
- **Láminas 2 a 5 (Desarrollo):** Titular de paso (Inter 600, 48 px) + diagrama explicativo o ficha de proceso enmarcada.
- **Lámina 6 (Resultado):** Métrica en grande con contexto y método de medición.
- **Lámina 7 (Cierre):** Aprendizaje clave + invitación a ver el código o caso completo en la web.

#### 12.9.6 Plantilla Open Graph / Portada de Blog (1200 × 630 px)
- **Frame:** 1200 × 630 px. Fill `#FAFAF8` o `#13233A`. Padding: 64 px.
- **Header:** Etiqueta de sección + Monograma `sj` 36 px.
- **Cuerpo:** Titular en Inter 600, 52 px (máx. 2 líneas) + descripción en Inter 400, 24 px.
- **Footer:** Separador de regla + `Sebastián Jaque · sjaquer.is-a.dev`.

### 12.10 De la idea a la pieza (flujo de producción)

1. **Pilar:** elegir uno (§12.2). Si la idea no cabe en ninguno, no se publica.
2. **Evidencia:** ¿qué se puede mostrar? Métrica con contexto (regla de §2.3), plano del flujo, captura con datos simulados o aprendizaje. Sin evidencia, la pieza es una reflexión corta de texto, sin imagen.
3. **Nota canónica en la web** (`content/notas/`): toma automáticamente la etiqueta y el motivo del pilar.
4. **Pieza de LinkedIn:** plantilla §12.9.4 (imagen única) o §12.9.5 (carrusel) sobre marino, con al menos dos piezas del kit de firma (§6.9). El texto del post sigue `06-CONTENIDO.md` §5.4.
5. **Checklist §23** antes de publicar.

**Series reconocibles:** la portada de un carrusel siempre tiene la misma estructura (etiqueta arriba a la izquierda, monograma arriba a la derecha, titular, motivo abajo, regla y pie). Quien vio un carrusel debe reconocer el siguiente antes de leerlo.

---

## 13. Aplicaciones de marca

### 13.1 CV (PDF)
- A4, márgenes 18–20 mm, una columna (máx. 2 páginas; ideal 1).
- Nombre en Inter 600 color marino; titulares de sección en etiqueta mono `marino-500` (JetBrains Mono); texto en tinta.
- Enlaces (web, LinkedIn, GitHub) en azul acción y con UTM `utm_source=cv`.
- Sin foto, iconos decorativos, barras de "nivel de habilidad" ni gráficos de dominio de herramientas.
- Contenido generado desde `content/profile.ts`; nombre de archivo `CV-Sebastian-Jaque.pdf`.

### 13.2 Imagen OG por página
Plantilla de §12.4 / §12.9.6 con fondo papel: etiqueta (tipo de página) · título de la página · pie con nombre y URL. Notas y casos usan su propio título; la home, la frase de posicionamiento. **Pendiente (v4.0):** añadir el motivo del pilar a la OG de cada nota y pasar la OG a marino para alinearla con las piezas de redes.

### 13.3 Banner de LinkedIn
Fondo `marino-900` con retícula de puntos (§6.2), frase de posicionamiento en papel (Inter 600), rol en etiqueta mono `marino-100` (JetBrains Mono), URL `sjaquer.is-a.dev` abajo a la derecha según especificación §12.9.3. Nada en el área que cubre la foto de perfil.

### 13.4 Firma de correo

```
Sebastián Jaque
Desarrollo web · Automatización de procesos · Integraciones
sjaquer.is-a.dev · linkedin.com/in/sjaquer
```
Texto plano o HTML mínimo: nombre en 600 tinta, rol en `gris-500`, enlaces en azul acción. Sin imágenes, citas ni banners.

#### 13.4.1 Correos del formulario de contacto

Dos correos, generados por `lib/email/templates.ts` (HTML + texto plano):

| Correo | Para | Contenido |
|---|---|---|
| **Notificación** | Sebastián (`reply_to` = quien escribe) | Etiqueta mono "Nuevo mensaje · motivo", titular "<Nombre> te escribió", tabla nombre/email/motivo, mensaje en bloque `gris-50`, botón primario "Responder a <nombre>". |
| **Confirmación** | Quien escribe | "Gracias, <nombre>", plazo de respuesta (1 a 2 días hábiles), botón primario "Ver proyectos" (UTM `email`/`confirmacion`) + secundario "Descargar CV", firma §13.4. **No repite el mensaje recibido** (así el formulario no sirve para mandar texto arbitrario a terceros). |

Reglas de la adaptación a correo:
- Tablas y estilos en línea; tarjeta blanca de 600 px con borde `gris-100` y radio 16 sobre fondo `papel`; solo modo claro (`color-scheme: light`).
- Tokens en hex (los clientes no leen variables CSS); Inter y JetBrains Mono con alternativas del sistema.
- Cabecera: monograma PNG (`public/brand/email/monograma.png`, 96 px mostrado a 32) + nombre. Pie: regla de medición (§6.1) en PNG (`regla.png`) y motivo del envío + enlace al aviso de privacidad.
- Un solo botón primario por correo (igual que en la web).
- **Remitente:** siempre "Sebastián Jaque <dirección>" (`lib/email/send.ts` antepone el nombre). La dirección sale de un dominio de envío compartido con otros proyectos, así que todo lo visible —nombre, asunto, contenido, firma y enlaces— es de la marca personal y nunca menciona ese dominio.
- Vista previa: `pnpm dev` → `/dev/correos?tipo=notificacion` o `?tipo=confirmacion` (datos simulados; 404 en producción). Para recibirlos de verdad: `/dev/correos?enviar=1` (o `&a=otro@correo.com`) con las claves de Resend en `.env.local`. Copias estáticas en `design/emails/*.html`.

### 13.5 Presentaciones (slides)
- 16:9 (1920 × 1080), margen 96 px, retícula de 12 columnas.
- Portada en marino con wordmark en papel; contenido sobre papel.
- Una idea por slide; titular = conclusión. Máx. 30 palabras por slide.
- Gráficos según §9; diagramas según §8.
- Última slide: contacto + URL; sin "¡Gracias!" a pantalla completa.

### 13.6 GitHub
- **Avatar:** retrato principal (mismo que LinkedIn).
- **README de perfil:** rol canónico + frase de posicionamiento + 3 proyectos con resultado + enlaces. Sin estadísticas animadas, contadores de visitas ni "badges" decorativos en masa (solo los del stack, monocromos).
- **README de repos:** qué problema resuelve (1 línea) → captura enmarcada → stack → cómo ejecutarlo → estado.

### 13.7 Favicon e íconos de app
Monograma (§3.2): `favicon.svg` (con variante oscura vía `prefers-color-scheme`), `favicon.ico` 32 px (versión simplificada), `apple-touch-icon.png` 180 px, `icon-512.png` para el manifest.

### 13.8 Documentos (propuestas a PYMES, informes)
Portada con wordmark + etiqueta mono del tipo de documento; cuerpo en Geist/Inter 10–11 pt; títulos marino; tablas con filas separadas por líneas de 0,5 pt `gris-100`, sin rellenos de color; pie con nombre, página y fecha ISO.

---

# PARTE IV · SISTEMA DE DISEÑO WEB

> Todos los valores existen como **tokens** (variables CSS) y nunca se escriben a mano en los componentes.

## 14. Principios de la web

1. **El contenido es el diseño.** Nada decorativo compite con el texto, las métricas o los CTA.
2. **Una acción principal por pantalla.** El ojo debe saber dónde hacer clic.
3. **Evidencia antes que adjetivos.** Las métricas y las capturas tienen más peso visual que los títulos de marketing.
4. **Rápido es una característica de diseño.** Si un efecto empeora el LCP o el INP, no entra.
5. **Accesible por defecto.** AA en todo; foco siempre visible.
6. **Densidad (v3.1, ajustada en v3.2).** Equilibrio: ni saturado ni vacío. Reglas verificables:
   - **Cada sección tiene un ancla visual**: retrato, cifra, plano o motivo (v4.0: casos → plano del flujo; servicios → flujo mínimo; notas → motivo del pilar). Una sección solo de texto es la excepción, no la regla.
   - **Sin "pastillas" de información** (chips con datos): los datos van como texto con ícono.
   - **Un dato, una vez por pantalla.** Si una cifra está en Resultados, no se repite en tarjetas ni en la experiencia de esa misma pantalla.
   - **Tarjeta de caso: 3 elementos** — etiqueta (tipo · año), título y resultado. El estado, el problema y el stack van en la página del caso.
   - **Una sola banda invertida por página** y como máximo **dos tonos de fondo** además de ella.
   - **Etiquetas de stack solo donde se decide algo** (ficha del caso, CV), nunca como decoración repetida.
   - Ante la duda, quitar.

---

## 15. Color (tokens semánticos)

Claro por defecto. Un solo color de acción. Cada token apunta a un primitivo de §4.2.

### 15.1 Tema claro

| Token | Hex | Primitivo | Uso | Contraste |
|---|---|---|---|---|
| `--color-bg` | `#FAFAF8` | `gris-25` | Fondo de página | — |
| `--color-surface` | `#FFFFFF` | `gris-0` | Tarjetas, inputs, header | — |
| `--color-surface-muted` | `#F3F2EF` | `gris-50` | Bloques secundarios, código en línea | — |
| `--color-border` | `#E4E2DD` | `gris-100` | Bordes decorativos, separadores | Decorativo |
| `--color-border-strong` | `#8A9099` | `gris-400` | Bordes de inputs (componentes UI) | 3,2:1 sobre surface ✅ (≥ 3:1) |
| `--color-ink-900` | `#14161A` | `gris-950` | Títulos y texto principal | 17,3:1 ✅ |
| `--color-ink-700` | `#3D424B` | `gris-700` | Texto de párrafo largo | 9,7:1 ✅ |
| `--color-ink-500` | `#666C76` | `gris-500` | Metadatos, fechas, leyendas | 5,1:1 ✅ |
| `--color-brand` | `#1F3A5F` | `marino-700` | Logo, OG, pie de página | 11,0:1 ✅ |
| `--color-accent-600` | `#2350D9` | `azul-600` | CTA primario, enlaces | 6,2:1 ✅ · texto blanco encima 6,5:1 ✅ |
| `--color-accent-700` | `#1B40B3` | `azul-700` | Hover / activo del CTA | Texto blanco 8,6:1 ✅ |
| `--color-accent-50` | `#EEF2FF` | `azul-50` | Fondo de etiquetas activas, resaltados | Texto accent-700 7,7:1 ✅ |
| `--color-success-700` | `#0B7350` | verde | Métricas de resultado ("−35 %") | 5,6:1 ✅ |
| `--color-warning-700` | `#B54708` | ámbar | `Callout` de advertencia | 5,4:1 sobre surface ✅ |
| `--color-danger-700` | `#B42318` | rojo | Errores | 6,5:1 sobre surface ✅ |
| `--color-focus` | `#2350D9` | `azul-600` | Anillo de foco (2 px + 2 px de separación) | — |

### 15.2 Tema oscuro

| Token | Hex | Contraste (sobre `#0E1013`) |
|---|---|---|
| `--color-bg` | `#0E1013` | — |
| `--color-surface` | `#171A1F` | — |
| `--color-surface-muted` | `#1D2026` | — |
| `--color-border` | `#272B32` | Decorativo |
| `--color-border-strong` | `#6B717B` | 3,5:1 sobre surface ✅ |
| `--color-ink-900` | `#ECEDEF` | 16,3:1 ✅ |
| `--color-ink-700` | `#C9CDD4` | ✅ |
| `--color-ink-500` | `#A7ADB7` | 8,4:1 ✅ |
| `--color-brand` | `#D6DFEA` | ✅ (en oscuro, el logo pasa a `marino-100`) |
| `--color-accent-600` | `#7A9BFF` | 7,2:1 ✅ · texto `#0E1013` encima 7,2:1 ✅ |
| `--color-accent-700` | `#A3BAFF` | ✅ |
| `--color-accent-50` | `#1A2340` | — |
| `--color-success-700` | `#3FC08A` | 8,3:1 ✅ |
| `--color-warning-700` | `#F5B54A` | 10,5:1 ✅ |
| `--color-danger-700` | `#FF8A80` | 7,6:1 sobre surface ✅ |

### 15.3 Reglas de uso
- El azul de acción (`accent-600`) es **solo** para elementos clicables. Nunca para decorar.
- El verde (`success-700`) es **solo** para resultados medidos.
- `--color-brand` (marino) solo en logo, OG y pie; nunca en botones ni enlaces.
- Proporción aproximada por pantalla: 90 % neutros, 8 % acento, 2 % verde.
- Solo degradados tonales (§6.7): `--gradient-hero` y `--gradient-inverse`. Nada de neón ni glassmorphism.

### 15.4 Superficie invertida (`.surface-inverse`, v3.0)

Redefine los tokens dentro de una banda de identidad (§6.7). Igual en tema claro y oscuro.

| Token | Valor | Contraste |
|---|---|---|
| `--color-bg` | `#13233A` | — |
| `--color-surface` | `#182B47` | — |
| `--color-surface-muted` | `#1D3352` | — |
| `--color-border` | `#2A4060` | Decorativo |
| `--color-border-strong` | `#6A82A6` | 3,6:1 sobre surface ✅ |
| `--color-ink-900` | `#FAFAF8` | 15,1:1 ✅ |
| `--color-ink-700` | `#D6DFEA` | 11,7:1 ✅ |
| `--color-ink-500` | `#A9B8CC` | 7,8:1 ✅ |
| `--color-accent-600` | `#A3BAFF` | 8,3:1 ✅ · texto `#13233A` encima 8,3:1 ✅ |
| `--color-accent-700` | `#C5D3FF` | 10,6:1 ✅ |
| `--color-success-700` | `#3FC08A` | 6,9:1 ✅ |

**Fondos tonales:** `--gradient-hero` (radial papel → marino-50; en oscuro `#0E1013` → `#121A26`) y `--gradient-inverse` (marino-900 → `#182B47`).

---

## 16. Tipografía web

**Familias:** Inter (texto) y JetBrains Mono (métricas, etiquetas de stack y código), cargadas con `next/font` (sin peticiones externas, sin saltos de diseño). Reglas generales en §5.

**Escala (base 16 px, ratio ~1,25, fluida con `clamp`):**

| Token | Móvil → Escritorio | Peso | Interlineado | Uso |
|---|---|---|---|---|
| `--text-display` | 40 → 60 px | 600 | 1,05 | Solo el `h1` del hero |
| `--text-h1` | 32 → 44 px | 600 | 1,1 | `h1` de páginas internas |
| `--text-h2` | 26 → 32 px | 600 | 1,2 | Títulos de sección |
| `--text-h3` | 20 → 22 px | 600 | 1,3 | Títulos de tarjeta |
| `--text-lead` | 18 → 20 px | 400 | 1,55 | Párrafo introductorio |
| `--text-body` | 16 → 17 px | 400 | 1,65 | Texto general |
| `--text-small` | 14 px | 400 | 1,5 | Metadatos |
| `--text-label` | 12 px · mono · mayúsculas · tracking 0,06 em | 500 | 1,4 | Etiquetas de sección y stack |
| `--text-metric` | 32 → 40 px · mono | 600 | 1 | Cifras de resultado |

**Reglas**
- Ancho máximo de texto: **68 caracteres** (`max-width: 68ch`).
- Nunca texto de párrafo por debajo de 16 px.
- Máximo 2 pesos por pantalla (400 y 600).
- Títulos en tipo oración.
- `letter-spacing: -0.02em` en `display` y `h1`.

---

## 17. Espaciado y layout

### 17.1 Escala (base 4 px)

| Token | px | Uso típico |
|---|---|---|
| `--space-1` | 4 | Ícono ↔ texto |
| `--space-2` | 8 | Entre etiquetas |
| `--space-3` | 12 | Padding interno de etiquetas |
| `--space-4` | 16 | Padding de botón, gutter móvil |
| `--space-5` | 24 | Padding de tarjeta, entre párrafos |
| `--space-6` | 32 | Entre elementos de un bloque |
| `--space-7` | 48 | Título de sección ↔ contenido |
| `--space-8` | 64 | Entre secciones (móvil) |
| `--space-9` | 96 | Entre secciones (escritorio) |
| `--space-10` | 128 | Solo hero en escritorio |

**Regla de proximidad:** el espacio *dentro* de un grupo siempre es menor que el espacio *entre* grupos. Si dudas, sube un paso de la escala; nunca uses valores fuera de ella. La misma escala (en unidades `u`) se usa en piezas de redes y documentos.

### 17.2 Grid
- Contenedor: `max-width: 1120px`, gutter lateral 16 px (móvil) / 24 px (tablet) / 32 px (escritorio).
- 4 columnas en móvil, 8 en tablet, 12 en escritorio; separación de 24 px.
- Breakpoints: `sm 640` · `md 768` · `lg 1024` · `xl 1280`.
- Diseño **mobile-first**: el layout de 360 px es el principal; los demás son adaptaciones.

### 17.3 Radios, bordes y sombras

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 6 px | Etiquetas, inputs |
| `--radius-md` | 10 px | Botones |
| `--radius-lg` | 16 px | Tarjetas, imágenes de casos |
| `--radius-full` | 999 px | Avatar, chips de estado |
| `--shadow-sm` | `0 1px 2px rgb(20 22 26 / .06)` | Tarjeta en reposo |
| `--shadow-md` | `0 4px 16px rgb(20 22 26 / .08)` | Tarjeta en hover, menú abierto |

Preferir **borde de 1 px** sobre sombras. Una sombra solo cuando algo flota o responde al cursor.

---

## 18. Jerarquía visual

Cada pantalla (y cada pieza de redes) se lee en este orden; si el orden real no coincide, el diseño está mal:

1. **Qué es** — título (`h1` / `h2`).
2. **Por qué importa** — resultado o lead (métrica verde o párrafo `lead`).
3. **Qué hacer** — CTA primario.
4. **Detalle** — texto, stack, metadatos.

Herramientas, en este orden de preferencia: **tamaño → peso → color → espacio → posición**. No usar más de dos a la vez para el mismo elemento.

**Prueba de entrecerrar los ojos:** con la vista borrosa, en cada pantalla deben destacar solo el título y un botón.

---

## 19. Componentes

### 19.1 Botón

**v3.2 · claridad:** el primario lleva sombra `sm` y pasa a `md` en hover; el secundario oscurece su borde en hover. En el hero y en los CTA principales los botones ocupan **todo el ancho en el celular** (`w-full sm:w-auto`) y se apilan; desde `sm` van en fila. Texto siempre verbo + objeto e ícono de dirección o descarga.


| Variante | Fondo | Texto | Borde | Uso |
|---|---|---|---|---|
| `primary` | accent-600 | blanco | — | La acción principal. **Máximo uno visible por pantalla.** |
| `secondary` | surface | ink-900 | border-strong | Acción alternativa junto al primario |
| `ghost` | transparente | accent-600 | — | Acciones terciarias, "Ver todo →" |
| `link` | — | accent-600 subrayado | — | Dentro de párrafos |

**Tamaños:** `sm` 36 px de alto (solo en escritorio, en barras) · `md` 44 px (por defecto) · `lg` 52 px (hero). Padding horizontal: 16 / 20 / 24 px. **Área táctil mínima 44 × 44 px** en todos los casos.

**Estados**

| Estado | Comportamiento |
|---|---|
| Hover | primary → accent-700; secondary → fondo surface-muted. Transición 150 ms. |
| Focus visible | Anillo `--color-focus` 2 px con 2 px de separación. Nunca `outline: none` sin reemplazo. |
| Activo | `transform: translateY(1px)` |
| Deshabilitado | Opacidad 0,5, `cursor: not-allowed`, `aria-disabled` |
| Cargando | Spinner de 16 px + texto ("Enviando…"), ancho fijo para no mover el layout |

**Texto del botón:** verbo + objeto ("Descargar CV", "Ver el caso", "Enviar mensaje"). Nunca "Clic aquí", "Más info" ni "Empezar".

Cada botón lleva `data-cta="<id>"` para la medición (ver `04-TECH-SEO-MEDICION.md`).

### 19.2 Inventario completo

| Componente | Descripción breve | Notas |
|---|---|---|
| `Header` | Wordmark, 4 enlaces, botón "CV" | Sticky, 64 px, borde inferior al hacer scroll. Menú hamburguesa en móvil con trampa de foco. |
| `Footer` | Enlaces, redes, "Actualizado: <fecha>" | Fecha generada en el build; wordmark compacto en `--color-brand` |
| `Container`, `Section` | Ancho y ritmo vertical | `Section` aplica `--space-8/9` |
| `SectionHeader` | Etiqueta mono + `h2` + lead opcional | |
| `Hero` | Antetítulo (rol), nombre con regla trazada, frase canónica, resumen, 2 CTA, disponibilidad y ubicación con ícono, retrato 4:5 | Retrato con `priority`; entrada solo con `transform`; regla `.rule-draw` (§11.2) |
| `ProofStrip` (en la home) | Etiqueta "Resultados", regla y 3 métricas con contexto | Dentro de la banda invertida (§15.4); métrica en `text-metric` verde; cota si hay `before` |
| `CaseFacts` | Ficha del caso (rol, duración, stack, estado) | Lista de definiciones `<dl>` |
| `Metric` | Cifra + etiqueta + base/periodo; con `before`, cota antes → después | Obliga a pasar `context`; verde según `isMeasured()` de `profile.ts` |
| `Tag` | Etiqueta de stack | Mono, borde, sin color de acento |
| `StatusBadge` | "En producción", "Prototipo", "Entregado" | Ícono + texto, nunca solo color |
| `Timeline` | Experiencia | Cargo real, empresa, fechas |
| `PostCard` | Nota del blog | Motivo del pilar, antetítulo (pilar · fecha · lectura), titular, bajada y "Leer la nota". Variantes `card` (motivo arriba) y `row` (al lado, en /notas). `NoteList` añade el filtro por pilar |
| `Prose` | Estilos de texto largo para MDX | 68ch, enlaces subrayados |
| `Callout` | Aprendizaje / advertencia en casos | Variantes `info` (neutro) y `warning` (ámbar) |
| `Figure` (pendiente) | Imagen + leyenda dentro del MDX | `next/image`, AVIF/WebP, marco de §6.5 |
| `FlowDiagram` | Diagrama de flujo o arquitectura en HTML | Reglas de §8; horizontal solo si su contenedor es ancho (container query) |
| `Chart` (pendiente) | Gráfico de datos | Reglas de §9; tabla alternativa accesible |
| `ContactForm` | Formulario de 4 campos | Errores en línea, `aria-live` |
| `ThemeToggle` | Claro / oscuro / sistema | Respeta `prefers-color-scheme` |
| `ConsentBanner` | Consentimiento de medición | Discreto, inferior, dos botones del mismo peso |
| `MediaFrame` (v3.2) | Espacio de imagen con placeholder de marca | Desde la v4.0 solo para el retrato; proporción fija, `next/image` |
| `ReadingProgress` (v3.3) | Barra de lectura en casos y notas | Solo CSS (`animation-timeline: scroll()`); oculta con movimiento reducido |
| `CopyEmail` (v3.3) | Copiar el email en /contacto | Confirmación con `aria-live` |
| `NoteList` · `CaseGrid` | Índices con filtro | Botones `aria-pressed`, conteo anunciado |
| `ConsoleGreeting` (v3.3) | Saludo y API `sj.*` en DevTools | Colores de marca; se ejecuta en `requestIdleCallback` |
| `CaseArticle` (v3.2) | Caso en formato de artículo | Portada `CaseCover` 16:9, antetítulo (tipo · año · lectura), titular, bajada, resultado, "Leer el caso". Variantes `featured`, `row`, `card` |
| `Reveal` (v3.0) | Revelado al hacer scroll | Clase `.reveal`; solo CSS y solo `transform`; nunca en el hero (§11) |
| `CaseCover` (v4.0) | Portada del caso: plano del flujo + cota del resultado | §6.8, §8.3; datos en `cover` de cada caso |
| `MiniFlow` (v4.0) | Flujo de 3 pasos de cada servicio en la home | §8.3; decorativo |
| `PillarMotif` (v4.0) | Motivo gráfico del pilar | §12.2; 8:3 |
| `FigureFrame` · `FigNode` · `FigConnector` · `Dimension` · `Seal` (v4.0) | Primitivas de las figuras | `components/brand/figure.tsx`; animación §11.2 |
| `MeasureRule` | Regla de medición | `draw` la traza al cargar (solo en el hero) |

### 19.3 Inputs
- Alto 44 px, borde `border-strong`, radio `sm`, label siempre visible encima (nunca solo placeholder).
- Error: borde y texto `danger-700`, mensaje bajo el campo, `aria-describedby`.

---

## 20. Imágenes en la web

- **Espacios de imagen:** ver §6.8. Solo el retrato es un archivo (`public/img/retrato.webp`); portadas de casos y notas son SVG.
- **Capturas de casos:** marco de §6.5. Siempre con datos simulados.
- **Imágenes generadas:** nunca como portada; solo fondos de piezas y apoyos, con el prompt base de §10.7.
- **Diagramas:** `FlowDiagram` según §8.
- **Foto personal:** retrato principal de §10 (`public/img/retrato.webp`, 1200 × 1500).
- **Prioridad de carga:** `priority` solo en el retrato (hero y /sobre-mi). Las portadas SVG van en el HTML y no necesitan carga.
- **Prohibido:** renders 3D, ilustraciones genéricas de "IA", fotos de stock.
- Formatos AVIF/WebP vía `next/image`; ninguna imagen sobre 200 KB.

## 21. Accesibilidad (checklist por componente)

- [ ] Contraste verificado (texto 4,5:1; componentes UI 3:1).
- [ ] Usable solo con teclado, orden lógico.
- [ ] Foco visible.
- [ ] Área táctil ≥ 44 × 44 px.
- [ ] Imágenes con `alt` descriptivo (decorativas con `alt=""`).
- [ ] Encabezados en orden, un `h1` por página.
- [ ] Enlaces con texto que tenga sentido fuera de contexto.
- [ ] `lang="es-PE"` en `<html>`.
- [ ] Movimiento desactivado con `prefers-reduced-motion`.

## 22. Tokens en código

**Fuente única: `app/tokens.css`.** Este documento describe los valores (§15–§17); el archivo es el que manda. No se copia aquí para que no se desincronice (la v3 tenía una copia que ya no coincidía).

| Grupo en `tokens.css` | Contenido |
|---|---|
| `@theme` → `--color-*` | Tema claro (§15.1), `brand-50/900`, `chart-*` (§9) |
| `:root[data-theme="dark"]` | Tema oscuro (§15.2) |
| `--gradient-hero` · `--gradient-inverse` | Degradados tonales (§6.7) |
| `.surface-inverse` | Banda de identidad (§15.4) |
| `--font-*` · `--text-*` | Familias y escala fluida (§16) |
| `--spacing-*` · `--container-*` | Espaciado base 4 px, alturas de control, header (§17) |
| `--radius-*` · `--shadow-*` · `--ease-standard` | Radios, sombras y curva de movimiento (§17.3, §11) |

En Tailwind v4, `@theme` con `initial` anula la escala por defecto: **fuera de los tokens no existe ninguna clase** (por ejemplo, `max-w-80` no compila a nada). Las clases de movimiento (`.fig*`, `.rule-draw`, `.reveal`, `.hero-in`) viven en `app/globals.css`.

---

# ANEXOS

## 23. Checklist antes de publicar cualquier pieza

**Mensaje**
- [ ] ¿Se puede defender cada afirmación en una entrevista?
- [ ] Toda métrica tiene qué, cuánto, base, periodo y método.
- [ ] Cargos, fechas y certificaciones idénticos a `content/profile.ts`.
- [ ] Rol y frase de posicionamiento literales (si aparecen).
- [ ] Sin palabras de la lista "Evitar" (§2.4); mecánica de §2.3 aplicada.

**Visual**
- [ ] Solo colores de §4; máximo 3 sin contar neutros; azul solo en lo accionable, verde solo en resultados.
- [ ] Inter / JetBrains Mono (o sustitutos de §5.1); máximo 2 pesos.
- [ ] Contraste ≥ 4,5:1 en texto; tamaño mínimo respetado.
- [ ] Sin degradados (salvo tonales), neón, brillos, vidrio, 3D, stock ni ilustraciones de "IA". **Si la imagen es generada, mirarla al 100 % buscando esto**.
- [ ] Al menos dos piezas del kit de firma (§6.9).
- [ ] Si tiene movimiento: solo trazado, aparición de gráficos o pulso (§11.2); el último cuadro funciona como pieza estática.
- [ ] Logo con área de protección y en combinación permitida.

**Privacidad y accesibilidad**
- [ ] Capturas con datos simulados; ningún dato de Norbert Wiener ni de clientes.
- [ ] Texto alternativo / subtítulos.
- [ ] Enlaces con UTM correctos.

## 24. Inventario de archivos de marca

| Ruta | Contenido | Estado |
|---|---|---|
| `public/brand/logo/wordmark.svg` · `wordmark-dark.svg` · `wordmark-marino.svg` · `wordmark-compacto.svg` | Wordmark principal y compacto | ✅ Generado (`scripts/brand/`) |
| `public/brand/logo/monograma.svg` · `monograma-negativo.svg` · `monograma-mono.svg` · `monograma-simple.svg` | Monograma | ✅ Generado (`scripts/brand/`) |
| `public/brand/avatar-silhouette.svg` | Ilustración vectorial (solo piezas gráficas, §10.6) | ✅ Generado |
| `public/img/retrato.webp` | Retrato del hero y de /sobre-mi (4:5), fondo marino-700 | ✅ v4.0 (38 KB) |
| `scripts/brand/retrato-fondo.py` | Cambia el fondo de color de un retrato por marino (§10.3) | ✅ v4.0 |
| Portadas de los 8 casos | Planos SVG (`CaseCover`); las WebP generadas se retiraron | ✅ v4.0 |
| Motivos de pilar | `components/brand/pillar-motif.tsx` | ✅ v4.0 |
| `public/favicon.svg` · `app/favicon.ico` · `apple-touch-icon.png` · `icon-192.png` · `icon-512.png` | Íconos de app | ✅ Generado |
| `public/brand/email/monograma.png` · `regla.png` | Imágenes de los correos transaccionales (§13.4.1) | ✅ Generado (`render-png.sh`) |
| `lib/email/templates.ts` · `design/emails/*.html` | Correos del formulario y su vista previa | ✅ Implementado |
| Plantillas de diagrama (§8.3) | Componentes en `components/brand/` y `components/ui/case-cover.tsx` | ✅ v4.0 (exportar a SVG para Figma cuando haga falta) |
| OG de notas con motivo del pilar y fondo marino | `lib/og.tsx` | ⬜ Pendiente (§13.2) |
| `design/figma/*.svg` (kit para importar a Figma, `scripts/brand/figma-kit.mjs`) | Logo, color, tipografía, elementos, banner LinkedIn, post 4:5, carrusel, OG, imágenes, artículo de caso 1200 × 630 | ✅ Generado; rol y frase desde `profile.ts` |
| Archivo de Figma en la cuenta | Kit importado y editable | ⬜ Importar (o vía MCP de Figma cuando esté activo) |
| `brand/fotos/` (fuera del repo público si contiene originales pesados) | Originales de retratos y fotos de trabajo | ⬜ Archivar originales |
| Imágenes OG por página | `app/(site)/**/opengraph-image.tsx` con `lib/og.tsx` | ✅ Generadas en el build (rol y frase desde `profile.ts`) |
| `app/tokens.css` | Tokens de §22 | ✅ Implementado (Tailwind v4 `@theme`) |

## 25. Historial de cambios

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0 | 10 oct 2026 | Sistema de diseño web inicial (color, tipografía, espaciado, componentes). |
| 2.0 | 11 oct 2026 | Ampliado a manual de marca personal: plataforma, personalidad, voz y escritura, logotipo, paleta extendida (marino, ámbar, primitivos), elementos gráficos, iconografía, diagramas, gráficos de datos (paleta validada para daltonismo), fotografía, redes, aplicaciones y checklist. Nuevos tokens `--color-brand`, `--color-warning-700` y `--chart-*`. |
| 2.1 | 11 oct 2026 | Sesión de alineación y confirmación (/grill-me): ratificación de jerarquía de color (#1F3A5F identidad, #2350D9 acción, #0B7350 métricas), marca de medición técnica y paleta de gráficos de datos. Cambio oficial de familias tipográficas a Inter + JetBrains Mono. Inclusión de estado transitorio de avatar vectorial en Hero (§10.6). Incorporación de especificaciones técnicas detalladas para diseño en Figma (§12.9). |
| 3.0 | 12 oct 2026 | Profundidad sin perder sobriedad: degradados tonales (§6.7), superficies por niveles, banda invertida marino con tokens propios (§15.4), portadas de caso generadas (§6.8), ficha de perfil en lugar de silueta (§10.6), revelado al hacer scroll solo con CSS y microinteracciones (§11), nuevos componentes en §19.2. |
| 3.1 | 12 oct 2026 | Simplificación: principio de densidad (§14.6), una sola banda invertida por página, tarjeta de caso de 3 elementos, se retiran la ficha de perfil del hero, las portadas generadas y la franja de herramientas por repetir información. |
| 3.2 | 12 oct 2026 | Hero con espacio de retrato y sin pastilla; espacios de imagen con placeholder de marca (§6.8); prompt base de imágenes (§10.7); casos en formato de artículo (`CaseArticle`); entrada del hero solo con transform, zoom de imagen y flechas (§11); botones más claros y a todo el ancho en el celular (§19.1); densidad equilibrada con ancla visual por sección (§14.6). |
| 3.3 | 12 oct 2026 | Revisión de cierre: hero con frase canónica como bajada y retrato real, sin pie decorativo; prioridad de carga por página (§20); inventarios de componentes (§19.2) y archivos (§24) al día; ejemplos de voz y pilares alineados al posicionamiento de desarrollo web + automatización (§2, §12). |
| 3.4 | 12 oct 2026 | Correos del formulario con la línea gráfica (§13.4.1); se restaura `monograma.svg` con su fondo marino (una exportación lo había dejado solo con las letras blancas) y se regeneran los íconos. |
| 4.0 | 13 oct 2026 | Auditoría de diseño y UX sobre producción. **Identidad:** metáfora del plano (§1.1) y kit de firma de 6 piezas (§6.9); regla trazada y cota de métricas (§6.1). **Imágenes:** portadas de casos como planos SVG del flujo real en lugar de renders generados con neón (§6.8); retrato con fondo marino-700 y script para rehacerlo (§10.3, §10.6); el prompt base queda para fondos y apoyos (§10.7). **Movimiento:** catálogo con trazado, aparición solo de gráficos, pulso y regla del hero, 100 % CSS (§11). **Contenido:** pilar "IA en agencias" → "Herramientas e IA"; motivo gráfico por pilar (§12.2); el marino pasa a fondo protagonista en redes (§4.3, §12.4, §12.9); flujo de la idea a la pieza (§12.10). **Coherencia:** reglas de degradados unificadas (§4.5, §15.3), §22 apunta a `tokens.css` en lugar de copiarlo, inventarios al día (§19.2, §24). |
