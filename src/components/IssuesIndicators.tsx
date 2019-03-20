import { IRuleResult } from "@stoplight/spectral";
import * as React from "react";
import { connect } from "react-redux";
import { displayIssues } from "../actions";

interface IIssuesIndicatorsProps {
  warnings: IRuleResult[];
  errors: IRuleResult[];
  onClick: (type: string, msg: string) => null;
}

const IssuesIndicators = ({warnings, errors, onClick}: IIssuesIndicatorsProps) => {
  return (
    <React.Fragment>
      {errors.length
        ? <button onClick={() => onClick("errors", JSON.stringify(errors))}>errors</button>
        : null
      }
      {warnings.length
        ? <button onClick={() => onClick("warnings", JSON.stringify(warnings))}>warnings</button>
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
