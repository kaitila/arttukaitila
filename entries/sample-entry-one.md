---
title: "Sample entry — delete me"
date: 2026-09-20
---

This is placeholder text, dropped in so the design can be checked against
real paragraphs instead of Lorem Ipsum blocks. Delete this file once you've
written your first real entry — it's here purely as a stand-in. This
version is intentionally long and throws in most of what plain markdown can
do, so you can see how each thing actually renders.

The idea behind this site is a flat, reverse-chronological list of short
writing — no tags, no categories, nothing to organize. Just entries, newest
first, and whatever you felt like writing that day.

Every paragraph on an entry page is meant to gently fade and rise into view
as you scroll past it, the way this one probably just did. It should feel
quiet rather than flashy — settling into place, not "animating."

## Basic formatting

Markdown gives you the usual set: **bold text**, *italic text*, and even
***bold italic*** if you really want to shout quietly. You can link out to
somewhere else, like the [Eleventy documentation](https://www.11ty.dev/docs/),
and `inline code` sits in its own little pill, using a monospace font
against a slightly raised background.

### A smaller heading

Entries only need `title` and `date` in the frontmatter, but the body text
itself can use headings freely — `##` for a section like the one above, and
`###` for something a level smaller than that, like this one.

## Lists

Sometimes a paragraph wants to be a list instead. An unordered one:

- Flat, reverse-chronological — no tags or categories
- Title and date only in the frontmatter
- `draft: true` to keep something out of the build

Or an ordered one, for anything with actual steps:

1. Write a `.md` file in `entries/`
2. Add the `title` and `date` frontmatter
3. Commit and push to `main`

And lists can nest, if a point needs a sub-point:

- Publishing
  - Directly on GitHub, no local setup
  - Or from your machine with `git push`
- Editing
  - Change the file, commit again

## A quote

> Every paragraph on an entry page is meant to gently fade and rise into
> view as you scroll past it. It should feel quiet rather than flashy.

That's the whole design philosophy, more or less, quoted back at itself.

## Code

For anything longer than a few words, a fenced code block keeps its own
formatting and scrolls horizontally instead of wrapping if a line runs
long:

```js
eleventyConfig.addCollection("entries", (api) =>
  api.getFilteredByGlob("entries/*.md").sort((a, b) => b.date - a.date)
);
```

---

And a horizontal rule, like the one just above, for marking a harder break
between sections than a heading calls for. That covers more or less
everything plain markdown can do — the actual writing can stay this varied,
or as plain as a couple of short paragraphs. Both should look right.
