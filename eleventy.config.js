const Nunjucks = require("nunjucks");

module.exports = function(eleventyConfig) {

  // Set up Nunjucks
  let nunjucksEnvironment = new Nunjucks.Environment(
		new Nunjucks.FileSystemLoader([
      './node_modules/nhsuk-frontend/packages/components',
      './node_modules/govuk-frontend/dist',
      'app/layouts'
    ])
	);
  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: 'layouts'
    }
  }
};
