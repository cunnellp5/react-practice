import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("TableStore")
@withRouter
@observer
class MobControls extends Component {
  constructor(props) {
    super(props);
  }

  addEmployee = () => {
    const employee = {
      name: "poop",
      salary: 53
    };
    const { TableStore } = this.props;
    TableStore.addEmployee(employee);
    console.log(TableStore.list);
  };

  clearList = () => {
    console.log("clear clicked");
    const { TableStore } = this.props;
    TableStore.removeEmployee(TableStore.employeeList.length - 1);
    console.log(TableStore.list);
  };

  render() {
    return (
      <div className="controls">
        <button onClick={() => this.clearList()}>clear table</button>
        <button onClick={() => this.addEmployee()}>add record</button>
      </div>
    );
  }
}

export default MobControls;
