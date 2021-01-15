const StyledLink = ({ href, children, className, ...props }) => {
  return (
    <a href={href} {...props} className={`hover:text-blue-mid ${className}`}>
      {children}
    </a>
  )
}

export { StyledLink }
