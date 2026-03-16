# AGENTS.md

Guidance for AI coding agents collaborating on this Astro + Tailwind portfolio.

## Context Snapshot
1. Astro 6.x, Tailwind CSS 4.x, TypeScript 5.9, Vercel deploy target.
2. No framework integrations (no React/Svelte/Vue) and no AOS; animations are custom.
3. Source root `src/`, static files in `public/`, environment uses pnpm.
4. Supported locales: Spanish (`/`) and English (`/en`).
5. Project style forbids emojis and favors self-documenting code without inline comments.

## Directory Compass
- `src/pages/`: Astro routes; default locale files at root, translated routes nested.
- `src/components/`: Presentation pieces; keep components small and locale-aware.
- `src/layouts/`: Page shells shared by routes.
- `src/i18n/`: JSON dictionaries and helper utilities.
- `src/utils/`: Shared helpers/constants; prefer pure functions.
- `src/styles/`: Global Tailwind theme and tokens.
- `public/`: Static imagery, favicons, downloads.
- `astro.config.mjs`: Tooling, fonts, i18n routing, integrations.

## Package & Tooling Rules
- Use `pnpm` for everything (`pnpm install`, `pnpm add`, `pnpm remove`).
- Lockfiles must stay in sync; never switch to npm or yarn.
- Node 20 LTS baseline; if versions diverge, note it in PR description.
- Keep dependencies minimal; prefer Astro-native features.
- Tailwind v4 is configured via `src/styles/global.css` using `@theme` tokens and `@tailwindcss/vite`.

## Build, Lint, Test Commands
- Dev server (preferred) -> `pnpm dev --host` to expose on LAN.
- Alternate dev script -> `pnpm start` (no host flag).
- Production build -> `pnpm build`.
- Production preview -> `pnpm preview`.
- Astro/TypeScript check -> `pnpm astro check`.
- There is no configured lint runner (no ESLint/Prettier configs).
- There is no automated test runner yet; align with the user before adding one.

## Verification Flow
- Before pushing significant changes, run `pnpm build`; it surfaces TS + Astro template errors.
- For i18n modifications, verify both `/` and `/en` locally.
- After adding new assets, ensure `pnpm preview` displays them without console errors.
- For client-side scripts, test in at least one Chromium-based browser.

## Git Hygiene
- Never commit unless explicitly asked; keep worktree clean.
- Respect existing untracked files; do not delete user-local data.
- Favor small, reviewable diffs grouped by purpose.
- Reference instructions in this document in PR/commit bodies when relevant.

## Import Strategy
- Import order: Node/third-party -> Astro virtual modules (`astro:assets`, `astro:transitions`) -> project aliases (`@/...`) -> relative paths.
- Use the `@/` alias for anything under `src/`.
- Avoid default exports in utilities; named exports clarify tree-shaking.
- Keep import lists alphabetized within each block.
- Side-effect imports (`import "./style.css"`) must stay below value imports.

## Formatting & Structure
- The repo currently lacks a formatter; format code manually and emulate existing spacing.
- Two spaces inside Astro frontmatter fences around blank lines; single blank line between logic clusters.
- Keep HTML attributes on new lines only when line length exceeds ~100 characters.
- JSX/TSX props: multi-line when more than three props (rare; no React islands).
- Use single quotes in Tailwind class strings when editing `.astro` files; double quotes in `.ts` modules.
- Trailing commas for multi-line arrays/objects; no semicolons in `.astro` frontmatter, but keep them in `.ts`.

## Naming Conventions
- Files: Astro components PascalCase, utilities camelCase or kebab when default exports not expected.
- Constants uppercase snake case (e.g., `export const INSTAGRAM_URL`); append type annotations when not obvious.
- Functions camelCase; asynchronous helpers start with verbs (`fetchProjects`).
- CSS classes follow Tailwind utilities; custom classes should be kebab-case.

## TypeScript Guidance
- Repo extends `astro/tsconfigs/strict`; keep strictness by annotating complex values.
- Prefer explicit `interface` declarations for props and data models.
- Use discriminated unions over boolean flags when state variants exceed two.
- Replace `any` with `unknown` and narrow via type guards.
- Optional values default to `undefined`; reserve `null` for DOM interop.
- Narrow server-only globals with `import.meta.env.SSR` checks when needed.
- Use `satisfies` to constrain literal objects that feed components or i18n maps.

## Astro Component Rules
- Always open frontmatter with `---` and close before markup.
- Declare `interface Props` first, derive `const { ... } = Astro.props` immediately after.
- Pass translated strings through `getI18N*` helpers; never hardcode bilingual text.
- Keep Astro templates pure; add client-side scripts only when necessary.
- For client scripts, use scoped `<script>` blocks and guard with `typeof window !== "undefined"` when required.
- Use `ClientRouter` only in layouts that need transitions.

## Styling & Theming
- Tailwind is primary: prefer utility classes before authoring custom CSS.
- Global theme uses dark background `rgb(20,20,20)` and accent colors defined in `src/styles/global.css`.
- When Tailwind lacks a utility, extend tokens in `@theme` rather than inline styles.
- Keep gradient or texture backgrounds consistent with existing hero sections.
- Use `@layer components` for reusable class compositions.
- Animations rely on `.reveal`, `.reveal-zoom`, and `.reveal-delay-*`; preserve these hooks.

