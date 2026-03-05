# AGENTS.md

This document provides guidance for AI coding agents working with this codebase.

## Project Overview

This is a personal portfolio website built with **Astro 5.18+**, **React 18**, and **Tailwind CSS 3.4**. It features internationalization (i18n) supporting Spanish (default) and English, deployed on Vercel.

## Build/Lint/Test Commands

### Development
```bash
pnpm dev          # Start development server with --host flag
pnpm start        # Start development server (no host flag)
```

### Production Build
```bash
pnpm build        # Build for production
pnpm preview      # Preview production build locally
```

### Testing
**No test framework is currently configured.** There are no test files, test configurations, or testing commands. If you need to run tests, ask the user which testing framework they want to use.

### Linting & Type Checking
**No linting or formatting tools are currently configured.** There are no ESLint, Prettier, or other linting configurations. However:
- TypeScript strict mode is enabled (extends `astro/tsconfigs/strict`)
- Run `pnpm astro check` to perform Astro type checking
- Run `pnpm build` to check for TypeScript errors during build

## Code Style Guidelines

### File Organization
```
src/
├── components/     # Reusable Astro components
├── i18n/          # Internationalization (JSON configs + helpers)
├── layouts/       # Page layout templates
├── pages/         # Route pages (file-based routing)
└── utils/         # Shared utility functions and constants
```

### Naming Conventions

1. **Files and Directories**:
   - Astro components: PascalCase (e.g., `ProjectCard.astro`, `HeroContent.astro`)
   - Pages: lowercase/kebab-case (e.g., `index.astro`, `projects/index.astro`)
   - Utilities: lowercase (e.g., `nav.ts`, `constants.ts`)

2. **Constants**:
   - Export constants in UPPERCASE_SNAKE_CASE:
   ```typescript
   export const INSTAGRAM_URL: string = "https://instagram.com/mcpikon"
   export const GITHUB_URL: string = "https://github.com/MCPikon"
   ```

3. **Components**:
   - Use PascalCase for component names
   - Export components as default or named exports

4. **Functions**:
   - Use camelCase for function names: `getI18N`, `getI18NPath`, `goBack`
   - Prefix i18n-related functions with `getI18N`

### Imports

1. **Order**: Place imports at the top of the file in this order:
   - External packages (React, Astro, etc.)
   - Internal aliases (`@/` prefix)
   - Relative imports (`./`, `../`)

2. **Import Example**:
   ```typescript
   ---
   import { getI18N } from "@/i18n"
   import { Image } from 'astro:assets'
   
   const { currentLocale } = Astro
   const i18n = getI18N({ currentLocale })
   ---
   ```

3. **Path Alias**: Always use `@/` for imports from `src/`:
   ```typescript
   import Component from "@/components/Component.astro"
   import { CONSTANT } from "@/utils/constants"
   ```

### TypeScript

1. **Strict Mode**: TypeScript strict mode is enabled. All code must pass strict type checking.

2. **Type Annotations**:
   - Always annotate function parameters and return types when the type is not obvious
   - Export constants with explicit types: `export const URL: string = "..."`
   - Use interfaces for component props:
   ```typescript
   interface Props {
     NAME: string
     TYPE: string
     IMAGE_PATH: string
   }
   const { NAME: name, TYPE: type, IMAGE_PATH: imagePath } = Astro.props
   ```

3. **Avoid `any`**: Do not use `any` type. Use `unknown` or define proper types.

4. **Undefined vs Null**:
   - Use `undefined` for optional values (not `null`)
   - Use optional chaining and nullish coalescing operators (`?.`, `??`)

### Astro Components

1. **Frontmatter** (code fence section):
   ```astro
   ---
   import Component from "./Component.astro"
   
   interface Props {
     title: string
   }
   
   const { title } = Astro.props
   ---
   ```

2. **Component Props**:
   - Define interfaces for props at the top of frontmatter
   - Destructure props immediately after defining the interface
   - Use `currentLocale` from `Astro` for i18n: `const { currentLocale } = Astro`

