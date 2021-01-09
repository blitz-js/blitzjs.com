import { Link } from "blitz"
import { BsArrowRight } from "react-icons/bs"

const ButtonLink = ({ className, children, href, variant = "solid", ...props }) => {
  let classes =
    "flex items-center justify-center py-2 px-3 lg:px-5 font-secondary text-base font-bold"

  switch (variant) {
    case "solid":
      classes += " bg-white text-off-black"
      break
    case "solid-dark":
      classes += " bg-purple-light dark:bg-purple-primary text-white"
      break
    case "outline":
      classes += " border border-white text-white"
      break
    default:
      throw new Error("Invalid variant value: " + variant)
  }

  return (
    <Link href={href}>
      <a className={`${classes} ${className}`} {...props}>
        {children} <BsArrowRight size="1.5rem" className="ml-2" />
      </a>
    </Link>
  )
}

export { ButtonLink }
