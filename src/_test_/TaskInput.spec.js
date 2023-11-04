import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { TaskInput } from "../components/TaskInput"
import { toast } from "react-hot-toast"

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }
  }

const addTaskMock = jest.fn()

beforeEach(() => {
  render(<TaskInput addTask={addTaskMock} />)
})

// Common test configuration
const setup = () => {
  const addButton = screen.getByTestId("task-input-add-icon")
  const inputNewTask = screen.getByTestId("task-input")
  const toastEmptyInput = screen.findByText(
    "Give it some words to name of the task !",
  )
  const form = screen.getByTestId("task-input-form")
  return { inputNewTask, addButton, toastEmptyInput, form }
}

test("TaskInput component renders correctly", () => {
  const { inputNewTask, addButton } = setup()

  expect(addButton).toBeDefined()
  expect(inputNewTask).toBeDefined()
})

test("TaskInput component handles adding a task", () => {
  const { inputNewTask, addButton } = setup()

  fireEvent.change(inputNewTask, { target: { value: "New Task" } })
  fireEvent.click(addButton)

  expect(addTaskMock).toHaveBeenCalledWith("New Task")
})

test("TaskInput component does not add empty task and shows toast", () => {
  const { addButton, toastEmptyInput } = setup()

  fireEvent.click(addButton)

  expect(addTaskMock).not.toHaveBeenCalledWith()
  expect(toastEmptyInput).toBeDefined()
})

test("TaskInput component submits on Enter key press", () => {
  const { inputNewTask, form } = setup()

  fireEvent.change(inputNewTask, { target: { value: "New Task" } })
  fireEvent.submit(form)

  expect(addTaskMock).toHaveBeenCalledWith("New Task")
})
