import { SidebarLayout } from "@/layouts/SidebarLayout"
import Head from "next/head"
import { useRouter } from "next/router"
import twitterSquare from "@/img/twitter-square.jpg"
import { Title } from "@/components/Title"
import { Header } from "@/components/Header"
import { Footer } from "@/components/home/Footer"

import { documentationNav } from "@/navs/documentation"

export function DocumentationLayout(props) {
  const router = useRouter()

  return (
    <div className="bg-gray-200 dark:bg-purple-deep py-1 md:py-3">
      <Title suffix={router.pathname === "/" ? undefined : "Blitz.js"}>
        {props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}
      </Title>
      <Head>
        <meta key="twitter:card" name="twitter:card" content="summary" />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://tailwindcss.com${twitterSquare}`}
        />
      </Head>
      <Header
        className="flex items-center justify-between px-6 mx-auto max-w-7xl"
        bannerMsg="Blitz is now in beta!"
        hasLightBg
        useColoredLogo
        stickyBgClass="bg-gray-200 dark:bg-purple-deep"
      />
      <SidebarLayout nav={documentationNav} {...props} />
      <Footer className="text-black dark:text-white" />
    </div>
  )
}
