import { observable, action, computed } from "mobx";

class TableStore {
  @observable employeeList = [
    {
      name: "John doe",
      salary: 150
    },
    {
      name: "jane Doe",
      salary: 300
    },
    {
      name: "muslce head",
      salary: 1
    }
  ];

  @action addEmployee = employee => {
    this.employeeList.push(employee);
  };

  @computed get employeeCount() {
    return this.employeeList.length;
  }
}

export default new TableStore();
