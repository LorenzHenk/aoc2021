import { compare, ComparisonResult } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
  const parsedInput = parsePartOne(input);

  const comparisonResults = parsedInput
    .slice(0, -1)
    .map((value, index) => compare(value, parsedInput[index + 1]));

  return comparisonResults.filter((c) => c === ComparisonResult.Increase)
    .length;
};

export const solvePartTwo = (input: string) => {};
