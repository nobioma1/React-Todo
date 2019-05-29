import React from 'react';
import DeleteButton from './DeleteButton';

const Todo = ({ task }) => {
  return (
    <div className="todo-item">
      <p>{task}</p>
      <DeleteButton text="Remove"/>
    </div>
  )
}

export default Todo;
