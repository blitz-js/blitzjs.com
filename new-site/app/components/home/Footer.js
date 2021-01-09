import Link from "next/link"
import { Icon } from "@/components/home/Icon"
import { LinkList } from "@/components/home/LinkList"
import { NewsletterForm } from "@/components/home/NewsletterForm"

export function Footer() {
  return (
    <footer className="bg-purple-mid">
      <div className="relative grid col-span-3 text-white border-t border-white border-opacity-50 grid-cols-container gap-y-7">
        <a href="#top">
          <Icon
            name="arrowUp"
            className="absolute right-0 mr-2 -mt-5"
            size="2.5rem"
            iconSize="1.8rem"
          ></Icon>
        </a>
        <div className="col-span-3"></div>
        <p className="col-start-2 text-lg font-semibold">
          Want to receive the latest news and updates from the Blitz team? Sign up for our
          newsletter!
        </p>
        <NewsletterForm className="col-start-2 mb-4" />
        <LinkList title="Docs" className="col-start-2">
          <Link href="#">
            <a>Getting Started</a>
          </Link>
          <Link href="#">
            <a>Contributing</a>
          </Link>
        </LinkList>

        <LinkList title="Community" className="col-start-2">
          <Link href="#">
            <a>Slack</a>
          </Link>
          <Link href="#">
            <a>Forum Discussions</a>
          </Link>
          <Link href="#">
            <a>Donate/Sponsor</a>
          </Link>
        </LinkList>

        <LinkList title="Social" className="col-start-2">
          <Link href="#">
            <a>GitHub</a>
          </Link>
          <Link href="#">
            <a>Twitter</a>
          </Link>
        </LinkList>

        <div className="col-start-2 mb-3 text-xs font-secondary">
          Hosted on Vercel
          <br />
          Copyright &copy; 2020 Brandon Bayer and Blitz.js Contributors
        </div>
      </div>
    </footer>
  )
}
