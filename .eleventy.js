export default function (eleventyConfig) {
  // Default layout for all templates; overridable per-page via front matter
  eleventyConfig.addGlobalData("layout", "layouts/default.html");

  // Serve Bootstrap's compiled assets from node_modules
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/css/bootstrap.min.css": "css/bootstrap.min.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css.map": "css/bootstrap.min.css.map",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "js/bootstrap.bundle.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map": "js/bootstrap.bundle.min.js.map",
  });

  return {
    dir: {
      includes: "_includes",
      output: "_site",
    },
  };
};
