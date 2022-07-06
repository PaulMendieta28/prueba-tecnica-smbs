import React, { useState } from 'react';
import TaskForm from './task-form';
import Task from './task'
import '../style/task-list.css';

function ListTask() {
  const [tasks, setTasks] = useState([]);
  console.log('tasks', tasks)

  const addTask = task => {
    console.log(task);
    if(task?.text){
      const updatedTasks = [task, ...tasks];

      setTasks(updatedTasks);
    }
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const completeTask = id => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex(updatedTask => updatedTask.id === id);
    const modifiedTask = updatedTasks[index];

    updatedTasks[index] = { ...modifiedTask, complete: !modifiedTask.complete }

    setTasks(updatedTasks);
  }

  return (
    <>
      <TaskForm onSubmit={ addTask } />
      <div className='task-container-list'>
        {
          tasks.map((task) => 
            <Task 
              key={ task.id }
              id={ task.id }
              text={ task.text }
              complete={ task.complete }
              deleteTask={ deleteTask }
              completeTask={ completeTask }
            />
          )
        }
      </div>
    </>
  );
}

export default ListTask;