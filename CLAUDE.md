# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI/ML Engineer portfolio landing page built with Astro 5 and Tailwind CSS v4. Static site with dark mode support, blog section, and project showcase.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build static site to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

### Tech Stack
- **Framework**: Astro 5 with static site generation
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Content**: Markdown collections for blog posts and projects

### Project Structure

```
src/
├── layouts/BaseLayout.astro    # Main layout with SEO meta, dark mode script
├── components/                  # Astro components (Navbar, Hero, etc.)
├── pages/                       # File-based routing
│   ├── index.astro             # Homepage with all sections
│   └── blog/                   # Blog index and dynamic [slug] routes
├── content/                     # Markdown content
│   ├── blog/                   # Blog posts (*.md)
│   └── projects/               # Project entries (*.md)
├── content.config.ts           # Zod schemas for content collections
└── styles/global.css           # Theme config and base styles
```

### Styling System

Custom theme defined in `src/styles/global.css` using Tailwind v4 `@theme` directive:
- **Colors**: `primary-*` (blue/purple), `accent-*` (cyan/teal), `surface-*` (neutral)
- **Dark mode**: Class-based via `@custom-variant dark` - toggle adds/removes `.dark` on `<html>`
- **Color format**: OKLCH for perceptual uniformity

### Content Collections

Defined in `src/content.config.ts` with Zod validation:
- **blog**: title, description, pubDate, tags[], draft, heroImage
- **projects**: title, description, tags[], githubUrl, demoUrl, featured, order

### Key Patterns

- Site config lives in `src/pages/index.astro` (`siteConfig` object) - personalize name, links there
- Navigation items defined in `src/components/Navbar.astro`
- Dark mode state persisted to localStorage, initialized via inline script in BaseLayout
- All section IDs: `#about`, `#skills`, `#projects`, `#experience`, `#contact`

## Configuration

- `astro.config.mjs`: Site URL (update before deploy), Tailwind vite plugin, sitemap integration
- `tsconfig.json`: Extends `astro/tsconfigs/strict`

## UI Testing

Chrome DevTools MCP is configured for visual verification. Use the `verify-ui` or `test-interactions` skills for automated UI testing with screenshots.
