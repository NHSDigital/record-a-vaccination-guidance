const Nunjucks = require("nunjucks");
const sass = require("sass");
const path = require('node:path')

module.exports = function(eleventyConfig) {

  // Set up Nunjucks
  let nunjucksEnvironment = new Nunjucks.Environment(
		new Nunjucks.FileSystemLoader([
      './node_modules/nhsuk-frontend/packages/components',
      './node_modules/nhsuk-frontend/packages/macros',
      './node_modules/govuk-frontend/dist',
      'app/layouts',
      'app/_includes'
    ])
	);
  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  // Images folder
  eleventyConfig.addPassthroughCopy('./app/images')

  // Files
  eleventyConfig.addPassthroughCopy('./app/files')

  eleventyConfig.addPassthroughCopy({
	"node_modules/@nhsbsa/cookie-consent-component/dist/cookie-banner.js": "cookie-banner.js"
});

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
      data: '../data',
      layouts: 'layouts'
    }
  }
};
