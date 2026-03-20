# MyWeb-Astro

[![Astro](https://img.shields.io/badge/Astro-6.0.3-darkviolet?style=for-the-badge&logo=astro&logoColor=white&labelColor=101010)](https://astro.build/) &nbsp;
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.1-dodgerblue?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=101010)](https://tailwindcss.com/) &nbsp;
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript&logoColor=white&labelColor=101010)](https://www.typescriptlang.org/) &nbsp;
[![pnpm](https://img.shields.io/badge/pnpm-8.12-pink?style=for-the-badge&logo=pnpm&logoColor=white&labelColor=101010)](https://pnpm.io/) &nbsp;
[![Vercel](https://img.shields.io/badge/Vercel-static-gray?style=for-the-badge&logo=vercel&logoColor=white&labelColor=101010)](https://vercel.com)

## 🙋‍♂️ Autor

- [Javier Picón](https://github.com/MCPikon)

## ✨ Descripción

Portfolio personal estático construido con **Astro**, **Tailwind CSS** y **TypeScript**. La web está disponible en **español** y **inglés**, usando un sistema de internacionalización basado en JSON. Dispone tanto de tema **claro** como **oscuro**, ligado a la preferencia del usuario.

## 🔍 Vista previa

![MyWeb-Astro Preview 2026-03-12](/public/image.jpeg)

> [!NOTE]
> Puedes visitar el sitio web [aquí](https://javier-picon.vercel.app).

---

## 🚀 Desarrollo local

1. Clona el repositorio y entra al proyecto:

```bash
git clone https://github.com/MCPikon/myweb-astro.git
cd myweb-astro
```

2. Instala las dependencias (usa `pnpm`):

```bash
npm install -g pnpm  # solo si no tienes pnpm instalado
pnpm install
```

3. Inicia el servidor de desarrollo (recomendado):

```bash
pnpm dev
```

4. Abre tu navegador en:

```txt
http://localhost:4321
```

### Comandos útiles

- Construir para producción: `pnpm build`
- Vista previa de producción: `pnpm preview`
- Chequeo estático (Astro): `pnpm check`

---

## 🧱 Estructura importante

- `src/pages/` → rutas del sitio (incluye `/en` para inglés)
- `src/i18n/` → archivos JSON de traducciones y helpers
- `src/components/` → componentes reutilizables
- `src/layouts/` → layouts compartidos
- `public/` → imágenes y activos estáticos

---

## 🛠 Dependencias clave

- `astro` (6.x)
- `tailwindcss` (4.x)
- `typescript` (5.x)
- `astro-seo`, `astro-sitemap`, `astro-robots-txt`, `astro-compress`

---

## ☁️ Despliegue

El proyecto está preparado para desplegarse en **Vercel** usando los ajustes por defecto de Astro.

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia 2.0 de Apache](LICENSE).

---

Iconos extraidos de [Devicon](https://devicon.dev/) y [SVG Repo](https://www.svgrepo.com/).

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/large.svg)](https://astro.build)
