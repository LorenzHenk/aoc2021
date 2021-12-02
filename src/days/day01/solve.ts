import { sum } from "ramda";
import { compareList, ComparisonResult, slidingWindow } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
  const parsedInput = parsePartOne(input);

  const comparisonResults = compareList(parsedInput);

  return comparisonResults.filter((c) => c === ComparisonResult.Increase)
    .length;
};

export const solvePartTwo = (input: string) => {
  const parsedInput = parsePartOne(input);

  const summedData = slidingWindow(3, sum, parsedInput);

  const comparisonResults = compareList(summedData);

  return comparisonResults.filter((c) => c === ComparisonResult.Increase)
    .length;
};
