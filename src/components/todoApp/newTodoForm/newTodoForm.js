import React from "react";

const NewTodoForm = props => {
  return (
    <form onSubmit={props.formSubmitted}>
      <label className="todo-label" htmlFor="newTodo">
        New todo:
      </label>

      <input
        onChange={props.newTodoChanged}
        name="newTodo"
        id="newTodo"
        value={props.newTodo}
      />

      <button className="submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
