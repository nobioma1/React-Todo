import React from 'react';
import Todo from './Todo';
import DeleteButton from './DeleteButton';


const TodoList = ({ todoList }) => {
  return (
    <div className="todo-list">
      <div className="header">
        <h3>All Tasks</h3>
        <div className="header-buttons">
          <DeleteButton text="Clear Completed" />
          <DeleteButton text="Clear All" />
        </div>
      </div>
      <ol>
        {todoList.map(todo => (
          <li key={todo.id}>
            <Todo task={todo.task} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
