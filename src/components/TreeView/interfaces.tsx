import { IRuleResult } from "@stoplight/spectral";
import * as React from "react";

export interface ITreeViewProps extends React.HTMLProps<HTMLUListElement> {
  spec: ISpecPart;
  diagnostics: IRuleResult[];
}

export interface ISpecPart {
  [key: string]: ISpecPart;
}
