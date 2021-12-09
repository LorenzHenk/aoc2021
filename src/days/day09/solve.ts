import { pipe } from "fp-ts/lib/function";
import { multiply, reduce, sort, sum, take } from "ramda";

import { findBasins, findLowPoints } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  const lowPoints = findLowPoints(input);

  return sum(lowPoints.map((n) => n + 1));
};

export const solvePartTwo = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  const basins = findBasins(input);

  return pipe(
    Object.values(basins).map((v) => v.length),
    sort((a, b) => b - a),
    take(3),
    reduce<number, number>(multiply, 1),
  );
};
