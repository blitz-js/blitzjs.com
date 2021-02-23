# Blitzjs.com - Website & Docs

### Installation

```bash
yarn
```

### Local Development

```bash
yarn dev
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

The `main` branch is automatically deployed to https://blitzjs.com

## Language Translations

More info at [blitzjs.com-translation](https://github.com/blitz-js/blitzjs.com-translation/blob/main/README.md)!

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

## Handles

All H2 and H3 (or all titles that starts with `##` or `###`) needs a custom _handle_, the last part of the url:

```
                                     | This part |
https://blitzjs.com/docs/get-started#install-blitz
```

You add it in this way:

```md
### Install Blitz {#install-blitz}
```

There are a few more rules:

- All titles smaller than H3 (or the ones with more than `###` at the start) must not have a handle.
- The handles are entirely in lowercase and only the 26 letters of the English alphabet and numbers are allowed.
- Instead of a space, use `-`.
- There must not be two identical handles in the same document. If you have two identical titles, add a number at the end in order of appearance (not importance)

Example:

```md
### Install Blitz {#install-blitz}

### Install Blitz {#install-blitz-1}

#### Install Blitz

## Install Blitz {#install-blitz-2}
```

If you aren't totally sure how the slug should look like, or just want to automate the process, run `yarn english-slugify`
