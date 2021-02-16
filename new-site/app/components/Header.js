import { useState, useEffect } from "react"
import { Link } from "blitz"
import { Search } from "@/components/Search"
import Logo from "@/components/Logo"
import ColoredLogo from "@/components/ColoredLogo"
import Router from "next/router"
import { FaHeart } from "react-icons/fa"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { NavLink } from "@/components/NavLink"
import { DarkModeToggle } from "@/components/DarkModeToggle"
import Banner from "@/components/Banner"

const menuLinks = [
  {
    name: "Documentation",
    href: "/docs/getting-started",
  },
  { name: "GitHub", href: "/docs/getting-started" },
  { name: "Releases", href: "/docs/getting-started" },
  { name: "Form", href: "/docs/getting-started" },
]

const Header = ({
  className = "",
  hasLightBg,
  useColoredLogo,
  stickyBgClass,
  hasFade,
  onNavToggle,
}) => {
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    function handleRouteChange() {
      setIsOpen(false)
    }
    Router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [isOpen])

  const onToggle = () => {
    const newValue = !isOpen
    setIsOpen(newValue)
    onNavToggle(newValue)
  }

  const bannerMsg = "Blitz is now in beta! 🎉"

  return (
    <>
      {bannerMsg && <Banner message={bannerMsg} hasLightBg={hasLightBg} />}
      <nav className={`${stickyBgClass ? "sticky top-0 z-50" : ""}`}>
        <div className={`flex items-center justify-between ${className} ${stickyBgClass}`}>
          <div className="pr-12 lg:-mt-3">
            <Link href="/">
              <a className="w-10 overflow-hidden md:w-auto">
                <span className="sr-only">Blitz home page</span>
                {useColoredLogo && (
                  <ColoredLogo className="w-auto h-12 py-2 fill-current inline dark:hidden" />
                )}
                <Logo
                  className={`w-auto h-12 py-2 fill-current ${
                    useColoredLogo ? "hidden dark:inline" : ""
                  }`}
                />
              </a>
            </Link>
          </div>
          <div className="flex-1 hidden space-x-6 text-base lg:flex">
            {menuLinks.map((link) => {
              const props = link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {}
              return (
                <NavLink href={link.href} key={link.href + link.name} {...props}>
                  {link.name}
                </NavLink>
              )
            })}
            <NavLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sponsors/blitz-js"
            >
              <FaHeart className="inline mr-1 align-text-top" /> Donate/Sponsor
            </NavLink>
          </div>
          <div className="flex lg:text-base lg:space-x-4">
            <Search className="self-center" />
            <button
              onClick={onToggle}
              className="p-2 ml-3 -mr-2 transition-opacity rounded-md lg:hidden focus:ring-2 focus:outline-none focus:ring-inset focus:ring-white"
            >
              {isOpen ? <AiOutlineClose size="1.375rem" /> : <AiOutlineMenu size="1.375rem" />}
            </button>
            <DarkModeToggle className="hidden text-base lg:my-2 lg:block" />
          </div>
        </div>
        {isOpen && (
          <div
            className={`pt-4 text-2xl lg:hidden dark:bg-purple-deep space-y-1 ${className} ${
              useColoredLogo ? "bg-white" : ""
            }`}
          >
            {menuLinks.map((link) => {
              const props = link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {}
              return (
                <NavLink href={link.href} key={link.href + link.name} {...props}>
                  {link.name}
                </NavLink>
              )
            })}
            <NavLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sponsors/blitz-js"
            >
              <FaHeart className="inline mr-1 align-text-top" /> Donate/Sponsor
            </NavLink>
            <div className="py-2">
              <div className="border-t border-black dark:border-off-white border-opacity-50"></div>
            </div>
            <DarkModeToggle className="text-lg -ml-3" />
          </div>
        )}
        {hasFade && (
          <div className="absolute bg-gradient-to-b from-white dark:from-purple-deep h-12 lg:block pointer-events-none w-full z-10"></div>
        )}
      </nav>
    </>
  )
}

export { Header }
