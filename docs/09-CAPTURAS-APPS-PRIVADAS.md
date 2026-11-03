# 09 · Plan de capturas y GIFs de apps privadas (v4.2)

> **Para quién:** el **agente de exploración/captura** (navegador). No es para el redactor.
> **Reparto de trabajo:**
> - **Sebastián:** inicia sesión en cada app dentro del navegador de Claude (el agente **nunca** escribe credenciales).
> - **Agente de captura (este documento):** navega, anonimiza en pantalla, captura imágenes y graba GIFs, los guarda con las convenciones de abajo y **entrega la hoja de captura** al redactor.
> - **Redactor (otro agente):** escribe el caso `.mdx`, lo registra en `content/casos/index.ts` y coloca las imágenes. **No** captura.
>
> **Regla de oro:** estos proyectos son **apps de un solo usuario**. Se documentan con capturas **sin publicar el enlace ni el repositorio**, y **sin exponer datos reales de terceros**. Si una captura muestra datos reales sin anonimizar, **no se guarda**.

---

## 0. Estado

| Proyecto | slug | Estado | URL (la provee Sebastián al iniciar sesión) |
|---|---|---|---|
| PrestaFacilito | `prestafacilito` | ✅ **Hecho** (plantilla de referencia) | `prestafacilito.vercel.app` |
| LogINV Agroindustrial | `loginv-agroindustrial` | ⬜ Pendiente | *(Sebastián)* |
| LogiFlow | `logiflow` | ⬜ Pendiente | *(Sebastián)* |
| DataWeave BI | `dataweave-bi` | ⬜ Pendiente | *(Sebastián)* |
| Coralia Delights / Digital Bakery | `coralia-delights` | ⬜ Pendiente | *(Sebastián)* |
| Sistema Obra | `sistema-obra` | ⬜ Pendiente | *(Sebastián; puede ser local)* |

PrestaFacilito ya está publicado como caso (`content/casos/prestafacilito.mdx`) con 4 capturas en `public/img/proyectos/prestafacilito/`. **Úsalo como molde exacto de todo lo que sigue.**

---

## 1. Flujo por proyecto (paso a paso)

Para **cada** app de la tabla:

1. **Abrir** la URL en una pestaña nueva del navegador (Sebastián ya inició sesión, o la inicia ahí mismo).
2. **Inyectar el anonimizador** (sección 3) con `javascript_tool`. Confirmar que quedó instalado (devuelve un número de nombres mapeados, no datos).
3. **Navegar** a la primera pantalla objetivo (sección 5). Dar ~1 s para que el anonimizador corra (tiene un intervalo de 350 ms).
4. **Verificar** con el chequeo de residuales (sección 4) **y** con una captura **sin guardar** (`save_to_disk:false`). Mirar la imagen: ¿algún nombre, teléfono, DNI o comprobante real sin tapar? Si sí → ajustar y repetir; **no guardar**.
5. **Guardar** la captura (`save_to_disk:true`) solo cuando esté limpia. Convención de nombre en sección 6.
6. Repetir 3–5 por cada pantalla objetivo.
7. **Grabar el GIF** del flujo (sección 7).
8. **Entregar la hoja de captura** al redactor (sección 8).

> ⚠️ **Al recargar la página o cambiar de URL completa, el anonimizador se pierde** (es JS inyectado). La navegación interna de una SPA (clics dentro de la app) lo conserva; una recarga o un `navigate` a otra URL **no**. Después de cualquier recarga, **volver a inyectar** (paso 2) antes de capturar.

---

## 2. Reglas de privacidad (obligatorias)

Antes de **guardar** cualquier imagen, debe cumplirse TODO:

- [ ] **Nombres de personas** → reemplazados por ficticios (el script lo hace).
- [ ] **Teléfonos, DNI, correos** → redactados (el script lo hace: 8+ dígitos → ficticio, emails → `demo@ejemplo.com`).
- [ ] **Imágenes subidas** (comprobantes, fotos, documentos) → **difuminadas** (el script pone `blur(10px)`; no se pueden limpiar por texto).
- [ ] **Direcciones, placas, números de cuenta** visibles → si aparecen, ofuscar manualmente (añadir al script un reemplazo del texto exacto) o **no** usar esa pantalla.
- [ ] En cada captura, el redactor pondrá el pie **"datos de referencia, no reales"**; aun así, la imagen no debe contener nada real.
- [ ] **El nombre de usuario de Sebastián** (p. ej. "sjaquer") puede quedar: es el dueño, no un tercero.

