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
    return this.employeeList;
  };

  @action removeEmployee = id => {
    this.employeeList.splice(id, 1);
    return this.employeeList;
  };

  @computed get employeeCount() {
    return this.employeeList.length;
  }

  @computed get list() {
    return this.employeeList.map(emp => ({
      name: emp.name,
      salary: emp.salary
    }));
  }
}

export default new TableStore();
