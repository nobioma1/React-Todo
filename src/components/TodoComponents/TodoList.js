import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList }) => {
  return (
    <div className="todo-list">
      {todoList.map(todo => (
        <Todo key={todo.id} task={todo.task} />
      ))}
    </div>
  );
};

export default TodoList;
