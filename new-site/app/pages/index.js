import { Footer } from "@/components/Footer"
import Head from "next/head"
import { Header } from "../components/Header"

export default function Home() {
  const title = "Blitz Js- The Full Stack React Framework."
  return (
    <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
      <Head>
        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta key="og:title" property="og:title" content={title} />
        <title>{title}</title>
      </Head>
      <Header></Header>
      <div className="text-xl bold">We'll put home page content here.</div>
      <Footer />
    </div>
  )
}
