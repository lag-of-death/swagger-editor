export const CHANGE_EDITOR_TEXT = "CHANGE_EDITOR_TEXT";
export const DISPLAY_ISSUES = "DISPLAY_ISSUES";

import { Issues } from "../shared";

export const updateText = (text: string) => ({
  payload: text,
  type: CHANGE_EDITOR_TEXT,
});

export const displayIssues = (issues: Issues) => ({
  payload: issues,
  type: DISPLAY_ISSUES,
});
