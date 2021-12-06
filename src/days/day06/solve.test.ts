import { solvePartOne, solvePartTwo } from "./solve";

describe("Solve part one", () => {
  it("Solves the README example correctly", () => {
    const INPUT = `3,4,3,1,2`;

    const EXPECTED_RESULT = 5934;

    const result = solvePartOne(INPUT);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});

describe("Solve part two", () => {
  it("Solves the README example correctly", () => {
    const INPUT = `3,4,3,1,2`;

    const EXPECTED_RESULT = 26984457539;

    const result = solvePartTwo(INPUT);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});
