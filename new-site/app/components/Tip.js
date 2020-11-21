export function TipGood({ children }) {
  return (
    <p className="flex items-start mt-8 mb-4 space-x-2">
      <svg className="w-6 h-6 flex-none mt-0.5" fill="none">
        <circle cx="12" cy="12" r="12" fill="#A7F3D0" />
        <path d="M18 8l-8 8-4-4" stroke="#047857" strokeWidth="2" />
      </svg>
      <strong className="text-base leading-7 font-semibold text-gray-900">{children}</strong>
    </p>
  )
}

export function TipBad({ children }) {
  return (
    <p className="flex items-start mt-8 mb-4 space-x-2">
      <svg className="w-6 h-6 flex-none mt-0.5" fill="none">
        <circle cx="12" cy="12" r="12" fill="#FECDD3" />
        <path d="M8 8l8 8M16 8l-8 8" stroke="#B91C1C" strokeWidth="2" />
      </svg>
      <strong className="text-base leading-7 font-semibold text-gray-900">{children}</strong>
    </p>
  )
}

export function TipCompat({ children }) {
  return (
    <div className="text-sm bg-light-blue-100 text-light-blue-800 font-medium px-4 py-3 mb-4 rounded-xl">
      <div className="flex items-start space-x-3">
        <svg width="20" height="20" className="text-light-blue-500" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.998 2a1 1 0 00-.707 1.707l.707.707v3.758a1 1 0 01-.293.707l-4 4C.815 14.769 2.154 18 4.826 18H15.17c2.672 0 4.01-3.231 2.12-5.121l-4-4a1 1 0 01-.292-.707V4.414l.707-.707A1 1 0 0012.998 2h-6zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.992 1.992 0 00-.114-.035l1.063-1.063a3 3 0 00.879-2.121z"
          />
        </svg>
        <p>{children}</p>
      </div>
    </div>
  )
}
