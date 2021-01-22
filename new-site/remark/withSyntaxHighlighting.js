const visit = require("unist-util-visit")
const { highlightCode } = require("./utils")

module.exports.withSyntaxHighlighting = () => {
  return (tree) => {
    visit(tree, "code", (node) => {
      const lang = node.lang || "bash"
      node.type = "html"
      node.value = [
        `<div class="my-6 rounded-xl overflow-hidden bg-code-block dark:bg-purple-off-black">`,
        `<pre class="language-${lang}">`,
        `<code class="language-${lang}">`,
        highlightCode(node.value, lang),
        "</code>",
        "</pre>",
        "</div>",
      ]
        .filter(Boolean)
        .join("")
    })
  }
}
