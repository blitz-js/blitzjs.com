import Link from "next/link"
import { documentationNav } from "@/navs/documentation"
import clsx from "clsx"
import styles from "./Footer.module.css"
import { Logo } from "@/components/Logo"

const footerNav = {}

export function Footer() {
  return (
    <footer className="fixed bottom-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex">
      Nothing here in the footer either! Let's get started.
    </footer>
  )
}
