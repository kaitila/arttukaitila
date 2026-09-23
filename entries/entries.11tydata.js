module.exports = {
  layout: "entry.njk",
  tags: ["entries"],
  eleventyComputed: {
    // draft: true entries are excluded from both the build output and
    // the home page collection — see plan/03-content-structure.md.
    // Root-level slug (arttukaitila.com/my-entry/) rather than
    // /entries/my-entry/ — see plan/03-content-structure.md.
    permalink: (data) => (data.draft ? false : `${data.page.fileSlug}/index.html`),
    eleventyExcludeFromCollections: (data) => Boolean(data.draft),
  },
};
