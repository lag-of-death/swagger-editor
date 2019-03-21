import { shallow } from "enzyme";
import * as React from "react";
import Branch from "./Branch";

describe("Branch", () => {
  test("rendering", () => {
    const component = shallow(
      <Branch render={() => []} labelKey="testLabelKey" renderIssuesIndicators={() => <div></div>}/>,
    );

    expect(component).toMatchSnapshot();
  });
});
