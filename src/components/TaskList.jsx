import React from 'react';
import { Task } from './Task';

export const TaskList = ({taskList, handleRemoveTask}) => {
  return (
    <>
    <div className="task-list-container" data-testid="task-list-container">
    {taskList.map(task => (
        <div key={task.name} data-testid="task-item">
          <Task
            name={task.name}
            handleRemoveTask={handleRemoveTask}
          />
        </div>
      ))}
    </div>
    </>
  )
}

export default TaskList;