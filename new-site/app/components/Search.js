import { useState, useCallback, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Head from "next/head"
import { useRouter } from "next/router"
import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react"

const ACTION_KEY_DEFAULT = ["Ctrl ", "Control"]
const ACTION_KEY_APPLE = ["⌘", "Command"]

function Hit({ hit, children }) {
  return (
    <Link href={hit.url}>
      <a>{children}</a>
    </Link>
  )
}

export function Search() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const searchButtonRef = useRef()
  const [initialQuery, setInitialQuery] = useState(null)
  const [actionKey, setActionKey] = useState()

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const onInput = useCallback(
    (e) => {
      setIsOpen(true)
      setInitialQuery(e.key)
    },
    [setIsOpen, setInitialQuery]
  )

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  })

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
        setActionKey(ACTION_KEY_APPLE)
      } else {
        setActionKey(ACTION_KEY_DEFAULT)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://BH4D9OD16A-dsn.algolia.net" crossOrigin="true" />
      </Head>
      <button type="button" ref={searchButtonRef} onClick={onOpen} className="inline-block">
        <svg width="24" height="24" className="w-6 h-6 fill-current">
          <path d="M12.7983 14.4062L14.4463 12.7729L19.4087 17.6909C19.8638 18.1419 19.8638 18.8731 19.4087 19.3241C18.9536 19.7751 18.2158 19.7751 17.7607 19.3241L12.7983 14.4062Z" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.45555 16.5999C12.9874 16.5999 16.6611 12.9591 16.6611 8.46794C16.6611 3.97676 12.9874 0.335938 8.45555 0.335938C3.92375 0.335938 0.25 3.97676 0.25 8.46794C0.25 12.9591 3.92375 16.5999 8.45555 16.5999ZM8.47707 14.8307C12.011 14.8307 14.8759 11.9916 14.8759 8.48926C14.8759 4.98696 12.011 2.14779 8.47707 2.14779C4.94309 2.14779 2.07824 4.98696 2.07824 8.48926C2.07824 11.9916 4.94309 14.8307 8.47707 14.8307Z"
          />
        </svg>
      </button>
      {isOpen &&
        createPortal(
          <DocSearchModal
            initialQuery={initialQuery}
            initialScrollY={window.scrollY}
            searchParameters={{
              facetFilters: "version:v2",
              distinct: 1,
            }}
            onClose={onClose}
            indexName="tailwindcss"
            apiKey="3df93446658cd9c4e314d4c02a052188"
            appId="BH4D9OD16A"
            navigator={{
              navigate({ suggestionUrl }) {
                setIsOpen(false)
                router.push(suggestionUrl)
              },
            }}
            hitComponent={Hit}
            transformItems={(items) => {
              return items.map((item) => {
                // We transform the absolute URL into a relative URL to
                // leverage Next's preloading.
                const a = document.createElement("a")
                a.href = item.url

                const hash = a.hash === "#content-wrapper" ? "" : a.hash

                return {
                  ...item,
                  url: `${a.pathname}${hash}`,
                }
              })
            }}
          />,
          document.body
        )}
    </>
  )
}
