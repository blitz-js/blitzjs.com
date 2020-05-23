/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require("path")
const Module = require("module")
const fs = require("fs")
const eta = require("eta")
const {normalizeUrl} = require("@docusaurus/utils")
const openSearchTemplate = require("./templates/opensearch")

const OPEN_SEARCH_FILENAME = "opensearch.xml"

const createRequire = Module.createRequire || Module.createRequireFromPath
const requireFromDocusaurusCore = createRequire(require.resolve("@docusaurus/core/package.json"))
const ContextReplacementPlugin = requireFromDocusaurusCore("webpack/lib/ContextReplacementPlugin")

// Need to be inlined to prevent dark mode FOUC
// Make sure that the 'storageKey' is the same as the one in `/src/hooks/useTheme.js`
const storageKey = "theme"
const noFlash = (defaultDarkMode) => `(function() {
  var defaultDarkMode = ${defaultDarkMode};

  function setDataThemeAttribute(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  function getPreferredTheme() {
    var theme = null;
    try {
      theme = localStorage.getItem('${storageKey}');
    } catch (err) {}

    return theme;
  }

  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  var preferredTheme = getPreferredTheme();
  if (preferredTheme !== null) {
    setDataThemeAttribute(preferredTheme);
  } else if (darkQuery.matches || defaultDarkMode) {
    setDataThemeAttribute('dark');
  }
})();`

module.exports = function (context, options) {
  const {
    baseUrl,
    siteConfig: {themeConfig, title, url, favicon},
  } = context
  const {defaultDarkMode = false, prism: {additionalLanguages = []} = {}} = themeConfig || {}
  const {customCss} = options || {}

  return {
    name: "blitz",

    getClientModules() {
      const modules = [
        require.resolve("infima/dist/css/default/default.css"),
        path.resolve(__dirname, "./prism-include-languages"),
      ]

      if (customCss) {
        modules.push(customCss)
      }

      return modules
    },

    configureWebpack() {
      const prismLanguages = additionalLanguages.map((lang) => `prism-${lang}`).join("|")

      return {
        plugins: [
          new ContextReplacementPlugin(
            /prismjs[\\/]components$/,
            new RegExp(`^./(${prismLanguages})$`),
          ),
        ],
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
            innerHTML: noFlash(defaultDarkMode),
          },
        ],
      }
    },
  }
}
