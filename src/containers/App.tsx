import * as React from "react";
import { connect } from "react-redux";
import { updateText } from "../actions";
import { TreeView } from "../components/TreeView";
import { ISpecPart } from "../components/TreeView/interfaces";
import { diagnose } from "../util/linting";

type Event = { target: { value: string } };

const App = (
  {spec, issues, text, onChange}:
    { onChange: (evt: Event) => null, text: string, issues: { type: string, msg: string }, spec: ISpecPart },
) => {
  return (
    <React.Fragment>
      {issues ? <div>{issues.msg}</div> : null}
      <textarea
        rows={20}
        cols={150}
        value={text || JSON.stringify(spec)}
        onChange={onChange}/>
      <TreeView
        spec={spec}
        diagnostics={diagnose(spec)}/>
    </React.Fragment>

  );
};

export default connect((state: { spec: ISpecPart, text: string, issues: { type: string, msg: string } }) => {
  return {
    issues: state.issues,
    spec: state.spec,
    text: state.text,
  };
}, (dispatch) => {
  return {
    onChange: (evt: Event) => {
      dispatch(updateText(evt.target.value));
    },
  };
})(App);
