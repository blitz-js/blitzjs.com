import { createPageList } from "@/utils/createPageList"

const pages = createPageList(
  // use compiled location
  require.context(`pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  "docs"
)

export const documentationNav = [
  {
    title: "Introduction",
    pages: [
      pages["getting-started"],
      pages["tutorial"],
      pages["what-is-nextjs"],
      pages["why-blitz"],
    ],
  },
  {
    title: "Community",
    pages: [
      pages["how-the-community-operates"],
      pages["manifesto"],
      pages["community-history"],
      pages["contributing"],
      pages["maintainers"],
      pages["code-of-conduct"],
    ],
  },
  {
    title: "Basics",
    pages: [
      pages["file-structure"],
      pages["app-component"],
      pages["css"],
      pages["image-optimization"],
      pages["static-files"],
      pages["environment-variables"],
      pages["error-handling"],
    ],
  },
  {
    title: "Auth",
    pages: [
      pages["auth"],
      pages["session-management"],
      pages["authorization"],
      pages["passportjs"],
    ],
  },
  {
    title: "Pages",
    pages: [
      pages["pages"],
      pages["error-pages"],
      pages["head-component"],
      pages["document-component"],
      pages["preview-mode"],
      pages["get-static-props"],
      pages["get-static-paths"],
      pages["get-server-side-props"],
    ],
  },
  {
    title: "Routing",
    pages: [
      pages["routing"],
      pages["routing-conventions"],
      pages["link"],
      pages["route-params-query"],
      pages["router"],
      pages["api-routes"],
    ],
  },
  {
    title: "Database",
    pages: [pages["database-overview"], pages["postgres"], pages["database-seeds"], pages["fauna"]],
  },
  {
    title: "Queries",
    pages: [
      pages["query-resolvers"],
      pages["query-usage"],
      pages["use-query"],
      pages["use-paginated-query"],
      pages["use-infinite-query"],
    ],
  },
  {
    title: "Mutations",
    pages: [pages["mutation-resolvers"], pages["mutation-usage"], pages["use-mutation"]],
  },
  {
    title: "Queries & Mutations",
    pages: [pages["invoke"], pages["resolver-utilities"]],
  },
  {
    title: "Deploying to Production",
    pages: [pages["deploy-render"], pages["deploy-vercel"], pages["deploy-heroku"]],
  },
  {
    title: "CLI",
    pages: [
      pages["cli-overview"],
      pages["cli-new"],
      pages["cli-start"],
      pages["cli-build"],
      pages["cli-db"],
      pages["cli-generate"],
      pages["cli-console"],
      pages["cli-install"],
      pages["cli-autocomplete"],
      pages["cli-routes"],
    ],
  },
  {
    title: "Recipes",
    pages: [pages["using-recipes"], pages["writing-recipes"]],
  },
  {
    title: "Templates",
    pages: [pages["templates"]],
  },
  {
    title: "Advanced",
    pages: [
      pages["blitz-config"],
      pages["webpack-config"],
      pages["postcss-config"],
      pages["code-splitting"],
      pages["i18n-routing"],
      pages["middleware"],
      pages["rpc-specification"],
      pages["measuring-performance"],
    ],
  },
]
