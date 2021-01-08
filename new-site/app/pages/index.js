import { Head, Link } from "blitz"
import { Header } from "@/components/Header"
import { BsArrowRight } from "react-icons/bs"
import { ButtonLink } from "@/components/ButtonLink"
import { HeroCode } from "@/components/home/HeroCode"
import { VideoPlayer } from "@/components/home/VideoPlayer"
import { Octokit } from "@octokit/rest"
import { Feature } from "@/components/home/Feature"
import { FeatureIcon } from "@/components/home/FeatureIcon"
import { FeatureIconTitle } from "@/components/home/FeatureIconTitle"
import { Sponsor } from "@/components/home/Sponsor"
import { LinkList } from "@/components/home/LinkList"
import { NewsletterForm } from "@/components/home/NewsletterForm"
import { FaGithub } from "react-icons/fa"
import { Icon } from "@/components/home/Icon"
import { IoLogoVercel } from "react-icons/io5"

const Home = ({ randomContributors }) => {
  return (
    <div>
      <div className="overflow-hidden">
        <Head>
          <meta
            key="twitter:title"
            name="twitter:title"
            content="Blitz - The Fullstack React Framework"
          />
          <meta
            key="og:title"
            property="og:title"
            content="Blitz - The Fullstack React Framework"
          />
        </Head>

        <div>
          <a name="top" aria-hidden>
            {null}
          </a>
          <div className="relative grid grid-cols-1 py-1 md:py-3 gap-y-24 xl:gap-y-36">
            <div className="text-white col-span-full">
              <Header className="px-6 mx-auto max-w-7xl" />
            </div>
            <div className="absolute w-full h-full row-start-1 row-end-5 background-to-video -z-10 rounded-bl-3xl xl:rounded-bl-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-black dark:to-purple-off-black"></div>
            <div className="-mt-6 text-white col-span-full">
              <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl lg:grid-cols-3 xl:grid-cols-2">
                <div className="space-y-10 lg:w-full">
                  <h2 className="text-5xl font-medium font-secondary xl:text-6xl xl:font-normal dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue">
                    The Fullstack React Framework
                  </h2>
                  <p className="text-lg xl:text-xl xl:font-medium text-off-white lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue">
                    Blitz makes you far more productive than you ever dreamed possible! It's a
                    Javascript equivalent for Ruby on Rails that's built on Next.js and features a
                    "Zero-API" data layer.
                  </p>
                  <div className="flex space-x-4">
                    <ButtonLink
                      className="w-2/3 lg:w-auto rounded-tl-xl"
                      href="/docs/getting-started"
                    >
                      Getting Started Docs
                    </ButtonLink>
                    <ButtonLink
                      href="https://github.com/blitz-js/blitz"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      className="w-1/3 lg:w-auto rounded-r-xl"
                    >
                      Github
                    </ButtonLink>
                  </div>
                </div>
                <HeroCode className="lg:col-span-2 xl:col-span-1" />
              </div>
            </div>
            <div className="px-6 mx-auto space-y-12 text-lg text-center text-white lg:space-y-0 lg:space-x-12 lg:flex lg:text-left max-w-7xl xl:font-medium lg:text-lg xl:text-xl">
              <FeatureIcon icon="lighteningBolt">
                Brings back the simplicity and conventions of frameworks like Ruby on Rails while
                preserving everything we love about React
              </FeatureIcon>
              <FeatureIcon icon="layers">
                Doesn't force you to use technologies like GraphQL. But you are free to add advanced
                technologies if you want.
              </FeatureIcon>
              <FeatureIcon icon="graphUp">
                Maximizes your productivity both when starting an app and when scaling it to lots of
                code and users.
              </FeatureIcon>
            </div>
            <div className="grid w-full gap-5 px-6 mx-auto text-white xl:gap-10 max-w-7xl lg:grid-cols-2">
              <Link href="#">
                <a className="flex items-center justify-between pb-1 text-xs border-b border-opacity-50 border-blue-mid lg:col-span-2 font-secondary">
                  <span>The Latest News From Blitz</span>
                  <span className="flex items-center">
                    <span className="hidden mr-2 lg:block">View News</span>{" "}
                    <BsArrowRight size="1.5rem" />
                  </span>
                </a>
              </Link>
              <VideoPlayer url="https://www.youtube.com/watch?v=ZSD5ifGTlag" />
              <VideoPlayer url="https://www.youtube.com/watch?v=UsJl7Mn5Y0E" />
            </div>

            <div className="w-full px-6 mx-auto space-y-10 lg:space-y-12 max-w-7xl">
              <h2 className="text-3xl font-semibold xl:text-5xl">
                Everything You Need For Production Apps
              </h2>
              <div className="w-full overflow-x-scroll">
                <div className="grid features-grid gap-x-6 lg:gap-y-14">
                  <Feature title="Fullstack & Monolithic">
                    <p>
                      Includes everything from the database to your frontend all inside a single
                      app. Only one development server. Only one thing to deploy.
                    </p>
                    <p>Deploy to a server or serverless.</p>
                  </Feature>
                  <Feature title="API Not Required">
                    <p>
                      Instead of fetching data from the backend, you import your server code into
                      your frontend and call it like a normal function. At build time, the direct
                      function import is swapped out with an auto generated HTTP API.
                    </p>
                    <p>The generated API can also be used by third-parties.</p>
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
                      Blitz does all the boring set up and configuration for you. The common project
                      structure and architectural patterns make it easy to move from one Blitz app
                      to another and immediately feel at home.
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
                      Once we reach version 1.0, we'll switch to a stable, predictable release cycle
                      with multiple channels like stable, LTS, and beta.
                    </p>
                    <p>We are taking a lot inspiration from Ember in this regard.</p>
                  </Feature>
                </div>
              </div>
            </div>
            <div className="absolute w-full h-full row-start-6 text-white row-end-10 xl:row-end-11 -z-10 rounded-bl-3xl rounded-tr-3xl xl:rounded-bl-4xl xl:rounded-tr-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-purple-off-black dark:to-black"></div>
            <div>{/* spacer div */}</div>
            <div className="flex-wrap hidden px-6 xl:flex xl:justify-center gap-y-10">
              <h3 className="w-full pb-1 mx-auto text-xs text-white border-b border-opacity-50 border-blue-mid max-w-7xl">
                Live Code Sandbox
              </h3>
              <iframe
                title="Code Sandbox"
                src="https://codesandbox.io/embed/github/blitz-js/codesandbox-template/tree/main/?fontsize=14&hidenavigation=1&theme=dark"
                className="block w-full overflow-hidden border-0 max-w-7xl h-sandbox"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe>
            </div>
            <div className="grid grid-cols-1 px-6 mx-auto text-white lg:grid-cols-2 gap-14 max-w-7xl">
              <h2 className="text-5xl text-transparent font-secondary bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue">
                The Blitz Community - Our Most Important Aspect
              </h2>
              <div className="grid grid-cols-5 gap-1 md:grid-cols-6 lg:row-start-2 lg:grid-cols-5 grid-rows-8 overflow-clip">
                {randomContributors.map((contributor) => (
                  <Link href={`https://github.com/${contributor.login}`} key={contributor.id}>
                    <a target="_blank" rel="noopener noreferrer">
                      <img
                        src={contributor.avatar_url}
                        alt={contributor.login}
                        title={contributor.login}
                        className="w-full"
                      />
                    </a>
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-1 text-lg gap-14 md:grid-cols-2 lg:row-span-2 lg:grid-cols-1 xl:text-xl">
                <div className="flex flex-col justify-between h-full space-y-6 lg:justify-end">
                  <div className="flex flex-col h-full space-y-6 lg:h-auto lg:text-transparent text-off-white lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue">
                    <p>
                      Our community is warm, safe, diverse, inclusive, and fun! LGBTQ+, women, and
                      minorities are especially welcome.
                    </p>
                    <p>
                      Please read our{" "}
                      <Link href="/docs/code-of-conduct">
                        <a className="underline text-off-white">Code of Conduct</a>
                      </Link>
                      .
                    </p>
                  </div>
                  <ButtonLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://slack.blitzjs.com/"
                    className="rounded-bl-none rounded-xl lg:w-max"
                  >
                    Join our Slack Community
                  </ButtonLink>
                </div>
                <div className="flex flex-col justify-between h-full space-y-6 lg:justify-start">
                  <div className="flex flex-col h-full space-y-6 lg:h-auto lg:text-transparent text-off-white lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue">
                    <p>
                      We are all in this together, from the youngest to the oldest. We are all more
                      similar than we are different. We love to work together.
                    </p>
                    <p>You are invited to help us make Blitz the best framework we've ever had!</p>
                  </div>
                  <ButtonLink
                    href="/docs/contributing"
                    className="rounded-bl-none rounded-xl lg:w-max"
                  >
                    Learn How to Contribute
                  </ButtonLink>
                </div>
              </div>
            </div>
            <div className="w-full px-6 mx-auto text-white space-y-7 max-w-7xl">
              <h2 className="text-2xl text-white font-secondary lg:text-3xlxl">
                Architecture Diagram
              </h2>
              <div className="w-full overflow-x-scroll">
                <div className="architecture-diagram">
                  <img src="img/architecture.svg" alt="Architecture diagram" />
                </div>
              </div>
            </div>
            <div className="col-span-full" />
            <div className="absolute w-full h-full row-start-8 row-end-18 xl:row-end-19 -z-20 bg-purple-mid dark:bg-purple-off-black"></div>
            <div className="px-6 mx-auto space-y-12 text-white max-w-7xl">
              <h2 className="text-3xl font-semibold lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                Everything End-to-End From the Database to the Frontend
              </h2>
              <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                <FeatureIconTitle icon="thumbsUp" title="Authentication Built In">
                  Coming Soon! · Blitz fullstack authentication is super easy and very secure. Works
                  with any identity provider, including self-hosted username and password and
                  third-parties like Auth0.
                </FeatureIconTitle>
                <FeatureIconTitle icon="database" title="Database Agnostic">
                  You can use any database you want. Prisma 2 is the default database client, but
                  you can remove that and use anything else like Fauna or Cosmos.
                </FeatureIconTitle>
                <FeatureIconTitle icon="fileCode" title="Code Installer Recipes">
                  Coming Soon! · One command to install code and/or packages into your blitz app.
                  Examples: `blitz install tailwind` or `blitz install sentry`. Uses the MDX Recipe
                  format that Gatsby created for Gatsby Recipes.
                </FeatureIconTitle>
                <FeatureIconTitle icon="plugin" title="Plugins">
                  Coming Soon! · Hook into many parts of a Blitz app, including the CLI. Greatly
                  improves the developer experience for integrations. The first offical plugins will
                  be database plugins.
                </FeatureIconTitle>
                <FeatureIconTitle icon="typescript" title="Native Typescript Support">
                  Blitz is built with Typescript and the Blitz data layer is fully end-to-end
                  typesafe. All types are fully static without needing a separate type generation
                  process!
                </FeatureIconTitle>
                <FeatureIconTitle icon="scaffolding" title="Code Scaffolding">
                  It’s early days, but Blitz code scaffolding is going to be extremely powerful.
                  Great for both prototyping and for building real apps. Can override any template
                  and customize for your project.
                </FeatureIconTitle>
              </div>
            </div>
            <div className="absolute w-full h-full bg-white dark:bg-black row-start-11 xl:row-start-12 row-end-15 xl:row-end-16 rounded-tr-3xl xl:rounded-tr-4xl -z-10" />
            <div className="col-span-full"></div>
            <div className="px-6 mx-auto text-center space-y-7 max-w-7xl">
              <h2 className="text-3xl font-semibold xl:text-5xl">Our Sponsors</h2>
              <p className="text-lg xl:text-xl">
                Your financial contributions help ensure Blitz continues to be developed and{" "}
                <br className="hidden lg:block" />
                maintained! We have monthly sponsorship options starting at $5/month.
              </p>
              <p className="text-lg xl:text-xl">
                View options and contribute at{" "}
                <Link href="https://github.com/sponsors/blitz-js">
                  <a className="underline" target="_blank" rel="noopener noreferrer">
                    GitHub Sponsors
                  </a>
                </Link>
                ,{" "}
                <Link href="https://paypal.me/thebayers">
                  <a className="underline" target="_blank" rel="noopener noreferrer">
                    PayPal
                  </a>
                </Link>
                , or{" "}
                <Link href="https://opencollective.com/blitzjs">
                  <a className="underline" target="_blank" rel="noopener noreferrer">
                    Open Collective
                  </a>
                </Link>
                .
              </p>
              <ButtonLink
                href="https://github.com/sponsors/blitz-js"
                variant="solid-dark"
                className="mx-auto rounded-bl-none rounded-xl lg:w-max md:w-1/3 lg:m-auto lg:mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sponsor Us
              </ButtonLink>
            </div>
            <div className="grid w-full gap-8 px-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-7xl">
              <Sponsor iconName="diamond-sponsor" title="Diamond Sponsors">
                <p>
                  Be our first Diamond Sponsor!{" "}
                  <Link href="https://github.com/sponsors/blitz-js">
                    <a className="underline" target="_blank" rel="noopener noreferrer">
                      Start here
                    </a>
                  </Link>
                </p>
              </Sponsor>
              <Sponsor iconName="gold-sponsor" title="Gold Sponsors">
                <div>
                  <a
                    aria-label="G2i"
                    href="http://g2i.co/sign-up?utm_source=blitz&utm_medium=referral&utm_campaign=blitz2020"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt=""
                      src="https://files-5oz00y7xp.vercel.app/G2i_Logo_wwords.png"
                      width="160px"
                    />
                  </a>
                </div>
              </Sponsor>
              <Sponsor iconName="silver-sponsor" title="Silver Sponsors">
                <a
                  aria-label="Fauna"
                  href="https://dashboard.fauna.com/accounts/register?utm_source=BlitzJS&utm_medium=sponsorship&utm_campaign=BlitzJS_Sponsorship_2020"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt=""
                    src="https://raw.githubusercontent.com/blitz-js/blitz/canary/assets/Fauna_Logo_Blue.png"
                    width="200px"
                  />
                </a>
              </Sponsor>
              <Sponsor iconName="bronze-sponsor" title="Bronze Sponsors">
                <a
                  aria-label="Render.com"
                  href="https://render.com?utm_source=BlitzJS&utm_medium=sponsorship&utm_campaign=BlitzJS_Sponsorship_2020"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt=""
                    src="https://raw.githubusercontent.com/blitz-js/blitz/canary/assets/render-logo-color2.png"
                    width="110px"
                  />
                </a>
              </Sponsor>
              <Sponsor iconName="seedling-sponsor" title="Seedling Sponsors">
                <a
                  aria-label="React Bricks"
                  href="https://reactbricks.com/?utm_source=blitzjs&utm_medium=sponsorship&utm_campaign=blitzjs_sponsorship"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="" src="https://reactbricks.com/reactbricks_icon.svg" width="30px" />
                </a>
                <a
                  aria-label="Andreas Asprou"
                  href="https://andreas.fyi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt=""
                    src="https://raw.githubusercontent.com/blitz-js/blitz/canary/assets/andreas.jpg"
                    width="30px"
                  />
                </a>
              </Sponsor>
            </div>
            <div className="col-span-full"></div>
            <div className="w-full px-6 mx-auto space-y-12 text-white lg:space-x-4 lg:space-y-0 lg:flex lg:items-center max-w-7xl">
              <h2 className="pr-2 text-3xl font-semibold lg:w-full lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                Follow Our Journey on Github{" "}
                <FaGithub className="inline mb-2 text-off-white" size="1.8rem" />
              </h2>
              <div className="flex flex-col w-full space-y-4 md:flex-row md:space-y-0 md:space-x-2">
                <ButtonLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/blitz-js/blitz/discussions"
                  className="w-full text-lg py-18 rounded-t-2xl md:rounded-tr-none"
                >
                  Forum
                </ButtonLink>
                <ButtonLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/blitz-js/blitz/releases"
                  className="w-full text-lg py-18 rounded-br-2xl md:rounded-tr-2xl"
                >
                  Releases
                </ButtonLink>
              </div>
            </div>

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

  let contributors = []

  for await (const response of octokit.paginate.iterator(octokit.repos.listContributors, {
    owner: "blitz-js",
    repo: "blitz",
    per_page: 100,
  })) {
    contributors.push(...response.data)
  }

  let randomIndexes = []
  while (randomIndexes.length < MAX_CONTRIBUTORS) {
    var r = Math.floor(Math.random() * contributors.length)
    if (randomIndexes.indexOf(r) === -1) randomIndexes.push(r)
  }

  let randomContributors = randomIndexes.map((i) => contributors[i])

  return { props: { randomContributors } }
}

Home.layoutProps = {
  meta: {
    title: "Blitz - The Fullstack React Framework",
  },
}

export default Home
export { getStaticProps }