Si dudas si un dato es real o de terceros: **no lo guardes** y anótalo en la hoja de captura para que Sebastián decida.

---

## 3. Anonimizador (pegar tal cual en `javascript_tool`)

Script probado en PrestaFacilito. Reemplaza nombres (en texto en negrita oscuro), redacta dígitos largos y correos, difumina imágenes y neutraliza iniciales de avatar. Corre en bucle (observer + intervalo) para resistir los re-render de React.

```js
window.__A = (function(){
  const fake=["Juan Pérez Rojas","María Gómez Díaz","Carlos Ramírez Soto","Lucía Torres Vega","Pedro Díaz Campos","Ana Flores Ruiz","Luis Vargas León","Rosa Chávez Ponce","Jorge Rojas Mora","Elena Castro Ríos","Miguel Soto Reyes","Carmen Ruiz Salas","Víctor Mendoza Luna","Sofía Reyes Núñez","Diego Herrera Paz","Paola Núñez Vera","Raúl Campos Lara","Gloria Ríos Cano","Hugo Salas Peña","Nadia Ponce Ávila","Iván Lara Mejía","Elsa Vega Cueva","Óscar Peña Ruiz","Celia Mora Gil","Tomás Ávila Soto","Rita Cueva Paz","Bruno Mejía Lara","Sara Ponce Vera","Marco Lira Díaz","Nora Salas Rojas"];
  const map=new Map(); let used=0;
  const block=/PRESTAFACILIT|REGISTRAR|PR[EÉ]STAMO|CRONOGRAMA|VOUCHER|REPORTE|CARTERA|CLIENTE|LIQUIDAR|BUENAS|ATRASAD|COBRAR|COBRADO|ESTANCAD|M[IÍ]NIMO|INTER[EÉ]S|CAPITAL|SUBIR|ADJUNTAR|VOLVER|CUENTAS|ALQUILERES|INICIO|TODOS|MA[ÑN]ANA|SEMANA|ADELANTE|TASA|MENSUAL|RESTANTE|PERSONAL|NEGOCIO|PAGO|ABONO|SALDO|OCTUBRE|NOVIEMBRE|DICIEMBRE|ENERO|FEBRERO|MARZO|HISTORIAL|DETALLE|RESUMEN|CUOTA|CUENTA|NUEVO|SCORE|GUARDAR|CANCELAR|SELECCION|MONTO|FECHA|NOMBRE|APODO|TEL[EÉ]FONO|BUSCAR|STOCK|INVENTARIO|ALMAC[EÉ]N|PRODUCTO|VENTA|PEDIDO|TABLERO|DASHBOARD|CAT[AÁ]LOGO|CARRITO|CHECKOUT|DESPACHO|REORDEN|CADUCIDAD/i;
  function fakeFor(r){ r=(r||'').trim(); if(!r) return r; if(!map.has(r)){ map.set(r, fake[used%fake.length]); used++; } return map.get(r); }
  function reg(){ document.querySelectorAll('[class*="text-slate-900"],[class*="text-gray-900"],[class*="text-zinc-900"],[class*="text-neutral-900"]').forEach(el=>{ const c=(el.className||'').toString(); if(!/font-(bold|extrabold|semibold)/.test(c)) return; const t=(el.textContent||'').trim(); if(!t||t.length>48||/\d/.test(t)) return; if(t.split(/\s+/).length>5) return; if(!/[A-Za-zÁÉÍÓÚÑáéíóúñ]{2,}/.test(t)) return; if(block.test(t)) return; fakeFor(t); }); }
  function run(){ try{ reg();
    const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); let n;
    while((n=w.nextNode())){ let t=n.textContent; if(!t||!t.trim()) continue; const o=t;
      for(const [r,f] of map){ if(t.indexOf(r)!==-1) t=t.split(r).join(f); }
      t=t.replace(/\d[\d.,]{6,}\d/g, m=>{ const d=m.replace(/\D/g,''); return d.length>=11?'51 987 654 321':(d.length>=9?'987 654 321':(d.length===8?'70 123 456':m)); });
      t=t.replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g,'demo@ejemplo.com');
      if(t!==o) n.textContent=t; }
    document.querySelectorAll('img').forEach(i=>{ if((i.naturalWidth>160&&i.naturalHeight>160)||/voucher|comprob|yape|plin|storage|supabase|uploads?/i.test((i.currentSrc||i.src||''))){ i.style.filter='blur(10px)'; } });
    document.querySelectorAll('[class*="rounded-full"]').forEach(el=>{ if(el.children.length===0){ const t=(el.textContent||'').trim(); if(/^[A-ZÁÉÍÓÚÑ]{2,3}$/.test(t)) el.textContent='SJ'; } });
  }catch(e){} }
  run(); new MutationObserver(()=>{clearTimeout(window.__At);window.__At=setTimeout(run,100);}).observe(document.body,{childList:true,subtree:true}); setInterval(run,350);
  return {map,run};
})();
'instalado; nombres='+window.__A.map.size;
```

