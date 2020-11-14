const path = require("path")
const querystring = require("querystring")
const { createLoader } = require("simple-functional-loader")
const frontMatter = require("front-matter")
const { withTableOfContents } = require("./remark/withTableOfContents")
const { withSyntaxHighlighting } = require("./remark/withSyntaxHighlighting")
const { withNextLinks } = require("./remark/withNextLinks")
const minimatch = require("minimatch")
const withCodeSamples = require("./remark/withCodeSamples")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const fallbackLayouts = {
  // Have to use path of compiled app
  "pages/docs/**/*": ["@/layouts/DocumentationLayout", "DocumentationLayout"],
  "pages/components/**/*": ["@/layouts/ComponentsLayout", "ComponentsLayout"],
  "pages/course/**/*": ["@/layouts/CourseLayout", "CourseLayout"],
}

const fallbackDefaultExports = {
  // Have to use path of compiled app
  "pages/{docs,components}/**/*": ["@/layouts/ContentsLayout", "ContentsLayout"],
  "pages/course/**/*": ["@/layouts/VideoLayout", "VideoLayout"],
}

module.exports = withBundleAnalyzer({
  pageExtensions: ["js", "jsx", "mdx"],
  experimental: {
    modern: true,
  },
  middleware: [],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
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
      test: /\.mdx$/,
      use: [
        options.defaultLoaders.babel,
        createLoader(function (source) {
          return source + `\nMDXContent.layoutProps = layoutProps\n`
        }),
        {
          loader: "@mdx-js/loader",
          options: {
            remarkPlugins: [
              withCodeSamples,
              /*withProse,*/ withTableOfContents,
              withSyntaxHighlighting,
              withNextLinks,
            ],
          },
        },
        createLoader(function (source) {
          let { meta: fields } = querystring.parse(this.resourceQuery.substr(1))
          let { attributes: meta, body } = frontMatter(source)
          if (fields) {
            for (let field in meta) {
              if (!fields.split(",").includes(field)) {
                delete meta[field]
              }
            }
          }

          let extra = []
          let resourcePath = path.relative(__dirname, this.resourcePath)

          if (!/^\s*export\s+(var|let|const)\s+Layout\s+=/m.test(source)) {
            for (let glob in fallbackLayouts) {
              if (minimatch(resourcePath, glob)) {
                extra.push(
                  `import { ${fallbackLayouts[glob][1]} as _Layout } from '${fallbackLayouts[glob][0]}'`,
                  "export const Layout = _Layout"
                )
                break
              }
            }
          }

          if (!/^\s*export\s+default\s+/m.test(source.replace(/```(.*?)```/gs, ""))) {
            for (let glob in fallbackDefaultExports) {
              if (minimatch(resourcePath, glob)) {
                extra.push(
                  `import { ${fallbackDefaultExports[glob][1]} as _Default } from '${fallbackDefaultExports[glob][0]}'`,
                  "export default _Default"
                )
                break
              }
            }
          }

          return [
            ...(typeof fields === "undefined" ? extra : []),
            typeof fields === "undefined" ? body : "",
            `export const meta = ${JSON.stringify(meta)}`,
          ].join("\n\n")
        }),
      ],
    })

    return config
  },
})
