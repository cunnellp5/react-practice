import React, { Component } from "react";
import ListItem from "./listItem";
import { observer } from "mobx-react";

@observer
class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => {
          return (
            <ListItem
              key={index}
              todo={todo}
              index={index}
              toggleTodoDone={this.props.toggleTodoDone}
              removeTodo={this.props.removeTodo}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
