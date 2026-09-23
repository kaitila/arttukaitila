# arttukaitila.com — site plan

## What this is

A personal site for publishing your own thoughts — not framed as a "blog."
Reference point: darioamodei.com. Very simple, very quiet, beautiful typography,
light mode only, warm off-white background, posts managed entirely through
GitHub as markdown files.

## Decisions locked in

| Area | Decision |
|---|---|
| Site generator | Eleventy (11ty) |
| Hosting | GitHub Pages, auto-deploy via GitHub Actions on push to `main` |
| Domain | arttukaitila.com (already owned) |
| Site title | "Arttu Kaitila" — your name, no "blog" label anywhere |
| Pages | Home (entry list, with a couple lines of intro text under the title), individual entry pages, a subtly styled 404 |
| Analytics | GoatCounter (privacy-friendly, no cookie banner) |
| Entry organization | Flat reverse-chronological list, no tags/categories |
| Background | Very light cream, e.g. `#FAF6EE` |
| Titles | Centered horizontally by default |
| Font | Lora (serif) for titles; a clean complementary sans for body text |
| Motion | Subtle scroll effects — edge fade (top/bottom mask), gentle fade/rise-in for content as it scrolls into view |
| Content workflow | Write a `.md` file in `/entries`, commit, push — GitHub Actions builds and deploys automatically |

## Documents in this plan

1. `01-tech-stack.md` — Eleventy setup, repo structure, build & deploy pipeline
2. `02-design-system.md` — colors, type scale, spacing, the scroll/fade effects in detail
3. `03-content-structure.md` — the markdown frontmatter schema for entries, how to add a new one
4. `04-pages.md` — spec for each page (home, entry, about)
5. `05-roadmap.md` — the build steps, in order, from empty repo to live site

## What's explicitly out of scope for v1

- Tags, categories, search
- Comments
- Dark mode
- Newsletter / email subscription
- CMS or admin UI — GitHub *is* the CMS
