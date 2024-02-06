import {Link as BlitzLink} from "blitz"

export default function SimpleLink({href, external = !href.startsWith("/"), children}) {
  return (
    <BlitzLink href={href}>
      <a
        href={href}
        className="text-purple-light dark:text-purple-extralight font-medium dark:font-bold no-underline dark:underline hover:underline"
        {...(external ? {target: "_blank", rel: "noopener noreferrer"} : {})}
      >
        {children}
      </a>
    </BlitzLink>
  )
}
