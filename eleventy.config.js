const Nunjucks = require("nunjucks");
const sass = require("sass");
const path = require('node:path')

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

  // Set up SASS
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    compile: function (inputContent, inputPath) {
      const parsed = path.parse(inputPath);

      let result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir, this.config.dir.includes, './node_modules', './'],
        quietDeps: true
      });

      return () => {
        return result.css;
      };
    },
  });

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
