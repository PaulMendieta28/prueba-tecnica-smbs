import React from "react";
import { AiTwotoneDelete } from 'react-icons/ai';
import '../style/task.css'

function Task({ text, complete }) {
  const containerClass = `task-container ${complete ? "complete" : ""}`;

  return (
    <div className={ containerClass }>
      <div className="task-title">
        {text} Loriamp
      </div>
      <div className="container-icon">
        < AiTwotoneDelete className="task-icon"/>
      </div>
    </div>
  )
}

export default Task;