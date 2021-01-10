import { Link } from "blitz"

const StyledLink = ({ href, children, className, ...props }) => {
  return (
    <Link href={href}>
      <a {...props} className={`hover:text-blue-mid ${className}`}>
        {children}
      </a>
    </Link>
  )
}

export { StyledLink }
