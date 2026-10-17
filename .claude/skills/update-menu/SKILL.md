---
name: update-menu
description: How to update the Pâinea lui Dumnezeu menu (/meniu) — data model in lib/menu.ts, section/category structure, anchors, badges, allergens, product images, and how to transcribe a new printed menu PDF. Use whenever the user sends a new menu (PDF/photo/text) or asks to change items, prices, weights or allergens.
---

# Updating the menu

All menu content lives in `painealuidumnezeu/lib/menu.ts`. The page
`painealuidumnezeu/app/meniu/page.tsx` renders it; the home page imports
`breadItems` and `pastryItems` from the same file.

## Data model

```ts
MenuItem     { name, description?, price? (RON, string, no unit), weight?, kcal?, macros?,
               badge? ("Nou" | "Special"), allergens? ("gluten, ouă, lactate"), image? }
MenuCategory { title, note? (shown under heading, e.g. "Numai în weekend"), items }
MenuSection  { id, label, layout: "cards" | "list", categories }
```

Sections as stored in `menuSections` (ids are used as URL anchors — do not rename them).
The /meniu page groups them via `menuGroups` in `app/meniu/page.tsx`:
**Bistro** (`#bistro`: mancare, racoritoare, vinuri) then **Brutărie** (`#brutarie`: paine →
Pâine, Patiserie, Cafea). Each group has a dark banner (title only, no eyebrow) and its own tab
group in the sticky nav (`nav`). Category headings inside are deliberately compact (small h2 +
Divider, no script eyebrow) — the user wants the list dense, so don't reintroduce big headings. A new section must be added to
a group's `sections` (and `nav`) or it will not render.

| id | layout | categories |
| --- | --- | --- |
| `paine` | cards (photo grid) | Pâine, Patiserie, Cafea |
| `mancare` | list (price rows) | food menu — mirrors the printed menu |
| `racoritoare` | list | Băuturi răcoritoare |
| `vinuri` | list | Vinuri |

Anchor rules (`app/meniu/page.tsx`): in `cards` sections each category gets `#slug(title)`
(`#paine`, `#patiserie`, `#cafea`); in `list` sections the **first** category gets `#<section id>`
and the rest `#<section id>-<slug(title)>`. `quickNav` and the Webflow redirects in
`next.config.mjs` (`/meniu-mancare` → `#mancare` etc.) depend on this.

Do not rename the `Pâine` / `Patiserie` category titles — `breadItems` / `pastryItems` look
them up by title, and `app/page.tsx` looks up bread items by name
(`'Chiflă burger', 'Campagne', 'Tomato & basil'`).

## Rendering

- `cards`: `components/product-card.tsx` — image, badge pill, name, price, description, weight.
- `list`: `PriceRow` in `app/meniu/page.tsx` — name, "Nou" pill, dotted leader, `NN RON`,
  description, `weight / kcal` + macros, then `Alergeni: …` in small italics.
- A list category with any description > 120 chars renders as one column, otherwise two.

## Transcribing a printed menu (PDF)

The printed food menu ("meniu DD.MM.YYYY.pdf") is a 2-column A4 page; page 2 is the cover.
Read it with the Read tool (it gives both extracted text and a page image — trust the image
for layout; the extracted text order is scrambled).

1. Keep the PDF's category order and titles (e.g. De întins pe pâine, De înmuiat pâine,
   Cu pâine de dimineață, Doar salate, Pâine toată ziua, Fără pâine — numai în weekend).
   A sub-heading like "numai în weekend" goes in the category `note`.
2. Item names: sentence case with diacritics (CSS uppercases them).
3. Description: keep the `|` separators from the print, except for items made of several
   components (e.g. "De întins pe pâine"): put each component on its own line with `\n`
   (list rows render with `whitespace-pre-line`). Fix obvious typos
   (prosciuto→prosciutto, straciatella→stracciatella, chedar→cheddar, SADWICH→Sandwich,
   tahihi→tahini) but do not invent ingredients. Flag unclear words to the user.
4. Weight as `"300 g"` / `"300 ml"`; price as `"45"`.
5. `*gluten, ouă` lines under an item → `allergens: "gluten, ouă"`. Omit if none printed.
6. Black "NOUȚ" labels → `badge: "Nou"`.
7. The print has no kcal/macros — drop old values rather than keep stale ones.
8. Replace only the `mancare` section; drinks and wine come from other sources.
9. Verify: `grep -c '"name"'` count matches the PDF, then build (see `run-local` skill)
   and check http://localhost:3000/meniu#mancare.

## Product photos (cards layout only)

Put square JPGs with a white background in `public/images/menu/<slug>.jpg`
(slug = lowercase ascii, hyphens) and reference as `"/images/menu/<slug>.jpg"`.
