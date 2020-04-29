import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

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
          <h1 className="hero__title title_16pc">{siteConfig.title}</h1>
          <p className={classnames("hero__subtitle", styles.heroSubtitle)}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
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
              Help Build {siteConfig.title}
            </Link>
          </div>
        </div>
      </header>
      <main>

      </main>
    </Layout>
  );
}

export default Home;
