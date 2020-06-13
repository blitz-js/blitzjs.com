/** @jsx jsx */
import React from "react"
import {jsx, Text, Button} from "theme-ui"
import styled from "@emotion/styled"
import Layout from "@site/src/components/Layout"
import Link from "@docusaurus/Link"
import useBaseUrl from "@docusaurus/useBaseUrl"
import VideoPlayer from "../components/VideoPlayer"
import NewsletterForm from "../components/NewsletterForm"
import Spaced from "../components/Spaced"

const Grid = styled.div`
  display: grid;

  max-width: 80rem;
  margin: auto;

  grid-template-columns: repeat(1, 1fr);
  grid-template-areas: "ht";

  grid-row-gap: 2rem;

  .skip-row {
    grid-column: 1 / -1;
  }

  .benefit,
  .video,
  .tenet,
  .community-half,
  .feature {
    grid-column: span 1;
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints[1]}) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas: "ht ht ht ht ht ht";
    grid-template-rows: 20rem;
    grid-column-gap: 2rem;

    .benefit {
      grid-column: span 2;
    }
    .video,
    .arch-diagram {
      grid-column: span 3;
    }
    .tenet,
    .community-half,
    .feature {
      grid-column: span 3;
    }
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints[1]}) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas: "ht ht ht ht ht ht ht ht ht ht ht ht";
    grid-template-rows: 30rem;
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;

    .benefit {
      grid-column: span 4;
    }
    .video {
      grid-column: span 6;
    }
    .arch-diagram {
      grid-column: 2 / -2;
    }
    .tenet {
      grid-column: span 6;
    }
    .community-half {
      grid-column: 3 / 7;
    }
    .community-half + .community-half {
      grid-column: 7 / -3;
    }
    .feature {
      grid-column: span 4;
    }
  }
`

const Tenet = ({title, children}) => {
  return (
    <Spaced space={3} flexDirection="column" className="tenet">
      <h2 sx={{variant: "styles.h3"}}>{title}</h2>
      {children}
    </Spaced>
  )
}

const Feature = ({title, children}) => {
  return (
    <Spaced space={3} flexDirection="column" className="feature">
      <h3 sx={{variant: "styles.h5"}}>{title}</h3>
      {children}
    </Spaced>
  )
}

