import React from 'react';
import { FaPlus } from 'react-icons/fa';

const TodoForm = ({ inputHandler, addHandler, enterKeyHandler, text }) => {
  return (
    <div className="todo-input">
      <input
        placeholder="What do you want to do?"
        onChange={event => inputHandler(event)}
        onKeyPress={(event) => enterKeyHandler(event)}
        value={text}
      />
      <button onClick={() => addHandler()}>
        <FaPlus />
      </button>
    </div>
  );
};

export default TodoForm;
