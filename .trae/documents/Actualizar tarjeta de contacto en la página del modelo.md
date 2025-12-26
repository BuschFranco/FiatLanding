## Objetivo
- Renombrar la tarjeta "Ubicación de la concesionaria" a "Detalles de contacto".
- Agregar número celular y email, además de la dirección y mantener el mapa debajo.

## Cambios en `src/pages/model/[modelo].astro`
- En el bloque de la tarjeta agregada bajo "Medios de pago":
  - Cambiar el título a "Detalles de contacto".
  - Añadir:
    - Celular: +54 9 11 3620-4932
    - Email: ventas@portuauto.com
    - Dirección: Av Rivadavia 2001, Esquina Ayacucho, Congreso, CABA
  - Mantener el `iframe` de Google Maps con la misma ubicación.

## Validación
- Verificar que la tarjeta muestra celular, email, dirección y el mapa.
- Confirmar que el layout se ve bien en desktop y mobile.

¿Aplico estos cambios?