## Objetivo
- Al hacer clic en “Solicitar asesor FIAT”, “Contacto” o “Asesoría”, abrir el formulario de contacto como un popup modal superpuesto, en lugar de scrollear.

## Cambios principales
- Index y Modelo: insertar un contenedor modal con el `ContactForm` embebido.
- BaseLayout: agregar lógica JS global para abrir/cerrar el modal y eliminar el scroll hacia `#contacto`.
- Accesibilidad y UX: backdrop, botón cerrar, cierre con Esc y clic fuera, bloqueo de scroll del body.

## Implementación
1) Index (`src/pages/index.astro`)
- Añadir al final de la página (antes de cerrar el layout) un contenedor:
  - `<div id="contact-modal" role="dialog" aria-modal="true" style="position:fixed;inset:0;display:none;z-index:1200">`
  - `<div class="modal-backdrop">` semi-transparente
  - `<div class="modal-content">` tarjeta centrada con botón cerrar y `<ContactForm />` dentro
- Estilos inline mínimos para backdrop y el contenedor centrado.

2) Modelo (`src/pages/model/[modelo].astro`)
- Igual que en Home, con `<ContactForm defaultModel={data.modelo} availablePercents={...} />` dentro del modal.

3) BaseLayout (`src/layouts/BaseLayout.astro`)
- En el script global:
  - Crear funciones `openContactModal(prefill)` y `closeContactModal()`:
    - `open`: mostrar `#contact-modal`, poner `document.body.style.overflow='hidden'`, enfocar el primer input.
    - realizar prefill opcional: modelo (si viene de botón con `data-model`), plan desde tab activa (en modelo), y mensaje.
  - Eliminar la lógica de `scrollIntoView` para enlaces `a[href="#contacto"]`.
  - Enlazar clics:
    - Home: `.cards .actions .btn[data-model]` → `openContactModal({ model })`
    - Header: `a[href="#contacto"]` → `openContactModal()`
    - Hero: botón “Asesoría” → `openContactModal()`
  - Cerrar modal: botón cerrar, ESC, y clic en backdrop.

## Accesibilidad y detalles
- `role="dialog"` y `aria-modal="true"` en el contenedor.
- Mover el foco al input de nombre al abrir.
- Restaurar el scroll del body al cerrar.

## Validación
- Probar en Home y Modelo que al hacer clic en los botones indicados se abre el modal.
- Verificar prefill (modelo/plan) en la página del modelo.
- Confirmar que ESC y clic fuera cierran el modal y se restaura el scroll.

¿Procedo con estos cambios en Index, Modelo y BaseLayout?