import { Search } from "@/components/Search"
import { Hero } from "@/components/home/Hero"
import { BigText, InlineCode, Link, Paragraph, Widont } from "@/components/home/common"
import { useEffect, useState } from "react"
import { Logo } from "@/components/Logo"
import { Footer } from "@/components/home/Footer"
import NextLink from "next/link"
import Head from "next/head"

export default function Home() {
  const title = "Blitz Js- The Full Stack React Framework."
  return (
    <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
      <Head>
        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta key="og:title" property="og:title" content={title} />
        <title>{title}</title>
      </Head>
      <Footer />
    </div>
  )
}
