import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  "Built on Next.js",
  "Don't have to build an API for client-side rendering",
  "Client-side rendering, Server-side rendering, and fully static pages all in the same app",
  "Full Typescript support with static, end-to-end typing (no code generation step needed like with GraphQL)",
  "React Concurrent Mode enabled",
  "Database/ORM agnostic, but Prisma 2 is default",
  "CLI with code scaffolding, Rails-style console REPL, etc",
  "GraphQL Ready",
  "Deploy serverless or serverful",
]

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className="hero hero--primary text--center">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className={classnames("hero__subtitle", styles.heroSubtitle)}>{siteConfig.tagline}</p>
          <div className="margin-top--xl">
            <Link
              className="button button--secondary button--lg"
              to={useBaseUrl("/docs/basics/getting-started")}
            >
              Get Started
            </Link>
            <Link
              className="button button--outline button--secondary button--lg margin-left--md"
              to={useBaseUrl("/docs/contributing/how-to-contribute")}
            >
              Help Build Blitz
            </Link>
          </div>
        </div>
      </header>
      <main className="container">

        {/* Walktrough video and About section */}
        <div className="row padding-vert--xl">
          <div className="col col--6">
            <h2>Alpha Walktrough of Blitz</h2>
            {/* TODO: add video */}
            <div style={{ width: "100%", position: "relative", paddingTop: `${720 / 1152 * 100}%`, color: "gray", backgroundColor: "lightgray" }}>
              <span style={{ position: "absolute", top: "45%", left: "35%" }}>TODO: add video</span>
            </div>
          </div>
          <div className="col col--5 col--offset-1">
            <h2>About {siteConfig.title}</h2>
            <p>
              Blitz brings back the <b>simplicity and conventions</b> of server-rendered frameworks like Ruby on Rails while preserving everything we love about React and client-side rendering!
            </p>
            <p>
              Blitz is the framework for the 99% of us at companies with {`<`}100 employees. This means <b>we don't force you to use advanced technologies like GraphQL</b> . We let you add advanced technologies on your terms and at your pace.
            </p>
            <p>
              Blitz <b>maximizes your productivity</b> both when starting an app and when scaling it to lots of code and users.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="padding-vert--md">
          <h1 className="text--center">Features</h1>
          <div className={classnames("row padding-vert--md", styles.features)}>
            {features.map((feature) => {
              return (
                <div className="col col--6 padding-vert--sm">
                  <span role="img" aria-label="lightning" className="margin-right--sm">⚡️</span> {feature}
                </div>
              )
            })}
          </div>
        </div>

        {/* Newsletter sign-up */}
        <div className="margin-vert--xl padding-vert--lg hero hero--primary">
          <div className="container">
            <div className="row">
              <div className="col col--7">
                <h2>Sign up for our newsletter</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni a maxime quae, nisi laboriosam totam.</p>
              </div>
              <div className="col col--4 col--offset-1">
                {/* TODO: 1. style this form so it looks cool 2. Integrate with Mailchimp */}
                <form>
                  <input aria-label="Email address" type="email" required className="input" placeholder="Enter your email" />
                  <div className="">
                  <button class="button button--secondary button--undefined" type="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
