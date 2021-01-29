import { Link, useRouter } from "blitz"
import { createContext, forwardRef, useRef, Fragment } from "react"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"
import clsx from "clsx"
import { TableOfContents } from "@/layouts/ContentsLayout"

export const SidebarContext = createContext()

const NavItem = forwardRef(({ href, children, isActive, isPublished, fallbackHref }, ref) => {
  return (
    <li ref={ref}>
      <Link href={isPublished ? href : fallbackHref}>
        <a
          className={clsx("px-3 py-2 transition-colors duration-200 relative block font-bold", {
            underline: isActive,
            "hover:underline": !isActive && isPublished,
            "text-gray-400": !isActive && !isPublished,
          })}
        >
          <span className="relative">{children}</span>
        </a>
      </Link>
    </li>
  )
})

function Nav({ nav, children, fallbackHref, toc }) {
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
      className="px-1 mt-6 font-medium text-base sm:px-3 xl:px-5 pb-10 lg:pb-16 sticky?lg:h-(screen-18) overflow-y-auto"
    >
      <ul>
        {children}
        {nav &&
          nav
            .map((category) => {
              let publishedItems = category.pages.filter((item) => item.published !== false)
              if (publishedItems.length === 0 && !fallbackHref) return null
              return (
                <li key={category.title.props.title} className="my-5">
                  {category.title}
                  <ul>
                    {(fallbackHref ? category.pages : publishedItems).map((item, i) => (
                      <>
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
                        {item.href === router.pathname && toc && toc.length ? (
                          <TableOfContents tableOfContents={toc} />
                        ) : null}
                      </>
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

export function SidebarLayout({
  children,
  navIsOpen,
  setNavIsOpen,
  nav,
  sidebar,
  fallbackHref,
  layoutProps,
}) {
  return (
    <SidebarContext.Provider value={{ nav, navIsOpen, setNavIsOpen }}>
      <div className="w-full max-w-8xl mx-auto">
        <div className="lg:flex">
          {/* eslint-disable-next-line */}
          <div
            id="sidebar"
            onClick={() => setNavIsOpen(false)}
            className={clsx(
              "fixed z-40 inset-0 flex-none h-full bg-opacity-25 w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-72 xl:w-84 lg:block",
              {
                hidden: !navIsOpen,
              }
            )}
          >
            {/* eslint-disable-next-line */}
            <div
              id="navWrapper"
              onClick={(e) => e.stopPropagation()}
              className="h-full scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0"
            >
              <Nav
                nav={nav}
                fallbackHref={fallbackHref}
                toc={layoutProps && layoutProps.tableOfContents}
              >
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
