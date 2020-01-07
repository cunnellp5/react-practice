import React, { Component } from "react";
import MobControls from "./controls";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("TableStore")
@withRouter
@observer
class MobTable extends Component {
  constructor() {
    super();
    this.state = {
      message: "Mobx Table 🏓"
    };
  }

  render() {
    const { TableStore } = this.props;
    return (
      <div>
        <h1>{this.state.message}</h1>
        <MobControls />
        <p>Total employees: {TableStore.employeeCount}</p>
        <ul>
          {TableStore.list.map((employee, index) => {
            return (
              <li key={index}>
                name: {employee.name} salary:{employee.salary}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MobTable;
