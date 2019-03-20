import * as React from "react";
import styled from "styled-components";
import { ILeafProps } from "./Leaf";

import { dotSize, sharedStyleForKey } from "./shared";

const Header = styled.div`
  ${sharedStyleForKey}
`;

const IssuesIndicatorsContainer = styled.div`
  height: ${dotSize};
`;

interface IBranchProps extends ILeafProps {
  render: () => React.FunctionComponent[];
}

const Branch = ({labelKey, render, renderIssuesIndicators}: IBranchProps) => {
  return (
    <li>
      <figure>
        <Header>
          <figcaption>
            {labelKey}
          </figcaption>

          <IssuesIndicatorsContainer>
            {renderIssuesIndicators()}
          </IssuesIndicatorsContainer>
        </Header>
        <ul>{render()}</ul>
      </figure>
    </li>
  );
};

export default Branch;
