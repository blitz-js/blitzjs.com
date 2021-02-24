import { Header } from "@/components/Header"
import { Octokit } from "@octokit/rest"
import { Footer } from "@/components/home/Footer"
import { useState, useEffect } from "react"
import { SocialCards } from "../components/SocialCards"

const LanguagesPage = ({ languages }) => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = navIsOpen ? "hidden" : "unset"
  }, [navIsOpen])

  return (
    <div className="relative py-1 md:py-3">
      <SocialCards imageUrl="/social-homepage.png" />
      <div className="z-30 text-white col-span-full">
        <Header
          className="px-6 mx-auto max-w-7xl"
          onNavToggle={(isOpen) => {
            setNavIsOpen(isOpen)
          }}
        />
      </div>
      <div
        className={
          "absolute w-full h-full row-start-1 row-end-5 background-to-video rounded-bl-3xl xl:rounded-bl-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-black dark:to-purple-off-black " +
          (navIsOpen ? "z-20 fixed" : "-z-10")
        }
      ></div>
      <div className="mx-auto max-w-7xl px-6 py-24 xl:py-44 text-white">
        <h1 className="font-primary text-3xl lg:text4xl xl:text-5xl font-semibold mb-16 w-full">
          Languages
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-6">
          {languages.map((lang) => (
            <div key={lang.code}>
              <h3 className="xl:mb-0 text-xl">{lang.name}</h3>
              <p className="text-sm">
                {lang.completition}% —{" "}
                <a
                  href={`https://github.com/blitz-js/${lang.code}.blitzjs.com/issues/1`}
                  className="font-bold underline hover:text-purple-extralight"
                >
                  Contribute
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer className="dark:bg-purple-off-black bg-purple-mid text-white" hasDarkMode />
    </div>
  )
}

const getStaticProps = async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  })

  const { data } = await octokit.repos.getContent({
    owner: "blitz-js",
    repo: "blitzjs.com-translation",
    path: "langs",
  })

  const languages = await Promise.all(
    data.map(async (lang) => {
      const [{ data: langJson }, { data: langIssue }] = await Promise.all([
        octokit.repos.getContent({
          owner: "blitz-js",
          repo: "blitzjs.com-translation",
          path: lang.path,
        }),
        octokit.issues.get({
          owner: "blitz-js",
          repo: `${lang.name.substr(0, lang.name.length - 5)}.blitzjs.com`,
          issue_number: 1,
        }),
      ])

      const langMeta = JSON.parse(
        Buffer.from(langJson.content, langJson.encoding).toString("utf-8")
      )

      const checkedBoxes = langIssue.body.match(/\* \[x\]/gi)
      const totalBoxes = langIssue.body.match(/\* \[(x| )?\]/gi)
      const completition = !totalBoxes
        ? 100
        : !checkedBoxes
        ? 0
        : Math.round((checkedBoxes.length / totalBoxes.length) * 100)

      return { ...langMeta, completition, completed: false }
    })
  )

  return {
    props: {
      languages: languages.sort((a, b) =>
        a.completition === b.completition
          ? a.name.localeCompare(b.name)
          : a.completition > b.completition
      ),
    },
    revalidate: 3 * 60 * 60, // 3 hours
  }
}

LanguagesPage.layoutProps = {
  meta: {
    title: "Languages - Blitz.js",
    description: `Blitz is a hyper-productive fullstack React framework that's built on Next.js and features a "Zero-API" data layer.`,
  },
}

export default LanguagesPage
export { getStaticProps }
