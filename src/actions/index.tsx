export const EDITOR_TEXT_CHANGE = "EDITOR_TEXT_CHANGE";
export const DISPLAY_ISSUES = "DISPLAY_ISSUES";

export const updateText = (text: string) => ({
  payload: text,
  type: EDITOR_TEXT_CHANGE,
});

export const displayIssues = (issueType: string, msg: string) => ({
  payload: {type: issueType, msg},
  type: DISPLAY_ISSUES,
});
