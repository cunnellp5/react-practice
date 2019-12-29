import React, { Component } from "react";
import "./../../App.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome home 🏚"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p> This is a few different projects for practice </p>
      </div>
    );
  }
}

export default Home;
