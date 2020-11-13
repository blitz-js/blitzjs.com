import { SidebarLayout } from 'app/layouts/SidebarLayout'
import Head from 'next/head'
import twitterSquare from 'app/img/twitter-square.png'
import { createPageList } from 'app/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/components/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'components'
)

const nav = {
  Examples: [
    pages['alerts'],
    pages['buttons'],
    pages['cards'],
    pages['forms'],
    pages['flexbox-grids'],
    pages['navigation'],
  ],
}

export function ComponentsLayout(props) {
  return (
    <>
      <Head>
        <meta key="twitter:card" name="twitter:card" content="summary" />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://tailwindcss.com${twitterSquare}`}
        />
      </Head>
      <SidebarLayout nav={nav} {...props} />
    </>
  )
}
