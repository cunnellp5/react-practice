import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello worldilocks",
      newTodo: "",
      todos: []
    };
    this.formSubmitted = this.formSubmitted.bind(this);
    this.newTodoChanged = this.newTodoChanged.bind(this);
  }

  formSubmitted(event) {
    event.preventDefault();
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

          <input onChange={this.newTodoChanged} name="newTodo" id="newTodo" />

          <button type="submit">add todo</button>
        </form>
      </div>
    );
  }
}

export default App;
