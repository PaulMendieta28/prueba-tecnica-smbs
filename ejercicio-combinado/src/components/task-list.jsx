import React, { useState } from 'react';
import TaskForm from './task-form';
import Task from './task'
import '../style/task-list.css';

function ListTask() {
  const [tasks, setTasks] = useState([]);
  
  return (
    <>
      <TaskForm />
      <div className='task-container-list'>
        {
          tasks.map((task) => 
            <Task 
              text={ task.text }
              complete={ task.complete }
            />
          )
        }
      </div>
    </>
  );
}

export default ListTask;