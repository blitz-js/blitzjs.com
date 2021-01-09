import Link from "next/link"
import { Icon } from "@/components/home/Icon"
import { LinkList } from "@/components/home/LinkList"
import { NewsletterForm } from "@/components/home/NewsletterForm"
import { IoLogoVercel } from "react-icons/io5"

export function Footer() {
  return (
    <footer className="dark:bg-purple-off-black bg-purple-mid">
      <div className="text-white border-t border-white border-opacity-50">
        <div className="relative grid px-6 mx-auto max-w-7xl lg:grid-rows-2 lg:grid-cols-2 gap-y-7 gap-x-24">
          <a href="#top">
            <Icon
              name="arrowUp"
              className="absolute right-0 mr-2 -mt-5 xl:mt-14 icon-expanded"
            ></Icon>
          </a>
          <div className="col-span-full"></div>
          <div className="space-y-5">
            <p className="text-lg font-semibold xl:text-xl">
              Want to receive the latest news and updates from the Blitz team? Sign up for our
              newsletter!
            </p>
          </div>
          <div className="mb-4 lg:row-end-5">
            <NewsletterForm />
          </div>
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
              <Link href="https://slack.blitzjs.com/">
                <a target="_blank" rel="noopener noreferrer">
                  Slack
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

          <div className="self-end mb-3 text-xs font-secondary text-off-white">
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
    </footer>
  )
}
