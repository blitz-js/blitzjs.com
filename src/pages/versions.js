import React from "react"
import Layout from "@theme/Layout"
import useBaseUrl from "@docusaurus/useBaseUrl"

function Vision() {
  return (
    <Layout>
      <main>
        <div class="container margin-vert--xl">
          <h1>Blitz documentation versions</h1>
          <div class="margin-bottom--lg">
            <h2 id="latest">Latest version (Active Development)</h2>
            <p>This documention is a work in progress.</p>
            <table>
              <tbody>
                <tr>
                  <th>0.0.0</th>
                  <td>
                    <a href={useBaseUrl("/docs/basics/getting-started")}>Documentation</a>
                  </td>
                  <td>
                    <a href="https://github.com/blitz-js/blitzjs.com/releases">Release Notes</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </Layout>
  )
}

Vision.title = "Vision &amp; Philosophy"
Vision.description = "The vision and philosophy of Blitz"

export default Vision
