import {Octokit} from "@octokit/rest"
import {Image, Link} from "blitz"
import {useEffect, useState} from "react"

import {ButtonLink} from "@/components/ButtonLink"
import {Header} from "@/components/Header"
import {Feature} from "@/components/home/Feature"
import {FeatureIcon} from "@/components/home/FeatureIcon"
import {FeatureIconTitle} from "@/components/home/FeatureIconTitle"
import {Footer} from "@/components/home/Footer"
import {Hand} from "@/components/home/Hand"
import {HeroCode} from "@/components/home/HeroCode"
import {StyledLink} from "@/components/home/StyledLink"
import {VideoPlayer} from "@/components/home/VideoPlayer"
import Scrollbar from "@/components/Scrollbar"
import {SocialCards} from "@/components/SocialCards"
import {SponsorPack} from "@/components/SponsorPack"
import {getGitHubFile} from "@/utils/getGitHubFile"

const Home = ({randomContributors}) => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = navIsOpen ? "hidden" : "unset"
  }, [navIsOpen])

  return (
    <div>
      <SocialCards imageUrl="/social-homepage.png" />
      <div className="overflow-hidden">
        <div>
          <a name="top" aria-hidden>
            {null}
          </a>
          <div className="relative grid grid-cols-1 py-1 md:py-3 gap-y-24 xl:gap-y-44">
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
            <div className="relative -mt-6 text-white col-span-full">
              <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl lg:grid-cols-3 xl:grid-cols-2 md:gap-6 xl:-mt-10">
                <div className="z-10 space-y-10 lg:w-full">
                  <h2 className="-mt-8 font-medium text-5xl-squashed lg:-mt-0 font-secondary xl:text-6xl xl:font-medium dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue">
                    The Fullstack React Framework
                  </h2>
                  <p className="text-lg xl:text-xl xl:font-medium text-off-white lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:w-4/5">
                    Blitz is a batteries-included framework that's inspired by Ruby on Rails, is
                    built on Next.js, and features a "Zero-API" data layer abstraction that
                    eliminates the need for REST/GraphQL.
                  </p>
                  <div className="flex space-x-4">
                    <ButtonLink className="w-2/3 lg:w-auto rounded-tl-xl" href="/docs/get-started">
                      Try Blitz in Under 5 Mins
                    </ButtonLink>
                    <ButtonLink
                      href="https://github.com/blitz-js/blitz"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      className="w-1/3 lg:w-auto rounded-r-xl"
                    >
                      GitHub
                    </ButtonLink>
                  </div>
                </div>
                <div className="relative lg:col-span-2 xl:col-span-1">
                  <Hand variant="hero-squiggle" className="lg:hidden -right-6 -top-36" />
                  <Hand variant="hero-rightarm" className="hidden lg:block -left-36 top-32" />
                  <Hand
                    variant="hero-righthand"
                    className="z-20 hidden lg:block -left-4"
                    style={{top: "15.2rem"}}
                  />
                  <Hand
                    variant="hero-leftarm"
                    className="hidden lg:block"
                    style={{top: "30rem", right: "-4.8rem"}}
                  />
                  <Hand
                    variant="hero-lefthand"
                    style={{top: "26.6rem", right: "-2.2em"}}
                    className="z-20 hidden lg:block"
                  />
                  <HeroCode className="z-10" />
                </div>
              </div>
            </div>
            <div className="z-10 px-6 mx-auto space-y-12 text-lg text-center text-white lg:space-y-0 lg:space-x-12 lg:flex lg:text-left max-w-7xl xl:font-mediumxl:text-xl">
              <FeatureIcon icon="layers">
                “Zero-API” data layer lets you{" "}
                <strong>import server code directly into your components</strong> instead of having
                to manually add API endpoints and do client-side fetching and caching.
              </FeatureIcon>
              <FeatureIcon icon="lighteningBolt">
                New Blitz apps come with all the{" "}
                <strong>boring stuff already set up for you!</strong> Like ESLint, Prettier, Jest,
                user sign up, log in, and password reset.
              </FeatureIcon>
              <FeatureIcon icon="graphUp">
                Provides <strong>helpful defaults and conventions</strong> for things like routing,
                file structure, and authentication while also being extremely flexible.
              </FeatureIcon>
            </div>
            <div className="grid w-full gap-5 px-6 mx-auto text-white xl:gap-10 max-w-7xl lg:grid-cols-2">
              <Link href="/#" passHref>
                <StyledLink className="flex items-center justify-between pb-1 text-lg border-b border-opacity-50 border-blue-mid lg:col-span-2 font-secondary xl:text-xl">
                  <span>Top Videos</span>

                  {/*
                  <span className="flex items-center">
                    <span className="hidden mr-2 lg:block">View News</span>{" "}
                    <BsArrowRight size="1.5rem" />
                  </span>
                    */}
                </StyledLink>
              </Link>
              <VideoPlayer url="https://www.youtube.com/watch?v=UHyx8MtCVVk" />
              <VideoPlayer url="https://www.youtube.com/watch?v=fIexr5UZfhU" />
            </div>

            <div className="relative w-full mx-auto space-y-10 lg:space-y-20 xl:space-y-36 max-w-7xl">
              <h2 className="px-6 text-3xl font-semibold xl:text-5xl xl:w-1/2">
                Everything You Need For Production Apps
              </h2>
              <div className="w-full">
                <Hand
                  variant="concepts-right"
                  className="hidden lg:block lg:-top-24 lg:-right-96 lg:w-8/12 xl:-top-14"
                />
                <Scrollbar className="lg:hidden" thumbHeight="4px">
                  <div className="grid pb-4 ml-6 features-grid lg:gap-y-14">
                    <Feature title="Fullstack & Monolithic">
                      <p>
                        Includes everything from the database to your frontend all inside a single
                        app. Only one thing to develop. Only one thing to deploy.
                      </p>
                      <p>And you can deploy to a server or serverless.</p>
                    </Feature>
                    <Feature title="API Not Required">
                      <p>
                        Instead of fetching data from the backend, you import your server code
                        directly into your components. At build time, that function import is
                        swapped out with an auto generated HTTP API.
                      </p>
                      <p>The generated API can also be used by apps & third-parties.</p>
                    </Feature>
                    <Feature title="Loose Opinions">
                      <p>
                        The out-of-the-box experience guides you on a path perfect for most
                        applications. But when you need to go off the beaten path, you are totally
                        free to do so.
                      </p>
                      <p>
                        And nearly everything is pluggable. For example, we don't mandate which
                        styling or form libraries you use.
                      </p>
                    </Feature>
                    <Feature title="Convention over Configuration">
                      <p>
                        Blitz does all the boring set up and configuration for you. The common
                        project structure and architectural patterns make it easy to move from one
                        Blitz app to another and immediately feel at home.
                      </p>
                    </Feature>
                    <Feature title="Easy to Start, Easy to Scale">
                      <p>Easy for beginners and easy to migrate existing Next.js apps to Blitz.</p>
                      <p>
                        Easy to scale in all forms: lines of code, number of people working in the
                        codebase, and code execution.
                      </p>
                    </Feature>
                    <Feature title="Stability">
                      <p>
                        Once we reach version 1.0, we'll switch to a stable, predictable release
                        cycle with multiple channels like stable, LTS, and beta.
                      </p>
                      <p>We are taking a lot inspiration from Ember in this regard.</p>
                    </Feature>
                  </div>
                </Scrollbar>
              </div>
            </div>
            <div className="absolute w-full h-full row-start-6 lg:h-codesandbox lg:mt-80 row-end-10 rounded-bl-3xl rounded-tr-3xl lg:rounded-bl-4xl lg:rounded-tr-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-purple-off-black dark:to-black"></div>
            <div className="relative hidden w-full px-6 mx-auto space-y-10 max-w-7xl lg:block">
              <h3 className="pb-1 text-xs border-b border-opacity-50 font-secondary border-blue-mid">
                Blitz CodeSandbox Example
              </h3>
              <div>
                <Hand variant="sandbox-right" style={{right: "-13.2rem", bottom: "-35rem"}} />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codesandbox.io/s/flamboyant-meninsky-j63yq?file=/app/projects/mutations/createProject.ts"
                  className="h-sandbox xl:h-xl-sandbox block relative"
                >
                  <Image src="/img/sandbox-pic.png" layout="fill" className="object-cover" />
                  <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white text-6xl font-bold">
                    Click to Open in New Tab
                  </div>
                </a>
              </div>
            </div>
            <div className="xl:hidden">{/*spacer div*/}</div>
            <div className="relative flex flex-col px-6 mx-auto text-white lg:flex-row max-w-7xl space-y-14 lg:space-x-24 lg:space-y-0 xl:space-x-40">
              <div className="space-y-14 lg:w-1/2">
                <h2 className="z-10 font-medium text-transparent text-5xl-squashed font-secondary bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue xl:text-6xl">
                  The Blitz Community - Our Most Important Aspect
                </h2>
                <div className="z-10 grid grid-cols-5 gap-1 md:grid-cols-6 lg:grid-cols-5 grid-rows-8 overflow-clip">
                  {randomContributors.map((contributor, i) => (
                    <a
                      href={`https://github.com/${contributor.login}`}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={contributor.avatar_url}
                        alt={contributor.name}
                        title={contributor.name}
                        className="w-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 text-lg lg:relative gap-14 md:grid-cols-2 lg:row-span-2 lg:grid-cols-1 xl:text-xl lg:w-1/2">
                <Hand variant="community-squiggle" className="xl:hidden -right-18" />
                <div className="z-10 flex flex-col justify-between space-y-6 lg:justify-end">
                  <div className="flex flex-col space-y-6 lg:h-auto lg:text-transparent text-off-white">
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Our community is warm, safe, diverse, inclusive, and fun! LGBTQ+, women, and
                      minorities are especially welcome.
                    </p>
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Please read our{" "}
                      <Link href="/docs/code-of-conduct" passHref>
                        <StyledLink className="underline text-off-white hover:text-blue-light">
                          Code of Conduct
                        </StyledLink>
                      </Link>
                      .
                    </p>
                  </div>
                  <ButtonLink
                    href="https://discord.blitzjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-bl-none rounded-xl lg:w-max"
                  >
                    Join our Discord Community
                  </ButtonLink>
                </div>
                <div className="z-10 flex flex-col justify-between space-y-6 lg:justify-start">
                  <div className="flex flex-col space-y-6 lg:h-auto lg:text-transparent text-off-white lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue">
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      We are all in this together, from the youngest to the oldest. We are all more
                      similar than we are different. We love to work together.
                    </p>
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      We invite you to help make Blitz the best framework we've ever had!
                    </p>
                  </div>
                  <Link href="/docs/contributing" passHref>
                    <ButtonLink className="rounded-bl-none rounded-xl lg:w-max">
                      Learn How to Contribute
                    </ButtonLink>
                  </Link>
                </div>
              </div>
            </div>
            <div className="z-10 w-full mx-auto text-white space-y-7 max-w-7xl">
              <h2 className="px-6 text-2xl font-medium text-white font-secondary lg:text-3xl">
                Architecture Diagram
              </h2>
              <div className="w-full">
                <Scrollbar className="lg:hidden" thumbHeight="4px" thumbColor="white">
                  <div className="px-6 architecture-diagram" style={{paddingBottom: "2px"}}>
                    <img src="img/architecture.svg" alt="Architecture diagram" />
                  </div>
                </Scrollbar>
              </div>
            </div>
            <div className="relative col-span-full">
              <Hand variant="features-squiggle" className="-right-6 -top-10 xl:hidden -z-10" />
            </div>
            <div className="absolute w-full h-full row-start-8 row-end-19 xl:row-end-19 -z-20 bg-purple-mid dark:bg-purple-off-black"></div>
            <div className="relative px-6 mx-auto my-6 space-y-12 text-white xl:my-0 max-w-7xl xl:space-y-36">
              <h2 className="text-3xl font-semibold lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                Everything End-to-End From <br className="hidden xl:block" />
                the Database to the Frontend
              </h2>
              <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                <Hand
                  variant="features-right"
                  className="hidden xl:block xl:-top-40 xl:-right-52"
                />
                <FeatureIconTitle icon="thumbsUp" title="Authentication & Authorization">
                  Built-in authentication is super easy and very secure. Works with any identity
                  provider, including self-hosted username and password and third-parties like
                  Auth0.
                </FeatureIconTitle>
                <FeatureIconTitle icon="database" title="Database Agnostic">
                  You can use any database you want. Prisma 2 is the default database client, but
                  you can remove that and use anything else like Fauna or DynamoDB.
                </FeatureIconTitle>
                <FeatureIconTitle icon="fileCode" title="Recipes">
                  One command to install code and/or packages into your blitz app. Examples: `blitz
                  install tailwind` or `blitz install chakra-ui`. Recipes can be created by anyone.
                </FeatureIconTitle>
                <FeatureIconTitle icon="plugin" title="Backend Architecture">
                  Blitz is set up for server intensive tasks like sending emails, cron jobs,
                  background processing, generating PDFs, etc. Currently we have minimal backend
                  guides, but are working on developing more patterns and adding more docs.
                </FeatureIconTitle>
                <FeatureIconTitle icon="typescript" title="First Class Typescript Support">
                  Blitz is built with Typescript and the Blitz data layer is fully end-to-end
                  typesafe. All types are completely static without needing a separate type
                  generation process!
                </FeatureIconTitle>
                <FeatureIconTitle icon="scaffolding" title="Code Scaffolding">
                  It’s early days, but Blitz code scaffolding is going to be extremely powerful.
                  Great for both prototyping and for building real apps. Will be able to override
                  any template and customize for your project.
                </FeatureIconTitle>
              </div>
            </div>
            <div className="absolute w-full h-full bg-white dark:bg-black row-start-11 row-end-13 rounded-tr-3xl xl:rounded-tr-4xl -z-10" />
            <div className="relative col-span-full">
              <Hand
                variant="sponsors-squiggle"
                className="-right-24 xl:hidden"
                style={{top: "-5.3rem"}}
              />
            </div>
            <div className="px-6 mx-auto text-center max-w-7xl ">
              <div className="space-y-7 xl:space-y-10">
                <h2 className="relative text-3xl font-semibold xl:text-5xl">
                  <Hand
                    variant="sponsors-left"
                    className="hidden xl:block -left-80 pointer-events-none"
                    style={{top: "-18.05rem"}}
                  />
                  Our Sponsors
                </h2>
                <p className="text-lg xl:text-xl">
                  Your financial contributions help ensure Blitz continues to be developed and{" "}
                  <br className="hidden lg:block" />
                  maintained! We have monthly sponsorship options starting at $5/month.
                </p>
                <div>
                  <ButtonLink
                    variant="solid-dark"
                    href="https://github.com/sponsors/blitz-js"
                    className="mx-auto rounded-bl-none rounded-xl lg:w-max md:w-1/3 lg:m-auto lg:mt-4 xl:mt-18"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Support Blitz
                  </ButtonLink>
                </div>
              </div>

              <div className="xl:max-w-2xl mx-auto">
                <SponsorPack />
              </div>
            </div>

            <div className="w-full px-6 mx-auto space-y-12 text-white lg:space-x-4 lg:space-y-0 lg:flex lg:items-center max-w-7xl">
              <h2 className="pr-2 text-3xl font-semibold lg:w-full lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                So What Should I Do Now?
              </h2>
              <div className="flex flex-col w-full space-y-4 md:flex-row md:space-y-0 md:space-x-2">
                <ButtonLink
                  href="/docs/get-started"
                  className="w-full text-lg py-18 rounded-t-2xl md:rounded-tr-none"
                >
                  Try Blitz in Under 5 Mins
                </ButtonLink>
                <ButtonLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.blitzjs.com"
                  className="w-full text-lg py-18 rounded-br-2xl md:rounded-tr-2xl"
                >
                  Join Discord
                </ButtonLink>
              </div>
            </div>
            <Footer className="dark:bg-purple-off-black bg-purple-mid text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const getStaticProps = async () => {
  const MAX_CONTRIBUTORS = 30

  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  })

  const {contributors} = await getGitHubFile({
    octokit,
    owner: "blitz-js",
    repo: "blitz",
    path: ".all-contributorsrc",
    json: true,
  })

  let randomIndexes = []
  while (randomIndexes.length < MAX_CONTRIBUTORS) {
    var r = Math.floor(Math.random() * contributors.length)
    if (randomIndexes.indexOf(r) === -1) randomIndexes.push(r)
  }

  let randomContributors = randomIndexes.map((i) => contributors[i])

  return {
    props: {randomContributors},
    revalidate: 60 * 30, // 30 minutes
  }
}

Home.meta = {
  title: "Blitz.js - The Fullstack React Framework",
  description: `Blitz is a hyper-productive fullstack React framework that's built on Next.js and features a "Zero-API" data layer.`,
}

export default Home
export {getStaticProps}
