import Link from "next/link"
import { VersionSwitcher } from "@/components/VersionSwitcher"
import { Search } from "@/components/Search"
import clsx from "clsx"
import Router from "next/router"
import { Logo } from "@/components/Logo"

export function Header({ navIsOpen, onNavToggle }) {
  return (
    <>
      <div className="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex">
        Nothing here, yet! Let's make something pretty.
      </div>
    </>
  )
}
