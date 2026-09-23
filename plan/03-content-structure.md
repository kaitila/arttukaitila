# Content structure — how you'll actually publish

## Where entries live

Every entry is a single markdown file in `/entries`. Filename becomes the
URL slug, e.g.:

```
entries/on-starting-again.md   →   arttukaitila.com/on-starting-again/
```

## Frontmatter schema

Every entry file starts with this YAML block, then the entry text in
markdown below it:

```markdown
---
title: On starting again
date: 2026-09-23
---

Your text goes here, written in plain markdown. Paragraphs, *italics*,
**bold**, [links](https://example.com), and so on all work normally.
```

That's the entire schema — just `title` and `date`. No tags, no category,
no summary field, no cover image, nothing else required. Deliberately as
small a surface as possible so writing a new entry is just: write the
words, add a title and date, push.

## Publishing a new entry — two ways

**Directly on GitHub (no local setup at all):**
1. Go to the `entries/` folder in the repo on github.com
2. Click "Add file → Create new file"
3. Name it `your-slug-here.md`
4. Paste the frontmatter + your text
5. Commit directly to `main`
6. Live in ~1–2 minutes

**From your machine (if you're already set up with git):**
1. Add the `.md` file to `entries/`
2. `git add . && git commit -m "New entry: on starting again" && git push`

## Drafts

If you want to write something without publishing it yet, either:
- keep it as a `.md` file outside the `entries/` folder (e.g. in a
  `drafts/` folder that Eleventy is told to ignore), or
- add `draft: true` to the frontmatter and have the build skip any entry
  with that flag set (small addition to `.eleventy.js` — covered in the
  roadmap doc).

Recommended: `draft: true` approach, so drafts still live in `entries/`
and you don't have to move the file when it's ready.

## Editing or removing an entry

- **Edit:** open the file (on GitHub or locally), change the text, commit.
  The page updates on next deploy. No "edit history" shown publicly unless
  you want one later.
- **Remove:** delete the `.md` file, commit. The page disappears on next
  deploy (GitHub Pages doesn't leave orphaned URLs live).

## Ordering

Home page lists entries by `date`, newest first — automatic, nothing you
manage manually.
