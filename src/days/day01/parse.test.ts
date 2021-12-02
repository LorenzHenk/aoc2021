import { parsePartOne } from "./parse";

describe("Parse part one", () => {
  it("Parses the example input correctly", () => {
    const INPUT = `\
    199
    200
    208
    `;

    const EXPECTED_RESULT = [199, 200, 208];

    const result = parsePartOne(INPUT);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});
