import {useEffect, useState} from "react"

import {Header} from "@/components/Header"
import {Footer} from "@/components/home/Footer"
import SimpleLink from "@/components/SimpleLink"
import {SocialCards} from "@/components/SocialCards"

const SecurityPage = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = navIsOpen ? "hidden" : "unset"
  }, [navIsOpen])

  return (
    <div className="relative py-1 md:py-3 min-h-screen bg-white dark:bg-purple-deep">
      <SocialCards imageUrl="/social-homepage.png" />
      <Header
        className="px-6 mx-auto max-w-7xl"
        hasLightBg
        useColoredLogo
        stickyBgClass="bg-white dark:bg-purple-deep"
        hasFade
        onNavToggle={setNavIsOpen}
      />
      <div
        className={
          "absolute w-full h-full row-start-1 row-end-5 background-to-video rounded-bl-3xl xl:rounded-bl-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-black dark:to-purple-off-black " +
          (navIsOpen ? "z-20 fixed" : "-z-10")
        }
      ></div>
      <main className="mx-auto max-w-7xl px-6 py-24 xl:py-36 text-black dark:text-dark-mode-text space-y-16 lg:space-y-20">
        <h1 className="font-primary text-3xl lg:text4xl xl:text-5xl font-semibold">
          Security Policy
        </h1>
        <div className="font-secondary text-md text-gray-600 dark:text-gray-300 space-y-6 max-w-2xl text-justify">
          <p>Thank you for taking the time to responsibly disclose any issues you find.</p>
          <p>
            All security bugs should be reported by email to{" "}
            <SimpleLink href="mailto:security@blitzjs.com">security@blitzjs.com</SimpleLink>. Your
            email will be read by Brandon Bayer, the creator and lead maintainer of Blitz.js, and
            he&apos;ll answer you with the steps you should follow. If you would like, you can
            encrypt your report using{" "}
            <SimpleLink href="/pgp-key.txt" external>
              our public key
            </SimpleLink>
            .
          </p>
          <p>
            This email address receives a large amount of spam, so be sure to use a descriptive
            subject line to avoid having your report be missed.
          </p>
          <p>
            If you have not received a reply to your email within 48 hours, or have not heard from
            the security team for the past five days, there are a few steps you can take (in order):
          </p>
          <ol>
            <li>
              1. Contact Brandon <i>personally</i> via{" "}
              <SimpleLink href="https://twitter.com/flybayer">Twitter</SimpleLink> or{" "}
              <SimpleLink href="https://discord.blitzjs.com/">Discord</SimpleLink>.
            </li>
            <li>
              2. Contact any of the Core Team members <i>personally</i> via Twitter or{" "}
              <SimpleLink href="https://discord.blitzjs.com/">Discord</SimpleLink>.
            </li>
            <li>
              3. Post on <SimpleLink href="https://github.com/blitz-js/blitz">GitHub</SimpleLink> a
              brief description of the issue.
            </li>
          </ol>
          <p>
            Please note that GitHub issues are public. When escalating in these venues, please do
            not discuss your issue. Simply say that you’re trying to get a hold of someone from the
            security team.
          </p>
        </div>
      </main>
      <Footer className="text-black dark:text-dark-mode-text" hasDarkMode />
    </div>
  )
}

SecurityPage.meta = {
  title: "Security - Blitz.js",
  description: `Blitz is a hyper-productive fullstack React framework that's built on Next.js and features a "Zero-API" data layer.`,
}

export default SecurityPage
