import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { displayIssues } from "../actions";
import { dotSize } from "../components/shared";

const issues = `
  border-radius: 360px;
  width: ${dotSize};
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const Errors = styled.button`
  ${issues}
  background: #9F0000;
`;
const Warnings = styled.button`
  ${issues}
  background: #FF8C00;
  margin-left: 6px;
`;

interface IIssuesIndicatorsProps {
  warnings: Array<{ message: string, path: string[] }>;
  errors: Array<{ message: string, path: string[] }>;
  onClick: (msg: Array<{ message: string, path: string[] }>) => null;
}

export const IssuesIndicators = ({warnings, errors, onClick}: IIssuesIndicatorsProps) => {
  return (
    <React.Fragment>
      {errors.length
        ? <Errors onClick={() => onClick(errors)}/>
        : null
      }
      {warnings.length
        ? <Warnings onClick={() => onClick(warnings)}/>
        : null
      }
    </React.Fragment>
  );
};

export default connect(() => ({}), (dispatch) => {
  return {
    onClick: (msg: Array<{ message: string, path: string[] }>) => {
      dispatch(displayIssues(msg));
    },
  };
})(IssuesIndicators);
