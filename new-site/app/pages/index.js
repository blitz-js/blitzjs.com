import { Head, Link } from "blitz"
import { BigText, Paragraph, Widont } from "@/components/home/common"
import { Footer } from "@/components/home/Footer"
import { Header } from "@/components/Header"
import { BsArrowRight } from "react-icons/bs"
import { ButtonLink } from "@/components/ButtonLink"
import { HeroCode } from "@/components/home/HeroCode"
import { VideoPlayer } from "@/components/home/VideoPlayer"
import { Feature } from "@/components/home/Feature"
import { Octokit } from "@octokit/rest"
import { FeatureIcon } from "@/components/home/FeatureIcon"
import { Sponsor } from "@/components/home/Sponsor"
import { LinkList } from "@/components/home/LinkList"
import { NewsletterForm } from "@/components/home/NewsletterForm"
import { FaGithub } from "react-icons/fa"
import { Icon } from "../components/home/Icon"
import { BasicLayout } from "../layouts/BasicLayout"

const Home = ({ randomContributors }) => {
  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Blitz - The Fullstack React Framework"
        />
        <meta key="og:title" property="og:title" content="Blitz - The Fullstack React Framework" />
      </Head>
      <div className="absolute w-full h-full row-start-1 row-end-5 -top-video -z-10 rounded-bl-3xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-black dark:to-purple-off-black"></div>
      <div className="grid grid-cols-1 col-start-2 -mt-6 text-white gap-y-10">
        <h2 className="text-5xl font-medium font-secondary">The Fullstack React Framework</h2>
        <p className="text-lg">
          Blitz makes you far more productive than you ever dreamed possible! It's a Javascript
          equivalent for Ruby on Rails that's built on Next.js and features a "Zero-API" data layer.
        </p>
        <div className="flex space-x-4">
          <ButtonLink className="w-2/3 rounded-tl-xl" href="#">
            Getting Started Docs
          </ButtonLink>
          <ButtonLink
            href="https://github.com/blitz-js/blitz"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="w-1/3 rounded-r-xl"
          >
            Github
          </ButtonLink>
        </div>
        <HeroCode />
      </div>
      <div className="grid grid-cols-1 col-start-2 text-lg text-center text-white gap-y-12">
        <FeatureIcon icon="lighteningBolt">
          Brings back the simplicity and conventions of frameworks like Ruby on Rails while
          preserving everything we love about React
        </FeatureIcon>
        <FeatureIcon icon="layers">
          Doesn't force you to use technologies like GraphQL. But you are free to add advanced
          technologies if you want.
        </FeatureIcon>
        <FeatureIcon icon="graphUp">
          Maximizes your productivity both when starting an app and when scaling it to lots of code
          and users.
        </FeatureIcon>
      </div>
      <div className="grid col-start-2 text-white gap-y-5">
        <Link href="#">
          <a className="grid items-center grid-cols-3 pb-1 text-xs border-b border-opacity-50 border-blue-mid">
            <span className="col-span-2">The Latest News From Blitz</span>
            <BsArrowRight size="1.5rem" className="justify-self-end" />
          </a>
        </Link>
        <VideoPlayer url="https://www.youtube.com/watch?v=ZSD5ifGTlag" />
        <VideoPlayer url="https://www.youtube.com/watch?v=UsJl7Mn5Y0E" />
      </div>
      <div className="grid col-span-3 bg-white grid-cols-container gap-y-10">
        <h2 className="col-start-2 text-3xl font-semibold">
          Everything You Need For Production Apps
        </h2>
        <div className="grid col-span-3 overflow-x-scroll grid-cols-features">
          <Feature title="Fullstack & Monolithic">
            <p>
              Includes everything from the database to your frontend all inside a single app. Only
              one development server. Only one thing to deploy.
            </p>
            <p>Deploy to a server or serverless.</p>
          </Feature>
          <Feature title="API Not Required">
            <p>
              Instead of fetching data from the backend, you import your server code into your
              frontend and call it like a normal function. At build time, the direct function import
              is swapped out with an auto generated HTTP API.
            </p>
            <p>The generated API can also be used by third-parties.</p>
          </Feature>
          <Feature title="Loose Opinions">
            <p>
              The out-of-the-box experience guides you on a path perfect for most applications. But
              when you need to go off the beaten path, you are totally free to do so.
            </p>
            <p>
              And nearly everything is pluggable. For example, we don't mandate which styling or
              form libraries you use.
            </p>
          </Feature>
          <Feature title="Convention over Configuration">
            <p>
              Blitz does all the boring set up and configuration for you. The common project
              structure and architectural patterns make it easy to move from one Blitz app to
              another and immediately feel at home.
            </p>
          </Feature>
          <Feature title="Easy to Start, Easy to Scale">
            <p>Easy for beginners and easy to migrate existing Next.js apps to Blitz.</p>
            <p>
              Easy to scale in all forms: lines of code, number of people working in the codebase,
              and code execution.
            </p>
          </Feature>
          <Feature title="Stability">
            <p>
              Once we reach version 1.0, we'll switch to a stable, predictable release cycle with
              multiple channels like stable, LTS, and beta.
            </p>
            <p>We are taking a lot inspiration from Ember in this regard.</p>
          </Feature>
        </div>
      </div>
      <div className="absolute w-full h-full row-start-6 text-white row-end-10 -z-10 rounded-bl-3xl rounded-tr-3xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-black dark:to-purple-off-black"></div>
      <div className="col-span-3" />
      <div className="grid grid-cols-1 col-start-2 text-white gap-y-14">
        <h2 className="text-5xl font-secondary">The Blitz Community - Our Most Important Aspect</h2>
        <div className="grid grid-cols-5 grid-rows-6 gap-1">
          {randomContributors.map((contributor) => (
            <Link href={`https://github.com/${contributor.login}`}>
              <a target="_blank" rel="noopener noreferrer">
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  title={contributor.login}
                />
              </a>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-y-6">
          <p>
            Our community is warm, safe, diverse, inclusive, and fun! LGBTQ+, women, and minorities
            are especially welcome.
          </p>
          <p>
            Please read our{" "}
            <Link href="#">
              <a className="underline">Code of Conduct</a>
            </Link>
            .
          </p>
          <ButtonLink href="#" className="rounded-bl-none rounded-xl">
            Join our Slack Community
          </ButtonLink>
        </div>
        <div className="grid grid-cols-1 gap-y-6">
          <p>
            We are all in this together, from the youngest to the oldest. We are all more similar
            than we are different. We love to work together.
          </p>
          <p>You are invited to help us make Blitz the best framework we've ever had!</p>
          <ButtonLink href="#" className="rounded-bl-none rounded-xl">
            Learn How to Contribute
          </ButtonLink>
        </div>
      </div>
      <div className="grid col-span-3 text-white grid-cols-container gap-y-7">
        <h2 className="col-start-2 text-2xl">Architecture Diagram</h2>
        <div className="grid col-span-3 overflow-x-scroll">
          <img
            src="img/architecture.svg"
            className="px-6 w-7xl max-w-none"
            alt="Architecture diagram"
          />
        </div>
      </div>
      <div className="col-span-3" />
      <div className="absolute w-full h-full row-start-8 row-end-17 -z-20 bg-purple-mid"></div>
      <div className="grid col-start-2 text-white gap-y-12">
        <h2 className="text-3xl font-semibold">
          Everything End-to-End From the Database to the Frontend
        </h2>
        <FeatureIcon icon="thumbsUp" title="Authentication Built In">
          Coming Soon! · Blitz fullstack authentication is super easy and very secure. Works with
          any identity provider, including self-hosted username and password and third-parties like
          Auth0.
        </FeatureIcon>
        <FeatureIcon icon="database" title="Database Agnostic">
          You can use any database you want. Prisma 2 is the default database client, but you can
          remove that and use anything else like Fauna or Cosmos.
        </FeatureIcon>
        <FeatureIcon icon="fileCode" title="Code Installer Recipes">
          Coming Soon! · One command to install code and/or packages into your blitz app. Examples:
          `blitz install tailwind` or `blitz install sentry`. Uses the MDX Recipe format that Gatsby
          created for Gatsby Recipes.
        </FeatureIcon>
        <FeatureIcon icon="plugin" title="Plugins">
          Coming Soon! · Hook into many parts of a Blitz app, including the CLI. Greatly improves
          the developer experience for integrations. The first offical plugins will be database
          plugins.
        </FeatureIcon>
        <FeatureIcon icon="typescript" title="Native Typescript Support">
          Blitz is built with Typescript and the Blitz data layer is fully end-to-end typesafe. All
          types are fully static without needing a separate type generation process!
        </FeatureIcon>
        <FeatureIcon icon="scaffolding" title="Code Scaffolding">
          It’s early days, but Blitz code scaffolding is going to be extremely powerful. Great for
          both prototyping and for building real apps. Can override any template and customize for
          your project.
        </FeatureIcon>
      </div>
      <div className="absolute w-full h-full bg-white row-start-11 row-end-15 rounded-tr-3xl -z-10" />
      <div className="col-span-3"></div>
      <div className="grid col-start-2 bg-white gap-y-7">
        <h2 className="text-3xl font-semibold">Our Sponsors</h2>
        <p className="text-lg">
          Your financial contributions help ensure Blitz continues to be developed and maintained!
          We have monthly sponsorship options starting at $5/month.
        </p>
        <p className="text-lg">
          View options and contribute at GitHub Sponsors, PayPal, or Open Collective.
        </p>
        <ButtonLink href="#" variant="solid-dark" className="rounded-bl-none rounded-xl">
          Sponsor Us
        </ButtonLink>
      </div>
      <div className="grid col-start-2 gap-y-4">
        <Sponsor title="Diamond Sponsors">
          <p>Be our first Diamond Sponsor! Start here.</p>
        </Sponsor>
        <Sponsor title="Gold Sponsors">
          <p>Be our first Gold Sponsor! Start here.</p>
        </Sponsor>
        <Sponsor title="Silver Sponsors">
          <p>Be our first Silver Sponsor! Start here.</p>
        </Sponsor>
        <Sponsor title="Bronze Sponsors">
          <p>Be our first Bronze Sponsor! Start here.</p>
        </Sponsor>
      </div>
      <div className="col-span-3"></div>
      <div className="grid col-start-2 text-white gap-y-12">
        <h2 className="text-3xl font-semibold">
          Follow Our Journey on Github <FaGithub className="inline mb-2" size="1.8rem" />
        </h2>
        <div>
          <ButtonLink href="#" className="mb-2 py-18 rounded-t-2xl">
            Forum
          </ButtonLink>
          <ButtonLink href="#" className="py-18 rounded-br-2xl">
            Releases
          </ButtonLink>
        </div>
      </div>

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
    </>
  )
}

const getStaticProps = async () => {
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
  while (randomIndexes.length < 30) {
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
  Layout: BasicLayout,
}

export default Home
export { getStaticProps }
