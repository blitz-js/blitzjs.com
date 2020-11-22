import { SidebarLayout } from "@/layouts/SidebarLayout"
import Head from "next/head"
import twitterSquare from "@/img/twitter-square.jpg"
import { createPageList } from "@/utils/createPageList"

const pages = createPageList(
  // use compiled location
  require.context(`pages/components/?meta=title,shortTitle,published`, false, /\.mdx$/),
  "components"
)

//Todo: make sure to add object for the nav used in the sidebar layout below.
//Can use the pages const above to get specific pages on the site.
const nav = {}

export function ComponentsLayout(props) {
  return (
    <>
      <Head>
        <meta key="twitter:card" name="twitter:card" content="summary" />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://blitzjs.com${twitterSquare}`}
        />
      </Head>
      <SidebarLayout nav={nav} {...props} />
    </>
  )
}
