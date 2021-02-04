import { useState, useEffect, createContext, Fragment, useCallback, useContext } from "react"
import { usePrevNext } from "@/hooks/usePrevNext"
import Link from "next/link"
import { SidebarLayout } from "@/layouts/SidebarLayout"
import { PageHeader } from "@/components/PageHeader"
import clsx from "clsx"
import { ReactComponent as ArrowIcon } from "@/img/icons/nav-arrow.svg"

export const ContentsContext = createContext()

export function TableOfContents({ tableOfContents, currentSection }) {
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
                  <li className="ml-2" key={subsection.slug}>
                    <a
                      href={`#${subsection.slug}`}
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

export function ContentsLayout({ children, meta, tableOfContents: toc }) {
  const { currentSection, registerHeading, unregisterHeading } = useTableOfContents(toc)
  let { prev, next } = usePrevNext()

  return (
    <div id={meta.containerId} className="pt-4 pb-24 lg:pb-16 w-full flex">
      <div className="min-w-0 flex-auto px-6 sm:px-8 xl:px-12">
        <PageHeader title={meta.title} />
        <ContentsContext.Provider value={{ registerHeading, unregisterHeading }}>
          {children}
        </ContentsContext.Provider>
        {(prev || next) && (
          <>
            <hr className="border-gray-200 mt-10 mb-4" />
            <div className="flex justify-between leading-7 font-medium">
              {prev && (
                <Link href={prev.href}>
                  <a className="flex items-center">
                    <ArrowIcon className="mr-2 fill-current" /> {prev.shortTitle || prev.title}
                  </a>
                </Link>
              )}
              {next && (
                <Link href={next.href}>
                  <a className="flex items-center">
                    {next.shortTitle || next.title}{" "}
                    <ArrowIcon className="ml-2 fill-current transform rotate-180" />
                  </a>
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
