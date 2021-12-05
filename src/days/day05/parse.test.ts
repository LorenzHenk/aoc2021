import { parsePartOne, VentLine } from "./parse";

describe("Parse part one", () => {
  it("Parses the README example correctly", () => {
    const INPUT = `\
0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

    const result = parsePartOne(INPUT);

    expect(result[0]).toEqual({ x1: 0, y1: 9, x2: 5, y2: 9 });
    expect(result[9]).toEqual({ x1: 5, y1: 5, x2: 8, y2: 2 });
  });
});
