export default function (eleventyConfig) {
  // Default layout for all templates; overridable per-page via front matter
  eleventyConfig.addGlobalData("layout", "layouts/default.html");

  return {
    dir: {
      includes: "_includes",
      output: "_site",
    },
  };
};
