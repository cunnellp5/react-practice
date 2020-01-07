import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "./components/todoApp/todo/todo";
import Home from "./components/home/home";
import MobTable from "./components/mobxTableApp/table";

class App extends Component {
  render() {
    // const { TableStore } = this.props;

    // console.log(TableStore.employeeCount);
    return (
      <Router>
        <div>
          <ul className="hide-decor horizontal-space">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/table">
              <MobTable />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
