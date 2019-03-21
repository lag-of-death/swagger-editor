export const CHANGE_EDITOR_TEXT = "CHANGE_EDITOR_TEXT";
export const DISPLAY_ISSUES = "DISPLAY_ISSUES";

export const updateText = (text: string) => ({
  payload: text,
  type: CHANGE_EDITOR_TEXT,
});

export const displayIssues = (msg: Array<{message: string, path: string[]}>) => ({
  payload: msg,
  type: DISPLAY_ISSUES,
});
