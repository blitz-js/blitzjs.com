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
        source: "/joinmeetup",
        destination: "https://us02web.zoom.us/j/85901497017?pwd=eVo4YlhsU2E3UHQvUmgxTmtRUDBIZz09",
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
            remarkPlugins: [withProse, withTableOfContents, withSyntaxHighlighting, withBlitzLinks],
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

          if (/^<\/Card>$/m.test(source)) {
            extra.push(`import { Card } from '@/components/docs/Card'`)
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
