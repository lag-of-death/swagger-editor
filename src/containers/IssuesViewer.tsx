import { IRuleResult } from "@stoplight/spectral";
import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {border, borderRadius, boxShadow, padding} from "./shared";

const Issues = styled.div<{ hasIssues: boolean }>`
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

export const IssuesViewer = ({issues}: any) => {
  const hasIssues = issues && !!issues.length;

  return (
    <Issues hasIssues={hasIssues}>{
      hasIssues
        ? <div>{issues.map((msg: IRuleResult) => <div><b>{msg.path.join(".")}</b>: {msg.message}</div>)}</div>
        : <div>CLICK ON A DOT TO LEARN ABOUT ISSUES...</div>
    }</Issues>
  );
};

export default connect((state: any) => {
  return {
    issues: state.issues,
  };
})(IssuesViewer);
