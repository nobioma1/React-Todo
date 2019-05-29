import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList }) => {
  return (
    <div className="todo-list">
      <h3>All Tasks</h3>
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
