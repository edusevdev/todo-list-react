import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Task } from "../components/Task"

test("renders the components", () => {
  const { getByText, getByTestId } = render(<Task name="Test Task" />)
  const taskNameElement = getByText("Test Task")
  const checkbox = getByTestId("taskCheckbox")
  const label = getByTestId("taskLabel")
  const editIcon = getByTestId("taskEditIcon")
  const clearIcon = getByTestId("taskClearIcon")

  expect(taskNameElement).toBeDefined()
  expect(checkbox).toBeDefined()
  expect(label).toBeDefined()
  expect(editIcon).toBeDefined()
  expect(clearIcon).toBeDefined()
})

test("allows editing the task name", () => {
  const { getByTestId } = render(<Task name="Test Task" />)
  const editIcon = getByTestId("taskEditIcon")

  fireEvent.click(editIcon)

  const editInput = getByTestId("taskText")
  expect(editInput).toBeDefined()

  fireEvent.change(editInput, { target: { value: "Edited Task" } })

  fireEvent.click(getByTestId("taskDoneIcon"))

  const updatedLabel = getByTestId("taskLabel")
  expect(updatedLabel).toBeDefined()
  expect(updatedLabel.textContent).toBe("Edited Task")
})

test("allows removing a task", () => {
  const handleRemoveTask = jest.fn()
  const { getByRole, getByTestId } = render(
    <Task name="Test Task" handleRemoveTask={handleRemoveTask} />,
  )

  const clearIcon = getByTestId("taskClearIcon")
  fireEvent.click(clearIcon)

  expect(handleRemoveTask).toHaveBeenCalledWith("Test Task")
})

test("toggles the checkbox state", () => {
  const { getByTestId } = render(<Task name="Test Task" />)
  const checkbox = getByTestId("taskCheckbox")

  expect(checkbox).toBeDefined()
  expect(checkbox.checked).toBeFalsy()

  fireEvent.click(checkbox)

  expect(checkbox.checked).toBeTruthy()
})
