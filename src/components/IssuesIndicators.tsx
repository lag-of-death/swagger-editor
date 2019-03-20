import { IRuleResult } from "@stoplight/spectral";
import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { displayIssues } from "../actions";
import { dotSize } from "./shared";

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
  warnings: IRuleResult[];
  errors: IRuleResult[];
  onClick: (type: string, msg: string) => null;
}

const IssuesIndicators = ({warnings, errors, onClick}: IIssuesIndicatorsProps) => {
  return (
    <React.Fragment>
      {errors.length
        ? <Errors onClick={() => onClick("errors", JSON.stringify(errors))}/>
        : null
      }
      {warnings.length
        ? <Warnings onClick={() => onClick("warnings", JSON.stringify(warnings))}/>
        : null
      }
    </React.Fragment>
  );
};

export default connect(() => ({}), (dispatch) => {
  return {
    onClick: (issueType: string, msg: string) => {
      dispatch(displayIssues(issueType, msg));
    },
  };
})(IssuesIndicators);
