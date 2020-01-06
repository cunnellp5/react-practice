import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "mobx-react";
import TableStore from "./store/tableStore";

ReactDOM.render(
  <Provider TableStore={TableStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
