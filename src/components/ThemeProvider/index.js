/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react"

import useTheme from "@site/src/hooks/useTheme"
import ThemeContext from "@site/src/components/ThemeContext"
import {ThemeProvider as ThemeProvider2} from "theme-ui"
import theme from "../../theme"
import components from "../MDXComponents"

function ThemeProvider(props) {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useTheme()

  return (
    <ThemeContext.Provider value={{isDarkTheme, setLightTheme, setDarkTheme}}>
      <ThemeProvider2 theme={theme} components={components}>
        {props.children}
      </ThemeProvider2>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
