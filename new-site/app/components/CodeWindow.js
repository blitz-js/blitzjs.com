import clsx from "clsx"
import { forwardRef, Fragment, useMemo } from "react"
import tokenize from "../macros/tokenize.macro"
import { Code } from "./Code"
import styles from "./CodeWindow.module.css"

const { tokens: defaultTokens } = tokenize.html(`<div class="flex pa-2 bg-white rounded-lg shadow">
  <div class="w-32 rounded-md overflow-hidden">
    <img src="avatar.jpg" class="h-full object-fit">
  </div>
  <div class="flex flex-col">
    <p class="font-bold text-lg">"If I had to recommend a way of
      getting into programming today, it would be HTML + CSS
      with @tailwindcss."
    </p>
    <div class="flex space-between">
      <div>
        <h2 class="font-semibold">Guillermo Rauch</h2>
        <small class="text-sm text-gray-500">CEO Vercel</small>
      </div>
      <a href="https://twitter.com/rauchg" class="text-blue-500
        rounded-md p-1">View Tweet</a>
    </div>
  </div>
</div>`)

export function CodeWindow({ children, lineNumbersBackground = true, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden md:rounded-xl shadow-2xl flex ${styles.root} ${className}`}
    >
      <div className="absolute inset-0 bg-black" />
      <div className="relative flex flex-col w-full">
        <div className="flex items-center flex-none px-4 h-11">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 border-2 border-red-500 rounded-full" />
            <div className="w-3 h-3 border-2 rounded-full border-amber-400" />
            <div className="w-3 h-3 border-2 border-green-400 rounded-full" />
          </div>
        </div>
        <div className="relative flex flex-col flex-auto min-h-0 border-t border-white border-opacity-10">
          {lineNumbersBackground && (
            <div
              className="absolute inset-y-0 left-0 hidden bg-black bg-opacity-25 md:block"
              style={{ width: 50 }}
            />
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

CodeWindow.Code = forwardRef(({ tokens = defaultTokens, initialLineNumber = 1, ...props }, ref) => {
  const lineNumbers = useMemo(() => {
    const t = tokens.flat(Infinity)
    let line = initialLineNumber + 1
    let str = `${initialLineNumber}\n`
    for (let i = 0; i < t.length; i++) {
      if (typeof t[i] === "string") {
        const newLineChars = t[i].match(/\n/g)
        if (newLineChars !== null) {
          for (let j = 0; j < newLineChars.length; j++) {
            str += `${line++}\n`
          }
        }
      }
    }
    return str
  }, [tokens])

  return (
    <div className="flex flex-auto w-full min-h-0 overflow-auto">
      <div ref={ref} className="relative flex-auto w-full">
        <pre className="flex min-h-full text-xs md:text-sm">
          <div
            aria-hidden="true"
            className="flex-none hidden py-4 pr-4 text-right text-white text-opacity-50 select-none md:block"
            style={{ width: 50 }}
          >
            {lineNumbers}
          </div>
          <code className="relative flex-auto block px-4 pt-4 pb-4 overflow-auto text-white">
            <Code tokens={tokens} {...props} />
          </code>
        </pre>
      </div>
    </div>
  )
})

export function getClassNameForToken({ types, empty }) {
  const typesSize = types.length
  if (typesSize === 1 && types[0] === "plain") {
    return empty ? "inline-block" : undefined
  }
  return (types[typesSize - 1] + (empty ? " inline-block" : " token")).trim()
}

CodeWindow.Code2 = forwardRef(
  ({ lines = 0, initialLineNumber = 1, overflow = true, className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(className, "w-full flex-auto flex min-h-0", {
          "overflow-auto": overflow === true || overflow === "y",
        })}
      >
        <div className="relative flex-auto w-full">
          <pre className="flex min-h-full text-xs md:text-sm">
            <div
              aria-hidden="true"
              className="flex-none hidden py-4 pr-4 text-right text-white text-opacity-50 select-none md:block"
              style={{ width: 50 }}
            >
              {Array.from({ length: lines }).map((_, i) =>
                i === 0 ? (
                  i + initialLineNumber
                ) : (
                  <Fragment key={i + initialLineNumber}>
                    <br />
                    {i + initialLineNumber}
                  </Fragment>
                )
              )}
            </div>
            <code
              className={clsx("flex-auto relative block text-white pt-4 pb-4 px-4", {
                "overflow-auto": overflow === true || overflow === "x",
              })}
            >
              {children}
            </code>
          </pre>
        </div>
      </div>
    )
  }
)
