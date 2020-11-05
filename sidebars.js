/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    Introduction: ["getting-started", "tutorial", "what-is-nextjs", "why-blitz"],
    Community: [
      "how-the-community-operates",
      "manifesto",
      "community-history",
      "contributing",
      "maintainers",
      "code-of-conduct",
    ],
    Basics: [
      "file-structure",
      "app-component",
      "css",
      "static-files",
      "environment-variables",
      "error-handling",
    ],
    Auth: ["auth", "session-management", "authorization", "passportjs"],
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
    Database: ["database-overview", "database-seeds"],
    Queries: [
      "query-resolvers",
      "query-usage",
      "use-query",
      "use-paginated-query",
      "use-infinite-query",
    ],
    Mutations: ["mutation-resolvers", "mutation-usage", "use-mutation"],
    "Queries & Mutations": ["invoke", "resolver-utilities"],
    "Deploying to Production": ["deploy-render", "deploy-vercel", "deploy-heroku"],
    CLI: [
      "cli-overview",
      "cli-new",
      "cli-start",
      "cli-build",
      "cli-db",
      "cli-generate",
      "cli-console",
      "cli-install",
      "cli-autocomplete",
    ],
    Recipes: ["using-recipes", "writing-recipes"],
    Templates: ["templates"],
    Advanced: [
      "blitz-config",
      "webpack-config",
      "postcss-config",
      "code-splitting",
      "middleware",
      "rpc-specification",
      "measuring-performance",
    ],
  },
}
