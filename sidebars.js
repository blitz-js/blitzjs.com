/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    Introduction: ["manifesto", "code-of-conduct", "how-to-contribute"],
    Basics: [
      "getting-started",
      "tutorial",
      "file-structure",
      "app-component",
      "css",
      "static-files",
    ],
    Pages: [
      "pages",
      "error-pages",
      "head-component",
      "document-component",
      "preview-mode",
      "get-static-props",
      "get-static-paths",
      "get-server-side-props",
    ],
    Routing: ["routing", "routing-conventions", "api-routes"],
    Queries: [
      "query-definition",
      "query-usage",
      "use-query",
      "use-paginated-query",
      "ssr-query",
    ],
    Mutations: ["mutation-definition", "mutation-usage"],
    "Deploying to Production": ["deploy-render", "deploy-vercel"],
    CLI: ["cli-introduction", "cli-commands"],
    Advanced: [
      "blitz-config",
      "webpack-config",
      "postcss-config",
      "dynamic-import",
      "measuring-performance",
      "rpc-specification",
    ],
  },
}
