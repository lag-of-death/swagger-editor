import * as actions from "../actions";
import reducer from "./index";

describe("reducer", () => {
  test("handling CHANGE_EDITOR_TEXT when text is not in JSON format", () => {
    expect(reducer({spec: {}, text: ""}, actions.updateText("text"))).toEqual({spec: {}, text: "text"});
  });

  test("handling CHANGE_EDITOR_TEXT when text is in JSON format", () => {
    expect(reducer({spec: {}, text: ""}, actions.updateText("{}"))).toEqual({spec: {}, text: "{}"});
  });

  test("handling CHANGE_EDITOR_TEXT when text is empty", () => {
    expect(reducer({spec: {}, text: ""}, actions.updateText(""))).toEqual({spec: {}, text: ""});
  });

  test("handling unknown action", () => {
    expect(reducer({spec: {}, text: ""}, {type: "UNKNOWN_ACTION"})).toEqual({spec: {}, text: "", issues: []});
  });

  test("handling DISPLAY_ISSUES", () => {
    expect(reducer({spec: {}, text: ""}, actions.displayIssues([{
      message: "msg",
      path: ["a", "b"],
    }]))).toEqual({spec: {}, text: "", issues: [{message: "msg", path: ["a", "b"]}]});
  });
});
