import React, { useState, useEffect } from 'react';
import TaskForm from './task-form';
import Task from './task'
import '../style/task-list.css';

function ListTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storagedList = JSON.parse(localStorage.getItem('tasks'))
    setTasks(storagedList)
  }, [])

  const saveTask = updatedTasks =>{
    localStorage.setItem('tasks',JSON.stringify(updatedTasks))
    setTasks(updatedTasks);
  }
  
  const addTask = task => {
    if(task?.text){
      const updatedTasks = [task, ...tasks];

      saveTask(updatedTasks);
    }
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    saveTask(updatedTasks);
  };

  const completeTask = id => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex(updatedTask => updatedTask.id === id);
    const modifiedTask = updatedTasks[index];

    updatedTasks[index] = { ...modifiedTask, complete: !modifiedTask.complete }

    saveTask(updatedTasks);
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