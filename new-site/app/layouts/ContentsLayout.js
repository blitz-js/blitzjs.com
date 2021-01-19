import { useState, useEffect, createContext, Fragment, useCallback, useContext } from "react"
import { usePrevNext } from "@/hooks/usePrevNext"
import Link from "next/link"
import { SidebarLayout, SidebarContext } from "@/layouts/SidebarLayout"
import { PageHeader } from "@/components/PageHeader"
import clsx from "clsx"

import { documentationNav } from "@/navs/documentation"

export const ContentsContext = createContext()

export function TableOfContents({ tableOfContents, currentSection }) {
  let sidebarContext = useContext(SidebarContext)
  let isMainNav = Boolean(sidebarContext)

  function closeNav() {
    if (isMainNav) {
      sidebarContext.setNavIsOpen(false)
    }
  }

  return (
    <div className="pl-8 py-2">
      <ul className="overflow-x-hidden text-black dark:text-white font-normal text-sm">
        {tableOfContents.map((section) => {
          let sectionIsActive =
            currentSection === section.slug ||
            section.children.findIndex(({ slug }) => slug === currentSection) > -1

          return (
            <Fragment key={section.slug}>
              <li>
                <a
                  href={`#${section.slug}`}
                  onClick={closeNav}
                  className={clsx(
                    "block transform transition-colors duration-200 py-2 hover:text-gray-900 no-underline",
                    {
                      "text-gray-900": sectionIsActive,
                    }
                  )}
                >
                  {section.title}
                </a>
              </li>
              {section.children.map((subsection) => {
                let subsectionIsActive = currentSection === subsection.slug

                return (
                  <li
                    className={clsx({
                      "ml-4": isMainNav,
                      "ml-2": !isMainNav,
                    })}
                    key={subsection.slug}
                  >
                    <a
                      href={`#${subsection.slug}`}
                      onClick={closeNav}
                      className={clsx(
                        "block py-2 transition-colors duration-200 hover:text-gray-900 no-underline",
                        {
                          "text-gray-900": subsectionIsActive,
                        }
                      )}
                    >
                      {subsection.title}
                    </a>
                  </li>
                )
              })}
            </Fragment>
          )
        })}
      </ul>
    </div>
  )
}

function useTableOfContents(tableOfContents) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.slug)
  let [headings, setHeadings] = useState([])

  const registerHeading = useCallback((id, top) => {
    setHeadings((headings) => [...headings.filter((h) => id !== h.id), { id, top }])
  }, [])

  const unregisterHeading = useCallback((id) => {
    setHeadings((headings) => headings.filter((h) => id !== h.id))
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0 || headings.length === 0) return
    function onScroll() {
      let y = window.pageYOffset
      let windowHeight = window.innerHeight
      let sortedHeadings = headings.concat([]).sort((a, b) => a.top - b.top)
      if (y <= 0) {
        setCurrentSection(sortedHeadings[0].id)
        return
      }
      if (y + windowHeight >= document.body.scrollHeight) {
        setCurrentSection(sortedHeadings[sortedHeadings.length - 1].id)
        return
      }
      const middle = y + windowHeight / 2
      let current = sortedHeadings[0].id
      for (let i = 0; i < sortedHeadings.length; i++) {
        if (middle >= sortedHeadings[i].top) {
          current = sortedHeadings[i].id
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true,
    })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll, true)
  }, [headings, tableOfContents])

  return { currentSection, registerHeading, unregisterHeading }
}

export function ContentsLayoutOuter({ children, layoutProps, ...props }) {
  const { currentSection, registerHeading, unregisterHeading } = useTableOfContents(
    layoutProps.tableOfContents
  )

  return (
    <SidebarLayout
      sidebar={
        <div className="mb-8">
          <TableOfContents
            tableOfContents={layoutProps.tableOfContents}
            currentSection={currentSection}
          />
        </div>
      }
      {...props}
    >
      <ContentsContext.Provider value={{ registerHeading, unregisterHeading }}>
        {children}
      </ContentsContext.Provider>
    </SidebarLayout>
  )
}

export function ContentsLayout({ children, meta, classes, tableOfContents }) {
  const toc = [
    ...(classes
      ? [{ title: "Default class reference", slug: "class-reference", children: [] }]
      : []),
    ...tableOfContents,
  ]

  const { currentSection, registerHeading, unregisterHeading } = useTableOfContents(toc)
  let { prev, next } = usePrevNext()

  return (
    <SidebarLayout nav={documentationNav} toc={toc}>
      <div id={meta.containerId} className="pt-10 pb-24 lg:pb-16 w-full flex">
        <div className="min-w-0 flex-auto px-4 sm:px-6 xl:px-8">
          <PageHeader
            title={meta.title}
            description={meta.description}
            badge={{ key: "Tailwind CSS version", value: meta.featureVersion }}
            border={!classes && meta.headerSeparator !== false}
          />
          {(prev || next) && (
            <>
              <hr className="border-gray-200 mt-10 mb-4" />
              <div className="flex justify-between leading-7 font-medium">
                {prev && (
                  <Link href={prev.href}>
                    <a>← {prev.shortTitle || prev.title}</a>
                  </Link>
                )}
                {next && (
                  <Link href={next.href}>
                    <a>{next.shortTitle || next.title} →</a>
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </SidebarLayout>
  )
}
