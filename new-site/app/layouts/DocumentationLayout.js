import { SidebarLayout } from "@/layouts/SidebarLayout"
import Head from "next/head"
import { useRouter } from "next/router"
import twitterSquare from "@/img/twitter-square.jpg"
import { Title } from "@/components/Title"
import { documentationNav } from "@/navs/documentation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/home/Footer"

export function DocumentationLayout(props) {
  const router = useRouter()

  return (
    <div className="bg-gray-200">
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
        className="flex items-center justify-between px-6 mx-auto max-w-7xl"
        bannerMsg="Blitz is now in beta!"
      />
      <SidebarLayout nav={documentationNav} {...props} />
      <Footer className="text-black" />
    </div>
  )
}
