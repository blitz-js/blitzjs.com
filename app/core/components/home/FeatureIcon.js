import {Icon} from "@/components/home/Icon"

const FeatureIcon = ({icon, children}) => {
  return (
    <div className="space-y-4">
      <Icon name={icon} variant="dark" />
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue">
        {children}
      </p>
    </div>
  )
}

export {FeatureIcon}
