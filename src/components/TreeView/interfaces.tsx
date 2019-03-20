import { IRuleResult } from "@stoplight/spectral";
import * as React from "react";

export interface ITreeViewProps extends React.HTMLProps<HTMLUListElement> {
  spec: any;
  diagnostics: IRuleResult[];
}

export interface ISpecPart {
  [key: string]: ISpecPart;
}
