import React from "react";
import '../style/task-form.css';

const TaskForm = ({ onSubmit }) => {
  return (
    <form
      className="task-form"
    >
      <input
        className="task-input"
        type='text'
        placeholder='Escribe una tarea'
        name='title'
      />
      <button className="task-button">
        Agregar tarea
      </button>
    </form>
  );
};

export default TaskForm;