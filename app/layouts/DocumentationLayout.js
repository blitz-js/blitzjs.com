import { useState, useEffect } from "react"
import { SidebarLayout } from "@/layouts/SidebarLayout"
import { Title } from "@/components/Title"
import { Header } from "@/components/Header"
import { Footer } from "@/components/home/Footer"

import { documentationNav } from "@/navs/documentation"
import { SocialCards } from "../components/SocialCards"

export function DocumentationLayout(props) {
  const [navIsOpen, setNavIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = navIsOpen ? "hidden" : "unset"
  }, [navIsOpen])

  return (
    <div className="bg-white dark:bg-purple-deep py-1 md:py-3">
      <Title>{props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}</Title>

      <SocialCards imageUrl="/social-docs.png" />
      <Header
        className="px-6 mx-auto max-w-7xl"
        hasLightBg
        useColoredLogo
        stickyBgClass="bg-white dark:bg-purple-deep"
        hasFade
        onNavToggle={(isOpen) => {
          setNavIsOpen(isOpen)
        }}
      />
      <div className="max-w-7xl mx-auto font-secondary dark:">
        <SidebarLayout nav={documentationNav} {...props} />
      </div>
      <Footer className="text-black dark:text-dark-mode-text" hasDarkMode />
    </div>
  )
}
