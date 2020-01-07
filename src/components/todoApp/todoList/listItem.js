import React, { Component } from "react";
import { observer } from "mobx-react";
import { render } from "@testing-library/react";

@observer
class ListItem extends Component {
  render() {
    const { todo, index } = this.props;
    return (
      <li className="list-item" key>
        <input
          onChange={event => this.props.toggleTodoDone(event, index)}
          type="checkbox"
          className="checkbox"
          checked={todo.done}
        />
        <span
          style={{
            textDecoration: todo.done ? "line-through" : "inherit"
          }}
        >
          {todo.title}
        </span>
        <button
          className="warn warn-button"
          onClick={() => this.props.removeTodo(index)}
        >
          X
        </button>
      </li>
    );
  }
}

export default ListItem;
