import React, { Component } from "react";
import "../../../App.css";
import NewTodoForm from "./../newTodoForm/newTodoForm";
import TodoList from "./../todoList/todoList";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@withRouter
@observer
class Todo extends Component {
  constructor(props) {
    super(props);
    const { TodoStore } = this.props;
    this.state = {
      message: "Todos 📝",
      newTodo: ""
    };
    this.formSubmitted = this.formSubmitted.bind(this);
    this.newTodoChanged = this.newTodoChanged.bind(this);
  }

  formSubmitted(event) {
    event.preventDefault();
    this.props.TodoStore.addTodo({
      title: this.state.newTodo,
      done: false
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
    const { TodoStore } = this.props;
    console.log(TodoStore.list);
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
          todos={TodoStore.list}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}

export default Todo;
