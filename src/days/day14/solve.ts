import { applyPairInsertionRulesN } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  const counts = applyPairInsertionRulesN(10)(input);

  const lengths = Object.values(counts);

  return Math.max(...lengths) - Math.min(...lengths);
};

export const solvePartTwo = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  const counts = applyPairInsertionRulesN(40)(input);

  const lengths = Object.values(counts);

  return Math.max(...lengths) - Math.min(...lengths);
};
