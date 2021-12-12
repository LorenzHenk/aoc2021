import { INPUT_SIMPLE_1, INPUT_SIMPLE_2, INPUT_SIMPLE_3 } from "./input";
import { solvePartOne, solvePartTwo } from "./solve";

describe("Solve part one", () => {
  it("Solves the README example 1 correctly", () => {
    const EXPECTED_RESULT = 10;

    const result = solvePartOne(INPUT_SIMPLE_1);

    expect(result).toEqual(EXPECTED_RESULT);
  });

  it("Solves the README example 2 correctly", () => {
    const EXPECTED_RESULT = 19;

    const result = solvePartOne(INPUT_SIMPLE_2);

    expect(result).toEqual(EXPECTED_RESULT);
  });

  it("Solves the README example 3 correctly", () => {
    const EXPECTED_RESULT = 226;

    const result = solvePartOne(INPUT_SIMPLE_3);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});

describe("Solve part two", () => {
  it("Solves the README example 1 correctly", () => {
    const EXPECTED_RESULT = 36;

    const result = solvePartTwo(INPUT_SIMPLE_1);

    expect(result).toEqual(EXPECTED_RESULT);
  });

  it("Solves the README example 2 correctly", () => {
    const EXPECTED_RESULT = 103;

    const result = solvePartTwo(INPUT_SIMPLE_2);

    expect(result).toEqual(EXPECTED_RESULT);
  });

  it("Solves the README example 3 correctly", () => {
    const EXPECTED_RESULT = 3509;

    const result = solvePartTwo(INPUT_SIMPLE_3);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});
