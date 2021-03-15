const fs = require("fs/promises")
const path = require("path")
const matter = require("gray-matter")

const getFile = (...filePath) =>
  fs.readFile(path.resolve(process.cwd(), ...filePath), {encoding: "utf-8"})

async function main() {
  const documentation = JSON.parse(await getFile("app", "core", "navs", "documentation.json"))
  let finalDocumentation = []

  for (const category of documentation) {
    let pages = []
    for (const page of category.pages) {
      const pageFile = await getFile("app", "pages", "docs", `${page}.mdx`)
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

  await fs.writeFile(
    path.resolve(process.cwd(), "app", "core", "navs", "documentation.js"),
    "export const documentationNav = " + JSON.stringify(finalDocumentation),
    {encoding: "utf-8"},
  )

  console.log("Documentation Nav generated!")
}

main()
