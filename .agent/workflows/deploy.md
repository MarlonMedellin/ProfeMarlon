---
description: Despliegue del proyecto en Cloudflare Pages
---

# Estrategia de Despliegue

Este flujo de trabajo describe los pasos para desplegar el sitio en Cloudflare Pages, basado en el archivo `DEPLOYMENT.md` original.

1.  **Repositorio**: Asegurarse de que el código esté en el repositorio `ProfeMarlon` en GitHub.
2.  **Conexión**: Conectar el repositorio a Cloudflare Pages.
3.  **Configuración de Build**:
    -   **Comando de Build**: `npm run build`
    -   **Directorio de Salida (Output Directory)**: `dist/`
4.  **Dominio**:
    -   Asignar el dominio personalizado: `profemarlon.com`
5.  **Verificación**:
    -   Confirmar que el sitio carga correctamente en la URL asignada.
