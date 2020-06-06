module.exports = {
  title: "Blitz.js ⚡️",
  tagline:
    "Blitz is a Rails-like framework for monolithic, full-stack React apps — built on Next.js",
  url: "https://blitzjs.com",
  baseUrl: "/",
  favicon: "img/favicons/128x128-Favicon-Purple.png",
  organizationName: "blitz-js", // Usually your GitHub org/user name.
  projectName: "blitz", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    // Disable docusaurus dark mode because we use our own theme-ui dark mode
    disableDarkMode: true,
    algolia: {
      apiKey: "c4db860ae4162be48d4c867e33edcaa2",
      indexName: "blitzjs",
    },
    announcementBar: {
      id: "progress",
      content:
        "Black Lives Matter. <a target='_blank' href='https://support.eji.org/give/153413/#!/donation/checkout'> Support the Equal Justice Initiative.</a>",
      textColor: "#ffffff",
    },
    navbar: {
      title: "Blitz.js",
      logo: {
        alt: "Blitz.js",
        src: "https://github.com/blitz-js/art/blob/master/square-logo-600.png?raw=true",
      },
      links: [
        {
          to: "docs/getting-started",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/blitz-js/blitz",
          label: "GitHub",
          position: "left",
        },
        {
          href: "https://github.com/blitz-js/blitz/releases",
          label: "Releases",
          position: "left",
        },
        {
          href: "https://slack.blitzjs.com",
          label: "Slack",
          position: "left",
        },
        {
          href: "https://github.com/blitz-js/blitz/discussions",
          label: "Forum",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started",
            },
            {
              label: "Contributing",
              to: "docs/contributing",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://slack.blitzjs.com",
            },
            {
              label: "Forum Discussions",
              href: "https://github.com/blitz-js/blitz/discussions",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/blitz_js",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brandon Bayer and Blitz.js contributors`,
    },
  },
  plugins: [
    [
      require.resolve("./plugin"),
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/blitz-js/blitzjs.com/edit/master/",
      },
    ],
    ["@docusaurus/plugin-content-blog"],
    ["@docusaurus/plugin-content-pages"],
    ...(process.env.NODE_ENV === "production"
      ? [/*"@docusaurus/plugin-google-analytics",*/ "@docusaurus/plugin-sitemap"]
      : []),
  ],
}
