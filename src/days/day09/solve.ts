import { sum } from "ramda";
import { findLowPoints } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  const lowPoints = findLowPoints(input);

  return sum(lowPoints.map((n) => n + 1));
};

export const solvePartTwo = (rawInput: string) => {
  const input = parsePartOne(rawInput);
};
