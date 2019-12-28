import React from "react";

const ListItem = props => {
  const { todo, index } = props;
  return (
    <li key>
      <input
        onChange={event => props.toggleTodoDone(event, index)}
        type="checkbox"
        checked={todo.done}
      />
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "inherit"
        }}
      >
        {todo.title}
      </span>
      <button onClick={() => props.removeTodo(index)}>Remove</button>
    </li>
  );
};

export default ListItem;
