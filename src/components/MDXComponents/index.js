import React from "react"
import Link from "@docusaurus/Link"
import Prism from "@theme-ui/prism"

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
}
