---
description: Valida, construye y lanza una vista previa del sitio para revisión final
---

# Workflow de Revisión Final (`/review`)

Este flujo de trabajo realiza una limpieza profunda, valida la integridad del sitio y lanza una previsualización de producción.

// turbo-all

## 1. Limpieza y Preparación
1. Eliminar carpetas de caché y builds anteriores para asegurar una revisión limpia.
   ```powershell
   if (Test-Path dist) { rm -r -Force dist }; if (Test-Path .astro) { rm -r -Force .astro }
   ```

## 2. Verificación de Integridad Técnia
1. Ejecutar el chequeo de tipos y diagnóstico de Astro.
   ```bash
   npm run astro check
   ```

2. Verificar existencia de archivos PWA y activos críticos.
   ```powershell
   $files = @("public/favicon.svg", "public/manifest.json", "src/layouts/BaseLayout.astro"); foreach ($f in $files) { if (-not (Test-Path $f)) { throw "Archivo crítico faltante: $f" } }
   ```

## 3. Construcción de Producción (Build)
1. Generar el sitio estático final.
   ```bash
   npm run build
   ```

## 4. Lanzamiento y Vista Previa
1. Iniciar el servidor de vista previa en una terminal en segundo plano.
   ```bash
   npm run preview
   ```
2. Esperar 3 segundos para que el servidor suba y abrir el navegador en la dirección local.
   ```bash
   Start-Process "http://localhost:4321"
   ```

---

**Nota para el Agente**: Este workflow utiliza `// turbo-all`, lo que significa que todos los comandos deben ejecutarse con `SafeToAutoRun: true`.
