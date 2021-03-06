import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Issues as IssuesType } from "../shared";
import { border, borderRadius, boxShadow, padding } from "./shared";

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

const toDivs = (issues: IssuesType) => {
  return issues.map((issue) => {
    const path = issue.path.join(".");

    return (
      <div key={path}>
        <b>{path}</b>: {issue.message}
      </div>
    );
  });
};

export const IssuesViewer = ({issues}: { issues: IssuesType }) => {
  const hasIssues = issues && !!issues.length;

  return (
    <Issues hasIssues={hasIssues}>{
      hasIssues
        ? <div>{toDivs(issues)}</div>
        : <div>CLICK ON A DOT TO LEARN ABOUT ISSUES...</div>
    }</Issues>
  );
};

export default connect((state: { issues: IssuesType }) => {
  return {
    issues: state.issues,
  };
})(IssuesViewer);
