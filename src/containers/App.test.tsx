import { shallow } from "enzyme";
import * as React from "react";
import { App } from "./App";

describe("App", () => {
  test("rendering", () => {
    const component = shallow(
      <App text="some text" onChange={() => null} issues={[]} spec={({})}/>,
    );

    expect(component).toMatchSnapshot();
  });
});
