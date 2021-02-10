export function PageHeader({ title }) {
  if (!title) return null

  return (
    <div className="pb-10">
      <div className="flex items-center">
        <h1 className="text-5xl font-semibold text-black dark:text-white font-primary">{title}</h1>
      </div>
    </div>
  )
}
