import { Header } from "@/components/Header"
import React from "react"

export function BasicLayout({ children, navIsOpen, setNavIsOpen }) {
  return (
    <div>
      <div className="overflow-hidden">
        <div>
          <a name="top" aria-hidden>
            {null}
          </a>
          <div className="relative grid grid-cols-container gap-y-24">
            <div className="col-start-2 text-white">
              <Header />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
