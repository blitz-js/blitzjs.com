import React from "react"
import {Flex, useThemeUI} from "theme-ui"
import styled from "@emotion/styled"
import {system} from "styled-system"
import useMedia from "use-media-easy"

const marginLeft = system({
  space: {
    property: "marginLeft",
    scale: "space",
  },
})
const marginTop = system({
  space: {
    property: "marginTop",
    scale: "space",
  },
})

const SpacedX = styled(Flex)`
  flex-direction: row;

  && > * + * {
    ${marginLeft}
  }
`
const SpacedY = styled(Flex)`
  flex-direction: column;

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  && > * + * {
    ${marginTop}
  }
`

const Spaced = ({flexDirection = "row", ...props}) => {
  const {theme} = useThemeUI()
  const [b1] = useMedia({query: {minWidth: theme.breakpoints[0]}})
  const [b2] = useMedia({query: {minWidth: theme.breakpoints[1]}})
  const [b3] = useMedia({query: {minWidth: theme.breakpoints[2]}})
  const [b4] = useMedia({query: {minWidth: theme.breakpoints[3]}})

  let direction
  if (Array.isArray(flexDirection)) {
    if (!b1) {
      console.log("under b1")
      direction = flexDirection[0]
    } else if (b1 && !b2) {
      console.log("b1 to b2")
      direction = flexDirection[1]
    } else if (b2 && !b3) {
      direction = flexDirection[2]
    } else if (b3 && !b4) {
      direction = flexDirection[3]
    } else {
      direction = flexDirection[4]
    }
    if (!direction) {
      direction = flexDirection[flexDirection.length - 1]
    }
  } else {
    direction = flexDirection
  }

  if (direction === "row") {
    return <SpacedX {...props} />
  } else {
    return <SpacedY {...props} />
  }
}

export default Spaced
