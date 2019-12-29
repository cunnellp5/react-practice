import React from "react";

const NewTodoForm = props => {
  return (
    <form onSubmit={props.formSubmitted}>
      <label class="todo-label" htmlFor="newTodo">
        New todo:
      </label>

      <input
        onChange={props.newTodoChanged}
        name="newTodo"
        id="newTodo"
        value={props.newTodo}
      />

      <button class="submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
