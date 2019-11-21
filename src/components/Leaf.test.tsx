import {shallow} from "enzyme";
import * as React from "react";
import Leaf from "./Leaf";

function renderIssuesIndicators() {
    return <div/>;
}

describe("Leaf", () => {
    test("rendering", () => {
        const component = shallow(<Leaf labelKey="testLabelKey" renderIssuesIndicators={renderIssuesIndicators}/>);

        expect(component).toMatchSnapshot();
    });
});
