module.exports = {
  title: "Blitz JS ⚡️",
  tagline: "Focus on what matters, let Blitz handle the rest!",
  url: "https://blitzjs.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "blitzjs", // Usually your GitHub org/user name.
  projectName: "blitzjs.com", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Blitz JS ⚡️",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      links: [
        {
          to: "docs/basics/getting-started",
          label: "Docs",
          position: "left"
        },
        { to: "docs/introduction/manifesto", page: "Manifesto", label: "Manifesto", position: "left" },
        {
          href: "https://github.com/blitz-js/blitz",
          label: "GitHub",
          position: "right"
        },
        {}
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/basics/getting-started"
            },
            {
              label: "Versions",
              to: "versions"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://slack.blitzjs.com"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/blitz_js"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brandon Bayer and Blitz.js contributors`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/blitz-js/blitzjs.com/tree/master/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