**Notas de uso del script:**
- Si una app usa clases de color distintas para los nombres (no `text-slate/gray/zinc/neutral-900` en negrita), **inspecciona** primero: busca el elemento que contiene un nombre real y mira su `className`; añade ese selector a `reg()`. (En PrestaFacilito los nombres estaban en `.font-bold.text-slate-900` y `.font-extrabold.text-slate-900`.)
- Fuerza una pasada extra tras navegar: `window.__A.run();`.
- Amplía el `block` (regex de términos de UI que NO son nombres) con las etiquetas propias de cada app, para no convertir un rótulo en un nombre ficticio.

---

## 4. Verificación antes de guardar

El `javascript_tool` **bloquea** devolver datos que parezcan PII/cookies. Por eso **devuelve solo conteos/booleanos**, nunca los nombres. Ejemplo:

```js
window.__A.run();
const b=document.body.innerText.toUpperCase();
// Pon aquí apellidos reales que viste en ESTA app para confirmar que ya no aparecen:
const reales=['APELLIDO1','APELLIDO2'];
JSON.stringify({ residual: reales.filter(s=>b.includes(s)).length,
                 longDigits:(document.body.innerText.match(/\d{8,}/g)||[]).length,
                 mapped: window.__A.map.size });
```

- `residual` debe ser **0**.
- `longDigits` debe ser **0** (no quedan teléfonos/DNI de 8+ dígitos sin redactar).
- Además, **mira la captura sin guardar**: la verificación por texto no cubre datos dentro de imágenes (por eso se difuminan) ni formatos raros. El ojo manda.

---

## 5. Pantallas a capturar por proyecto

Mínimo **4–6 capturas** por app, en este orden de prioridad. Si una pantalla no existe, sáltala y anótalo.

**Genérico (toda app):** 1) panel/inicio · 2) la vista de lista o tablero principal · 3) una **vista de detalle** · 4) la **función estrella** del proyecto · 5) un formulario de creación (vacío, sin PII) · 6) reportes/ajustes.

| Proyecto | Pantallas sugeridas (función estrella en **negrita**) |
|---|---|
| **LogINV** (`loginv-agroindustrial`) | Stock por almacén · **alerta de punto de reorden (ROP)** · **semáforo de caducidad** · multialmacén · conteo/escáner de código de barras · vista móvil/PWA |
| **LogiFlow** (`logiflow`) | Cola de llamadas del día · detalle de pedido · **estado de sincronización Shopify↔Kommo** · inventario · formulario de pedido |
| **DataWeave BI** (`dataweave-bi`) | **Tablero de ventas** · inventario · logística/envíos por provincia · **normalización de productos por IA** · filtros por periodo |
| **Coralia Delights** (`coralia-delights`) | Catálogo (tienda) · ficha de producto · **checkout con zona de reparto y horario** · panel de pedidos · inventario/combos/promos |
| **Sistema Obra** (`sistema-obra`) | Inventario de materiales · **registro de donaciones** · turnos de trabajadores · movimiento en tiempo real · exportación a Excel |

Para cada captura anota en una frase **qué demuestra** (eso lo usa el redactor como pie y para el texto).

---

## 6. Dónde y cómo guardar las capturas

