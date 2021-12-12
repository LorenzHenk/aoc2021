import { INPUT_SIMPLE_3 } from "./input";
import { solvePartOne, solvePartTwo } from "./solve";

describe("Solve part one", () => {
  it("Solves the README example correctly", () => {
    const EXPECTED_RESULT = 226;

    const result = solvePartOne(INPUT_SIMPLE_3);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});

describe("Solve part two", () => {
  it("Solves the README example correctly", () => {
    const EXPECTED_RESULT = undefined;

    const result = solvePartTwo(INPUT_SIMPLE_3);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});