3. **Styling**:
   - Use Tailwind CSS classes for styling
   - Use `<style>` tags for component-specific CSS when needed
   - Classes: use utility-first approach with Tailwind
   - Custom CSS: define in `<style>` tags within `.astro` files

4. **Scripts**:
   - Use `<script>` tags for client-side JavaScript
   - Place scripts after the HTML template

### CSS & Styling

1. **Primary Framework**: Tailwind CSS with typography plugin

2. **Custom Colors** (defined in `tailwind.config.cjs`):
   - `primary`: `#14A1F0`
   - `secondary`: `#087ec4`

3. **Animations**: Use Tailwind animation utilities or custom keyframes

4. **Dark Theme**: The site uses a dark background (`rgb(20, 20, 20)`)

### Internationalization (i18n)

1. **Supported Locales**: `es` (Spanish, default) and `en` (English)

2. **Default Locale**: Spanish (`es`) - no URL prefix for default locale

3. **URL Structure**:
   - Spanish (default): `/`, `/projects`
   - English: `/en/`, `/en/projects`

4. **i18n Helper Functions**:
   - `getI18N({ currentLocale })` - Get main translations
   - `getI18NExperience({ currentLocale })` - Get experience translations
   - `getI18NProjects({ currentLocale })` - Get projects translations
   - `getI18NPath(currentLocale, path)` - Get locale-specific path

5. **Translation Files**:
   - Spanish: `src/i18n/es.json`, `experience_es.json`, `projects_es.json`
   - English: `src/i18n/en.json`, `experience_en.json`, `projects_en.json`

### State Management

- Use **nanostores** for reactive state
- Import `atom` from `nanostores`:
  ```typescript
  import { atom } from "nanostores"
  export const isOpen = atom(false)
  ```

### Error Handling

1. **Browser Checks**: Always check for `window` or browser environment:
   ```typescript
   if (typeof window !== "undefined") {
     // Browser-only code
   }
   ```

2. **Optional Chaining**: Use optional chaining for potentially undefined values

3. **No Try-Catch in View Components**: Let errors propagate for easier debugging

### Images & Assets

1. **Image Component**: Use Astro's `Image` component from `astro:assets`:
   ```astro
   import { Image } from 'astro:assets'
   <Image src={imagePath} alt={name} width={600} height={400} loading="eager" />
   ```

2. **Static Assets**: Place in `public/` directory

### Best Practices

1. **DO NOT Add Comments**: This project follows a no-comments policy. Write self-documenting code.

2. **Emojis**: DO NOT use emojis in code unless explicitly requested by the user.

3. **Performance**:
   - Use `loading="eager"` or `loading="lazy"` appropriately
   - Images: specify `width` and `height` attributes
   - Use `content-visibility: auto` for images (already in global styles)

4. **Accessibility**:
   - Add `aria-hidden="true"` for decorative elements
   - Use semantic HTML (`section`, `article`, `nav`, etc.)
   - Add `title` attributes to SVG icons

5. **SEO**:
   - Use `astro-seo` package for meta tags
   - Set canonical URLs and Open Graph data
   - Configure sitemap via `@astrojs/sitemap`

6. **Reveal Animations**: 
   - Use `.reveal` class for fade-up animations
   - Use `.reveal-zoom` for zoom-in animations
   - Add delay classes: `.reveal-delay-1` through `.reveal-delay-5`

## Development Workflow

1. **Package Manager**: This project uses **pnpm**. Always use pnpm commands.

2. **Dependencies**: 
   - Add new dependencies with: `pnpm add <package>`
   - Add dev dependencies with: `pnpm add -D <package>`

3. **Git**: Never commit changes unless explicitly requested by the user.

4. **Before Building**: Run `pnpm build` to check for TypeScript errors.

5. **Code Changes**: After making code changes, run the development server to verify everything works before considering the task complete.