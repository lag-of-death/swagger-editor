import {shallow} from "enzyme";
import * as React from "react";
import Branch from "./Branch";

function render(): [] {
    return [];
}

function renderIssuesIndicators() {
    return <div/>;
}

describe("Branch", () => {
    test("rendering", () => {
        const component = shallow(
            <Branch render={render} labelKey="testLabelKey" renderIssuesIndicators={renderIssuesIndicators}/>,
        );
        expect(component).toMatchSnapshot();
    });
});
