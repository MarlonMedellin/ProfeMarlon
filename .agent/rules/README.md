# Índice de Reglas - ProfeMarlon

Este directorio contiene las reglas y directrices que el agente IA debe seguir al trabajar en este proyecto.

## 📋 Reglas Disponibles

### 1. AI_CONTEXT.md
**Propósito**: Contexto general y restricciones fundamentales del proyecto.

**Incluye**:
- Identidad del proyecto
- Paradigma de desarrollo (Web First, sin backend, etc.)
- Idioma oficial (100% español)
- Prioridades técnicas
- Hosting permitido
- Integraciones autorizadas

**Cuándo consultar**: SIEMPRE antes de proponer cambios arquitectónicos o tecnológicos.

---

### 2. ARCHITECTURE.md
**Propósito**: Arquitectura técnica del sitio.

**Incluye**:
- Tipo de renderizado (estático, sin SSR)
- Componentes clave (BaseLayout, Navbar, Footer, etc.)
- Estructura de páginas
- Ubicación de activos estáticos
- Configuración SEO por página

**Cuándo consultar**: Al crear nuevos componentes, páginas o modificar la estructura.

---

### 3. CONTENT_GUIDE.md
**Propósito**: Guía de contenido para cada sección del sitio.

**Incluye**:
- Estructura de la página Inicio
- Estructura de Sobre Mí
- Estructura de CV/Experiencia

**Cuándo consultar**: Al generar o modificar contenido de las páginas.

---

### 4. SEO_PWA.md
**Propósito**: Directrices para SEO y configuración PWA.

**Incluye**:
- Elementos SEO básicos por página
- Configuración PWA (manifest, iconos, service worker)
- Sitemap

**Cuándo consultar**: Al optimizar para motores de búsqueda o configurar la PWA.

### 5. COMMIT_STANDARDS.md
**Propósito**: Estándares de Git y Conventional Commits.

**Incluye**:
- Estructura del mensaje de commit
- Tipos de commits permitidos
- Reglas de idioma (inglés técnico)

**Cuándo consultar**: Cada vez que se realice un commit o se propongan cambios.

---

## 🎯 Jerarquía de Prioridad

1. **AI_CONTEXT.md** - Reglas NO negociables
2. **ARCHITECTURE.md** - Estructura técnica a respetar
3. **CONTENT_GUIDE.md** - Guía de contenido
4. **COMMIT_STANDARDS.md** - Reglas de versionado
5. **SEO_PWA.md** - Optimizaciones

Si hay conflicto, prevalece el orden de arriba hacia abajo.
