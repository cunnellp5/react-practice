import React, { Component } from "react";
import "./App.css";
import NewTodoForm from "./newTodoForm/newTodoForm";
import TodoList from "./todoList/todoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Todos 📝",
      newTodo: "",
      todos: [
        {
          title: "Learn React",
          done: false
        },
        {
          title: "hello im another todo",
          done: false
        }
      ]
    };
    this.formSubmitted = this.formSubmitted.bind(this);
    this.newTodoChanged = this.newTodoChanged.bind(this);
  }

  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    });
  }

  newTodoChanged(event) {
    this.setState({ newTodo: event.target.value });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos];
    todos[index] = {
      ...todos[index],
      done: event.target.checked
    };
    this.setState({ todos });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        ...todo,
        done: true
      };
    });
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        <div className="inline-wrapper">
          <NewTodoForm
            formSubmitted={this.formSubmitted}
            newTodoChanged={this.newTodoChanged}
            newTodo={this.state.newTodo}
          />

          <button id="all-done" onClick={() => this.allDone()}>
            All Done
          </button>
        </div>

        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}

export default App;
