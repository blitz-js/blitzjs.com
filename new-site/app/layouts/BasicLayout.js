import { Header } from "@/components/Header"
import { Footer } from "@/components/home/Footer"
import React from "react"

export function BasicLayout({ children, navIsOpen, setNavIsOpen }) {
  return (
    <div>
      <div className="overflow-hidden">
        <div>
          <a name="top" aria-hidden>
            {null}
          </a>
          <div className="relative grid grid-cols-1 py-1 md:py-3 gap-y-24 xl:gap-y-36">
            <div className="text-white col-span-full">
              <Header className="px-6 mx-auto max-w-7xl" />
            </div>
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