- **Formato:** JPG (o PNG). Ancho del viewport **1200–1568 px**. Peso objetivo **< 200 KB** por imagen.
- **Ventana:** usa `resize_window` a ~**1280×860** antes de capturar, para un encuadre consistente.
- **Ruta:** `public/img/proyectos/<slug>/NN-nombre-kebab.jpg`
  - `NN` = orden con dos dígitos (`01`, `02`…).
  - nombre en kebab-case, descriptivo: `01-panel.jpg`, `02-detalle.jpg`, `03-<funcion>.jpg`…
  - Ejemplo real (ya hecho): `public/img/proyectos/prestafacilito/01-panel-cobranzas.jpg`.
- **No** subas imágenes con datos reales ni a otra ruta. Nada de rutas fuera de `public/img/proyectos/<slug>/`.
- Si `save_to_disk` deja la imagen en una carpeta temporal del navegador, **cópiala** a la ruta final con la herramienta de archivos/`cp` y bórrala del temporal.

---

## 7. GIFs de animación del proyecto

Un GIF corto por proyecto mostrando la app **en movimiento** (navegar 2–3 pantallas clave o usar la función estrella), **ya anonimizada**.

- **Grabación (`gif_creator`):** `start_recording` → hacer **6–14 pasos pequeños** (clics/scrolls de navegación interna; cada acción = 1 frame; máx. 50) → `stop_recording` → `export`.
- **Export sin adornos:** `options: { showClickIndicators:false, showActionLabels:false, showProgressBar:false, showWatermark:false, quality:8 }`, `download:true`.
- **Mantén el anonimizador activo** durante toda la grabación (navegación interna lo conserva; si recargas, se pierde → vuelve a inyectar y re-grabar).
- **Dónde guardar:**
  - **Para compartir** (LinkedIn/mensajes): `design/animaciones/<slug>-demo.gif`. Peso libre.
  - **Para incrustar en el caso** (opcional): `public/img/proyectos/<slug>/demo.gif`, **recortado al área de la app** y **< 2 MB** (presupuesto de rendimiento del sitio). Si no se puede bajar de ~2 MB, deja solo la versión para compartir y avísalo en la hoja; el redactor decide.
- Nombra siempre con el `slug`: `logiflow-demo.gif`, etc.

---

## 8. Qué entregar al redactor (hoja de captura)

Al terminar cada proyecto, entrega un bloque así (texto plano, en el mensaje de vuelta):

```
PROYECTO: <slug>
URL usada: <solo para tu registro; NO va al sitio>
Anonimización: OK (residual=0, longDigits=0, imágenes difuminadas) / incidencias: <...>
Capturas (ruta → qué demuestra):
  - public/img/proyectos/<slug>/01-panel.jpg → panel principal con totales del día
  - public/img/proyectos/<slug>/02-detalle.jpg → detalle de X con Y
  - ...
GIF: design/animaciones/<slug>-demo.gif (y/o public/img/proyectos/<slug>/demo.gif) → muestra <flujo>
Notas para el texto: <datos útiles que viste: nº de módulos, features, flujos; sin cifras inventadas>
Pantallas que NO se pudieron capturar: <...>
```

Con eso, **el redactor** escribe `content/casos/<slug>.mdx` (estructura de 06-CONTENIDO §4: Contexto · Problema · Lo que descarté · Solución con las imágenes · Resultado · Qué aprendí), lo registra en `content/casos/index.ts` (como `prestafacilito`: `type`, `cover` de nodos, `result` honesto, `status`, **sin `links`**) y referencia las imágenes con pie *"Captura con datos de referencia, no reales"*.

---

## 9. Checklist de QA por proyecto

- [ ] Anonimizador inyectado y verificado (residual=0, longDigits=0) en **cada** pantalla.
- [ ] Toda imagen subida/real difuminada.
- [ ] Capturas revisadas a ojo, 1280×860, < 200 KB, en `public/img/proyectos/<slug>/`.
- [ ] GIF exportado sin watermark/overlays, guardado en la ruta correcta.
- [ ] **Ningún** enlace a la app ni al repo en ningún lado (ni en imágenes).
- [ ] Hoja de captura entregada al redactor.
- [ ] (Redactor) Caso `.mdx` escrito + registrado + imágenes con pie de "datos de referencia".
