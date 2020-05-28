/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    Introduction: ["manifesto"],
    Basics: [
      "basics/getting-started",
      "basics/file-structure",
      "basics/pages-and-routing",
      "basics/custom-api-routes",
    ],
    Queries: ["queries/define", "queries/use"],
    Mutations: ["mutations/define", "mutations/use"],
    "Deploying to Production": ["deploy/render", "deploy/vercel"],
    CLI: ["cli/introduction", "cli/commands"],
    Advanced: ["advanced/webpack-config", "advanced/rpc-specification"],
    Contributing: [
      "contributing/how-to-contribute",
      "contributing/code-of-conduct",
      "contributing/future-of-blitz",
    ],
  },
}
