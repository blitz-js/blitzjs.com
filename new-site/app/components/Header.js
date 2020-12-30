import { useState, useEffect } from "react"
import Link from "next/link"
import { Search } from "@/components/Search"
import clsx from "clsx"
import Logo from "@/components/Logo"
import Router from "next/router"

const Header = () => {
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
      <div className="sticky top-0 z-40 grid grid-cols-2 lg:z-50 max-w-8xl">
        <div className="sm:pl-6 xl:pl-8 lg:border-b-0 lg:w-60 xl:w-72">
          <Link href="/">
            <a className="w-10 overflow-hidden md:w-auto">
              <span className="sr-only">Blitz home page</span>
              <Logo className="w-auto h-12 py-2 fill-current" />
            </a>
          </Link>
        </div>
        <div className="flex justify-self-end sm:px-6 lg:mx-6 lg:px-0 xl:mx-8">
          <Search />
          <button
            onClick={onToggle}
            class="inline-block text-gray-500 hover:text-white focus:text-white focus:outline-none ml-3"
          >
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current"
            >
              <path d="M1 1H23" stroke="white" stroke-width="1.5" stroke-linecap="square" />
              <path d="M1 9L23 9" stroke="white" stroke-width="1.5" stroke-linecap="square" />
              <path d="M1 17H23" stroke="white" stroke-width="1.5" stroke-linecap="square" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="col-span-2 px-4 py-3">
            <a href="" className="block px-2 py-1 font-semibold rounded hover:bg-purple-light">
              Docs
            </a>
            <a href="" className="block px-2 py-1 mt-1 font-semibold rounded hover:bg-purple-light">
              GitHub
            </a>
            <a href="" className="block px-2 py-1 mt-1 font-semibold rounded hover:bg-purple-light">
              Releases
            </a>
            <a href="" className="block px-2 py-1 mt-1 font-semibold rounded hover:bg-purple-light">
              Slack
            </a>
            <a href="" className="block px-2 py-1 mt-1 font-semibold rounded hover:bg-purple-light">
              Forum
            </a>
            <a href="" className="block px-2 py-1 mt-1 font-semibold rounded hover:bg-purple-light">
              Donate/Sponsor
            </a>
          </div>
        )}
      </div>

      {/* <button
        type="button"
        className="fixed z-50 block w-16 h-16 text-white bg-gray-900 rounded-full bottom-4 right-4 lg:hidden"
        onClick={() => onToggle(!isOpen)}
      >
        <span className="sr-only">Open site navigation</span>
        <svg
          width="24"
          height="24"
          fill="none"
          className={clsx(
            "absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform",
            {
              "opacity-0 scale-80": isOpen,
            }
          )}
        >
          <path
            d="M4 8h16M4 16h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="24"
          height="24"
          fill="none"
          className={clsx(
            "absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform",
            {
              "opacity-0 scale-80": !isOpen,
            }
          )}
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button> */}
    </>
  )
}

export default Header
