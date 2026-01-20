---
description: Realiza un commit siguiendo los estándares de Conventional Commits definidos en el proyecto.
---

# Workflow de Commit Estándar

Este flujo asegura que todos los mensajes de commit sigan las reglas establecidas en `commit-standards.md`.

## Estándares a Seguir
- **Estructura**: `<type>(<scope>): <summary>`
- **Idioma**: Inglés técnico, claro y profesional.
- **Verbos**: Usar infinitivos (add, fix, improve, refactor, apply).
- **Longitud**: Máximo 72 caracteres.
- **Tipos permitidos**: `feat`, `fix`, `style`, `seo`, `refactor`, `perf`, `docs`, `test`, `chore`, `ci`.

## Pasos

1. **Preparar cambios**
   Agrega los archivos que deseas incluir en el commit.
   ```powershell
   git add .
   ```

2. **Generar mensaje de commit**
   Debes redactar el mensaje siguiendo los estándares. Por ejemplo:
   - `feat(blog): add pagination to post list`
   - `style(tags): update badge colors for better contrast`
   - `seo(meta): update descriptions for homepage`

3. **Ejecutar commit**
   // turbo
   ```powershell
   git commit -m "<tipo>(<scope>): <descripción_en_inglés>"
   ```

4. **Verificar historial**
   ```powershell
   git log -n 5 --oneline
   ```
