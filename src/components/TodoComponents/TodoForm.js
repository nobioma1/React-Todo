import React from 'react';
import { FaPlus } from 'react-icons/fa';

const TodoForm = props => {
  return (
    <div className="todo-input">
      <input
        placeholder="What do you want to do?"
      />
      <button><FaPlus /></button>
    </div>
  )
}

export default TodoForm;
