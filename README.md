# arttukaitila.com

Personal site. Built with [Eleventy](https://www.11ty.dev/), deployed
automatically to GitHub Pages on every push to `main`.

## Publishing a new entry

1. Create a new file in `entries/`, named after the URL you want, e.g.
   `entries/my-new-thought.md`.
2. Start it with this frontmatter, then write in plain markdown below it:

   ```markdown
   ---
   title: My new thought
   date: 2026-09-23
   ---

   Whatever you want to say. Paragraphs, *italics*, **bold**, and
   [links](https://example.com) all work as normal markdown.
   ```

3. Commit and push to `main` (or create the file directly on github.com —
   click "Add file → Create new file" inside the `entries/` folder, paste
   the frontmatter and text, and commit straight to `main`).
4. The site rebuilds and deploys automatically. It's usually live within a
   minute or two.

That's the entire workflow — no local setup required unless you want to
preview changes first (see below).

## Drafts

Add `draft: true` to an entry's frontmatter and it's excluded from the
build entirely (no page, not listed on the home page) until you remove the
flag.

## Previewing locally (optional)

```bash
npm install
npm run serve
```

Opens a local server with live-reload at `http://localhost:8080`.

## Notes

- Home page intro text is a placeholder (`[INTRO TEXT PLACEHOLDER — replace
  with your own]` in `src/_includes/home.njk`) — swap it for real copy
  whenever you're ready.
- GoatCounter analytics isn't wired up yet — there's a marked spot for the
  embed script in `src/_includes/base.njk`.
