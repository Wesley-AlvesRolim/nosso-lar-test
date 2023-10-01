import { filterEmptyValuesFromObject } from "./filter-empty-values-from-object";

describe("filterEmptyValuesFromObject", () => {
  it("should filter empty values from Object", () => {
    const input = {
      key1: "value1",
      key2: null,
      key3: {
        key4: ["array1"],
        key5: [],
      },
    };

    const expectedOutput = {
      key1: "value1",
      key3: {
        key4: ["array1"],
      },
    };

    const output = filterEmptyValuesFromObject(input);
    expect(output).toEqual(expect.objectContaining(expectedOutput));
  });
});
