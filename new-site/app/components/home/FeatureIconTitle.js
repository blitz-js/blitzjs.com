import { Icon } from "@/components/home/Icon"

const FeatureIconTitle = ({ icon, children, title }) => {
  return (
    <div>
      <Icon name={icon} variant="dark" />
      <h2 className="inline-block mt-0 mb-3 ml-2 text-lg font-semibold align-top lg:align-bottom lg:text-xl">
        {title}
      </h2>
      <p className="text-sm font-secondary lg:mt-2">{children}</p>
    </div>
  )
}

export { FeatureIconTitle }
