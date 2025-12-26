## Objetivo
- Eliminar del formulario los campos "Zona" y "Tipo de Plan" y toda su lógica asociada.

## Cambios en `src/components/ContactForm.astro`
- Quitar los selects:
  - `select[name="planTipo"]` y su lista de opciones.
  - `select[name="provincia"]` (Zona) y su lista de opciones.
- Frontmatter:
  - Eliminar `availablePercents` y `unionPercents` ya que no se usan.
- Script:
  - Eliminar variables y query de `planTipoSelect` y `provinciaSelect`.
  - Eliminar prefill por query `qPlan`.
  - En `submit`:
    - Quitar lectura de `planTipo` y `provincia`.
    - Ajustar `mensaje` para no incluirlos.
    - Ajustar `fetch` para no enviarlos.
    - Quitar reseteo de esos campos tras éxito.

## Cambios en `src/pages/model/[modelo].astro`
- En el script de tabs:
  - Eliminar líneas que buscan `select[name="planTipo"]` y seteaban su valor al cambiar pestaña.
- En `DOMContentLoaded` al abrir "Solicitar asesor FIAT":
  - Eliminar `planTipoSelect` y la lógica que intentaba rellenarlo.

## Validación
- Render del formulario sin los campos mencionados.
- Envío correcto solo con nombre, número, modelo y consulta.
- Modal sigue abriendo y enfocando correctamente en home y modelo.

¿Procedo a aplicar estos cambios?