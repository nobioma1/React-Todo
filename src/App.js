import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Search from './components/TodoComponents/Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        // {
        //   task: 'Organize Garage',
        //   id: 1528817077286,
        //   completed: false
        // },
        // {
        //   task: 'Bake Cookies',
        //   id: 1528817084358,
        //   completed: false
        // }
      ],
      newTask: '',
      searchText: ''
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

  addTask = event => {
    event.preventDefault();
    
    let newTask = this.state.newTask;

    if (newTask.length !== 0) {
      const task = {
        task: this.state.newTask,
        id: Date.now(),
        completed: false
      };
      this.setState(prevState => ({
        todoList: [...prevState.todoList, task],
        newTask: ''
      }));
    }
  };

  inputHandler = event => {
    this.setState({ newTask: event.target.value });
  };

  keyPressed = event => {
    if (event.key === 'Enter') {
      this.addTask(event);
    }
  };

  clearAll = () => {
    this.setState({ todoList: [], newTask: '' });
  };

  clearCompleted = () => {
    const uncompletedList = this.state.todoList.filter(
      item => item.completed !== true
    );
    this.setState({ todoList: uncompletedList });
  };

  completedTodo = id => {
    const todoIndex = this.state.todoList.findIndex(item => item.id === id);
    const todoList = this.state.todoList;
    todoList[todoIndex].completed = !todoList[todoIndex].completed;

    this.setState({ todoList });
  };

  removeTodo = id => {
    const todoList = this.state.todoList.filter(item => item.id !== id);
    this.setState({ todoList });
  };

  searchTextInputHandler = event => {
    this.setState({ searchText: event.target.value });
  };

  searchTodo = searchText => {
    return todo => {
      return todo.task.toLowerCase().includes(searchText.toLowerCase());
    };
  };

  render() {
    return (
      <div className="main-container">
        <div className="bg-img" />
        <h2>Welcome to your Todo App!</h2>
        <div className="todo-container">
          <Search
            inputChange={this.searchTextInputHandler}
            text={this.state.searchText}
          />
          <TodoList
            searchTerm={this.state.searchText}
            searchTodo={this.searchTodo}
            todoList={this.state.todoList}
            clearAll={this.clearAll}
            clearCompleted={this.clearCompleted}
            completeTodo={this.completedTodo}
            removeTodo={this.removeTodo}
          />
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
