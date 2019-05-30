import React from 'react';
import { FaPlus } from 'react-icons/fa';

const TodoForm = ({ inputHandler, addHandler, enterKeyHandler, text }) => {
  return (
    <div className="todo-input">
      <form>
        <input
          placeholder="What do you want to do?"
          onChange={inputHandler}
          onKeyPress={enterKeyHandler}
          value={text}
        />
        <button onClick={addHandler}>
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
