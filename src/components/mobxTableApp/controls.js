import React, { Component } from "react";

class MobControls extends Component {
  constructor() {
    super();
  }

  addEmployee = () => {
    console.log("add clicked");
  };

  clearList = () => {
    console.log("clear clicked");
  };

  render() {
    return (
      <div className="controls">
        <button onClick={this.clearList}>clear table</button>
        <button onClick={this.addEmployee}>add record</button>
      </div>
    );
  }
}

export default MobControls;
