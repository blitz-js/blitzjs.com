import { Head, Link } from "blitz"
import { BigText, Paragraph, Widont } from "@/components/home/common"
import { Footer } from "@/components/home/Footer"
import Header from "@/components/Header"
import { BsArrowRight } from "react-icons/bs"
import { BiBoltCircle } from "react-icons/bi"
import { IoLayers } from "react-icons/io5"
import { BsGraphUp } from "react-icons/bs"
import ButtonLink from "@/components/ButtonLink"
import { HeroCode } from "@/components/home/HeroCode"
import { VideoPlayer } from "@/components/home/VideoPlayer"
import { Feature } from "@/components/home/Feature"

const Home = () => {
  return (
    <div className="dark:bg-black bg-off-white">
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
          <div className="relative grid grid-cols-container gap-y-24">
            <div className="col-start-2 text-white">
              <Header />
            </div>
            <div className="absolute w-full h-full row-start-1 row-end-5 text-white -top-video -z-10 rounded-bl-3xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-black dark:to-purple-off-black"></div>
            <div className="grid grid-cols-1 col-start-2 -mt-6 text-white gap-y-10">
              <h2 className="text-5xl font-medium font-secondary">The Fullstack React Framework</h2>
              <p className="text-lg">
                Blitz makes you far more productive than you ever dreamed possible! It's a
                Javascript equivalent for Ruby on Rails that's built on Next.js and features a
                "Zero-API" data layer.
              </p>
              <div className="flex space-x-4">
                <ButtonLink className="w-2/3 rounded-tl-xl" href="/docs">
                  Getting Started Docs <BsArrowRight size="1.5rem" className="ml-2" />
                </ButtonLink>
                <ButtonLink
                  href="https://github.com/blitz-js/blitz"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="w-1/3 rounded-r-xl"
                >
                  Github <BsArrowRight size="1.5rem" className="ml-2" />
                </ButtonLink>
              </div>
              <HeroCode />
            </div>
            <div className="grid grid-cols-1 col-start-2 text-lg text-center text-white gap-y-12">
              <div>
                <BiBoltCircle size="1.7rem" className="inline mb-4" />
                <p>
                  Brings back the simplicity and conventions of frameworks like Ruby on Rails while
                  preserving everything we love about React
                </p>
              </div>
              <div>
                <IoLayers size="1.7rem" className="inline mb-4" />
                <p>
                  Doesn't force you to use technologies like GraphQL. But you are free to add
                  advanced technologies if you want.
                </p>
              </div>
              <div>
                <BsGraphUp size="1.7rem" className="inline mb-4" />
                <p>
                  Maximizes your productivity both when starting an app and when scaling it to lots
                  of code and users.
                </p>
              </div>
            </div>
            <div className="grid col-start-2 text-white gap-y-5">
              <Link href="/news">
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
              <div className="grid col-span-3 overflow-x-scroll grid-cols-features features">
                <Feature title="Fullstack & Monolithic">
                  <p>
                    Includes everything from the database to your frontend all inside a single app.
                    Only one development server. Only one thing to deploy.
                  </p>
                  <p>Deploy to a server or serverless.</p>
                </Feature>
                <Feature title="API Not Required">
                  <p>
                    Instead of fetching data from the backend, you import your server code into your
                    frontend and call it like a normal function. At build time, the direct function
                    import is swapped out with an auto generated HTTP API.
                  </p>
                  <p>The generated API can also be used by third-parties.</p>
                </Feature>
                <Feature title="Loose Opinions">
                  <p>
                    The out-of-the-box experience guides you on a path perfect for most
                    applications. But when you need to go off the beaten path, you are totally free
                    to do so.
                  </p>
                  <p>
                    And nearly everything is pluggable. For example, we don’t mandate which styling
                    or form libraries you use.
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
            <div>Community</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.layoutProps = {
  meta: {
    title: "Blitz - The Fullstack React Framework",
  },
}

export default Home
