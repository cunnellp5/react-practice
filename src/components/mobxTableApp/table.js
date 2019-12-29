import React, { Component } from "react";
import MobControls from "./controls";
// import { withRouter } from "react-router-dom"; // optional, see Footnote 2
// import { inject, observer } from "mobx-react";

// @inject("dataStore")
// @withRouter // optional, see Footnote 2
// @observer

class MobTable extends Component {
  constructor() {
    super();
    this.state = {
      message: "Mobx Table 🏓"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        <MobControls />
      </div>
    );
  }
}

export default MobTable;
