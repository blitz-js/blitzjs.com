const LinkList = ({ title, className, children }) => {
  return (
    <div className={`grid text-sm gap-y-2 font-secondary ${className}`}>
      <h3 className="font-semibold">{title}</h3>
      {children}
    </div>
  )
}

export { LinkList }
