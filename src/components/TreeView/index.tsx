import { IRuleResult } from "@stoplight/spectral";
import * as React from "react";
import styled from "styled-components";
import IssuesIndicators from "../../containers/IssuesIndicators";
import Branch from "../Branch";
import Leaf from "../Leaf";
import { getErrorsAndWarningsForPath, isObjectOrArray } from "./helpers";
import { ISpecPart, ITreeViewProps } from "./interfaces";

const TreeContainer = styled.ul`
  padding: 6px;
`;

const composeTree = (diagnostics: IRuleResult[], specPart: ISpecPart, path: string[]): React.FunctionComponent[] => {

  return Object.keys(specPart).reduce((elementsStructure, key) => {

    const val = specPart[key];
    const currentPath = path.concat(key);
    const {errors, warnings} = getErrorsAndWarningsForPath(diagnostics, currentPath);

    return isObjectOrArray(val)
      ? elementsStructure.concat(
        <Branch
          renderIssuesIndicators={() => <IssuesIndicators errors={errors} warnings={warnings}/>}
          key={key}
          render={() => composeTree(diagnostics, val, currentPath)}
          labelKey={key}
        />,
      )
      : elementsStructure.concat(
        <Leaf
          renderIssuesIndicators={() => <IssuesIndicators errors={errors} warnings={warnings}/>}
          key={key}
          labelKey={key}
        />,
      );

  }, []);
};

export function TreeView({spec, diagnostics}: ITreeViewProps) {
  return (
    <TreeContainer>
      {composeTree(diagnostics, spec, [])}
    </TreeContainer>
  );
}
