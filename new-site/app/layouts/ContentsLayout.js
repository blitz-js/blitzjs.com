import { useState, useEffect, createContext, Fragment, useCallback } from "react"
import { usePrevNext } from "@/hooks/usePrevNext"
import { Link, useRouter } from "blitz"
import { SidebarLayout } from "@/layouts/SidebarLayout"
import { PageHeader } from "@/components/PageHeader"
import clsx from "clsx"
import { ReactComponent as ArrowIcon } from "@/img/icons/nav-arrow.svg"
import { BiChevronLeft } from "react-icons/bi"
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs"
import Select, { components } from "react-select"

export const ContentsContext = createContext()

export function TableOfContents({ tableOfContents, currentSection }) {
  return (
    <div className="pl-8">
      <ul className="overflow-x-hidden text-black dark:text-white font-normal text-xs">
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
                    "block transform transition-colors duration-200 py-2 hover:text-gray-900 dark:hover:text-off-white no-underline",
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

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <BsCaretUpFill size="10" className="text-black dark:text-white" />
        <BsCaretDownFill
          size="10"
          className="text-black dark:text-white"
          style={{ marginTop: -2 }}
        />
      </components.DropdownIndicator>
    )
  )
}

export function ContentsLayout({ children, meta, tableOfContents: toc }) {
  const { currentSection, registerHeading, unregisterHeading } = useTableOfContents(toc)
  let { prev, next } = usePrevNext()
  const router = useRouter()
  const [topic, setTopic] = useState(null)

  return (
    <>
      <Link href="/docs">
        <a className="lg:hidden mx-6 text-xxs px-2.5 py-0.5 rounded-sm bg-off-white font-primary inline-flex mb-4 dark:bg-purple-off-black -mt-4">
          <BiChevronLeft size={18} /> Back to Docs
        </a>
      </Link>
      <div id={meta.containerId} className="pt-4 pb-24 lg:pb-16 w-full flex">
        <div className="min-w-0 flex-auto px-6 sm:px-8 xl:px-12">
          <PageHeader title={meta.title} />
          <div
            className={clsx("lg:hidden", { "mt-5 mb-12": toc.length, "h-px mt-8": !toc.length })}
          >
            {toc.length && (
              <>
                <h3 className="dark:text-white mb-2 text-sm">Topics</h3>
                <Select
                  value={topic}
                  className="topic-select"
                  classNamePrefix="topic-select"
                  options={toc.map((option) => ({ value: option.slug, label: option.title }))}
                  placeholder="Jump to a Topic"
                  onChange={(e) => {
                    if (e && e.value) {
                      const hash = e.value
                      setTopic(null)
                      router.push({ hash })
                    }
                  }}
                  components={{ DropdownIndicator }}
                  styles={{
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isSelected ? null : null,
                    }),
                  }}
                />
              </>
            )}
          </div>
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
    </>
  )
}
