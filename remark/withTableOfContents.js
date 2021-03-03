const {addImport, addExport} = require("./utils")

/**
 * Extract slug
 * @param {*} headingText in the form of "This is my title {#this-is-my-title}"
 * @returns {[title: string, slug: string]}
 */
function extractSlug(headingText) {
  const [title, rest] = headingText.split(" {#", 2)
  return [title, rest.substr(0, rest.length - 1)]
}

module.exports.withTableOfContents = () => {
  return (tree) => {
    const component = addImport(tree, "@/components/Heading", "Heading")
    const contents = []

    for (let i = 0; i < tree.children.length; i++) {
      let node = tree.children[i]

      if (node.type === "heading" && [2, 3].includes(node.depth)) {
        const level = node.depth
        const headingText = node.children
          .filter((n) => ["text", "inlineCode"].includes(n.type))
          .map((n) => n.value)
          .join("")

        if (!/ {#[a-z0-9-]+}$/.test(headingText)) {
          throw new Error(`This heading is missing a handle:\n${headingText}`)
        }

        let [title, slug] = extractSlug(headingText)

        let allOtherSlugs = contents.flatMap((entry) => [
          entry.slug,
          ...entry.children.map(({slug}) => slug),
        ])
        if (allOtherSlugs.includes(slug)) {
          throw new Error(`The slug "${slug}" is used twice in the same document`)
        }

        node.type = "jsx"

        if (node.children[0].type === "jsx" && /^\s*<Heading[\s>]/.test(node.children[0].value)) {
          node.value =
            node.children[0].value.replace(
              /^\s*<Heading([\s>])/,
              `<Heading level={${level}} id="${slug}" toc={true}$1`,
            ) + title
        } else {
          node.value = `<${component} level={${level}} id="${slug}" toc={true}>${node.children
            .map(({type, value}) => {
              const nodeValue = value
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
              if (type === "inlineCode") return `<code>${nodeValue}</code>`
              return nodeValue
            })
            .join("")
            .replace(` {#${slug}}`, "")}</${component}>`
        }

        if (level === 2 || !contents.length) {
          contents.push({title, slug, children: []})
        } else {
          contents[contents.length - 1].children.push({title, slug})
        }
      } else if (
        node.type === "jsx" &&
        /^\s*<Heading[\s>]/.test(node.value) &&
        !/^\s*<Heading[^>]*\sid=/.test(node.value)
      ) {
        throw new Error(`This Heading is missing an "id" tag:\n${node.value}`)
      } else if (node.type === "heading" && node.depth <= 4) {
        const headingText = node.children
          .filter((n) => ["text", "inlineCode"].includes(n.type))
          .map((n) => n.value)
          .join("")

        if (/ {#[a-z0-9-]+}$/.test(headingText)) {
          throw new Error(`Headings lower than 3 can't have a handle:\n${headingText}`)
        }
      }
    }

    addExport(tree, "tableOfContents", contents)
  }
}
