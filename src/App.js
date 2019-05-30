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
      ],
      newTask: ''
    };
  }

  componentDidMount() {
    let data = window.localStorage.getItem('react-todo-noble');
    if (data !== null) {
      this.setState({ todoList: JSON.parse(data) });
    }
  }

  componentDidUpdate() {
    let data = JSON.stringify(this.state.todoList);
    window.localStorage.setItem('react-todo-noble', data);
  }
    const task = {
      task: this.state.newTask,
      id: Date.now(),
      completed: false
    };
    this.setState(prevState => ({
      todoList: [...prevState.todoList, task],
      newTask: ''
    }));
  };

  inputHandler = event => {
    this.setState({ newTask: event.target.value });
  };

  keyPressed = event => {
    if (event.key === 'Enter') {
      this.addTask();
    }
  };

  render() {
    return (
      <div className="main-container">
        <div className="bg-img" />
        <h2>Welcome to your Todo App!</h2>
        <div className="todo-container">
          <TodoList todoList={this.state.todoList} />
          <TodoForm
            inputHandler={this.inputHandler}
            enterKeyHandler={this.keyPressed}
            addHandler={this.addTask}
            text={this.state.newTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
