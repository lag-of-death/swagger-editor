import { IRuleResult } from "@stoplight/spectral";
import * as React from "react";
import { connect } from "react-redux";
import { updateText } from "../actions";
import { TreeView } from "../components/TreeView";
import { ISpecPart } from "../components/TreeView/interfaces";
import { Store } from "../shared";
import { diagnose } from "../util/linting";
import IssuesViewer from "./IssuesViewer";

type Event = { target: { value: string } };

import styled, { css } from "styled-components";
import { border, borderRadius, boxShadow, padding } from "./shared";

const shared = css`
  ${border}
  ${borderRadius}
  ${boxShadow}
`;

const JSONValidity = styled.div`
  ${shared}
  ${padding}
  margin: 10px;
  text-align: center;
`;

const TextEditor = styled.textarea`
  ${padding}
  display: flex;
  flex-grow: 20;
  margin: 10px;
  ${shared}
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
  ${shared}
`;

export const App = (
  {spec, issues, text, onChange, isJSONValid}:
    { onChange: (evt: Event) => null, text: string, issues: IRuleResult[], spec: ISpecPart, isJSONValid: boolean },
) => {
  const stringifiedJSON = JSON.stringify(spec, null, 2);

  return (
    <Container>
      <TreeViewContainer>
        <TreeView
          spec={spec}
          diagnostics={diagnose(spec)}/>
      </TreeViewContainer>

      <Editor>
        <IssuesViewer/>
        <JSONValidity>
          {isJSONValid ? "JSON VALID" : "JSON NOT VALID"}
        </JSONValidity>
        <TextEditor
          value={text ? text : (Object.keys(spec).length ? stringifiedJSON : "")}
          onChange={onChange}/>
      </Editor>
    </Container>
  );
};

export default connect((state: Store) => {
  return {
    isJSONValid: state.isJSONValid,
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
