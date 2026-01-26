# Guía de Gestión de Submódulos: Juegos Externos

Esta guía detalla cómo gestionar el repositorio de juegos integrado en `ProfeMarlon`.

## 1. Mapeo de Rutas (Path Mapping)

El repositorio `IntroMatematicas` se encuentra en `public/recursos-externos`.
La estructura de archivos original se mantiene exactamente igual bajo esa ruta.

**Ejemplo:**
- **Ruta original en repo externo:** `docs/actividades/space-shooter/index.html`
- **URL Final en ProfeMarlon:** `https://profemarlon.com/recursos-externos/docs/actividades/space-shooter/index.html`

## 2. Configuración de Cloudflare Pages

Cloudflare Pages soporta submodules automáticamente.
Sin embargo, para asegurar que se descarguen recursivamente, el comando de build debería ser:

```bash
npm install && npm run build
```

Cloudflare detectará el archivo `.gitmodules` y clonará los submódulos antes de iniciar el build.
**Nota:** Asegúrate de que el repositorio `IntroMatematicas` sea público. Si es privado, necesitarás configurar claves de despliegue en Cloudflare (aunque al ser público en GitHub, no es necesario).

## 3. Guía Rápida de Mantenimiento (Cheat Sheet)

### Clonar el Proyecto desde Cero
Si clonas el repo `ProfeMarlon` en una nueva máquina, usa este comando para traer también los juegos:

```bash
git clone --recursive <URL_REPO_PROFEMARLON>
# O si ya clonaste sin --recursive:
git submodule update --init --recursive
```

### Actualizar Juegos (Traer última versión)
Cuando hagas cambios en `IntroMatematicas` y quieras que se reflejen en `ProfeMarlon`:

1.  Entra a la carpeta del submódulo:
    ```bash
    cd public/recursos-externos
    git pull origin main
    cd ../..
    ```
    *O usa el comando automatizado:* `git submodule update --remote`

2.  **IMPORTANTE:** Git detectará que la carpeta `public/recursos-externos` ha cambiado (apunta a un nuevo commit). Debes hacer commit de este cambio en el repo principal:
    ```bash
    git add public/recursos-externos
    git commit -m "chore: actualizar juegos a la última versión"
    git push
    ```

### Eliminar el Submódulo (Si es necesario)
```bash
git submodule deinit -f public/recursos-externos
rm -rf .git/modules/public/recursos-externos
git rm -f public/recursos-externos
```
