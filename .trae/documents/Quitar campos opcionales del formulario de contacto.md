## Objetivo

* Eliminar del formulario los campos opcionales recientemente añadidos y zona.

* Mantener el resto del formulario y su lógica (modelo, tipo de plan, consulta, nombre, número).

## Alcance

* Quitar los campos:

  * "Anticipo (Opcional)"

  * "Valor cuota (Opcional)"

* Mantener "Tipo de Plan (Opcional)" porque forma parte del flujo (se precompleta desde tabs/enlaces) y aporta contexto.

## Cambios en `src/components/ContactForm.astro`

* Eliminar los bloques de HTML:

  * `<label for="anticipo">…</label>` + `<input id="anticipo" name="anticipo" …>`

  * `<label for="valorCuota">…</label>` + `<input id="valorCuota" name="valorCuota" …>`

* Ajustar la grilla `.form-grid` para que no queden huecos.

* En el script de envío:

  * Quitar obtenciones y uso de `anticipo` y `valorCuota`.

  * Remover esas propiedades del `JSON.stringify(...)` enviado a formsubmit.

  * No incluir líneas de esos campos en el `mensaje` (si se usa para WhatsApp/preview).

## Validación

* Revisar que el formulario renderice sin errores.

* Probar envío: nombre + número requeridos; modelo/plan/consulta/zona opcionales funcionan.

* Confirmar que los enlaces y el modal siguen abriendo correctamente y precompletan modelo/plan.

¿Procedo a aplicar estos cambios en `ContactForm.astro`?
