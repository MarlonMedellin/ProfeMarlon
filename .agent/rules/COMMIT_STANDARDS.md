# Estándares de Commit

Todas las contribuciones al código deben seguir estas reglas estrictas para mantener un historial limpio y profesional.

## 📋 Reglas de Conventional Commits

1. **Estructura**: `<type>(<scope>): <summary>`
2. **Idioma**: Inglés técnico, claro y profesional.
3. **Verbos**: Usar infinitivos (add, fix, improve, refactor, apply).
4. **Resumen (Summary)**: 
   - Máximo 72 caracteres.
   - Explicar QUÉ cambia y POR QUÉ.
5. **Restricciones**:
   - NO incluir versiones (beta, v1).
   - NO usar lenguaje informal (update, changes, fix stuff).
   - NO usar español en el mensaje del commit (aunque el código y contenido sean en español).

## 🛠️ Tipos Permitidos

- `feat`: Nueva funcionalidad.
- `fix`: Corrección de errores.
- `style`: Cambios visuales/CSS (diseño, layout).
- `seo`: Mejoras de SEO.
- `refactor`: Refactorización de código existente.
- `perf`: Mejoras de rendimiento.
- `docs`: Documentación.
- `test`: Pruebas.
- `chore`: Tareas de mantenimiento.
- `ci`: Configuración de integración continua.

## 📝 Cuándo Consultar
- Al realizar un commit utilizando el workflow `/commit`.
- Al revisar el historial de git.
- Antes de proponer una tarea que implique múltiples cambios (para decidir el tipo de commit prioritario).
