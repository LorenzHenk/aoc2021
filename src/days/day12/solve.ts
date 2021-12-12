import { findPaths } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (rawInput: string) => {
  const input = parsePartOne(rawInput);
  return findPaths(input).length;
};

export const solvePartTwo = (rawInput: string) => {
  const input = parsePartOne(rawInput);
};
