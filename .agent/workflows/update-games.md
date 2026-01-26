---
description: Actualiza el submódulo de juegos (IntroMatematicas) a la última versión y realiza un commit.
---

Este workflow actualiza la referencia del submódulo `public/recursos-externos` a la última versión de su rama principal (`main` o `master`).

Pasos:

1.  Actualizar el submódulo:
    ```bash
    git submodule update --remote --merge
    ```

2.  Verificar estado:
    ```bash
    git status
    ```

3.  Realizar commit y push de la actualización (ajusta el mensaje si es necesario):
    // turbo
    ```bash
    git add public/recursos-externos
    git commit -m "chore: actualizar submódulo de juegos a la última versión"
    git push
    ```
