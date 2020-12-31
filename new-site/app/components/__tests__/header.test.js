import React from "react"
import { render } from "test/utils"

import Header from "../Header"

test("renders blitz documentation link", () => {
  // This is an example of how to ensure a specific item is in the document
  // But it's disabled by default (by test.skip) so the test doesn't fail
  // when you remove the the default content from the page

  const { getByText } = render(<Header />)
  const linkElement = getByText(/Tailwind CSS home page/i)
  expect(linkElement).toBeInTheDocument()
})
