import React, { Component } from "react";
import MobControls from "./controls";
import { withRouter } from "react-router-dom"; // optional, see Footnote 2
import { inject, observer } from "mobx-react";
import tableStore from "../../store/tableStore";

@inject("TableStore")
@withRouter // optional, see Footnote 2
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
        <p>these are my employees {tableStore.employeeCount}</p>
        <MobControls />
      </div>
    );
  }
}

export default MobTable;
