## Objetivo
- Hacer la clase .plan-btn más persuasiva con un pulso suave en box-shadow.
- Aplicar la misma persuasión al CTA del formulario (botón Enviar) sin ser intrusivo.

## Implementación CSS (global.css)
- Agregar keyframes y clases utilitarias:
  - @keyframes pulseShadow: anima la opacidad y el tamaño del box-shadow.
  - .pulse-soft: aplica un pulso leve y continuo (2.4s ease-out, infinito).
  - Respeta prefers-reduced-motion para desactivar la animación si el usuario lo prefiere.
- Estilo del pulso: sombra tenue con color var(--primary), sin modificar color de texto ni layout.

## Aplicación en la UI
- Home (cards): añadir .plan-btn y .pulse-soft al botón "Solicitar asesor FIAT".
- Página del modelo: añadir .plan-btn y .pulse-soft al botón "Solicitar asesor FIAT".
- Formulario (ContactForm.astro): añadir .pulse-soft al botón .submit-btn para el CTA.

## Detalles de accesibilidad
- prefers-reduced-motion: reduce a none.
- Mantener foco visible y aria-busy en envío.

## Validación
- Verificar que los botones pulsan suavemente en desktop y mobile.
- Confirmar que no hay desplazamiento del layout y que la animación se desactiva con reduced motion.

¿Procedo a aplicar estos cambios en global.css y los archivos de página?