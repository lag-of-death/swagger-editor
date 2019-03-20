import { diagnose } from "../../util/linting";
import * as helpers from "./helpers";

import petstore = require("../../../spec/petstore.oas2.json");

describe("helpers", () => {
  describe("isObjectOrArray", () => {
    test("number is not object or array", () => {
      expect(helpers.isObjectOrArray(1)).toBe(false);
    });

    test("null is not object or array", () => {
      expect(helpers.isObjectOrArray(null)).toBe(false);
    });

    test("undefined is not object or array", () => {
      expect(helpers.isObjectOrArray(undefined)).toBe(false);
    });

    test("string is not object or array", () => {
      expect(helpers.isObjectOrArray("")).toBe(false);
    });

    test("array is object or array", () => {
      expect(helpers.isObjectOrArray([])).toBe(true);
    });

    test("object is object or array", () => {
      expect(helpers.isObjectOrArray({})).toBe(true);
    });
  });

  describe("getErrorsAndWarningsForPath", () => {
    test("getting errors and warnings for a path", () => {
      const {errors, warnings} = helpers.getErrorsAndWarningsForPath(
        diagnose(petstore),
        ["paths", "/pets", "post", "description"],
      );

      expect(errors).toEqual([]);
      expect(warnings).toEqual([{
        message: "paths./pets.post.description is not truthy",
        name: "operation-description",
        path: ["paths", "/pets", "post", "description"],
        severity: 40,
        severityLabel: "warn",
        summary: "Operation `description` must be present and non-empty string.",
      }]);
    });
  });
});
