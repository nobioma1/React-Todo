import React from 'react';

const Todo = ({ task }) => {
  return (
    <div className="todo-item">
      <p>{task}</p>
    </div>
  )
}

export default Todo;
