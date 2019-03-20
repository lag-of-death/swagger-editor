import * as React from "react";
import { ILeafProps } from "./Leaf";

interface IBranchProps extends ILeafProps {
  render: () => React.FunctionComponent[];
}

const Branch = ({labelKey, render, renderIssuesIndicators}: IBranchProps) => {
  return (
    <li>
      <figure>
        {renderIssuesIndicators()}
        <figcaption>
          {labelKey}
        </figcaption>
        <ul>{render()}</ul>
      </figure>
    </li>
  );
};

export default Branch;
