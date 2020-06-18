/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import Head from "@docusaurus/Head"
import isInternalUrl from "@docusaurus/isInternalUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"
import DocPaginator from "@site/src/components/DocPaginator"
import useTOCHighlight from "@site/src/hooks/useTOCHighlight"

import classnames from "classnames"
import styles from "./styles.module.css"

import {Styled} from "theme-ui"

const LINK_CLASS_NAME = "table-of-contents__link"
const ACTIVE_LINK_CLASS_NAME = "table-of-contents__link--active"
const TOP_OFFSET = 100

function DocTOC({headings}) {
  useTOCHighlight(LINK_CLASS_NAME, ACTIVE_LINK_CLASS_NAME, TOP_OFFSET)
  return (
    <div className="col col--3">
      <div className={styles.tableOfContents}>
        <Headings headings={headings} />
      </div>
    </div>
  )
}

/* eslint-disable jsx-a11y/control-has-associated-label */
function Headings({headings, isChild}) {
  if (!headings.length) {
    return null
  }
  return (
    <ul className={isChild ? "" : "table-of-contents table-of-contents__left-border"}>
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={LINK_CLASS_NAME}
            dangerouslySetInnerHTML={{__html: heading.value}}
          />
          <Headings isChild headings={heading.children} />
        </li>
      ))}
    </ul>
  )
}

function DocItem(props) {
  const {siteConfig = {}} = useDocusaurusContext()
  const {url: siteUrl, title: siteTitle} = siteConfig
  const {content: DocContent} = props
  const {metadata} = DocContent
  const {description, title, permalink, editUrl, lastUpdatedAt, lastUpdatedBy, version} = metadata
  const {
    frontMatter: {
      image: metaImage,
      keywords,
      hide_title: hideTitle,
      hide_table_of_contents: hideTableOfContents,
    },
  } = DocContent

  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle
  let metaImageUrl = siteUrl + useBaseUrl(metaImage)
  if (!isInternalUrl(metaImage)) {
    metaImageUrl = metaImage
  }

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        {description && <meta name="description" content={description} />}
        {description && <meta property="og:description" content={description} />}
        {keywords && keywords.length && <meta name="keywords" content={keywords.join(",")} />}
        {metaImage && <meta property="og:image" content={metaImageUrl} />}
        {metaImage && <meta property="twitter:image" content={metaImageUrl} />}
        {metaImage && <meta name="twitter:image:alt" content={`Image for ${title}`} />}
        {permalink && <meta property="og:url" content={siteUrl + permalink} />}
        {permalink && <link rel="canonical" href={siteUrl + permalink} />}
      </Head>
      <div className={classnames("container padding-vert--lg", styles.docItemWrapper)}>
        <div className="row">
          <div
            className={classnames("col", {
              [styles.docItemCol]: !hideTableOfContents,
            })}
          >
            <div className={styles.docItemContainer}>
              <article>
                {version && (
                  <div>
                    <span className="badge badge--secondary">Version: {version}</span>
                  </div>
                )}
                {!hideTitle && (
                  <header>
                    <Styled.h1>{title}</Styled.h1>
                  </header>
                )}
                <div>
                  <DocContent />
                </div>
              </article>
              <div sx={{my: 4}}>
                <DocPaginator metadata={metadata} />
              </div>
              {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
                <div className="margin-vert--md">
                  <div className="row">
                    <div className="col">
                      Idea for improving this page?
                      <a href={editUrl} target="_blank" rel="noreferrer noopener" sx={{ml: 2}}>
                        Edit it on Github
                      </a>
                    </div>
                    {(lastUpdatedAt || lastUpdatedBy) && (
                      <div className="col text--right">
                        <em>
                          <small>
                            Last updated{" "}
                            {lastUpdatedAt && (
                              <>
                                on{" "}
                                <time
                                  dateTime={new Date(lastUpdatedAt * 1000).toISOString()}
                                  className={styles.docLastUpdatedAt}
                                >
                                  {new Date(lastUpdatedAt * 1000).toLocaleDateString()}
                                </time>
                                {lastUpdatedBy && " "}
                              </>
                            )}
                            {lastUpdatedBy && (
                              <>
                                by <strong>{lastUpdatedBy}</strong>
                              </>
                            )}
                            {process.env.NODE_ENV === "development" && (
                              <div>
                                <small> (Simulated during dev for better perf)</small>
                              </div>
                            )}
                          </small>
                        </em>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          {!hideTableOfContents && DocContent.rightToc && <DocTOC headings={DocContent.rightToc} />}
        </div>
      </div>
    </>
  )
}

export default DocItem
