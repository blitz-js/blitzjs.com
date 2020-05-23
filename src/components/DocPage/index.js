/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react"
import {MDXProvider} from "@mdx-js/react"

import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import renderRoutes from "@docusaurus/renderRoutes"
import Layout from "@site/src/components/Layout"
import DocItem from "@site/src/components/DocItem"
import DocSidebar from "@site/src/components/DocSidebar"
import MDXComponents from "@site/src/components/MDXComponents"
import NotFound from "@site/src/components/NotFound"
import {matchPath} from "@docusaurus/router"

import styles from "./styles.module.css"

function DocPage(props) {
  const {route: baseRoute, docsMetadata, location, content} = props
  const {permalinkToSidebar, docsSidebars, version, isHomePage, homePagePath} = docsMetadata

  // Get case-sensitive route such as it is defined in the sidebar.
  const currentRoute = !isHomePage
    ? baseRoute.routes.find((route) => {
        return matchPath(location.pathname, route)
      }) || {}
    : {}

  const sidebar = isHomePage ? content.metadata.sidebar : permalinkToSidebar[currentRoute.path]
  const {
    siteConfig: {themeConfig: {sidebarCollapsible = true} = {}} = {},
    isClient,
  } = useDocusaurusContext()

  if (!isHomePage && Object.keys(currentRoute).length === 0) {
    return <NotFound {...props} />
  }

  return (
    <Layout version={version} key={isClient}>
      <div className={styles.docPage}>
        {sidebar && (
          <div className={styles.docSidebarContainer}>
            <DocSidebar
              docsSidebars={docsSidebars}
              path={isHomePage ? homePagePath : currentRoute.path}
              sidebar={sidebar}
              sidebarCollapsible={sidebarCollapsible}
            />
          </div>
        )}
        <main className={styles.docMainContainer}>
          <MDXProvider components={MDXComponents}>
            {isHomePage ? <DocItem content={content} /> : renderRoutes(baseRoute.routes)}
          </MDXProvider>
        </main>
      </div>
    </Layout>
  )
}

export default DocPage
