## Objetivo
- Centrar el formulario modal en desktop.
- Evitar el scroll horizontal en la versión móvil (overflow de la página).

## Cambios propuestos
- Modal centrado:
  - En `index.astro` y `model/[modelo].astro`, cuando se abre el modal, usar `display: 'flex'` en el contenedor `#contact-modal` para aplicar `align-items` y `justify-content`.
  - En `BaseLayout.astro`, al hacer clic en “Contacto”, abrir el modal con `display: 'flex'` también.
- Scroll horizontal en móvil:
  - En `src/styles/global.css`, añadir `overflow-x: hidden` a `html, body` para prevenir desbordes horizontales de la página.
  - Mantener `max-width: 100%` y `max-height: calc(100vh - 32px)` en `.modal-content` (ya aplicado) con `overflow: auto` para que el contenido se desplace dentro del modal.

## Validación
- Probar en desktop que el modal aparece centrado.
- Probar en móvil que la página no se puede scrollear horizontalmente y que el contenido del modal se desplaza correctamente.

¿Aplico estos cambios ahora?