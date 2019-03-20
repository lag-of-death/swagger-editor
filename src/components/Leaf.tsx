import * as React from "react";

export interface ILeafProps {
  renderIssuesIndicators: () => React.FunctionComponentElement<{}>;
  labelKey: string;
}

const Leaf = ({labelKey, renderIssuesIndicators}: ILeafProps) => {
  return (
    <li>
      {renderIssuesIndicators()}
      {labelKey}
    </li>
  );
};

export default Leaf;
