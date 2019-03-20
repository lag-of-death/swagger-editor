import { shallow } from "enzyme";
import * as React from "react";
import petstore = require("../../../spec/petstore.oas2.json");
import { diagnose } from "../../util/linting";
import { TreeView } from "./index";

describe("TreeView", () => {
  test("rendering", () => {
    const component = shallow(
      <TreeView spec={petstore}
                diagnostics={diagnose(petstore)}/>,
    );

    expect(component).toMatchSnapshot();
  });
});
