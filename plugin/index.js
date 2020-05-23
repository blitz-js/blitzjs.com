/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require("path")
const fs = require("fs")
const eta = require("eta")
const {normalizeUrl} = require("@docusaurus/utils")
const openSearchTemplate = require("./templates/opensearch")

const OPEN_SEARCH_FILENAME = "opensearch.xml"

// Make sure that the 'storageKey' is the same as the one in `/src/hooks/useTheme.js`
const noFlash = `(function() { try {
  var mode = localStorage.getItem('theme-ui-color-mode');
  if (!mode) return
  document.body.classList.add('theme-ui-' + mode);
} catch (e) {} })();`

module.exports = function (context, options) {
  const {
    baseUrl,
    siteConfig: {title, url, favicon},
  } = context
  const {customCss} = options || {}

  return {
    name: "blitz",

    getThemePath() {
      return path.resolve(__dirname, "../src/components/")
    },

    getPathsToWatch() {
      return [path.resolve(__dirname, "../src/**/*")]
    },

    getClientModules() {
      const modules = [require.resolve("infima/dist/css/default/default.css")]

      if (customCss) {
        modules.push(customCss)
      }

      return modules
    },

    configureWebpack() {
      return {
        // Ensure that algolia docsearch styles is its own chunk.
        optimization: {
          splitChunks: {
            cacheGroups: {
              algolia: {
                name: "algolia",
                test: /algolia\.css$/,
                chunks: `all`,
                enforce: true,
                // Set priority higher than docusaurus single-css extraction.
                priority: 60,
              },
            },
          },
        },
      }
    },

    async postBuild({outDir}) {
      try {
        fs.writeFileSync(
          path.join(outDir, OPEN_SEARCH_FILENAME),
          eta.render(openSearchTemplate.trim(), {
            title,
            url,
            favicon: normalizeUrl([url, favicon]),
          }),
        )
      } catch (err) {
        throw new Error(`Generating OpenSearch file failed: ${err}`)
      }
    },

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "link",
            attributes: {
              rel: "search",
              type: "application/opensearchdescription+xml",
              title,
              href: normalizeUrl([baseUrl, OPEN_SEARCH_FILENAME]),
            },
          },
        ],
        preBodyTags: [
          {
            tagName: "script",
            attributes: {
              type: "text/javascript",
            },
            innerHTML: noFlash,
          },
        ],
      }
    },
  }
}
