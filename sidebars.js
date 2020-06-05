/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    Introduction: [
      "getting-started",
      "tutorial",
      "manifesto",
      "code-of-conduct",
      "contributing",
    ],
    Basics: ["file-structure", "app-component", "css", "static-files"],
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
    Routing: [
      "routing",
      "routing-conventions",
      "link",
      "route-params-query",
      "router",
      "api-routes",
    ],
    Database: ["database-overview"],
    Queries: [
      "query-definition",
      "query-usage",
      "use-query",
      "use-paginated-query",
      "ssr-query",
    ],
    Mutations: ["mutation-definition", "mutation-usage"],
    "Deploying to Production": ["deploy-render", "deploy-vercel"],
    CLI: [
      "cli-overview",
      "cli-new",
      "cli-start",
      "cli-build",
      "cli-db",
      "cli-generate",
      "cli-console",
    ],
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
