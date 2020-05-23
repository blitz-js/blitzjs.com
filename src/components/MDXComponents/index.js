import React from "react"
import Link from "@docusaurus/Link"
import Prism from "@theme-ui/prism"
// import CodeBlock from "@site/src/components/CodeBlock"

// import styles from "./styles.module.css"

export default {
  a: (props) => {
    if (/\.[^./]+$/.test(props.href)) {
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      return <a {...props} />
    }
    return <Link {...props} />
  },
  pre: ({children}) => <>{children}</>,
  code: Prism,
  // code: (props) => {
  //   const {children} = props
  //   if (typeof children === "string") {
  //     return <CodeBlock {...props} />
  //   }
  //   return children
  // },
  // pre: (props) => <div className={styles.mdxCodeBlock} {...props} />,
}
