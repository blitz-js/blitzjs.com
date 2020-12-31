import { BiBoltCircle } from "react-icons/bi"
import { IoLayers } from "react-icons/io5"
import { IoMdThumbsUp, IoMdCube } from "react-icons/io"
import { BsGraphUp } from "react-icons/bs"
import { FaPlug, FaCircle } from "react-icons/fa"
import { CgDatabase } from "react-icons/cg"
import { MdAddToQueue } from "react-icons/md"
import { GoFileCode } from "react-icons/go"
import { BsCollection, BsCardChecklist, BsBarChartFill } from "react-icons/bs"
import { AiOutlineDatabase, AiFillDatabase } from "react-icons/ai"
import { HiLightningBolt } from "react-icons/hi"
import { RiFileCodeFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import { GiCube } from "react-icons/gi"
import { FaMedal } from "react-icons/fa"

const Icon = ({
  name,
  className = "",
  size = "1.5625rem",
  iconSize = "0.9375rem",
  variant = "light",
}) => {
  let iconClassName = "inline col-start-1 row-start-1 text-purple-light"
  let reactIcon

  switch (name) {
    case "lighteningBolt":
      reactIcon = <HiLightningBolt className={iconClassName} size={iconSize} />
      break
    case "layers":
      reactIcon = <IoLayers className={iconClassName} size={iconSize} />
      break
    case "graphUp":
      reactIcon = <BsBarChartFill className={iconClassName} size={iconSize} />
      break
    case "thumbsUp":
      reactIcon = <IoMdThumbsUp className={iconClassName} size={iconSize} />
      break
    case "database":
      reactIcon = <AiFillDatabase className={iconClassName} size={iconSize} />
      break
    case "fileCode":
      reactIcon = <RiFileCodeFill className={iconClassName} size={iconSize} />
      break
    case "plugin":
      reactIcon = <FaPlug className={iconClassName} size={iconSize} />
      break
    case "typescript":
      reactIcon = <SiTypescript className={iconClassName} size={iconSize} />
      break
    case "scaffolding":
      reactIcon = <IoMdCube className={iconClassName} size={iconSize} />
      break
    case "medal":
      reactIcon = <FaMedal className={iconClassName} size={iconSize} />
      break
    default:
      throw new Error("Invalid icon " + name)
  }

  let backgroundClassName

  switch (variant) {
    case "dark":
      backgroundClassName = "text-white"
      break
    case "light":
      backgroundClassName = "text-off-white"
      break
    default:
      throw new Error("Invalid variant " + variant)
  }

  return (
    <span
      className={`inline-grid items-center grid-cols-1 grid-rows-1 justify-items-center ${className}`}
    >
      <FaCircle className={`col-start-1 row-start-1 ${backgroundClassName}`} size={size}></FaCircle>
      {reactIcon}
    </span>
  )
}

export { Icon }
