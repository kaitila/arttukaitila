# Tech stack & repo structure

## Why Eleventy

- Reads markdown files straight from a folder — no database, no CMS backend.
- Outputs plain HTML/CSS/JS — nothing to keep patched, nothing that can "break"
  the way a framework dependency tree can.
- Build is fast (sub-second for a site this size) and free to host.
- Full control over markup, so the scroll effects and typography can be
  hand-tuned rather than fighting a theme.

## Repository layout

```
arttukaitila.com/
├── entries/                     # ← you write here, one .md file per entry
│   ├── on-starting-again.md
│   └── some-other-thought.md
│
├── src/
│   ├── _includes/
│   │   ├── base.njk             # shared HTML shell (head, fonts, nav, footer)
│   │   ├── entry.njk             # single-entry page template
│   │   └── home.njk             # home page template (intro text + list of entries)
│   ├── index.njk                # home page (pulls from /entries)
│   ├── 404.njk                   # subtly styled not-found page
│   ├── css/
│   │   └── style.css            # all styling — see 02-design-system.md
│   └── js/
│       └── scroll.js            # scroll-fade + fade-in-on-scroll behaviour
│
├── .eleventy.js                  # Eleventy config — tells it where entries live
├── .github/
│   └── workflows/
│       └── deploy.yml            # builds + deploys to GitHub Pages on push
├── package.json
├── CNAME                         # contains "arttukaitila.com"
└── README.md                     # short "how to publish a new entry" guide
```

## Build & deploy pipeline

1. You add or edit a `.md` file in `/entries` (or edit anything else) and
   push to `main` — either via `git push`, or directly in the GitHub web UI
   (GitHub lets you create/edit files in-browser, no local setup needed for
   just writing).
2. A GitHub Actions workflow (`deploy.yml`) triggers automatically:
   - installs Node + dependencies
   - runs `npx @11ty/eleventy` to build the site into `_site/`
   - deploys `_site/` to GitHub Pages
3. GitHub Pages serves it at `arttukaitila.com` (via the `CNAME` file +
   your domain's DNS pointed at GitHub Pages — see the DNS note in
   `05-roadmap.md`).
4. Typically live within 1–2 minutes of pushing.

No build step ever needs to happen on your machine — GitHub does it. You
only ever touch markdown files.

## Local preview (optional)

If you want to see changes before pushing:

```
npm install
npx @11ty/eleventy --serve
```

Opens a local server with live-reload. Entirely optional — not required to
publish.

## Dependencies (kept minimal, on purpose)

- `@11ty/eleventy` — the site generator itself
- That's essentially it for build tooling. No React, no bundler, no CSS
  framework. Fonts loaded via `<link>` to Google Fonts (or self-hosted, see
  design doc). Scroll effects are ~60 lines of vanilla JS, no library.
