import * as React from "react";
import { connect } from "react-redux";
import { updateText } from "../actions";
import { TreeView } from "../components/TreeView";
import { ISpecPart } from "../components/TreeView/interfaces";
import { diagnose } from "../util/linting";

type Event = { target: { value: string } };

import styled from "styled-components";

const boxShadow = "box-shadow: 2px 2px 2px black;";
const borderRadius = "border-radius: 10px;";
const border = "border: 6px solid black;";
const padding = "padding: 6px;";

const Errors = styled.div<{ issues: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({issues}) => issues ? 1 : 0.1};
  flex-grow: 0;
  flex-shrink: 1;
  ${padding}
  flex-basis: 100px;
  overflow: auto;
  margin: 10px;
  ${border}
  ${borderRadius}
  ${boxShadow}
  word-break: break-all;
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

const Appz = styled.div`
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
    { onChange: (evt: Event) => null, text: string, issues: { type: string, msg: string }, spec: ISpecPart },
) => {
  return (
    <Appz>

      <TreeViewContainer>
        <TreeView
          spec={spec}
          diagnostics={diagnose(spec)}/>
      </TreeViewContainer>

      <Editor>
        <Errors issues={issues.msg}>{
          issues && issues.msg
            ? issues.msg
            : <div>CLICK ON A DOT TO LEARN ABOUT ISSUES...</div>
        }</Errors>
        <TextEditor
          value={text || JSON.stringify(spec, null, 2)}
          onChange={onChange}/>
      </Editor>
    </Appz>

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
