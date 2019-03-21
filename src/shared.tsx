import { IRuleResult } from "@stoplight/spectral";
import { ISpecPart } from "./components/TreeView/interfaces";

export type Issues = Array<{ message: string, path: string[] }>;

export type Store = { spec: ISpecPart, text: string, issues?: IRuleResult[], isJSONValid?: boolean };
