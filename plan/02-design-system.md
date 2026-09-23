# Design system

## Color

Light mode only, warm and quiet — paper, not white.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FAF6EE` | Page background — light cream |
| `--bg-raised` | `#F5EFE2` | Very subtle contrast, e.g. hairline dividers |
| `--text` | `#2B2620` | Body text — warm near-black, not pure black |
| `--text-muted` | `#6B6355` | Dates, metadata, secondary text |
| `--accent` | `#8A5A3B` | Links, hover states — a muted warm brown, not a "brand blue" |
| `--border` | `#E7DFCC` | Hairline rules |

No pure white, no pure black anywhere — that's what keeps it feeling warm
rather than clinical.

## Typography

- **Titles / headings:** Lora (serif), weight 500–600. Centered horizontally
  by default — page title, entry titles, section headings.
- **Body text:** a clean humanist sans for readability at length — Inter or
  Source Sans 3, weight 400, generous line-height (1.7). Body text is
  left-aligned (centered body copy hurts readability past a line or two).
- **Metadata (dates):** same sans, smaller, `--text-muted`, letter-spacing
  slightly opened up (~0.02em) for a quiet "caption" feel.

Type scale (roughly a 1.25 ratio):

| Element | Size | Font |
|---|---|---|
| Site name (nav) | 1.1rem | Lora, centered |
| Entry title (on entry page) | 2.25rem | Lora, centered |
| Entry title (in list, home) | 1.4rem | Lora, centered or left — see 04-pages.md |
| Body text | 1.125rem | Sans |
| Metadata / date | 0.875rem | Sans, muted |

Max content width: **640–680px**, centered on the page. This is the single
biggest factor in making long-form text feel elegant — line length capped
to ~65-75 characters.

## Spacing

Generous whitespace throughout — this is what makes "simple" read as
"beautiful" rather than "empty":

- Vertical rhythm between paragraphs: `1.5em`
- Space above/below entry title: `4–6rem`
- Space between entries in the home list: `3rem`
- Page top/bottom padding: `8–10rem` (yes, a lot — it's part of the calm)

## Scroll effects (the "subtle" part)

Two effects, both understated — nothing that calls attention to itself:

### 1. Edge fade (top & bottom mask)

The content area fades to the background color at the very top and bottom
of the viewport, so text doesn't "hard-cut" as it scrolls in/out. Done in
pure CSS, no JS:

```css
.content {
  mask-image: linear-gradient(
    to bottom,
    transparent 0,
    black 48px,
    black calc(100% - 48px),
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0,
    black 48px,
    black calc(100% - 48px),
    transparent 100%
  );
}
```

Applied to the scrollable content region — the fade zone is fixed relative
to the viewport (48px), so it's a consistent soft edge as you scroll,
rather than fading individual paragraphs.

### 2. Fade + rise on scroll-into-view

Paragraphs and entry-list items start very slightly lower and transparent,
then settle into place the first time they scroll into the viewport.
Implemented with `IntersectionObserver` (small, no library):

```js
const els = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
els.forEach((el) => io.observe(el));
```

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Kept subtle on purpose: **12px** of movement, **0.7s** ease, triggers once
per element (no re-animating on scroll-back). This should feel like the
page is settling, not "animating."

`prefers-reduced-motion` is respected — both effects are disabled for
anyone with that OS setting on, so the site is fully accessible.

## Navigation

Minimal — no traditional nav bar. Top of every page: your name (Lora,
centered, links to home). On the About page and entry pages, a small
understated "← back" link. That's the entire navigation surface.

## What's deliberately absent

- No hero image, no photo on the home page
- No sidebar
- No footer nav (just a one-line footer: your name + year, centered, small)
- No social share buttons
- No cover images per entry (can be added later if you want, but v1 is
  text-only, like darioamodei.com)
