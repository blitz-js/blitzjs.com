import Link from "next/link"
import { useRouter } from "next/router"
import { createContext, forwardRef, useRef } from "react"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"
import clsx from "clsx"
import { gradients } from "@/utils/gradients"

export const SidebarContext = createContext()

const NavItem = forwardRef(({ href, children, isActive, isPublished, fallbackHref }, ref) => {
  return (
    <li ref={ref}>
      <Link href={isPublished ? href : fallbackHref}>
        <a
          className={clsx("px-3 py-2 transition-colors duration-200 relative block", {
            "text-cyan-700": isActive,
            "hover:text-gray-900 text-gray-500": !isActive && isPublished,
            "text-gray-400": !isActive && !isPublished,
          })}
        >
          <span
            className={clsx("rounded-md absolute inset-0 bg-cyan-50", {
              "opacity-50": isActive,
              "opacity-0": !isActive,
            })}
          />
          <span className="relative">{children}</span>
        </a>
      </Link>
    </li>
  )
})

function Nav({ nav, children, fallbackHref }) {
  const router = useRouter()
  const activeItemRef = useRef()
  const scrollRef = useRef()

  useIsomorphicLayoutEffect(() => {
    if (activeItemRef.current) {
      const scrollRect = scrollRef.current.getBoundingClientRect()
      const activeItemRect = activeItemRef.current.getBoundingClientRect()
      scrollRef.current.scrollTop =
        activeItemRect.top - scrollRect.top - scrollRect.height / 2 + activeItemRect.height / 2
    }
  }, [])

  return (
    <nav
      id="nav"
      ref={scrollRef}
      className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-16 sticky?lg:h-(screen-18)"
    >
      <ul>
        <TopLevelNav />
        {children}
        {nav &&
          Object.keys(nav)
            .map((category) => {
              let publishedItems = nav[category].filter((item) => item.published !== false)
              if (publishedItems.length === 0 && !fallbackHref) return null
              return (
                <li key={category} className="mt-8">
                  <h5
                    className={clsx(
                      "px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs",
                      {
                        "text-gray-900": publishedItems.length > 0,
                        "text-gray-400": publishedItems.length === 0,
                      }
                    )}
                  >
                    {category}
                  </h5>
                  <ul>
                    {(fallbackHref ? nav[category] : publishedItems).map((item, i) => (
                      <NavItem
                        key={i}
                        href={item.href}
                        isActive={item.href === router.pathname}
                        ref={item.href === router.pathname ? activeItemRef : undefined}
                        isPublished={item.published !== false}
                        fallbackHref={fallbackHref}
                      >
                        {item.shortTitle || item.title}
                      </NavItem>
                    ))}
                  </ul>
                </li>
              )
            })
            .filter(Boolean)}
      </ul>
    </nav>
  )
}

const TopLevelAnchor = forwardRef(
  ({ children, href, className, icon, isActive, onClick, color }, ref) => {
    return (
      <li>
        <a
          ref={ref}
          href={href}
          onClick={onClick}
          className={clsx(
            "flex items-center px-3 hover:text-gray-900 transition-colors duration-200",
            className,
            {
              "text-gray-900": isActive,
            }
          )}
        >
          <div className={`mr-3 rounded-md bg-gradient-to-br ${gradients[color][0]}`}>
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              {icon}
            </svg>
          </div>
          {children}
        </a>
      </li>
    )
  }
)

function TopLevelLink({ href, as, ...props }) {
  if (/^https?:\/\//.test(href)) {
    return <TopLevelAnchor href={href} {...props} />
  }

  return (
    <Link href={href} as={as} passHref>
      <TopLevelAnchor {...props} />
    </Link>
  )
}

function TopLevelNav() {
  let { pathname } = useRouter()
  let current = pathname.split("/")[1]

  return (
    <>
      <TopLevelLink
        href="/docs"
        isActive={current === "" || current === "docs"}
        color="pink"
        className="mb-4"
        icon={
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 6C10.0929 6 11.1175 6.29218 12 6.80269V16.8027C11.1175 16.2922 10.0929 16 9 16C7.90714 16 6.88252 16.2922 6 16.8027V6.80269C6.88252 6.29218 7.90714 6 9 6Z"
              fill="#FFF1F2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 6C16.0929 6 17.1175 6.29218 18 6.80269V16.8027C17.1175 16.2922 16.0929 16 15 16C13.9071 16 12.8825 16.2922 12 16.8027V6.80269C12.8825 6.29218 13.9071 6 15 6Z"
              fill="#FECDD3"
            />
          </>
        }
      >
        Documentation
      </TopLevelLink>
      <TopLevelLink
        href="https://tailwindui.com/components?utm_source=tailwindcss&utm_medium=navigation"
        color="violet"
        className="mb-4"
        icon={
          <>
            <path d="M6 9l6-3 6 3v6l-6 3-6-3V9z" fill="#F5F3FF" />
            <path d="M6 9l6 3v6l-6-3V9z" fill="#DDD6FE" />
            <path d="M18 9l-6 3v6l6-3V9z" fill="#C4B5FD" />
          </>
        }
      >
        Components
      </TopLevelLink>
    </>
  )
}

export function SidebarLayout({ children, navIsOpen, setNavIsOpen, nav, sidebar, fallbackHref }) {
  return (
    <SidebarContext.Provider value={{ nav, navIsOpen, setNavIsOpen }}>
      <div className="w-full max-w-8xl mx-auto">
        <div className="lg:flex">
          {/* eslint-disable-next-line */}
          <div
            id="sidebar"
            onClick={() => setNavIsOpen(false)}
            className={clsx(
              "fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block",
              {
                hidden: !navIsOpen,
              }
            )}
          >
            {/* eslint-disable-next-line */}
            <div
              id="navWrapper"
              onClick={(e) => e.stopPropagation()}
              className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0"
            >
              <div className="hidden lg:block h-12 pointer-events-none absolute inset-x-0 z-10 bg-gradient-to-b from-white" />
              <Nav nav={nav} fallbackHref={fallbackHref}>
                {sidebar}
              </Nav>
            </div>
          </div>
          <div
            id="content-wrapper"
            className={clsx(
              "min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible",
              {
                "overflow-hidden max-h-screen fixed": navIsOpen,
              }
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </SidebarContext.Provider>
  )
}
