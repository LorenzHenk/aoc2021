import { getFuelConsumption } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  const min = Math.min(...input);
  const max = Math.max(...input);

  let bestResult = Infinity;
  for (let i = min; i <= max; i++) {
    const result = input.reduce((acc, next) => acc + Math.abs(next - i), 0);
    bestResult = Math.min(result, bestResult);
  }

  return bestResult;
};

export const solvePartTwo = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  const min = Math.min(...input);
  const max = Math.max(...input);

  let bestResult = Infinity;
  for (let i = min; i <= max; i++) {
    const result = input.reduce(
      (acc, next) => acc + getFuelConsumption(Math.abs(next - i)),
      0,
    );
    bestResult = Math.min(result, bestResult);
  }

  return bestResult;
};
