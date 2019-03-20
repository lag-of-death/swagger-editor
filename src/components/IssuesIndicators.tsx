import { IRuleResult } from "@stoplight/spectral";
import * as React from "react";

interface IIssuesIndicatorsProps {
  warnings: IRuleResult[];
  errors: IRuleResult[];
}

const IssuesIndicators = ({warnings, errors}: IIssuesIndicatorsProps) => {
  return (
    <React.Fragment>
      {errors.length ? <button onClick={() => alert(JSON.stringify(errors))}>errors</button> : null}
      {warnings.length ? <button onClick={() => alert(JSON.stringify(warnings))}>warnings</button> : null}
    </React.Fragment>
  );
};

export default IssuesIndicators;
