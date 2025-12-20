## Objetivo
- Pausar el autohide del popup de publicidad cuando el usuario mantenga el mouse o el dedo encima.
- Reanudar el temporizador y ocultar al salir.

## Ubicación
- Editar el bloque de script en `src/layouts/BaseLayout.astro:111–122` donde se define `promo`, `show`, `hide` y `hideTimer`.

## Cambios
- Reemplazar la lógica simple de `setTimeout` por un temporizador con pausa y reanudación, conservando el tiempo restante.
- Eventos:
  - Desktop: `mouseenter` → pausar; `mouseleave` → reanudar.
  - Mobile: `touchstart` → pausar; `touchend`/`touchcancel` → reanudar.

## Implementación (fragmento)
```js
const promo = document.getElementById('promo-popup');
if(promo){
  promo.style.opacity = '0';
  promo.style.transform = 'translateY(12px)';
  promo.style.transition = 'opacity 300ms ease, transform 300ms ease';
  const show = ()=>{ promo.style.display = 'block'; requestAnimationFrame(()=>{ promo.style.opacity = '1'; promo.style.transform = 'translateY(0)'; }); };
  const hide = ()=>{ promo.style.opacity = '0'; promo.style.transform = 'translateY(12px)'; setTimeout(()=>{ promo.style.display = 'none'; }, 320); };
  const closeBtn = promo.querySelector('.promo-close');
  let hideTimer; let deadline = 0; let paused = false; let remaining = 0;
  const scheduleHide = (ms)=>{ clearTimeout(hideTimer); deadline = Date.now()+ms; hideTimer = setTimeout(hide, ms); };
  const pause = ()=>{ if(paused) return; paused = true; remaining = Math.max(0, deadline - Date.now()); clearTimeout(hideTimer); };
  const resume = ()=>{ if(!paused) return; paused = false; if(remaining>0){ hideTimer = setTimeout(hide, remaining); } else { hide(); } };
  setTimeout(()=>{ show(); scheduleHide(8000); }, 3000);
  closeBtn?.addEventListener('click', (ev)=>{ ev.preventDefault(); ev.stopPropagation(); clearTimeout(hideTimer); hide(); });
  promo.addEventListener('mouseenter', pause);
  promo.addEventListener('mouseleave', resume);
  promo.addEventListener('touchstart', pause, {passive:true});
  promo.addEventListener('touchend', resume, {passive:true});
  promo.addEventListener('touchcancel', resume, {passive:true});
}
```

## Validación
- Verificar que el popup aparece, se oculta tras 8s.
- Mantener el cursor encima: el hide se pausa.
- Quitar cursor/dedo: se reanuda y oculta tras el tiempo restante.
- Clic en cerrar: oculta inmediatamente.

¿Aplico estos cambios en `BaseLayout.astro`?