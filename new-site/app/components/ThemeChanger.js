import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div>
      The current theme is: {theme} and the resolved theme is: {resolvedTheme}
      <br />
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  )
}

export default ThemeChanger
