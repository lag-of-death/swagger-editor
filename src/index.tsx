import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import petstore = require("../spec/petstore.oas2.json");
import App from "./containers/App";
import rootReducer from "./reducers/";

const store = createStore(rootReducer, petstore as any);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root"),
);
