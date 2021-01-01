import { Icon } from "@/components/home/Icon"

const Sponsor = ({ title, number, children }) => {
  return (
    <div className="px-6 text-sm font-secondary">
      <Icon name="medal" />
      <h3 className="inline-block mb-3 ml-2 text-lg font-semibold align-top font-primary">
        {title}
      </h3>
      {children}
    </div>
  )
}

export { Sponsor }
