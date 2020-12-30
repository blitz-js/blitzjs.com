import { Link } from "blitz"

const ButtonLink = ({ className, children, href, variant = "solid", ...props }) => {
  let classes = "flex items-center justify-center py-2 px-3 font-secondary text-base font-bold"

  switch (variant) {
    case "solid":
      classes += " bg-white text-off-black"
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
        {children}
      </a>
    </Link>
  )
}

export default ButtonLink
