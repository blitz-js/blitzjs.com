import { MutableRefObject, useEffect, useRef, useState } from "react"

const DEFAULT_SCROLLBAR_THUMB_SIZE = 54

export default function Scrollbar(props: {
  children: React.ReactChildren
  thumbHeight: number
  className: string
  thumbColor?: "white" | "black"
}) {
  const { children, thumbHeight, className, thumbColor } = props

  const elementRef = useRef<HTMLDivElement>(null)

  const [scrollbarThumb, setScrollbarThumb] = useState(DEFAULT_SCROLLBAR_THUMB_SIZE)
  const [displacement, setDisplacement] = useState(0)

  const handleScroll = () => {
    const element = elementRef.current

    if (element) {
      const { offsetWidth, scrollWidth, scrollLeft } = element
      let positionLeft =
        (scrollLeft * (offsetWidth - scrollbarThumb)) /
        (scrollWidth - scrollbarThumb - (offsetWidth - scrollbarThumb))
      positionLeft = Math.min(positionLeft, offsetWidth - scrollbarThumb)
      setDisplacement(positionLeft)
    }
  }

  const handleResize = () => {
    const element = elementRef.current

    if (element) {
      const { offsetWidth, scrollWidth } = element
      const minScrollbarWidth = Math.min(
        (offsetWidth / scrollWidth) * offsetWidth,
        DEFAULT_SCROLLBAR_THUMB_SIZE
      )

      setScrollbarThumb(minScrollbarWidth)
    }
  }

  useEffect(() => {
    const element = elementRef.current

    element?.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    window.addEventListener("resize", handleScroll)

    return () => {
      element?.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("resize", handleScroll)
    }
  }, [scrollbarThumb])

  useEffect(() => {
    handleScroll()
    handleResize()
  }, [])

  const getThumbColor = (color?: "white" | "black") => {
    if (color !== undefined) {
      if (color === "white") {
        return "white"
      } else {
        return "black"
      }
    }
  }

  return (
    <div className="relative h-full">
      <div ref={elementRef} className="scrollbar-none relative overflow-x-auto h-full">
        {children}
      </div>
      <div className={`w-full h-2 bottom-0 left-0 absolute rounded ${className}`}>
        <hr className="text-blue-mid relative top-1/2 transform -translate-y-1/2" />
        <div
          className="bg-black dark:bg-white absolute opacity-100 rounded top-1/2 transform -translate-y-1/2"
          style={{
            backgroundColor: getThumbColor(thumbColor),
            height: thumbHeight,
            width: scrollbarThumb,
            left: displacement,
          }}
        />
      </div>
    </div>
  )
}
