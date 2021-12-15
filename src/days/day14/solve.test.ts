import { SAMPLE_INPUT } from "./input";
import { solvePartOne, solvePartTwo } from "./solve";

describe("Solve part one", () => {
  it("Solves the README example correctly", () => {
    const EXPECTED_RESULT = 1588;

    const result = solvePartOne(SAMPLE_INPUT);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});

describe("Solve part two", () => {
  it("Solves the README example correctly", () => {
    const EXPECTED_RESULT = 2188189693529;

    const result = solvePartTwo(SAMPLE_INPUT);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});
