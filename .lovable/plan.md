Plan para ajustar la tarjeta "Grillz y Estética Urbana" en `src/components/SpecialtiesSection.tsx`:

1. **Reducir el ancho de la tarjeta destacada**
   - Cambiar el grid span de `lg:col-span-8 lg:col-start-3` a `lg:col-span-6 lg:col-start-4`.
   - Esto la hace más compacta visualmente (50% del ancho del grid en escritorio), sin perder el carácter de tarjeta destacada.

2. **Mantener la descripción en una sola línea**
   - Conservar la clase `lg:whitespace-nowrap` en la descripción de la tarjeta ancha.
   - Verificar que el texto completo "Diseño de joyería dental personalizada y exclusiva para hacer brillar tu sonrisa con el mejor estilo urbano." no se parta en dos líneas con el nuevo ancho.

3. **Alinear "Próximamente" al final de la descripción**
   - Reorganizar el contenido interno de la tarjeta ancha para que el badge ya no esté posicionado absoluto en la esquina superior derecha de la tarjeta.
   - Usar un contenedor flex dentro de la tarjeta ancha que ubique el icono, título y descripción a la izquierda, y el badge a la derecha.
   - Alinear el badge al final inferior de la descripción (misma línea), de modo que su borde derecho quede alineado con el final de la línea de descripción.

4. **Verificación**
   - Ejecutar `tsc --noEmit` y `vite build` para confirmar que no hay errores de tipo ni de compilación.
   - Capturar screenshot del preview para validar visualmente el ancho reducido, la descripción en una línea y la alineación del badge.