import { shallow } from "enzyme";
import * as React from "react";
import { IssuesIndicators } from "./IssuesIndicators";

describe("IssuesIndicators", () => {
  beforeAll(() => {
    this.onClick = jest.fn();

    this.component = shallow(
      <IssuesIndicators
        warnings={[{message: "warn", path: ["a", "b"]}]}
        errors={[{message: "error", path: ["a", "b", "c"]}]}
        onClick={this.onClick}/>,
    );
  });

  test("rendering", () => {
    expect(this.component).toMatchSnapshot();
  });

  test("event handler", () => {
    this.component.childAt(0).simulate("click");
    this.component.childAt(1).simulate("click");

    expect(this.component).toMatchSnapshot();

    expect(this.onClick).toBeCalledWith([{message: "error", path: ["a", "b", "c"]}]);
    expect(this.onClick).toBeCalledWith([{message: "warn", path: ["a", "b"]}]);
  });
});
