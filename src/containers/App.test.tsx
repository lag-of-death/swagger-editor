import { shallow } from "enzyme";
import * as React from "react";
import { App } from "./App";

describe("App", () => {
  beforeAll(() => {
    this.onChange = jest.fn();

    this.component = shallow(
      <App text="some text" isJSONValid={true} onChange={this.onChange} issues={[]} spec={({})}/>,
    );
  });

  test("rendering", () => {
    expect(this.component).toMatchSnapshot();
  });

  test("onChange event handler", () => {
    const event = {target: {value: "value"}};

    this.component.childAt(1).childAt(2).simulate("change", event);

    expect(this.component).toMatchSnapshot();
    expect(this.onChange).toBeCalledWith({target: {value: "value"}});
  });
});
