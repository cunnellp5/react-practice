import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "mobx-react";
import TableStore from "./store/tableStore";
import TodoStore from "./store/todoStore";

ReactDOM.render(
  <Provider TableStore={TableStore} TodoStore={TodoStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
