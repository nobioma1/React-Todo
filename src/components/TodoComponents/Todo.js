import React from 'react';
import DeleteButton from './DeleteButton';
import CompletedButton from './CompletedButton';

const Todo = ({ id, task, isComplete, complete, remove }) => {
  return (
    <div className="todo-item">
      <p className={ isComplete ? 'completed' : null} >{task}</p>
      <div className="todo-item-buttons">
        <CompletedButton disable={isComplete} action={() => complete(id)} />
        <DeleteButton
          action={() => remove(id)}
          text="Remove"
        />
      </div>
    </div>
  )
}

export default Todo;