## Data, State, and Interactivity
- Prefer server-rendered content; avoid heavy client-side state.
- Derived data should be computed functions, not duplicated state.
- When reading from `window` or `document`, guard with `typeof window !== "undefined"`.
- Use `requestAnimationFrame` rather than timeouts for scroll/animation loops.
- Debounce expensive listeners at 16ms or more.

## Internationalization Checklist
- Strings live in `src/i18n/{language}.json` plus specialized `experience_*` and `projects_*` bundles.
- Use helper functions: `getI18N`, `getI18NExperience`, `getI18NProjects`, `getI18NPath`.
- Default locale (es) has bare routes; English requires `/en` prefix.
- When adding pages, export `export const prerender = true` if static.
- Validate new keys in both languages before merging.
- Sorting/order should match between languages to simplify lookups.

## Assets & Media
- Prefer Astro `Image` component from `astro:assets`; supply width/height/alt.
- Store raw images in `public/` and reference relative paths.
- Use `loading="eager"` for above-the-fold hero content, `loading="lazy"` elsewhere.
- Add `aria-hidden="true"` to decorative SVG icons.
- Keep file sizes under 500KB; compress before committing.
- For external embeds, lazy load and wrap with fallback text.

## Error Handling & Logging
- Let Astro surface server errors; avoid swallowing exceptions with empty catch blocks.
- Validate props before use; bail early with guard clauses.
- Use optional chaining + nullish coalescing for uncertain data.
- When adding client-side code, prefer `console.error` with context rather than silent failures.
- For navigation helpers, ensure fallback routes exist (default to `/`).

## Accessibility & Performance
- Semantic tags (`section`, `nav`, `main`, `footer`) required; include `aria-label` where needed.
- Provide focus styles for interactive elements; do not disable outlines.
- Use `prefers-reduced-motion` media queries for heavy animations.
- Limit DOM depth; flatten wrappers when possible.
- Preload key fonts/assets via `<Font preload />` in layouts.

## Workflow Expectations
- Reproduce issues locally before editing.
- Cross-check localized content, responsive breakpoints, and interactive states prior to completion.
- Document assumptions in PR descriptions.
- When adding dependencies or commands, update this file and README equivalents.
- Keep this guide near ~150 lines; prune obsolete notes when adding new ones.

## When Tooling Is Missing
- No automated tests exist; clarify with user before inventing frameworks.
- If linting is requested, align on ESLint/Prettier stack and ensure Astro support.
- Use manual inspection plus `pnpm build` as the default verification path.
- Capture reproduction steps or manual test plans in PR summaries.

## Frontend Design Principles

Before building any UI component, page, or visual element, commit to a clear aesthetic direction:

- Purpose first: Understand what problem the interface solves and who uses it before writing a single class.
- Pick a bold tone: Brutally minimal, retro-futuristic, editorial, brutalist, art-deco, soft/pastel, industrial; choose one and execute it with precision.
- Differentiation: Identify the one thing a user will remember about this interface.

### Typography
- Choose fonts that are beautiful, unique, and context-appropriate. Never default to Arial, Inter, Roboto, or system fonts.
- Pair a distinctive display font with a refined body font.
- Load custom fonts via `Font` in layouts and declare them in `src/styles/global.css`.

### Color & Theme
- Commit to a cohesive palette with CSS variables. Dominant colors with sharp accents outperform timid, evenly-distributed ones.
- The existing dark base (`rgb(20,20,20)`) is the canvas; build on it deliberately.
- Never use cliched purple-gradient-on-white schemes.

### Motion & Animation
- Prioritize CSS-only animations inside `.astro` components.
- One well-orchestrated page-load sequence (staggered `animation-delay`) creates more impact than scattered micro-interactions.
- Respect `prefers-reduced-motion`; wrap heavy animations accordingly.
- Leverage existing `.reveal`, `.reveal-zoom`, and `.reveal-delay-*` hooks before inventing new ones.

### Spatial Composition
- Favor asymmetry, overlap, and grid-breaking elements over predictable layouts.
- Use generous negative space or controlled density; avoid indecisive middle ground.

### Backgrounds & Visual Depth
- Avoid flat solid backgrounds; create atmosphere with gradient meshes, noise textures, geometric patterns, or layered transparencies.
- Apply dramatic shadows, decorative borders, or grain overlays when they serve the aesthetic direction.

### Anti-Patterns to Avoid
- Generic AI aesthetics: Space Grotesk, Inter, purple gradients, cookie-cutter card grids.
- Inconsistent aesthetics across pages; every component should feel like it belongs to the same design system.
- Inline styles for theming; extend `@theme` tokens or use `@layer components`.

## Support Channels
- There are no automation rule files; this document is the single source of truth.
- Mention this file when onboarding new agents.
- Update timestamps or stack notes when major upgrades land.
- When uncertain, prefer conservative changes and ask targeted questions.
