import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  render() {
    return (
      <div className="main-container">
        <h2>Welcome to your Todo App!</h2>
        <div className="todo-container">
          <TodoList todoList={this.state.todoList} />
          <TodoForm />
        </div>
      </div>
    );
  }
}

export default App;
