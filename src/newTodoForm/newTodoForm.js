import React from "react";

const NewTodoForm = props => {
  return (
    <form onSubmit={props.formSubmitted}>
      <label htmlFor="newTodo">New Todo</label>

      <input
        onChange={props.newTodoChanged}
        name="newTodo"
        id="newTodo"
        value={props.newTodo}
      />

      <button type="submit">add todo</button>
    </form>
  );
};

export default NewTodoForm;
