## Cambios solicitados

### 1. Eliminar enlace "Radiología" del menú superior
En `src/components/Navbar.tsx` quitar el item `{ label: "Radiología", href: "#radiologia" }` de la navegación. La especialidad seguirá apareciendo dentro de "Nuestras Especialidades".

### 2. Ajustar descripción de Radiología Dental
En `src/components/SpecialtiesSection.tsx` actualizar el texto a:
> "Radiografías retroalveolares para diagnóstico y detección de patologías del paciente en el momento, sin derivaciones."

### 3. Nueva sección "Nuestro Equipo"
Crear `src/components/TeamSection.tsx` y montarla en `src/pages/Index.tsx` entre `SpecialtiesSection` y `WhyUsSection`. Incluir id `#equipo` y agregar el enlace correspondiente en `Navbar.tsx`.

Tarjetas (avatar con iniciales sobre fondo `bg-primary/10`, nombre, rol):
- Dra. Constanza Moreno — Odontóloga
- Dra. Lorena Salazar — Ortodoncista
- Dannae Rivera — Asistente dental
- Lía Sabach — Asistente dental

Layout: grid `sm:grid-cols-2 lg:grid-cols-4`, cards `rounded-2xl bg-card shadow-card`, animación stagger con framer-motion (mismo patrón que `SpecialtiesSection`).

### 4. Rediseñar "¿Por qué elegirnos?" — centrado y equilibrado
En `src/components/WhyUsSection.tsx`:
- Cambiar grid de 4 columnas a 3 (`sm:grid-cols-1 md:grid-cols-3`), ya que actualmente hay 3 features y queda desbalanceado en 4 columnas.
- Envolver el grid en `max-w-5xl mx-auto` para centralizarlo.
- Aumentar tamaño del ícono (círculo 16x16) y agregar `gap-8` entre tarjetas.
- Cada feature dentro de un contenedor `rounded-2xl bg-card p-8 shadow-card` para dar peso visual uniforme y simetría.

### Notas técnicas
- Sin cambios de tokens de diseño ni dependencias nuevas.
- Mantener tokens semánticos existentes (`bg-card`, `text-primary`, etc.).
- Actualizar `mem://features/navigation-menu` solo si se requiere — propondré edición tras implementar.
