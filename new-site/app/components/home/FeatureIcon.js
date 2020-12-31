import { Icon } from "@/components/home/Icon"

const FeatureIcon = ({ icon, title, children }) => {
  return (
    <div>
      <Icon name={icon} variant="dark" />
      {title && <h2 className="inline-block mb-3 ml-2 text-lg font-semibold align-top">{title}</h2>}
      <p className={title && "font-secondary text-sm"}>{children}</p>
    </div>
  )
}

export { FeatureIcon }
