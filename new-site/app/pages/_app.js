import "typeface-libre-franklin"
import "typeface-roboto"
import "typeface-roboto-mono"
import "../css/main.css"
import "focus-visible"
import { Fragment } from "react"
import { Title } from "@/components/Title"
import Router from "next/router"
// import ProgressBar from "@badrap/bar-of-progress"
import Head from "next/head"
import { ThemeProvider } from "next-themes"

// const progress = new ProgressBar({
//   size: 2,
//   color: "#45009D",
//   className: "bar-of-progress",
//   delay: 100,
// })

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
// if (typeof window !== "undefined") {
//   progress.start()
//   progress.finish()
// }

// Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", () => {
  // progress.finish()
  window.scrollTo(0, 0)
})
// Router.events.on("routeChangeError", progress.finish)

export default function App({ Component, pageProps, router }) {
  const Layout = Component.layoutProps?.Layout || Fragment
  const layoutProps = Component.layoutProps?.Layout ? { layoutProps: Component.layoutProps } : {}
  const meta = Component.layoutProps?.meta || {}
  const description = meta.metaDescription || meta.description

  return (
    <>
      <Title>{meta.metaTitle || meta.title}</Title>
      <Head>
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:site" name="twitter:site" content="@blitz_js" />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:creator" name="twitter:creator" content="@blitz_js" />
        <meta key="og:url" property="og:url" content={`https://blitzjs.com${router.pathname}`} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:description" property="og:description" content={description} />
      </Head>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <Layout {...layoutProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
