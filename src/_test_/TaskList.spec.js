import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import TaskList from "../components/TaskList"

const mockTasks = [{ name: "Task 1" }, { name: "Task 2" }]

const mockHandleRemoveTask = jest.fn()

beforeEach(() => {
  render(
    <TaskList taskList={mockTasks} handleRemoveTask={mockHandleRemoveTask} />,
  )
})

// Common test configuration
const setup = () => {
  const taskListContainer = screen.getByTestId("task-list-container")
  const taskItems = screen.getAllByTestId("task-item")
  return { taskListContainer, taskItems }
}

test("Renders the task list correctly", () => {
  const { taskListContainer, taskItems } = setup()

  expect(taskListContainer).toBeDefined()
  expect(taskItems.length).toBe(mockTasks.length)

  // Check that the name of each task is displayed correctly
  mockTasks.forEach((task, index) => {
    expect(taskItems[index].textContent).toBe(task.name)
  })
})
