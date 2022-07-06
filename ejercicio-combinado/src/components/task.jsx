import React from "react";
import { AiTwotoneDelete } from 'react-icons/ai';
import '../style/task.css'

function Task ({ id, text, complete, completeTask, deleteTask }) {
  const containerClass = `task-container ${complete ? "complete" : ""}`;

  return (
    <div className={ containerClass }>
      <div 
      className="task-title"
      onClick={ () => completeTask(id) } >
        {text}
      </div>
      <div 
      className="container-icon"
      onClick={ () => deleteTask(id) } >
        < AiTwotoneDelete className="task-icon"/>
      </div>
    </div>
  )
}

export default Task;