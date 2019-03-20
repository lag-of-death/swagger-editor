import { shallow } from "enzyme";
import * as React from "react";
import Leaf from "./Leaf";

describe("Leaf", () => {
  test("rendering", () => {
    const component = shallow(<Leaf labelKey="testLabelKey" renderIssuesIndicators={() => <div></div>}/>);

    expect(component).toMatchSnapshot();
  });
});
