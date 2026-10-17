---
name: website-overview
description: Map of the painealuidumnezeu.ro website (Pâinea lui Dumnezeu, artisan bakery in București) — Next.js 16 + Tailwind 4 stack, folder layout, where content lives, design tokens and code conventions. Use before changing any page, component, text, image, contact info or opening hours on this site.
---

# Pâinea lui Dumnezeu — website overview

Marketing site for an artisan sourdough bakery with two locations in București.
It is a rebuild of the old Webflow site (painealuidumnezeu.ro) as a static-ish
Next.js app. **All visible text is in Romanian, with proper diacritics (ă â î ș ț).**

## Repo layout

```
/                           repo root (git: github.com/pdzeu/painealuidumnezeu-website, branch main)
├── Dockerfile              2-stage build (node:22-alpine) → standalone server on PORT 3001
├── restart.sh              rebuilds image + runs container "painealuidumnezeu-container" on 3001
├── local_test/             git-ignored helper scripts (ssh-agent for the deploy key)
└── painealuidumnezeu/      the Next.js app (run all npm commands here)
    ├── app/                App Router pages
    │   ├── layout.tsx      fonts (Oswald=display, Karla=sans, Great Vibes=script), header/footer, metadata
    │   ├── page.tsx        home (/)  — uses breadItems/pastryItems from lib/menu.ts
    │   ├── meniu/page.tsx  menu (/meniu) — renders lib/menu.ts
    │   ├── despre-noi/     about (/despre-noi)
    │   ├── contact/        contact (/contact) with contact-form
    │   ├── not-found.tsx
    │   └── globals.css     Tailwind 4 @theme tokens, texture utilities, reveal animation
    ├── components/         site-header, site-footer, page-hero, section-heading (+Divider),
    │                       product-card, photo-gallery, reveal, visit-section, button-link,
    │                       contact-form, social-icons
    ├── lib/
    │   ├── site.ts         name, email, phones, addresses, map embed, socials, nav, hours, galleries
    │   └── menu.ts         ALL menu content (see the update-menu skill)
    ├── public/images/      hero-*.jpg, gallery/, instagram/, menu/<slug>.jpg, logo*.svg
    └── next.config.mjs     output: 'standalone' + redirects from old Webflow URLs
```

## Where to change what

| Change | File |
| --- | --- |
| Phone, email, addresses, socials, opening hours, nav links | `lib/site.ts` |
| Menu items, prices, weights, allergens | `lib/menu.ts` (+ `app/meniu/page.tsx` for rendering) |
| Menu quick-nav pills on /meniu | `quickNav` in `app/meniu/page.tsx` |
| Product photos | `public/images/menu/<slug>.jpg` (square, white background) |
| Old Webflow URL redirects | `next.config.mjs` |
| Colours / fonts | `app/globals.css` `@theme` and `app/layout.tsx` |

## Design system

Tailwind 4 tokens from `globals.css` — use these class names, never raw hex:
`gold` #dfa25f, `gold-dark`, `crust`, `cream`, `flour` (page bg), `espresso` (dark bg / headings),
`espresso-soft`, `ink` (body text), `muted`, `line` (borders).
Fonts: `font-display` (Oswald, uppercase + wide tracking for headings/prices),
`font-sans` (Karla, body), `font-script` (Great Vibes, eyebrows like "Meniu", "Poftă bună!").
Utilities: `texture` / `texture-dark` backgrounds; wrap blocks in `<Reveal>` for scroll fade-in.
Sections alternate `texture` and `bg-cream`; content is `mx-auto max-w-7xl px-4 md:px-8`.

## Code conventions

- TypeScript, React 19 server components by default; `'use client'` only where needed (header, reveal, form).
- 2-space indent, single quotes, no semicolons in .tsx; `lib/menu.ts` data uses JSON-style double quotes.
- Import alias `@/` = app root (`@/lib/menu`, `@/components/...`).
- Comments are short and in Romanian, matching existing ones.
- Icons come from `lucide-react`. Images via `next/image`.
- Prices are stored as strings in RON without the unit (`"45"`); UI appends ` RON`.

## Running / deploying

See the `run-local` skill. Short version: WSL Node is 18 (too old for Next 16), so build
with Docker. Production runs via `restart.sh` on port 3001.
