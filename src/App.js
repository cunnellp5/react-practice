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

        <ul>
          {this.state.todos.map(todo => {
            return <li key={todo.title}>{todo.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
