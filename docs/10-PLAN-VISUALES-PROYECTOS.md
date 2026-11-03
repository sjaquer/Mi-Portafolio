# 10 · Plan de visuales de proyectos: HTML, capturas largas y comparativas

> **Para qué:** que cada proyecto se **vea** en el portafolio (no solo se cuente), incluidas las páginas de diseño web y la evolución de mi trabajo año a año, **sin tener que publicar el enlace de producción** cuando no convenga.
> **Creado:** 3 nov 2026 · **Responsable:** Sebastián Jaque · **Estado:** en recolección.
> **Relación con otros documentos:** las reglas de privacidad son las de `CLAUDE.md` (regla 7) y `07-PROYECTOS.md`; el **anonimizador y el flujo de captura de apps privadas** están en `09-CAPTURAS-APPS-PRIVADAS.md` (no se repiten aquí: se usan). Diseño de cómo se muestran en la web: pendiente de confirmar (§7).

---

## 0. Reglas que no se negocian

1. **Ningún dato real de terceros** en una imagen publicada: estudiantes, egresados, clientes, comensales, deudores, reclutadores. Si una pantalla tiene datos reales y no se pueden anonimizar, **no se usa**. Las apps con sesión pasan por el anonimizador de `09` §3–§4.
2. **El HTML copiado no se publica tal cual.** Se guarda **saneado** (§3.2) y fuera de `public/`. Sirve para conservar la versión y volver a capturarla; lo que se publica son imágenes.
3. **Enlace de producción opcional.** Cada proyecto decide (§5, columna "Enlace"): las capturas reemplazan al enlace cuando la app es privada, de un solo usuario o institucional.
4. **Comparativas honestas.** "Antes vs después" muestra decisiones concretas (qué cambié y por qué). Ninguna cifra sin base y periodo (`CLAUDE.md`, regla 2). Si no lo medí, no lo afirmo: lo describo.
5. **Marcas institucionales** (UWiener) solo en capturas de páginas que hice yo y con el permiso confirmado en `07` §0. Nunca presentarlas como si el portafolio fuera un sitio oficial.

---

## 1. Qué material reunir por página

| Pieza | Para qué sirve | Formato |
|---|---|---|
| **Snapshot HTML** (solo el front) | Conservar cómo era la página ese año y poder volver a capturarla aunque producción cambie o se caiga | `.html` saneado + carpeta de recursos (CSS, imágenes) |
| **Captura larga de escritorio** | Mostrar la página completa, de arriba a abajo | PNG original → WebP para publicar, ancho 1440 px |
| **Captura larga de celular** | Mostrar la versión móvil (parte del trabajo de diseño) | PNG → WebP, ancho 390 px |
| **Capturas de detalle** | Una decisión puntual (menú, formulario, tabla, estado vacío) | WebP, recorte de la zona, ≤ 1440 px |
| **Comparativa antes/después** | Mismo encuadre, dos años distintos | Par de capturas con el **mismo ancho y la misma sección** |
| **GIF / video corto** (opcional) | Un flujo en movimiento | Según `09` §7 |

---

## 2. De dónde sacar las versiones antiguas (2024 / 2025)

Por orden de preferencia:

1. **Historial de despliegues de Vercel/Netlify:** cada despliegue antiguo sigue accesible en su URL única (pestaña *Deployments*). Es la forma más fiel.
2. **Historial de Git:** `git log` → `git checkout <commit-de-esa-fecha>` → correr el proyecto en local y capturarlo. Volver luego a la rama principal.
3. **Wayback Machine** (`web.archive.org/web/2025*/<dominio>`): para sitios públicos indexados. Puede faltar CSS o imágenes: revisar antes de usar.
4. **Capturas que ya tengas** (galería, WhatsApp, LinkedIn): válidas si son legibles; anotar la fecha real.

Anota siempre **la fecha real** de cada versión (mes y año), no la aproximada.

---

## 3. Cómo capturar

### 3.1 Páginas públicas (sin sesión): captura larga automática

Chrome sin interfaz, con viewport real. Ejemplo para escritorio y celular:

