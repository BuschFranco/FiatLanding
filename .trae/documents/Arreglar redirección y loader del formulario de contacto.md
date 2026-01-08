## Diagnóstico
- El envío via fetch responde 200, pero el botón queda en “loading” y no se redirige.
- En éxito se invoca gtag_report_conversion y solo se redirige si su callback corre; si gtag está bloqueado, nunca ocurre la redirección y el loader queda activo. Ver [ContactForm.astro:L88-L101](file:///c:/Programación/fiatProyect/Landing/src/components/ContactForm.astro#L88-L101) y definición de la función en [BaseLayout.astro:L15-L19](file:///c:/Programación/fiatProyect/Landing/src/layouts/BaseLayout.astro#L15-L19).

## Cambios Propuestos
- Desactivar el estado "loading" del botón inmediatamente al recibir res.ok.
- Implementar redirección robusta con fallback:
  - Intentar gtag_report_conversion('/gracias').
  - Programar setTimeout(redirect, 1500) como respaldo; si gtag redirige, no afecta, y si está bloqueado, el fallback ejecuta.
- Mantener el mensaje de éxito visible hasta la navegación.

## Implementación
- En [ContactForm.astro](file:///c:/Programación/fiatProyect/Landing/src/components/ContactForm.astro):
  - Dentro del bloque res.ok, restaurar submitBtn.disabled=false, quitar aria-busy, ocultar spinner y mostrar label.
  - Añadir una función redirect() que haga window.location.assign('/gracias').
  - Invocar gtag_report_conversion('/gracias') si existe y, en todos los casos, setTimeout(redirect, 1500).

## Verificación
- Probar con gtag activo: debe mostrar mensaje y navegar a /gracias.
- Simular gtag bloqueado (DevTools → deshabilitar/filtrar requests a googletagmanager): debe ejecutar el fallback y navegar.
- Confirmar que el botón nunca queda en “loading” tras éxito.

## Entregables
- Patch único en ContactForm.astro aplicando los cambios descritos. ¿Confirmo para ejecutar los cambios?