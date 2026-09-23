module.exports = {
  layout: "entry.njk",
  tags: ["entries"],
  eleventyComputed: {
    // draft: true entries are excluded from both the build output and
    // the home page collection — see plan/03-content-structure.md.
    permalink: (data) => (data.draft ? false : `${data.page.filePathStem}/index.html`),
    eleventyExcludeFromCollections: (data) => Boolean(data.draft),
  },
};
