import Link from "next/link"
import { Icon } from "@/components/home/Icon"
import { LinkList } from "@/components/home/LinkList"
import { NewsletterForm } from "@/components/home/NewsletterForm"
import { IoLogoVercel } from "react-icons/io5"

export function Footer({ className }) {
  return (
    <footer className={className}>
      <div className="text-white border-t border-white border-opacity-50">
        <div className="relative mx-auto max-w-7xl">
          <a href="#top" className="absolute right-0 mr-2 -mt-5 xl:mt-24 xl:mr-6">
            <Icon name="arrowUp" className="icon-expanded"></Icon>
          </a>
        </div>
        <div className="grid px-6 mx-auto max-w-7xl lg:grid-cols-3 gap-x-24 my-14 lg:mt-24 lg:mb-12 gap-y-7">
          <div className="flex flex-col justify-between space-y-7">
            <p className="text-lg font-semibold">
              Want to receive the latest news and updates from the Blitz team? Sign up for our
              newsletter!
            </p>
            <div className="pb-5 lg:pb-0">
              <NewsletterForm />
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-7 lg:col-span-2">
            <div className="grid gap-7 md:grid-cols-3">
              <LinkList title="Docs">
                <Link href="/docs/getting-started">
                  <a>Getting Started</a>
                </Link>
                <Link href="/docs/contributing">
                  <a>Contributing</a>
                </Link>
              </LinkList>

              <LinkList title="Community">
                <Link href="https://discord.blitzjs.com/">
                  <a target="_blank" rel="noopener noreferrer">
                    Discord
                  </a>
                </Link>
                <Link href="https://github.com/blitz-js/blitz/discussions">
                  <a target="_blank" rel="noopener noreferrer">
                    Forum Discussions
                  </a>
                </Link>
                <Link href="https://github.com/sponsors/blitz-js">
                  <a target="_blank" rel="noopener noreferrer">
                    Donate/Sponsor
                  </a>
                </Link>
              </LinkList>

              <LinkList title="Social">
                <Link href="https://github.com/blitz-js/blitz">
                  <a target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Link>
                <Link href="https://twitter.com/blitz_js">
                  <a target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </Link>
              </LinkList>
            </div>

            <div className="text-xs font-secondary text-off-white">
              <Link href="https://vercel.com/?utm_source=blitzjs">
                <a target="_blank" rel="noopener noreferrer">
                  Hosted on <IoLogoVercel className="inline" /> Vercel
                </a>
              </Link>
              <br />
              Copyright &copy; 2020 Brandon Bayer and Blitz.js Contributors
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
