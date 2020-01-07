import { observable, action, computed } from "mobx";

class TodoStore {
  @observable todoList = [
    {
      title: "Learn React",
      done: false
    },
    {
      title: "hello im another todo",
      done: false
    }
  ];

  @observalbe newTodo = "";

  @action addTodo = todo => {
    this.todoList.push(todo);
    return this.todoList;
  };

  @action removeTodo = id => {
    this.todoList.slice(id, 1);
  };

  @computed get list() {
    return this.todoList.map(todo => ({
      title: todo.title,
      salary: todo.salary
    }));
  }
}

export default new TodoStore();
