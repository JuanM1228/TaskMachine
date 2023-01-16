import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import '../StyleSheets/task.css'


function Task({ id, text, complete, completeTask, deleteTask}) {
  return(
    <div className={complete ? 'task-container complete' : 'task-container'}>
      <div 
        className="task-text"
        onClick={() => completeTask(id)}>
        {text}
      </div>
      <div 
        className="task-container-icon"
        onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle  className="task-icon"/>
      </div>
    </div>
  )
}

export default Task;