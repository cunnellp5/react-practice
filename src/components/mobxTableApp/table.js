import React, { Component } from "react";
import "./../../App.css";

class MobTable extends Component {
  constructor() {
    super();
    this.state = {
      message: "hello from the table route"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default MobTable;
