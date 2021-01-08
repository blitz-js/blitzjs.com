import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { BiToggleLeft, BiToggleRight } from "react-icons/bi"

const DarkModeToggle = ({ className }) => {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light")
    }
  }

  return (
    <button
      onClick={switchTheme}
      className={`p-2 rounded focus:outline-none focus:ring-inset focus:ring-white focus:ring-2 ${className}`}
    >
      {theme === "dark" ? (
        <BiToggleRight size="2rem" className="inline" />
      ) : (
        <BiToggleLeft size="2rem" className="inline" />
      )}
      <span className="mx-1">Dark Mode</span>
    </button>
  )
}

export { DarkModeToggle }
