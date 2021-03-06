import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import petstore = require("../spec/petstore.oas2.json");
import App from "./containers/App";
import rootReducer from "./reducers/";

import { Store } from "./shared";

const store = createStore(rootReducer, {spec: petstore as any, text: "", isJSONValid: true} as Store);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root"),
);
