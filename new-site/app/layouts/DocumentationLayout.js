import { SidebarLayout } from "@/layouts/SidebarLayout"
import Head from "next/head"
import { useRouter } from "next/router"
import twitterSquare from "@/img/twitter-square.jpg"
import { Title } from "@/components/Title"
import { Header } from "@/components/Header"
import { Footer } from "@/components/home/Footer"

export function DocumentationLayout(props) {
  const router = useRouter()

  return (
    <div className="bg-gray-200 dark:bg-purple-deep">
      <Title suffix={router.pathname === "/" ? undefined : "Tailwind CSS"}>
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
        className="flex items-center justify-between px-6 mx-auto max-w-7xl bg-gray-200 dark:bg-purple-deep"
        bannerMsg="Blitz is now in beta!"
        useColoredLogo
      />
      <SidebarLayout {...props} />
      <Footer className="text-black dark:text-white" />
    </div>
  )
}
