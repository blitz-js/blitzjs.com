import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { BiToggleLeft, BiToggleRight } from "react-icons/bi"

const DarkModeToggle = ({ className }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
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
