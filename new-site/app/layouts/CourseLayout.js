import { SidebarLayout } from "@/layouts/SidebarLayout"
import twitterCardScreencasts from "@/img/twitter-card-screencasts.png"
import Head from "next/head"
import { useRouter } from "next/router"
import { Title } from "@/components/Title"
import { createPageList } from "@/utils/createPageList"

const pages = createPageList(
  // use compiled location
  require.context("pages/course/?meta=title,shortTitle,published", true, /\.mdx$/),
  "course"
)

//Todo: return object of nav pages used in the component below.
const nav = {}

export function CourseLayout(props) {
  const router = useRouter()

  return (
    <>
      <Title suffix={router.pathname === "/course" ? undefined : "Using Blitz.js"}>
        {props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}
      </Title>
      <Head>
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://tailwindcss.com${twitterCardScreencasts}`}
        />
        <meta
          key="og:image"
          property="og:image"
          content={`https://tailwindcss.com${twitterCardScreencasts}`}
        />
      </Head>
      <SidebarLayout nav={nav} fallbackHref="/course/coming-soon" {...props} />
    </>
  )
}
