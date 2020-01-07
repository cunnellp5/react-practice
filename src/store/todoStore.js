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

  @observable newTodo = "";

  @action addTodo = todo => {
    this.todoList.push(todo);
    return this.todoList;
  };

  @action removeTodo = id => {
    this.todoList.splice(id, 1);
    return this.todoList;
  };

  @action changeTodo = string => {
    this.newTodo = string;
  };

  @action allDone = () => {
    this.todoList = this.todoList.map(todo => {
      return {
        ...todo,
        done: true
      };
    });
  };

  @action toggle = (checked, index) => {
    const todos = [...this.todoList];
    todos[index] = {
      ...todos[index],
      done: checked
    };
    this.todoList = todos;
  };

  @computed get list() {
    return this.todoList.map(todo => ({
      title: todo.title,
      salary: todo.salary
    }));
  }
}

export default new TodoStore();
