# Blitzjs.com - Website & Docs

## Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
yarn
```

### Local Development

```
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

The `main` branch is automatically deployed to https://blitzjs.com

## Language Translations

We're setting up this repo to support language translations as soon as folks step up to do so. We plan to follow the same process as the reactjs.com translations.

## Code Syntax Highlights

Code blocks are syntax highlighted using Prism. You can call attention to specific sections in a code block using comments to begin and end a block `// highlight-start` `// highlight-end`, or highlight a single line `// highlight-line`

```
const example = "not highlighted"
// highlight-start
const highlighted = true
// highlight-end
const notHighlighted = true
const alsoHighlighted = true // highlight-line
```
