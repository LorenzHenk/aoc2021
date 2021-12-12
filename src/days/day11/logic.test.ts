import { getAdjacent, runStep } from "./logic";
import { parsePartOne } from "./parse";

const SIMPLE_INPUT = `\
11111
19991
19191
19991
11111`;

const INPUT = `\
5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

test("getAdjacent", () => {
  const octopusMap = parsePartOne(SIMPLE_INPUT);

  expect(getAdjacent(octopusMap, 0, 0)).toEqual([
    { energy: 1, x: 0, y: 1 },
    { energy: 1, x: 1, y: 0 },
    { energy: 9, x: 1, y: 1 },
  ]);
  expect(getAdjacent(octopusMap, 1, 0)).toEqual([
    { energy: 1, x: 0, y: 0 },
    { energy: 1, x: 0, y: 1 },
    { energy: 9, x: 1, y: 1 },
    { energy: 1, x: 2, y: 0 },
    { energy: 9, x: 2, y: 1 },
  ]);
  expect(getAdjacent(octopusMap, 2, 2)).toEqual([
    { energy: 9, x: 1, y: 1 },
    { energy: 9, x: 1, y: 2 },
    { energy: 9, x: 1, y: 3 },
    { energy: 9, x: 2, y: 1 },
    { energy: 9, x: 2, y: 3 },
    { energy: 9, x: 3, y: 1 },
    { energy: 9, x: 3, y: 2 },
    { energy: 9, x: 3, y: 3 },
  ]);
});

describe("runStep", () => {
  it("works with simple input", () => {
    const octopusMap = parsePartOne(SIMPLE_INPUT);

    const after1 = runStep(octopusMap).octopusMap;
    expect(after1).toEqual(
      parsePartOne(`\
34543
40004
50005
40004
34543`),
    );

    const after2 = runStep(after1).octopusMap;
    expect(after2).toEqual(
      parsePartOne(`\
45654
51115
61116
51115
45654`),
    );
  });

  it("works with input", () => {
    const octopusMap = parsePartOne(INPUT);

    const after1 = runStep(octopusMap).octopusMap;
    expect(after1).toEqual(
      parsePartOne(`\
6594254334
3856965822
6375667284
7252447257
7468496589
5278635756
3287952832
7993992245
5957959665
6394862637`),
    );

    const after2 = runStep(after1).octopusMap;
    expect(after2).toEqual(
      parsePartOne(`\
8807476555
5089087054
8597889608
8485769600
8700908800
6600088989
6800005943
0000007456
9000000876
8700006848`),
    );
  });
});