```bash
# Escritorio 1440 px y celular 390 px. El alto grande captura la página completa;
# luego `magick -trim` quita el fondo sobrante del final.
URL="https://ejemplo.vercel.app/"; OUT="design/capturas/<slug>/2026"
mkdir -p "$OUT"
google-chrome-stable --headless=new --hide-scrollbars --window-size=1440,12000 \
  --virtual-time-budget=8000 --screenshot="$OUT/full-desktop.png" "$URL"
google-chrome-stable --headless=new --hide-scrollbars --window-size=390,16000 \
  --virtual-time-budget=8000 --screenshot="$OUT/full-mobile.png" "$URL"
magick "$OUT/full-desktop.png" -trim +repage "$OUT/full-desktop.png"
magick "$OUT/full-mobile.png"  -trim +repage "$OUT/full-mobile.png"
```

- `--virtual-time-budget` deja cargar imágenes diferidas y animaciones de entrada.
- Si la página tiene banner de cookies o un popup, la captura lo mostrará: cerrarlo con la herramienta manual (§3.3) o recortarlo.
- Para un snapshot HTML guardado en local, la misma orden con `file:///ruta/al/index.html`.

### 3.2 Snapshot HTML (solo el front) y saneado

1. En Chrome: **Guardar como → "Página web, completa"** (genera `.html` + carpeta `_files`). Alternativa: la extensión *SingleFile* (un solo `.html`).
2. **Sanear antes de guardarlo en el repo:**
   - [ ] Borrar todos los `<script>` (analítica, GTM, Clarity, chat, píxeles de Meta).
   - [ ] Buscar y borrar claves: `apiKey`, `firebaseConfig`, `supabase`, `anon`, `token`, `Bearer`, `sk_`, `pk_`.
   - [ ] Buscar datos personales: correos, teléfonos (`9\d{8}`), DNI (`\d{8}`), nombres reales en listados.
   - [ ] Quitar formularios que envíen a un endpoint real (`action="..."`).
3. Guardar en `design/capturas/<slug>/<año>/html/` (ver §4). **Nunca en `public/`.**
4. Abrirlo en local y comprobar que se ve igual que producción antes de capturarlo.

### 3.3 Páginas con sesión (paneles, plataformas administrativas)

El Chrome sin interfaz no tiene tu sesión. Dos caminos:

- **Tú solo:** DevTools (`F12`) → `Ctrl+Shift+P` → escribir **"full size screenshot"** → Enter. Saca la página completa del viewport actual. **Antes**, activa el anonimizador de `09` §3 pegándolo en la consola.
- **Con el agente de captura:** flujo completo de `09` §1 (inicias sesión tú; el agente anonimiza, verifica y captura).

---

## 4. Nombres y carpetas

```
design/capturas/<slug>/<año>/             ← material de trabajo (NO se publica)
  html/<pagina>.html  html/<pagina>_files/   snapshot saneado
  full-desktop.png  full-mobile.png          capturas largas originales
  notas.md                                   fecha real, URL usada, qué muestra, incidencias

public/img/proyectos/<slug>/              ← solo lo que se publica (WebP)
  <año>-<pagina>-<dispositivo>[-full].webp
```

- `<slug>`: el del caso (`pedidos-big-jack`, `bolsa-de-trabajo-wiener`…) o el nuevo de §6.
- `<pagina>` en kebab-case: `inicio`, `menu`, `checkout`, `panel-difusion`, `log-bot`.
- `<dispositivo>`: `desktop` o `mobile`. Sufijo `-full` si es la página completa.
- Ejemplos: `2026-menu-mobile-full.webp`, `2025-menu-desktop-full.webp`, `2026-panel-difusion-desktop.webp`.
- **Peso para publicar:** capturas de detalle < 200 KB; capturas largas < 400 KB (WebP calidad 80; si una captura larga pasa de eso, dividirla por secciones).

```bash
# PNG original → WebP para publicar (ancho máximo 1440, calidad 80)
magick design/capturas/<slug>/2026/full-desktop.png -resize '1440x>' -quality 80 \
  public/img/proyectos/<slug>/2026-inicio-desktop-full.webp
```

---

## 5. Checklist por proyecto

Marca cada casilla al completarla. "Enlace": si el caso mostrará o no el enlace de producción.

### 5.1 Empleabilidad Wiener · portal del estudiante (`bolsa-de-trabajo-wiener`)
Público: `portaldelestudiante.uwiener.edu.pe/servicio/empleabilidad/` · Enlace: **sí** (ya es público y con permiso).
- [ ] Captura larga escritorio y celular del portal (2026).
- [ ] Capturas de detalle: bolsa laboral, creador de CV con IA, feria virtual (vistas públicas o con datos de prueba).
- [ ] Snapshot HTML saneado del portal.
- [ ] Revisar que no aparezcan datos de alumnos reales en ninguna vista.

