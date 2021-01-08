import { Link } from "blitz"

const NavLink = ({ className = "", href, children, ...props }) => {
  return (
    <Link href={href}>
      <a
        className={`block py-2 px-3 font-secondary rounded-md hover:bg-purple-light ${className}`}
        {...props}
      >
        {children}
      </a>
    </Link>
  )
}

export { NavLink }
