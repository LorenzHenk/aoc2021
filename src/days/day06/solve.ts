import { sum } from "ramda";
import { runSimulation } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
  const parsedInput = parsePartOne(input);

  const DAYS_LIMIT = 80;

  const count = runSimulation(DAYS_LIMIT, parsedInput);

  return sum(count);
};

export const solvePartTwo = (input: string) => {
  const parsedInput = parsePartOne(input);

  const DAYS_LIMIT = 256;

  const count = runSimulation(DAYS_LIMIT, parsedInput);

  return sum(count);
};
