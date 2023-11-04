import React, { useState, useRef } from "react"
import EditIcon from "@mui/icons-material/Edit"
import ClearIcon from "@mui/icons-material/Clear"
import DoneIcon from "@mui/icons-material/Done"

export const Task = ({ name, handleRemoveTask }) => {
  const [checked, setChecked] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(name)

  const labelRef = useRef(null)

  const handleCheckboxChange = () => {
    setChecked(!checked)
    if (labelRef.current) {
      labelRef.current.style.textDecoration = checked ? "none" : "line-through"
    }
  }

  const handleInputChange = (event) => {
    setEditedName(event.target.value)
  }

  const handleEditIcon = () => {
    setIsEditing(true)
  }

  const handleClearIcon = () => {
    handleRemoveTask(name)
  }

  const handleDoneIcon = () => {
    setIsEditing(false)
  }

  return (
    <>
      <div className="task-container">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          disabled={isEditing}
          data-testid="taskCheckbox"
        />

        {isEditing ? (
          <input
            type="text"
            className="editing-task"
            value={editedName}
            onChange={handleInputChange}
            autoFocus
            data-testid="taskText"
          />
        ) : (
          <label ref={labelRef} data-testid="taskLabel">
            {editedName}
          </label>
        )}

        <div className="icon-group">
          {!isEditing ? (
            <>
              <EditIcon
                className="icon"
                onClick={handleEditIcon}
                data-testid="taskEditIcon"
              />
              <ClearIcon
                className="icon"
                onClick={handleClearIcon}
                data-testid="taskClearIcon"
              />
            </>
          ) : (
            <DoneIcon
              className="icon"
              onClick={handleDoneIcon}
              data-testid="taskDoneIcon"
            />
          )}
        </div>
      </div>
    </>
  )
}
