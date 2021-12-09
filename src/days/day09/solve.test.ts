import { solvePartOne, solvePartTwo } from "./solve";

const INPUT = `\
2199943210
3987894921
9856789892
8767896789
9899965678`;

describe("Solve part one", () => {
  it("Solves the README example correctly", () => {
    const EXPECTED_RESULT = 15;

    const result = solvePartOne(INPUT);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});

describe("Solve part two", () => {
  it("Solves the README example correctly", () => {
    const EXPECTED_RESULT = 1134;

    const result = solvePartTwo(INPUT);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});
