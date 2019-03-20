export const EDITOR_TEXT_CHANGE = "EDITOR_TEXT_CHANGE";

export const updateText = (text: string) => ({
  payload: text,
  type: EDITOR_TEXT_CHANGE,
});
