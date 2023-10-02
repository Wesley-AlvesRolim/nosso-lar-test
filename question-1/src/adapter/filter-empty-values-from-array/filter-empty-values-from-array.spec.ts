import { filterEmptyValuesFromArray } from "./filter-empty-values-from-array";

describe("filterEmptyValuesFromArray", () => {
  it("should filter empty values from array", () => {
    const input = [
      null,
      "value",
      [1, null],
      842,
      ["array", [], null, 0, "string", 93],
    ];

    const expectedOutput = ["value", [1], 842, ["array", 0, "string", 93]];

    const output = filterEmptyValuesFromArray(input);
    expect(output).toEqual(expect.arrayContaining(expectedOutput));
  });

  it("should not filter a valid array", () => {
    const input = ["value", [1], 842, ["array", 0, "string", 93]];
    const expectedOutput = ["value", [1], 842, ["array", 0, "string", 93]];

    const output = filterEmptyValuesFromArray(input);
    expect(output).toEqual(expect.arrayContaining(expectedOutput));
  });
});
