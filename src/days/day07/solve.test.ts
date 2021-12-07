import { solvePartOne } from "./solve";

describe("Solve part one", () => {
  it("Solves the README example correctly", () => {
    const INPUT = `16,1,2,0,4,2,7,1,2,14`;

    const EXPECTED_RESULT = 37;

    const result = solvePartOne(INPUT);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});
