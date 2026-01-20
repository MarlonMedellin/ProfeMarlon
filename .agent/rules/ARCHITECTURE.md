# Arquitectura técnica — ProfeMarlon

## Tipo de sitio
Sitio estático generado con Astro.

## Renderizado
- Pre-render estático
- Sin SSR
- Sin servidor dinámico

## Componentes clave
- Layout base (BaseLayout.astro)
- Navbar reutilizable
- Footer reutilizable
- Botón Telegram reutilizable

## Estructura de páginas
- index.astro → Landing principal  
- sobre-mi.astro → Perfil personal  
- cv.astro → Trayectoria profesional  

## Activos estáticos
En /public:

- cv-marlon.pdf  
- favicon  
- iconos PWA  
- og-image.png para redes sociales  

## SEO
Cada página tendrá:
- Título único  
- Meta descripción  
- OpenGraph  
