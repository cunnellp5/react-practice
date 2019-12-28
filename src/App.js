import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello worldilocks",
      newTodo: "",
      todos: [
        {
          title: "Learn React",
          done: false
        },
        {
          title: "hello im another todo",
          done: true
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
    todos[index] = { ...todos[index] };
    todos[index].done = event.target.checked;
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

        <form onSubmit={this.formSubmitted}>
          <label htmlFor="newTodo">New Todo</label>

          <input
            onChange={this.newTodoChanged}
            name="newTodo"
            id="newTodo"
            value={this.state.newTodo}
          />

          <button type="submit">add todo</button>
        </form>
        <button onClick={() => this.allDone()}>All Done</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={todo.title}>
                <input
                  onChange={event => this.toggleTodoDone(event, index)}
                  type="checkbox"
                  defaultChecked={todo.done}
                  checked={todo.done}
                />
                <span
                  style={{
                    textDecoration: todo.done ? "line-through" : "inherit"
                  }}
                >
                  {todo.title}
                </span>
                <button onClick={() => this.removeTodo(index)}>Remove</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
