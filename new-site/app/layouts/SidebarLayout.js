import { Link, useRouter } from "blitz"
import { createContext, forwardRef, useRef, Fragment } from "react"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"
import clsx from "clsx"
import { TableOfContents } from "@/layouts/ContentsLayout"
import { useIsDocsIndex } from "@/hooks/useIsDocsIndex"
import { PageHeader } from "@/components/PageHeader"

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
    // eslint-disable-next-line
    <div
      id="navWrapper"
      onClick={(e) => e.stopPropagation()}
      className="h-full scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0"
    >
      <div class="absolute bg-gradient-to-b from-white dark:from-purple-deep h-12 lg:block pointer-events-none w-full z-10"></div>
      <nav
        id="nav"
        ref={scrollRef}
        className="px-1 font-medium text-base sm:px-3 xl:px-5 pb-10 lg:pb-16 sticky?lg:h-(screen-18) lg:overflow-y-auto"
      >
        <ul>
          {children}
          {nav &&
            nav
              .map((category) => {
                let publishedItems = category.pages.filter((item) => item.published !== false)
                if (publishedItems.length === 0 && !fallbackHref) return null
                return (
                  <li key={category.title.props.title} className="my-10">
                    {category.title}
                    <ul>
                      {(fallbackHref ? category.pages : publishedItems).map((item, i) => (
                        <Fragment key={i}>
                          <NavItem
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
                        </Fragment>
                      ))}
                    </ul>
                  </li>
                )
              })
              .filter(Boolean)}
        </ul>
      </nav>
    </div>
  )
}

export function SidebarLayout({ children, nav, sidebar, fallbackHref, layoutProps }) {
  const isDocsIndex = useIsDocsIndex()
  return (
    <SidebarContext.Provider value={{ nav }}>
      <div className="w-full max-w-8xl mx-auto mt-16">
        <div className="lg:flex">
          {/* eslint-disable-next-line */}
          <div
            id="sidebar"
            className="hidden fixed z-40 inset-0 flex-none h-full bg-opacity-25 w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-96 xl:w-84 lg:block"
          >
            <Nav
              nav={nav}
              fallbackHref={fallbackHref}
              toc={layoutProps && layoutProps.tableOfContents}
            >
              {sidebar}
            </Nav>
          </div>
          <div
            id="content-wrapper"
            className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible lg:pr-28"
          >
            {isDocsIndex ? (
              <div className="px-2">
                <div className="px-4 lg:px-8">
                  <PageHeader title="Docs" />
                </div>
                <Nav
                  nav={nav}
                  fallbackHref={fallbackHref}
                  toc={layoutProps && layoutProps.tableOfContents}
                >
                  {sidebar}
                </Nav>
              </div>
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    </SidebarContext.Provider>
  )
}
