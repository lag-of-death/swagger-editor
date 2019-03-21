import { render } from "enzyme";
import "jest-styled-components";
import * as React from "react";
import { IssuesViewer } from "./IssuesViewer";

describe("IssuesViewer", () => {
  test("rendering when issues are supplied", () => {
    const component = render(
      <IssuesViewer issues={[{message: "warn", path: ["a", "b"]}]}/>,
    );

    expect(component).toMatchSnapshot();
  });

  test("rendering when issues are not supplied", () => {
    const component = render(
      <IssuesViewer issues={[]}/>,
    );

    expect(component).toMatchSnapshot();
  });
});
