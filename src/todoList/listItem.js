import React from "react";

const ListItem = props => {
  const { todo, index } = props;
  return (
    <li className="list-item" key>
      <input
        onChange={event => props.toggleTodoDone(event, index)}
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
        onClick={() => props.removeTodo(index)}
      >
        X
      </button>
    </li>
  );
};

export default ListItem;
