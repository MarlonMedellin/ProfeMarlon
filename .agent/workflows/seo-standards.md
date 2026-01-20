---
description: Estándares de SEO y Metadatos Sociales para nuevas páginas
---
# Estándares de SEO y Metadatos Sociales

Para mantener una presencia web profesional y consistente, TODAS las páginas nuevas deben implementar correctamente los metadatos de SEO y Social Media utilizando el componente `<SocialMeta />` integrado indirectamente a través de `BaseLayout`.

## Reglas de Implementación

1. **Uso Obligatorio de BaseLayout**:
   Todas las páginas `.astro` deben envolver su contenido en el componente `BaseLayout`.

2. **Props Requeridas**:
   Al usar `BaseLayout`, debes pasar las siguientes propiedades:
   - `title`: Título único de la página (e.g., "Proyectos | Profe Marlon").
   - `description`: Resumen atractivo de 150-160 caracteres.
   - `image`: (Opcional pero recomendado) Ruta absoluta o relativa a la imagen destacada de esa página (e.g., `/images/proyecto-x.jpg`). Si no se provee, se usará `/og-image.png` por defecto.

## Ejemplo de Código

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout 
    title="Título de la Página | Profe Marlon" 
    description="Descripción corta y persuasiva del contenido de esta página para SEO y redes sociales."
    image="/images/mi-imagen-destacada.jpg"
>
    <!-- Contenido de la página -->
</BaseLayout>
```

## Verificación

Antes de terminar, verifica:
- [ ] El título es único y descriptivo.
- [ ] La descripción no supera los 160 caracteres y contiene palabras clave relevantes.
- [ ] Si hay una imagen específica, asegúrate de que tiene buena resolución (idealmente 1200x630px) y pesa menos de 200KB.
