import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
  const parsedInput = parsePartOne(input);

  const min = Math.min(...parsedInput);
  const max = Math.max(...parsedInput);

  let bestResult = Infinity;
  for (let i = min; i <= max; i++) {
    const result = parsedInput.reduce(
      (acc, next) => acc + Math.abs(next - i),
      0,
    );
    bestResult = Math.min(result, bestResult);
  }

  return bestResult;
};

export const solvePartTwo = (input: string) => {};
