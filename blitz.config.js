const fs = require("fs")
const path = require("path")
const querystring = require("querystring")
const {createLoader} = require("simple-functional-loader")
const matter = require("gray-matter")
const {withTableOfContents} = require("./remark/withTableOfContents")
const {withSyntaxHighlighting} = require("./remark/withSyntaxHighlighting")
const {withProse} = require("./remark/withProse")
const {withBlitzLinks} = require("./remark/withBlitzLinks")
const minimatch = require("minimatch")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const admonitions = require("remark-admonitions")

const fallbackDefaultExports = {
  // Have to use compiled locations
  "pages/docs/**/*": ["@/layouts/DocumentationLayout", "DocumentationLayout"],
}

module.exports = withBundleAnalyzer({
  pageExtensions: ["js", "jsx", "mdx"],
  async redirects() {
    return [
      {
        source: "/docs/getting-started",
        destination: "/docs/get-started",
        permanent: false,
      },
      {
        source: "/meetup",
        destination: "https://us02web.zoom.us/j/85901497017?pwd=N0NBc0wxMzNmWFBSRzN3U3ZOZTNEZz09",
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/stickers",
        destination: "/docs/stickers",
      },
    ]
  },
  webpack(config, options) {
    if (!options.dev) {
      options.defaultLoaders.babel.options.cache = false
    }

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {loader: "@svgr/webpack", options: {svgoConfig: {plugins: {removeViewBox: false}}}},
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        options.defaultLoaders.babel,
        createLoader(function (source) {
          if (source.includes("/*START_META*/")) {
            const [meta] = source.match(/\/\*START_META\*\/(.*?)\/\*END_META\*\//s)
            return "export default " + meta
          }
          return (
            source.replace(/export const/gs, "const") + `\nMDXContent.layoutProps = layoutProps\n`
          )
        }),
        {
          loader: "@mdx-js/loader",
          options: {
            remarkPlugins: [
              withProse,
              withTableOfContents,
              withSyntaxHighlighting,
              withBlitzLinks,
              [
                admonitions,
                {
                  customTypes: {
                    caution: {
                      keyword: "caution",
                      svg:
                        '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="6.75" stroke="black" stroke-width="1.5" stroke-linecap="round"/><path d="M6.81226 4.27344H8.18774V5.91699L7.83179 8.94043H7.177L6.81226 5.91699V4.27344ZM6.84302 9.45898H8.15259V10.729H6.84302V9.45898Z" fill="black"/></svg>',
                    },
                    info: {
                      keyword: "info",
                      svg:
                        '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="6.75" stroke="black" stroke-width="1.5" stroke-linecap="round"/><path d="M6.81226 4.27344H8.18774V5.91699L7.83179 8.94043H7.177L6.81226 5.91699V4.27344ZM6.84302 9.45898H8.15259V10.729H6.84302V9.45898Z" fill="black"/></svg>',
                    },
                  },
                },
              ],
            ],
          },
        },
        createLoader(function (source) {
          let {meta: fields} = querystring.parse(this.resourceQuery.substr(1))
          let {data: meta, content: body} = matter(source)
          if (fields) {
            for (let field in meta) {
              if (!fields.split(",").includes(field)) {
                delete meta[field]
              }
            }
          }

          let extra = []
          let resourcePath = path.relative(__dirname, this.resourcePath)

          if (!/^\s*export\s+default\s+/m.test(source.replace(/```(.*?)```/gs, ""))) {
            for (let glob in fallbackDefaultExports) {
              if (minimatch(resourcePath, glob)) {
                extra.push(
                  `import { ${fallbackDefaultExports[glob][1]} as _Default } from '${fallbackDefaultExports[glob][0]}'`,
                  "export default _Default",
                )
                break
              }
            }
          }

          return [
            ...(typeof fields === "undefined" ? extra : []),
            typeof fields === "undefined" ? body : "",
            typeof fields === "undefined"
              ? `export const meta = ${JSON.stringify(meta)}`
              : `export const meta = /*START_META*/${JSON.stringify(meta || {})}/*END_META*/`,
          ].join("\n\n")
        }),
      ],
    })

    config.module.rules.push({
      test: /navs\/documentation\.json$/,
      use: [
        createLoader(function (source) {
          const documentation = JSON.parse(source)
          let finalDocumentation = []

          for (const category of documentation) {
            let pages = []
            for (const page of category.pages) {
              const pageFile = fs.readFileSync(
                path.resolve(process.cwd(), "pages", "docs", `${page}.mdx`),
                {encoding: "utf-8"},
              )
              const {data} = matter(pageFile)

              pages.push({
                ...data,
                href: `/docs/${page}`,
              })
            }
            finalDocumentation.push({
              ...category,
              pages,
            })
          }

          return JSON.stringify(finalDocumentation)
        }),
      ],
    })

    return config
  },
})
