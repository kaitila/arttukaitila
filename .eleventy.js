module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });

  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(dateObj);
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return dateObj.toISOString().slice(0, 10);
  });

  // Marks every markdown paragraph with [data-reveal] so entry bodies get
  // the fade/rise-on-scroll treatment per-paragraph without hand-authoring
  // it in each entry (entries are plain markdown, title + date only).
  eleventyConfig.amendLibrary("md", (mdLib) => {
    const defaultParagraphOpen =
      mdLib.renderer.rules.paragraph_open ||
      function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };
    mdLib.renderer.rules.paragraph_open = function (tokens, idx, options, env, self) {
      tokens[idx].attrSet("data-reveal", "");
      return defaultParagraphOpen(tokens, idx, options, env, self);
    };
  });

  return {
    dir: {
      input: ".",
      includes: "src/_includes",
      output: "_site",
    },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
