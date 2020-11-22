import { useIsHome } from "@/hooks/useIsHome"
import { PageHeader } from "@/components/PageHeader"
import clsx from "clsx"

export function BasicLayout({ children, meta }) {
  let isHome = useIsHome()

  return (
    <div
      id={meta.containerId}
      className={clsx("pb-16 w-full", { "pt-12": isHome, "pt-24 lg:pt-28": !isHome })}
    >
      <PageHeader
        title={meta.title}
        description={meta.description}
        badge={{ key: "Blitz.js version", value: meta.featureVersion }}
        border={meta.headerSeparator !== false}
      />
      <div className="flex">
        <div className="markdown px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4">
          {children}
        </div>
      </div>
    </div>
  )
}
