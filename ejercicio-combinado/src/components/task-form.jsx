import React, { useState } from "react";
import '../style/task-form.css';
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleChange = ({ target }) => setTitle(target.value);

  const handleSendTask = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: title?.trim(),
      complete: false,
    };

    if(typeof onSubmit === "function"){
      onSubmit(newTask);
      setTitle("");
    }
  };

  return (
    <form
      className="task-form"
      onSubmit={ handleSendTask }
    >
      <input
        className="task-input"
        type='text'
        placeholder='Escribe una tarea'
        name='title'
        value={title}
        onChange={ handleChange }
      />
      <button className="task-button">
        Agregar tarea
      </button>
    </form>
  );
};

TaskForm.propTypes = {
  onSubmit: PropTypes.func
};

TaskForm.defaultProps = {
  onSubmit: null
};

export default TaskForm;