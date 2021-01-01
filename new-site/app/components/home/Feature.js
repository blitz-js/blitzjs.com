const Feature = ({ title, children }) => {
  return (
    <div className="px-6 text-sm font-secondary">
      <h3 className="mb-5 text-2xl">{title}</h3>
      {children}
    </div>
  )
}

export { Feature }
