import { createPageList } from "@/utils/createPageList"

const pages = createPageList(
  // use compiled location
  require.context(`pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  "docs"
)

export const documentationNav = {
  "Getting started": [
    pages["installation"],
    {
      title: "Release Notes",
      href: "https://blog.tailwindcss.com/tailwindcss-v2",
    },
  ],
  "Box Alignment": [pages["justify-content"]],
}
