import fs from 'node:fs/promises'

import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

const serviceName = 'Record a vaccination'

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    markdown: {
      headingsStartWith: 'l'
    },
    stylesheets: ['/styles/application.css'],
    header: {
      service: {
        text: serviceName,
        href: '/'
      }
    },
    footer: {
      meta: {
        items: [
          {
            text: 'Cookies',
            href: '/cookie-preferences'
          }
        ]
      }
    }
  })

  // Images folder
  eleventyConfig.addPassthroughCopy('./app/images')

  // Files
  eleventyConfig.addPassthroughCopy('./app/files')

  eleventyConfig.addPassthroughCopy({
    "node_modules/@nhsbsa/cookie-consent-component/dist/cookie-banner.js": "cookie-banner.js",
    "node_modules/nhsuk-frontend/packages/assets": "nhsuk-frontend/assets",
  });

  // Reset contents of output directory before each build
  eleventyConfig.on('eleventy.before', async ({ directories, runMode }) => {
    if (runMode === 'build') {
      await fs.rm(directories.output, {
        force: true,
        recursive: true
      })
    }
  })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts'
    }
  }
}