### 5.2 Plataforma administrativa de empleabilidad (`bolsa-de-trabajo-wiener` y `difusion-correo-wiener`)
Privada, con sesión · Enlace: **no** · **Anonimizador obligatorio** (`09` §3–§4).
- [ ] Herramienta de **difusión de correos** (segmentación, lista de exclusión, envío por lotes) → va también al caso `difusion-correo-wiener`.
- [ ] **Acceso rápido a la base de estudiantes** → solo con datos ficticios; si no se puede anonimizar del todo, usar un estado vacío o una fila de ejemplo.
- [ ] **Planes / hoja de ruta** de la plataforma (qué viene después).
- [ ] Sebastián envía sus capturas → revisar una por una antes de guardarlas.
- [ ] Verificación `residual=0` y `longDigits=0` en cada pantalla.

### 5.3 Bot de convocatorias externas (`reqlut-bot`)
- [ ] Capturas del **log del bot** (consola o archivo): extracción → estructura → segunda pasada de IA → publicación.
- [ ] Ofuscar correos y teléfonos de reclutadores en el log (los nombres de empresa de ofertas públicas pueden quedar; ante la duda, ofuscar).
- [ ] Una captura de la oferta ya publicada en la bolsa laboral (vista pública).

### 5.4 Big Jack · menú renovado 2026 vs 2025 (`pedidos-big-jack` + artículo nuevo §6.1)
`bigjack.vercel.app` · Enlace: **decidir**.
- [ ] Captura larga escritorio y celular del **menú 2026**.
- [ ] Recuperar la versión **2025** (Vercel *Deployments* o Git, §2) y capturarla con el **mismo ancho**.
- [ ] Pares de detalle con el mismo encuadre: portada, categorías, ficha de producto, carrito/pedido.
- [ ] Snapshot HTML saneado de ambas versiones.
- [ ] Anotar fechas reales de cada versión.

### 5.5 TaskMe 2024 vs 2026 (artículo nuevo §6.2)
Pasó de herramienta para varias personas a herramienta personal · Enlace: **decidir**.
- [ ] Captura **completa** 2026 (escritorio y celular).
- [ ] Captura **completa** 2024 (Git o despliegue antiguo, §2).
- [ ] Pares de detalle: tablero, creación de tarea, notas → tareas con IA, sincronización con Calendar.
- [ ] Anotar qué funciones de equipo se quitaron y por qué (eso es el centro del artículo).
- [ ] Revisar que las tareas visibles no tengan información personal o de terceros.

### 5.6 Portafolio 2024 · 2025 · 2026 (`este-portafolio` + artículo nuevo §6.3)
- [ ] Captura larga escritorio y celular de cada versión (2024, 2025, 2026 actual).
- [ ] Fuentes: Git de cada repo, despliegues antiguos o Wayback Machine (§2).
- [ ] Mismo ancho y mismo orden de secciones para que la comparación sea justa.

### 5.7 Plataforma de préstamos 2025 vs 2026 (`prestafacilito` + artículo nuevo §6.4)
Privada · Enlace: **no** · Anonimizador obligatorio.
- [ ] Sebastián envía capturas 2025 y 2026.
- [ ] Tabla de funciones: qué tenía 2025, qué tiene 2026 (cronograma, mora, OCR, registro de acciones…).
- [ ] Pares de detalle de las pantallas que más cambiaron.
- [ ] Verificación de anonimización (montos y nombres de deudores ficticios, comprobantes difuminados).

### 5.8 Casos publicados que hoy no tienen ninguna imagen
- [ ] `formularios-nps-wiener` — portal de formularios y tablero (datos ficticios).
- [ ] `feria-virtual-wiener` — `ferialaboralonline.uwiener.edu.pe`, captura larga escritorio y celular.
- [ ] `integracion-shopify-crm-dearel` — flujo de la integración (sin datos de clientes). Sigue en borrador hasta tener la base del −30 %.
- [ ] `este-portafolio` — cubierto en §5.6.
- [ ] Apps privadas de `09` §0 (LogINV, LogiFlow, DataWeave BI, Coralia Delights, Sistema Obra) — flujo de `09`.

