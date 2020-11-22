import { createPageList } from "@/utils/createPageList"

const pages = createPageList(
  // use compiled location
  require.context(`pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  "docs"
)

export const documentationNav = {}
