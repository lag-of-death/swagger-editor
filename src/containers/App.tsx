import { IRuleResult } from "@stoplight/spectral";
import * as React from "react";
import { connect } from "react-redux";
import { updateText } from "../actions";
import { TreeView } from "../components/TreeView";
import { ISpecPart } from "../components/TreeView/interfaces";
import { diagnose } from "../util/linting";

type Event = { target: { value: string } };
type State = { spec: ISpecPart, text: string, issues: IRuleResult[] };

import styled from "styled-components";

const boxShadow = "box-shadow: 2px 2px 2px black;";
const borderRadius = "border-radius: 6px;";
const border = "border: 6px solid black;";
const padding = "padding: 6px;";

const Errors = styled.div<{ hasIssues: boolean }>`
  display: flex;
  justify-content: ${({hasIssues}) => hasIssues ? "initial" : "center"};
  align-items: ${({hasIssues}) => hasIssues ? "initial" : "center"};
  opacity: ${({hasIssues}) => hasIssues ? 1 : 0.1};
  flex-grow: 0;
  flex-shrink: 1;
  ${padding}
  flex-basis: 100px;
  overflow: auto;
  margin: 10px;
  ${border}
  ${borderRadius}
  ${boxShadow}
  word-break: break-word;
`;

const TextEditor = styled.textarea`
  ${padding}
  display: flex;
  flex-grow: 20;
  margin: 10px;
  ${border}
  ${borderRadius}
  ${boxShadow}
`;

const Editor = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 10;
  flex-shrink: 1;
  flex-basis: 0;
`;

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`;

const TreeViewContainer = styled.div`
  overflow: auto;
  flex-grow: 5;
  flex-shrink: 1;
  flex-basis: 0;
  margin: 10px;
  ${border}
  ${borderRadius}
  ${boxShadow}
`;

const App = (
  {spec, issues, text, onChange}:
    { onChange: (evt: Event) => null, text: string, issues: IRuleResult[], spec: ISpecPart },
) => {
  const hasIssues = !!issues.length;

  return (
    <Container>
      <TreeViewContainer>
        <TreeView
          spec={spec}
          diagnostics={diagnose(spec)}/>
      </TreeViewContainer>

      <Editor>
        <Errors hasIssues={hasIssues}>{
          hasIssues
            ? <div>{issues.map((msg: IRuleResult) => <div><b>{msg.path.join(".")}</b>: {msg.message}</div>)}</div>
            : <div>CLICK ON A DOT TO LEARN ABOUT ISSUES...</div>
        }</Errors>
        <TextEditor
          value={text || JSON.stringify(spec, null, 2)}
          onChange={onChange}/>
      </Editor>
    </Container>
  );
};

export default connect((state: State) => {
  return {
    issues: state.issues,
    spec: state.spec,
    text: state.text,
  };
}, (dispatch) => {
  return {
    onChange: ({target: {value}}: Event) => {
      dispatch(updateText(value));
    },
  };
})(App);
