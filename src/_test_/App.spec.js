import React from "react"
import { render } from "@testing-library/react"
import App from "../App"

test("Renders App component", () => {
  const { getByText } = render(<App />)
  const titleElement = getByText("TODO List React")
  expect(titleElement).toBeDefined()
})
