import React from 'react';
import Todo from './Todo';
import DeleteButton from './DeleteButton';

const TodoList = props => {
  const {
    todoList,
    clearAll,
    clearCompleted,
    completeTodo,
    removeTodo,
    searchTerm,
    searchTodo
  } = props;

  return (
    <div className="todo-list">
      <div className="header">
        <h3>All Tasks</h3>
        <div className="header-buttons">
          <DeleteButton
            action={clearCompleted}
            text="Clear Completed"
            isActive={todoList.length === 0}
          />
          <DeleteButton
            action={clearAll}
            text="Clear All"
            isActive={todoList.length === 0}
          />
        </div>
      </div>
      {todoList.length === 0 ? (
        <p className="no-item">No item yet, Add a todo!!</p>
      ) : (
        <ol>
          {todoList.filter(searchTodo(searchTerm)).map(todo => (
            <li key={todo.id}>
              <Todo
                complete={completeTodo}
                remove={removeTodo}
                id={todo.id}
                task={todo.task}
                isComplete={todo.completed}
              />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default TodoList;
