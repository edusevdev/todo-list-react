import React, { useState } from "react"
import { TaskInput } from "./TaskInput"
import TaskList from "./TaskList"
import toast, { Toaster } from "react-hot-toast"

export const TodoList = ({ title }) => {
  const [taskList, setTaskList] = useState([
    { name: "Buy water" },
    { name: "Clean car" },
  ])

  const addTask = (name) => {
    if (!taskList.some((item) => item.name === name)) {
      const task = { name }
      const updatedList = [...taskList, task]
      setTaskList(updatedList)
    } else {
      showToastExistingTask()
    }
  }

  const removeTask = (name) => {
    const updatedList = taskList.filter((item) => item.name !== name)
    setTaskList(updatedList)
  }

  const showToastExistingTask = () =>
    toast.success("This task already exists", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    })

  return (
    <>
      <h1>{title}</h1>
      <div id="todo-list-container">
        <TaskInput addTask={addTask} />
        <TaskList taskList={taskList} handleRemoveTask={removeTask} />
      </div>
      <div id="toast-notification">
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </>
  )
}