---

## 6. Artículos nuevos propuestos

Cada uno puede ser un caso completo o una nota; se decide caso por caso (§8). Estructura para comparativas: **Contexto · Cómo era (año A) · Qué cambié y por qué · Cómo quedó (año B) · Qué aprendí**. Las decisiones van con su par de capturas lado a lado.

| # | Slug propuesto | Tema | Ángulo (lo que demuestra) | Material de §5 |
|---|---|---|---|---|
| 6.1 | `big-jack-menu-2025-vs-2026` | Menú digital de Big Jack, antes y después | Cómo evolucionó mi diseño web: jerarquía, legibilidad en el celular, flujo de pedido | §5.4 |
| 6.2 | `taskme-de-equipo-a-personal` | TaskMe 2024 → 2026 | Madurez de producto: quitar funciones para servir mejor a un solo usuario; UX más simple | §5.5 |
| 6.3 | `portafolio-2024-2025-2026` | Tres versiones de mi portafolio | De vitrina de proyectos a caso medido; qué aprendí de diseño, rendimiento y contenido | §5.6 |
| 6.4 | `prestafacilito-2025-vs-2026` | La plataforma de préstamos, versión a versión | Qué funciones agregué, cuáles quité y qué fricción eliminó cada cambio | §5.7 |
| 6.5 | `plataforma-admin-empleabilidad` | El panel administrativo de Empleabilidad | Herramientas internas: difusión, acceso rápido a la base, planes (puede ser sección del caso `bolsa-de-trabajo-wiener`) | §5.2 |

Para cada artículo nuevo:
- [ ] Confirmar formato (caso o nota) y si muestra enlace.
- [ ] Reunir el material de §5 completo **antes** de escribir.
- [ ] Escribir con la voz de `06-CONTENIDO.md` y registrar en `content/casos/index.ts` o `content/notas/index.ts`.
- [ ] Pie en cada captura de app privada: *"Captura con datos de referencia, no reales"*.

---

## 7. Qué hay que construir en la web para mostrarlo (pendiente de confirmar diseño)

Hoy el sitio muestra imágenes sueltas. Para capturas largas y comparativas harán falta piezas nuevas, **solo CSS/HTML, sin apps interactivas** (decisión del 3 nov 2026):

- [ ] **Visor de captura larga:** marco de navegador (barra con la URL de referencia o el nombre del proyecto) con alto fijo y desplazamiento interno; versión de escritorio y de celular lado a lado en pantallas grandes, apiladas en el celular.
- [ ] **Comparativa antes/después:** dos columnas con el año como cota (`2025 ├──┤ 2026`), mismo encuadre; en el celular, una debajo de la otra con la etiqueta del año.
- [ ] **Galería del caso:** capturas de detalle con pie que explique la decisión.
- [ ] Imágenes con `next/image`, ancho fijo y proporción declarada (CLS 0), carga diferida bajo el pliegue.

Antes de construirlas: proponer el diseño y confirmarlo con Sebastián.

---

## 8. Decisiones pendientes (para no olvidarlas)

- [ ] ¿Las comparativas (§6.1–6.4) van como **casos** en `/proyectos` o como **notas**? (Propuesta: casos si hay resultado medible; notas si el foco es el aprendizaje.)
- [ ] ¿Se muestra el enlace de `bigjack.vercel.app` y de TaskMe?
- [ ] ¿La plataforma administrativa (§6.5) es un caso propio o una sección de `bolsa-de-trabajo-wiener`?
- [ ] ¿Se versiona en Git el material de `design/capturas/`? (Recomendado: sí para PNG/notas, **no** para HTML sin sanear; añadir `design/capturas/**/raw/` a `.gitignore` si se guarda algo sin sanear.)

---

## 9. Checklist de QA antes de publicar cualquier visual

- [ ] Ningún dato real de terceros (revisado a ojo, no solo por script).
- [ ] HTML saneado y fuera de `public/`; sin scripts ni claves.
- [ ] Mismo ancho y encuadre en cada par antes/después; año real anotado.
- [ ] WebP dentro del peso (§4) y con `alt` que describa lo que se ve.
- [ ] Enlace de producción solo si se decidió mostrarlo.
- [ ] Lighthouse ≥ 95 en la página donde se agregan (`CLAUDE.md`).
