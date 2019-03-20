import * as React from "react";
import { connect } from "react-redux";
import { TreeView } from "../components/TreeView";
import { diagnose } from "../util/linting";

import { ISpecPart } from "../components/TreeView/interfaces";

const App = ({spec}: { spec: ISpecPart }) =>
  <TreeView
    spec={spec}
    diagnostics={diagnose(spec)}/>;

export default connect((state) => {
  return {
    spec: state,
  };
})(App);
