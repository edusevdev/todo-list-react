import React, { useRef } from "react"
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd"
import toast, { Toaster } from "react-hot-toast"

export const TaskInput = ({ addTask }) => {
  const inputNewTask = useRef()

  const handleAddTask = () => {
    if (
      inputNewTask.current.value &&
      inputNewTask.current.value.trim() !== ""
    ) {
      addTask(inputNewTask.current.value)
    } else {
      showToastVoidTask()
    }
    inputNewTask.current.value = ""
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAddTask()
  }

  const showToastVoidTask = () =>
    toast.success("Give it some words to name of the task !", {
      icon: "✍",
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
      <div className="task-input-container">
        <form onSubmit={handleSubmit} data-testid="task-input-form">
          <PlaylistAddIcon
            className="playlist-add-icon"
            onClick={handleAddTask}
            data-testid="task-input-add-icon"
          />
          <input
            type="text"
            placeholder="Add a task"
            ref={inputNewTask}
            data-testid="task-input"
          />
        </form>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  )
}
