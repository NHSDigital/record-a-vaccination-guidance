This website hosts the guidance and contact information for Record a vaccination during its private beta (or pilot).

The website can be found at [guide.ravs.england.nhs.uk](https://guide.ravs.england.nhs.uk).

All the content lives within the [app/](./app) folder as Markdown files.

The website is built using the [Eleventy](https://www.11ty.dev) static site generator, and hosted using [GitHub Pages](https://pages.github.com).

## Running the site locally

First install [Node.js](https://nodejs.org/en).

Then install the dependencies by running this command:

```bash
npm install
```

You can then run the site locally by running:

```bash
npm start
```

## Building the static site

The static site is built using this command:

```bash
npm run build
```

The [`deploy.yml`](./.github/workflows/deploy.yml) file is used to build the site and deploy it to GitHub Pages every time a change is made and pushed to the `main` branch.
