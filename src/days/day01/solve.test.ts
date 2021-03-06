import { solvePartOne, solvePartTwo } from "./solve";

describe("Solve part one", () => {
  it("solves the example from the README", () => {
    const INPUT = `\
199
200
208
210
200
207
240
269
260
263
`;

    const result = solvePartOne(INPUT);

    expect(result).toEqual(7);
  });
});

describe("Solve part two", () => {
  it("solves the example from the README", () => {
    const INPUT = `\
199
200
208
210
200
207
240
269
260
263
`;

    const result = solvePartTwo(INPUT);

    expect(result).toEqual(5);
  });
});
