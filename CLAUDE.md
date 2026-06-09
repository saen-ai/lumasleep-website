# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website for **LumaSleep**, an AI-powered sleep-sounds iOS app. It's a Next.js 15 (App Router) + React 19 + Tailwind v4 site, deployed natively on **Vercel** (not a static export). The repo uses **pnpm**.

## Commands

```bash
pnpm dev      # local dev server (localhost:3000)
pnpm build    # production build — run this to type-check and catch errors
pnpm start    # serve the production build
pnpm lint     # next lint
```

There is no test suite. `pnpm build` is the de-facto correctness check (TypeScript is `strict`, and pages/metadata fail the build on error).

## Architecture

### Content is centralized, not scattered through JSX
`lib/site.ts` is the single source of truth for all product copy and constants — `SITE` (name, URLs, App Store link, SEO title/description), `NAV_LINKS`, `FEATURES`, `CATEGORIES`, `MOODS`, `FAQS`, `DEMO_PROMPT`. These values are deliberately mirrored from the LumaSleep Flutter app (`lib/data`, `lib/models`, `lib/core/theme`) to keep the site faithful to the product. **Change copy here, not inside section components.** When the app's features/categories/moods change, update this file.

### Homepage = composed sections
`app/page.tsx` renders `components/sections/*` in order (Hero → Promo → Features → Sounds → Studio → Community → Sleep → Faq → Download), wrapped by `Nav` and `Footer`. Each section is a self-contained server component that pulls its data from `lib/site.ts`. Section nav anchors are `/#sounds`, `/#studio`, etc. — prefixed with `/` so they work from any route (blog, legal), not just the homepage.

### Blog: JSX-authored posts, no CMS/MDX
`lib/posts.tsx` holds the `POSTS` array — each article's `body` is **inline JSX**, not Markdown. Article HTML is styled by the `.prose` rules in `globals.css`. Helpers: `getAllPosts()` (newest-first), `getPost(slug)`, `getAllSlugs()`, `formatDate()`. `app/blog/[slug]/page.tsx` statically generates a page per slug via `generateStaticParams()`. **To add a post:** append an object to `POSTS` (slug, title, description, ISO `date`, `readingMinutes`, `keywords`, JSX `body`). Sitemap and the blog index pick it up automatically.

### Keyword landing pages: `/sounds/` and `/noise/` silos
Two SEO clusters built the same data-driven way as the blog. `lib/sounds.ts` holds `SOUNDS` (ambient sound types → `/sounds/[slug]/`) and `NOISE` (noise colours → `/noise/[slug]/`) arrays of the shared `Landing` type (slug, h1, SEO title, description, keywords, intro, `sections[]`, `faqs[]`, `related[]` siblings, optional `relatedPost` blog slug). Each silo has a hub index (`app/sounds/page.tsx`, `app/noise/page.tsx` → `components/HubPage.tsx`) and a `[slug]` route (→ `components/LandingPage.tsx`) that statically generates every page via `generateStaticParams`. Pages emit `FAQPage` + `BreadcrumbList` JSON-LD; hubs emit `ItemList`. **To add a landing page:** append to the relevant array — sitemap, hub, nav, and internal links pick it up automatically. Keep `related` slugs valid within the same silo. These exist to rank for high-volume sound keywords (rain/fan/ocean/thunderstorm) the homepage can't target alone.

### SEO is first-class
- `lib/seo.ts` — `abs()` builds absolute URLs from `SITE.url`; the rest are JSON-LD builders (`organizationLd`, `websiteLd`, `softwareApplicationLd`, `faqLd`, `articleLd()`, `breadcrumbLd()`). Note the convention: **no invented numbers** (no fake review counts / aggregateRating).
- `components/JsonLd.tsx` injects structured data; it's added in `layout.tsx` (org/website/app) and per-page (FAQ on home, article+breadcrumb on posts).
- Each page exports `metadata` / `generateMetadata` with canonical URLs, OpenGraph, and Twitter cards.
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` are code-generated (`force-static`). When you add a top-level route, add it to `sitemap.ts`.
- `next.config.mjs` sets `trailingSlash: true` — all canonical/sitemap/internal URLs must end in `/` to match.

### Styling: Tailwind v4 + app-derived design tokens
- `app/globals.css` uses `@import "tailwindcss"` and an `@theme` block defining the "Celestial Nocturne" palette (`--color-void`, `--color-midnight`, `--color-amber`, `--color-violet`, etc.) and fonts. These map straight to the app's `app_colors.dart`. Use these token colors (e.g. `text-cedar`, `bg-void`, `text-amber`) rather than ad-hoc hex.
- Reusable CSS utilities live here too: `.shell` (max-width container), `.eyebrow`, `.prose` (blog body), `.prose-legal` (privacy/terms), `.wave`.
- Fonts (`Fraunces` display serif, `Hanken Grotesk` body) are loaded via `next/font/google` in `layout.tsx` and exposed as `--font-display` / `--font-sans` → use `font-display` / `font-sans`.
- Shared building blocks: `components/ui.tsx` (`SectionHeading`, `Wave`), `components/Brand.tsx` (`StoreButtons`), `components/icons.tsx`.

### Client vs server components
Almost everything is a server component. The **only** `"use client"` files are `components/Nav.tsx`, `components/Reveal.tsx` (scroll-reveal animation wrapper used widely), and `components/Starfield.tsx` (canvas background, mounted once in `layout.tsx`). Keep new code server-side unless it needs interactivity/browser APIs.

### Path alias
`@/*` maps to the repo root (e.g. `@/lib/site`, `@/components/sections/Hero`).
