import { useState, useEffect } from "react"
import { Link } from "blitz"
import { Search } from "@/components/Search"
import Logo from "@/components/Logo"
import Router from "next/router"
import { FaHeart } from "react-icons/fa"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { NavLink } from "@/components/NavLink"
import { DarkModeToggle } from "@/components/DarkModeToggle"

const Header = ({ className = "" }) => {
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
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className={`flex items-center justify-between ${className}`}>
        <div className="pr-12">
          <Link href="/">
            <a className="w-10 overflow-hidden md:w-auto">
              <span className="sr-only">Blitz home page</span>
              <Logo className="w-auto h-12 py-2 fill-current" />
            </a>
          </Link>
        </div>
        <div className="flex-1 hidden pt-2 space-x-2 text-base lg:flex">
          <NavLink href="#">Docs</NavLink>
          <NavLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/blitz-js/blitz"
          >
            GitHub
          </NavLink>
          <NavLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/blitz-js/blitz/releases"
          >
            Releases
          </NavLink>
          <NavLink target="_blank" rel="noopener noreferrer" href="https://slack.blitzjs.com/">
            Slack
          </NavLink>
          <NavLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/blitz-js/blitz/discussions"
          >
            Forum
          </NavLink>
          <NavLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sponsors/blitz-js"
          >
            <FaHeart className="inline mr-1 align-text-top" /> Donate/Sponsor
          </NavLink>
        </div>
        <div className="flex lg:text-base lg:space-x-4">
          <Search className="lg:mt-2" />
          <button
            onClick={onToggle}
            className="p-2 ml-3 -mr-2 transition-opacity rounded-md lg:hidden focus:ring-2 focus:outline-none focus:ring-inset focus:ring-white"
          >
            {isOpen ? <AiOutlineClose size="1.375rem" /> : <AiOutlineMenu size="1.375rem" />}
          </button>
          <DarkModeToggle className="hidden text-base lg:mt-2 lg:block" />
        </div>
      </div>
      {isOpen && (
        <div className={`mt-4 text-2xl lg:hidden ${className}`}>
          <NavLink href="#" className="px-3 mb-1">
            Docs
          </NavLink>
          <NavLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/blitz-js/blitz"
            className="px-3 mb-1"
          >
            GitHub
          </NavLink>
          <NavLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/blitz-js/blitz/releases"
            className="px-3 mb-1"
          >
            Releases
          </NavLink>
          <NavLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://slack.blitzjs.com/"
            className="px-3 mb-1"
          >
            Slack
          </NavLink>
          <NavLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/blitz-js/blitz/discussions"
            className="px-3 mb-1"
          >
            Forum
          </NavLink>
          <NavLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sponsors/blitz-js"
            className="px-3 mb-1"
          >
            <FaHeart className="inline mr-1 align-text-top" /> Donate/Sponsor
          </NavLink>
          <div className="my-4 border-t border-off-white border-opacity-20"></div>
          <DarkModeToggle className="text-lg" />
        </div>
      )}
    </>
  )
}

export { Header }
