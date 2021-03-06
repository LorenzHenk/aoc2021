import { solvePartOne, solvePartTwo } from "./solve";

describe("Solve part one", () => {
  it("Solves the README example correctly", () => {
    const INPUT = `
    forward 5
    down 5
    forward 8
    up 3
    down 8
    forward 2`;

    const EXPECTED_RESULT = 150;

    const result = solvePartOne(INPUT);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});

describe("Solve part two", () => {
  it("Solves the README example correctly", () => {
    const INPUT = `
    forward 5
    down 5
    forward 8
    up 3
    down 8
    forward 2`;

    const EXPECTED_RESULT = 900;

    const result = solvePartTwo(INPUT);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});
