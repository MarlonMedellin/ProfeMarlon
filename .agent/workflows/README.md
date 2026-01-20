# Índice de Workflows - ProfeMarlon

Este directorio contiene flujos de trabajo automatizados para tareas comunes del proyecto.

## 🔄 Workflows Disponibles

### 1. setup_project.md (`/setup_project`)
**Descripción**: Inicialización y configuración del proyecto ProfeMarlon

**Cuándo usar**: 
- Primera vez que se clona el repositorio
- Al resetear el proyecto a su estado base
- Para configurar un nuevo entorno de desarrollo

**Incluye**:
- Instalación de Astro
- Creación de estructura de carpetas
- Instalación de dependencias
- Creación de archivos base
- Verificación inicial

**Anotaciones**: Contiene pasos con `// turbo` para auto-ejecución.

---

### 2. commit.md (`/commit`)
**Descripción**: Realiza un commit siguiendo los estándares de Conventional Commits definidos en el proyecto.

**Cuándo usar**:
- Al terminar una tarea o funcionalidad
- Para guardar cambios de forma estandarizada e integral en el repositorio

**Incluye**:
- Preparación de cambios con `git add .`
- Guía para redactar mensajes profesionales en inglés
- Ejecución de commit y verificación del historial

---

### 3. review.md (`/review`)
**Descripción**: Valida, construye y lanza una vista previa del sitio para revisión final

**Cuándo usar**:
- Antes de realizar un deploy
- Para verificar que el build de producción no tenga errores
- Para testear el sitio localmente en modo producción

**Incluye**:
- Limpieza de caché y dist
- Check de tipos con Astro
- Build de producción
- Previsualización local automatizada

---

### 4. deploy.md (`/deploy`)
**Descripción**: Despliegue del proyecto en Cloudflare Pages

**Cuándo usar**:
- Al desplegar por primera vez en Cloudflare Pages
- Como referencia para configuración de CI/CD
- Para verificar configuración de build

**Incluye**:
- Configuración del repositorio GitHub
- Conexión con Cloudflare Pages
- Comandos de build y directorio de salida
- Configuración de dominio personalizado
- Verificación del despliegue

---

## 🚀 Cómo Usar los Workflows

### Desde el chat
Simplemente menciona el comando slash correspondiente:
```
/setup_project
/commit
/review
/deploy
```

### Manualmente
Lee el archivo markdown correspondiente y sigue los pasos en orden.

---

## ➕ Agregar Nuevos Workflows

Para crear un nuevo workflow:

1. Crea un archivo `.md` en este directorio
2. Usa el siguiente formato:

```markdown
---
description: Breve descripción del workflow
---

# Nombre del Workflow

Descripción detallada.

## Pasos

1. Primer paso
   ```bash
   comando-ejemplo
   ```

2. Segundo paso
   ...
```

3. Si un paso NO requiere confirmación del usuario, agrega `// turbo` arriba
4. Si TODO el workflow es seguro, agrega `// turbo-all` al inicio