function Home() {
  return (
    <Layout
      title="Blitz.js - The Fullstack React Framework"
      description="Description will go into a meta tag in <head />">
      <Grid sx={{px: [3, 5]}}>
        <Spaced
          as="header"
          space={5}
          flexDirection="column"
          sx={{
            gridArea: "ht",
            alignItems: "center",
            justifyContent: "center",
            py: 5,
          }}>
          <Spaced
            space={4}
            flexDirection="column"
            sx={{alignItems: "center", textAlign: "center"}}>
            <h1 sx={{variant: "styles.hero"}}>The Fullstack React Framework</h1>

            <Spaced
              space={[3, 3, 4]}
              flexDirection={["column", "column", "row"]}
              sx={{variant: "styles.h5"}}>
              <div>Built on Next.js</div>
              <div>Inspired by Ruby on Rails</div>
              <div>New Fullstack Data Layer</div>
            </Spaced>
          </Spaced>

          <Spaced space={3}>
            <Link
              to={useBaseUrl("/docs/getting-started")}
              sx={{variant: "buttons.bordered", fontSize: 3}}>
              Getting Started Docs
            </Link>
            <Link
              href="https://github.com/blitz-js/blitz"
              sx={{variant: "buttons.outline", fontSize: 3}}>
              Github
            </Link>
          </Spaced>
        </Spaced>

        <Text className="benefit" sx={{fontSize: [null, null, 3]}}>
          New “no-API” data layer{" "}
          <strong>lets you import server code into your React components</strong> instead
          of having to fetch from an API.
        </Text>
        <Text className="benefit" sx={{fontSize: [null, null, 3]}}>
          Includes everything you need for production apps.{" "}
          <strong>Everything end-to-end from the database to the frontend.</strong>
        </Text>
        <Text className="benefit" sx={{fontSize: [null, null, 3]}}>
          Brings back the <strong>simplicity and conventions</strong> of frameworks like
          Ruby on Rails while preserving everything we love about React
        </Text>

        <div className="skip-row" />

        <div className="arch-diagram">
          <img src="/img/architecture-diagram.png" alt="Blitz app architecture" />
        </div>

        <div className="skip-row" />

        <Tenet title="Fullstack & Monolithic">
          <Text>
            Includes everything from the database to your frontend all inside a single
            app. Only one development server. Only one thing to deploy.
          </Text>
          <Text>Deploy to a server or serverless</Text>
        </Tenet>

        <Tenet title="API Not Required">
          <Text>
            Instead of fetching data from the backend, you import your server code into
            your frontend and call it like a normal function. At build time, the direct
            function import is swapped out with an auto generated HTTP API.
          </Text>
          <Text>The generated API can also be used by third-parties</Text>
        </Tenet>

        <Tenet title="Convention over Configuration">
          <Text>
            Blitz does all the boring set up and configuration for you. The common project
            structure and architectural patterns make it easy to move from one Blitz app
            to another and immediately feel at home.
          </Text>
        </Tenet>

        <Tenet title="Loose Opinions">
          <Text>
            The out-of-the-box experience guides you on a path perfect for most
            applications. But when you need to go off the beaten path, you are totally
            free to do so.
          </Text>
          <Text>
            And nearly everything is pluggable. For example, we don’t mandate which
            styling or form libraries you use.
          </Text>
        </Tenet>

        <Tenet title="Easy to Start, Easy to Scale">
          <Text>
            Easy for beginners and easy to migrate existing Next.js apps to Blitz.
          </Text>
          <Text>
            Easy to scale in all forms: lines of code, number of people working in the
            codebase, and code execution.
          </Text>
        </Tenet>

        <Tenet title="Stability">
          <Text>
            Once we reach version 1.0, we’ll switch to a stable, predictable release cycle
            with multiple channels like stable, LTS, and beta.
          </Text>
          <Text>We are taking a lot inspiration from Ember in this regard.</Text>
        </Tenet>

        <div className="skip-row" />

        <div className="skip-row" />

        <h2
          sx={{
            variant: ["styles.h3", null, "styles.h2"],
            gridColumn: "1/-1",
            textAlign: [null, null, "center"],
          }}>
          Community — Our Most Important Aspect
        </h2>
        <Spaced className="community-half" space={3} flexDirection="column">
          <Text>
            Our community is warm, safe, diverse, inclusive, and fun! LGBTQ+, women, and
            minorities are especially welcome.
          </Text>
          <Text sx={{mb: 3}}>
            Please read our{" "}
            <Link href="https://github.com/blitz-js/blitz/blob/canary/CODE_OF_CONDUCT.md">
              Code of Conduct.
            </Link>
          </Text>

          <Button
            as="a"
            href="https://slack.blitzjs.com"
            variant="outline"
            style={{marginTop: "auto"}}>
            Join our Slack Community
          </Button>
        </Spaced>

        <Spaced className="community-half" space={3} flexDirection="column">
          <Text>
            We are all in this together, from the youngest to the oldest. We are all more
            similar than we are different. We love to work together.
          </Text>
          <Text>
            You are invited to help us make Blitz the best framework we’ve ever had!
          </Text>

          <Link to={useBaseUrl("/docs/contributing")} sx={{variant: "buttons.outline"}}>
            Learn How to Contribute
          </Link>
        </Spaced>

        <div className="skip-row" />
        <div className="skip-row" />

        <div className="video">
          <VideoPlayer url="https://www.youtube.com/watch?v=ZSD5ifGTlag" />
        </div>
        <div className="video">
          <VideoPlayer url="https://www.youtube.com/watch?v=RiLYvLNDeKA" />
        </div>

        <div className="skip-row" />
        <div className="skip-row" />

        <Feature title="Authentication Built In (Coming soon)">
          <Text>
            Blitz fullstack authentication is super easy and very secure. Works with any
            identity provider, including self-hosted username and password and
            third-parties like Auth0.
          </Text>
        </Feature>

        <Feature title="Database Agnostic">
          <Text>
            You can use any database you want. Prisma 2 is the default database client,
            but you can remove that and use anything else like Fauna or Cosmos.
          </Text>
        </Feature>

        <Feature title="Code Installer Recipes (Coming soon)">
          <Text>
            One command to install code and/or packages into your blitz app. Examples:
            `blitz install tailwind` or `blitz install sentry`. Uses the MDX Recipe format
            that Gatsby created for Gatsby Recipes.
          </Text>
        </Feature>

        <Feature title="Plugins (Coming soon)">
          <Text>
            Hook into many parts of a Blitz app, including the CLI. Greatly improves the
            developer experience for integrations. The first offical plugins will be
            database plugins.
          </Text>
        </Feature>

        <Feature title="Native Typescript Support">
          <Text>
            Blitz is built with Typescript and the Blitz data layer is fully end-to-end
            typesafe. All types are fully static without needing a separate type
            generation process!
          </Text>
        </Feature>

        <Feature title="Code Scaffolding">
          <Text>
            It’s early days, but Blitz code scaffolding is going to be extremely powerful.
            Great for both prototyping and for building real apps. Can override any
            template and customize for your project.
          </Text>
        </Feature>
      </Grid>

      <main className="container">
        {/* Newsletter sign-up */}
        <div
          className="margin-vert--xl padding-vert--lg hero hero--primary"
          style={{background: "#6700eb", borderRadius: 4}}>
          <div className="container">
            <div className="row align-center">
              <div className="col col--6">
                <h2>
                  <span role="img" aria-label="rocket" className="margin-right--sm">
                    🚀
                  </span>{" "}
                  Join the mailing list
                </h2>
                <p>
                  Want to receive the latest news and updates from the Blitz team? Sign up
                  for our newsletter!
                </p>
              </div>
              <div className="col col--6">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
