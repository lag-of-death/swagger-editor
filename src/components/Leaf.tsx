import * as React from "react";
import styled from "styled-components";
import { dotSize, sharedStyleForKey } from "./shared";

export interface ILeafProps {
  renderIssuesIndicators: () => React.FunctionComponentElement<{}>;
  labelKey: string;
}

const LeafContainer = styled.li`
  ${sharedStyleForKey}
`;

const IssuesIndicatorsContainer = styled.div`
  height: ${dotSize};
`;

const Leaf = ({labelKey, renderIssuesIndicators}: ILeafProps) => {
  return (
    <LeafContainer>
      {labelKey}
      <IssuesIndicatorsContainer>
        {renderIssuesIndicators()}
      </IssuesIndicatorsContainer>
    </LeafContainer>
  );
};

export default Leaf;
