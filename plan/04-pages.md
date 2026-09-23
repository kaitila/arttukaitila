# Page specs

## Home (`/`)

- Top: your name, "Arttu Kaitila", set in Lora, centered — this is the
  page title, not a clickable nav element here (you're already home).
- Directly beneath it: **two or three lines of plain intro text**, centered,
  small sans, `--text-muted` — a light one-time framing sentence for the
  whole site (not a bio, just a line or two of context — e.g. what kind of
  writing this is). No separate About page. You provide the exact text
  when ready; a placeholder is fine to start.
- Below that: a flat list of entries, newest first. Each row:
  - Entry title (Lora, 1.4rem) — links to the entry
  - Date beneath or beside it, small and muted (e.g. "September 23, 2026")
  - No excerpt/preview text, no cover image — title + date only
  - Generous space between rows (3rem)
- Entire list wrapped in `[data-reveal]` so rows gently fade/rise in as you
  scroll down the home page
- Footer: small, centered, "Arttu Kaitila © 2026"

## Entry page (`/entries/:slug/`)

- Small "← back" link, top-left or centered above the title
- Entry title: Lora, 2.25rem, centered
- Date beneath title: small, muted, centered
- Generous space (4–6rem) between title block and body text
- Body: left-aligned, max-width ~680px, centered on the page, 1.7 line
  height
- Paragraphs individually wrapped in `[data-reveal]` for the fade-in effect
  as you scroll through a long entry
- Footer: same as home — "← back" link + small copyright line

## 404 page

- Same quiet shell as the rest of the site — cream background, Lora
  title, nothing loud or playful/gimmicky.
- Centered title, something restrained like **"Not here."** or
  **"Page not found."** (your call — can suggest a couple of options when
  building)
- One small muted line beneath it, e.g. "The page you're looking for
  doesn't exist." — same treatment as the home page's intro text
- A single "← back home" link, centered, styled like the entry pages'
  back link
- Gets the same edge-fade treatment as every other page, for consistency
  — but skip the reveal-on-scroll animation here since the page is short
  enough that it'd just look like a flash
- Eleventy + GitHub Pages: a `404.html` at the site root is served
  automatically by GitHub Pages for any unmatched path, no extra config
  needed beyond naming the template file correctly

## Not building (v1)

- No About page — replaced by the short intro lines on the home page
- No search
- No pagination on home (fine for years at normal writing pace — revisit
  if the list ever gets unwieldy)
