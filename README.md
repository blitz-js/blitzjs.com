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

The `master` branch is automatically deployed to https://blitzjs.now.sh

## Language Translations

We're setting up this repo to support language translations as soon as folks step up to do so. We plan to follow the same process as the reactjs.com translations.

## Versioning

When we are ready to tag a new version of the docs we can run the docusaurus scripts.

```
yarn run docusaurus docs:version 1.1.0
```

When tagging a new version, the document versioning mechanism will:

1. Copy the full docs/ folder contents into a new versioned_docs/version-/ folder.
2. Create a versioned sidebars file based from your current sidebar configuration (if it exists). Saved it as versioned_sidebars/version--sidebars.json.
3. Append the new version number into versions.json.

[See the Docusaurus documention on versioning](https://v2.docusaurus.io/docs/versioning/#tagging-a-new-version)
