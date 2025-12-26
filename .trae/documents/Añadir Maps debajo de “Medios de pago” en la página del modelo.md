## Objetivo
- Incorporar un mapa embebido debajo de la sección “Medios de pago” en `src/pages/model/[modelo].astro` con una ubicación ficticia de la concesionaria.

## Ubicación en el archivo
- Insertar un nuevo bloque `.card` inmediatamente después del bloque existente “Medios de pago”.

## Implementación
- Añadir un `iframe` de Google Maps (embed) con una dirección ficticia, manteniendo el estilo de las tarjetas:
  ```astro
  <div class="card" style="margin-bottom:16px">
    <div class="model">Ubicación de la concesionaria</div>
    <div class="detail">Av. del Libertador 1234, Buenos Aires</div>
    <div style="border-radius:12px;overflow:hidden">
      <iframe
        src="https://www.google.com/maps?q=Av.+del+Libertador+1234,+Buenos+Aires&output=embed"
        width="100%"
        height="300"
        style="border:0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen>
      </iframe>
    </div>
  </div>
  ```
- No se agregan dependencias ni scripts adicionales.

## Validación
- Verificar que el mapa se visualiza en las páginas de modelo (Cronos/Mobi) y mantiene la estética del sitio.
- Confirmar que el layout no se rompe en mobile.

¿Aplico este cambio en `src/pages/model/[modelo].astro`?