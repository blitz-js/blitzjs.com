/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react"

import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@site/src/components/Layout"
import BlogPostItem from "@site/src/components/BlogPostItem"
import BlogListPaginator from "@site/src/components/BlogListPaginator"

function BlogListPage(props) {
  const {metadata, items} = props
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext()
  const isBlogOnlyMode = metadata.permalink === "/"
  const title = isBlogOnlyMode ? siteTitle : "Blog"

  return (
    <Layout title={title} description="Blog">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            {items.map(({content: BlogPostContent}) => (
              <BlogPostItem
                key={BlogPostContent.metadata.permalink}
                frontMatter={BlogPostContent.frontMatter}
                metadata={BlogPostContent.metadata}
                truncated={BlogPostContent.metadata.truncated}>
                <BlogPostContent />
              </BlogPostItem>
            ))}
            <BlogListPaginator metadata={metadata} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogListPage
