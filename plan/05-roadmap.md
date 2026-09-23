# Build roadmap

Order to actually build this in, once you say go:

1. **Create the GitHub repo** — `arttukaitila.com` (public, since GitHub
   Pages on a free plan needs a public repo — fine for this, source code
   being visible isn't a concern for a writing site).
2. **Scaffold Eleventy** — `.eleventy.js` config pointing at `/entries`,
   base folder structure from `01-tech-stack.md`.
3. **Build `base.njk`** — the shared shell: `<head>` with Lora + sans font
   links, the CSS file, the scroll.js script, centered name header, footer.
4. **Build `style.css`** — color tokens, type scale, spacing, edge-fade
   mask, reveal-on-scroll CSS — all from `02-design-system.md`.
5. **Build `scroll.js`** — the IntersectionObserver reveal logic,
   `prefers-reduced-motion` guard.
6. **Build home page template** — pulls all non-draft entries from
   `/entries`, sorts by date descending, renders the list per
   `04-pages.md`.
7. **Build entry page template** — renders a single entry: title, date,
   body, back link.
8. **Write the home page intro lines** — you provide 2–3 lines of text;
   I drop them into `home.njk`. Placeholder text if you're not ready yet.
9. **Build the 404 page** — `404.njk`, same quiet styling, per
   `04-pages.md`.
10. **Write 1–2 sample entries** in `/entries` so there's real content to
    check the design against (can be replaced/deleted once you're happy).
11. **GitHub Actions workflow** — `deploy.yml` to build with Eleventy and
    publish to GitHub Pages on every push to `main`.
12. **Domain setup:**
    - Add `CNAME` file to the repo containing `arttukaitila.com`
    - In GitHub repo settings → Pages, set the custom domain
    - At your domain registrar, add the DNS records GitHub Pages requires:
      an `A` record set (GitHub's four IPs) for the root domain, or a
      `CNAME` record if you're using `www.arttukaitila.com` instead
      — I'll give you the exact records to paste in at this step
    - Enable "Enforce HTTPS" once DNS propagates (GitHub issues the
      certificate automatically)
13. **GoatCounter setup** — create a free account, get your site code,
    drop the one-line embed script into `base.njk`.
14. **Review pass** — check the site on mobile width, check
    `prefers-reduced-motion`, check the edge-fade and reveal effects feel
    subtle rather than distracting, check the 404 page renders correctly,
    adjust spacing/sizes by feel.
15. **Write the README** — a short "how to publish a new entry" note in
    the repo itself, so future-you (or anyone helping) doesn't need this
    plan doc to remember the workflow.

## What I need from you before/during the build

- Your GitHub username (to create the repo under, or confirm you'll create
  it and add me/paste code in)
- Whether you want the domain to be `arttukaitila.com` or
  `www.arttukaitila.com` as the canonical URL (affects the DNS record
  type in the domain setup step) — bare domain is recommended, matches
  darioamodei.com
- Your 2–3 lines of intro text for the home page, whenever you're ready
  (can be a placeholder initially)

## Estimated effort

This is a small, well-scoped build — most steps can be done in one sitting
once you're ready to start. The domain/DNS step has a waiting period (DNS
propagation, typically minutes to a few hours) outside anyone's control.
