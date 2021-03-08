import {Image} from "blitz"

import {createPageList} from "@/utils/createPageList"

const pages = createPageList(
  // use compiled location
  require.context(
    `pages/docs/?meta=title,sidebar_label,shortTitle,published,displayUrl`,
    false,
    /\.mdx$/,
  ),
  "docs",
)

const Title = ({title, iconPath, iconDarkPath}) => (
  <div className="px-3 mb-5 flex">
    {iconPath && (
      <div className={`mr-4 ${iconDarkPath ? "dark:hidden" : ""}`}>
        <Image src={iconPath} width="14" height="16" alt={title} />
      </div>
    )}
    {iconDarkPath && (
      <div className="mr-4 hidden dark:block ">
        <Image src={iconDarkPath} width="14" height="18" alt={title} />
      </div>
    )}
    <div className="text-sm uppercase tracking-wider text-purple-off-black dark:text-dark-mode-text font-normal font-primary">
      {title}
    </div>
  </div>
)

export const documentationNav = [
  {
    title: (
      <Title
        title="Introduction"
        iconPath="/img/introduction.svg"
        iconDarkPath="/img/introduction-white.svg"
      />
    ),
    pages: [
      pages["get-started"],
      pages["tutorial"],
      pages["what-is-nextjs"],
      pages["why-blitz"],
      pages["tradeoffs"],
      pages["stickers"],
    ],
  },
  {
    title: (
      <Title
        title="Community"
        iconPath="/img/people-purple.svg"
        iconDarkPath="/img/people-white.svg"
      />
    ),
    pages: [
      pages["how-the-community-operates"],
      pages["manifesto"],
      pages["community-history"],
      pages["contributing"],
      pages["maintainers"],
      pages["code-of-conduct"],
      pages["translations"],
    ],
  },
  {
    title: <Title title="Basics" iconPath="/img/basics.svg" iconDarkPath="/img/basics-white.svg" />,
    pages: [
      pages["file-structure"],
      pages["app-component"],
      pages["css"],
      pages["image-optimization"],
      pages["static-files"],
      pages["environment-variables"],
      pages["error-handling"],
      pages["testing"],
    ],
  },
  {
    title: <Title title="Pages" iconPath="/img/pages.svg" iconDarkPath="/img/pages-white.svg" />,
    pages: [
      pages["pages"],
      pages["redirects"],
      pages["error-pages"],
      pages["head-component"],
      pages["document-component"],
      pages["preview-mode"],
      pages["code-splitting"],
      pages["get-static-props"],
      pages["get-static-paths"],
      pages["get-server-side-props"],
    ],
  },
  {
    title: (
      <Title title="Routing" iconPath="/img/routing.svg" iconDarkPath="/img/routing-white.svg" />
    ),
    pages: [
      pages["routing"],
      pages["routing-conventions"],
      pages["i18n-routing"],
      pages["link"],
      pages["route-params-query"],
      pages["router"],
      pages["api-routes"],
    ],
  },
  {
    title: (
      <Title title="Auth" iconPath="/img/shield-purple.svg" iconDarkPath="/img/shield-white.svg" />
    ),
    pages: [
      pages["auth"],
      pages["session-management"],
      pages["authorization"],
      pages["auth-utils"],
      pages["passportjs"],
      pages["impersonation"],
    ],
  },
  {
    title: (
      <Title title="Database" iconPath="/img/database.svg" iconDarkPath="/img/database-white.svg" />
    ),
    pages: [
      pages["database-overview"],
      pages["postgres"],
      pages["database-seeds"],
      pages["prisma"],
      pages["fauna"],
    ],
  },
  {
    title: (
      <Title
        title="Queries & Mutations"
        iconPath="/img/queries.svg"
        iconDarkPath="/img/queries-white.svg"
      />
    ),
    pages: [
      pages["query-resolvers"],
      pages["query-usage"],
      pages["mutation-resolvers"],
      pages["mutation-usage"],
      pages["resolver-client-utilities"],
      pages["resolver-server-utilities"],
      pages["use-query"],
      pages["use-paginated-query"],
      pages["use-infinite-query"],
      pages["use-mutation"],
    ],
  },
  {
    title: (
      <Title
        title="Backend Architecture"
        iconPath="/img/mutations.svg"
        iconDarkPath="/img/mutations-white.svg"
      />
    ),
    pages: [
      pages["background-processing-with-quirrel"],
      pages["middleware"],
      pages["custom-server"],
    ],
  },
  {
    title: (
      <Title
        title="Deploying to Production"
        iconPath="/img/deploying-to-production.svg"
        iconDarkPath="/img/deploying-to-production-white.svg"
      />
    ),
    pages: [pages["deploy-render"], pages["deploy-heroku"], pages["deploy-vercel"]],
  },
  {
    title: (
      <Title
        title="Recipes"
        iconPath="/img/recipe-purple.svg"
        iconDarkPath="/img/recipe-white.svg"
      />
    ),
    pages: [pages["using-recipes"], pages["writing-recipes"]],
  },
  {
    title: (
      <Title
        title="Configuration"
        iconPath="/img/config-purple.svg"
        iconDarkPath="/img/config-white.svg"
      />
    ),
    pages: [
      pages["blitz-config"],
      pages["webpack-config"],
      pages["postcss-config"],
      pages["rpc-specification"],
      pages["measuring-performance"],
    ],
  },
  {
    title: (
      <Title
        title="CLI"
        iconPath="/img/terminal-purple.svg"
        iconDarkPath="/img/terminal-white.svg"
      />
    ),
    pages: [
      pages["cli-overview"],
      pages["cli-new"],
      pages["cli-dev"],
      pages["cli-start"],
      pages["cli-build"],
      pages["cli-db"],
      pages["cli-prisma"],
      pages["cli-generate"],
      pages["cli-console"],
      pages["cli-install"],
      pages["cli-autocomplete"],
      pages["cli-routes"],
    ],
  },
  {
    title: (
      <Title
        title="Templates"
        iconPath="/img/template-purple.svg"
        iconDarkPath="/img/template-white.svg"
      />
    ),
    pages: [pages["templates"]],
  },
]
