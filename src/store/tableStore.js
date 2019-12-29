import { observable, decorate } from "mobx";

class TableStore {
  employeeList = [
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
}

decorate(TableStore, {
  employeeList: observable
});

export default new TableStore();
