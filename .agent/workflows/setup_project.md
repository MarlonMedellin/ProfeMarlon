---
description: Inicialización y configuración del proyecto ProfeMarlon
---

# Implementación del Proyecto

Este flujo de trabajo configura el proyecto base utilizando Astro, siguiendo las reglas de `TECH_STACK.md` y `EstructuraProyecto.md`.

## 1. Instalación de Astro
// turbo
1.  Inicializar Astro en el directorio actual (modo minimal/vacío o básico según preferencia, aquí asumimos limpieza).
    ```bash
    npm create astro@latest . -- --template minimal --yes
    ```

## 2. Configuración de Estructura de Carpetas
// turbo
1.  Crear la estructura de directorios definida.
    ```bash
    mkdir public
    mkdir -p src/layouts
    mkdir -p src/components
    mkdir -p src/pages
    ```

## 3. Instalación de Dependencias
// turbo
1.  Instalar dependencias necesarias.
    ```bash
    npm install
    ```

## 4. Crear Archivos Base
1.  **Layout Base**: Crear `src/layouts/BaseLayout.astro`.
2.  **Componentes**: Crear `Navbar.astro`, `Footer.astro`, `Hero.astro`, `TelegramButton.astro` en `src/components/`.
3.  **Páginas**: Crear `index.astro`, `sobre-mi.astro`, `cv.astro` en `src/pages/`.
    *(El agente debe generar el contenido inicial de estos archivos basado en CONTENT_GUIDE.md)*

## 5. Activos Públicos (Placeholder)
1.  Asegurarse de que existan los archivos o placeholders en `/public`: `favicon.svg`, `cv-marlon.pdf`, `og-image.png`.

## 6. Verificación
1.  Ejecutar `npm run dev` para validar la instalación.
