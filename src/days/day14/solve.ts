import { groupBy, identity } from "ramda";
import { applyPairInsertionRules } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  const result = Array.from({ length: 10 }).reduce(
    (acc: string[]) => applyPairInsertionRules(input.pairInsertionRules, acc),
    input.polymerTemplate,
  );

  const groupedResult = groupBy(identity, result);
  const lengths = Object.entries(groupedResult).map(([, n]) => n.length);

  return Math.max(...lengths) - Math.min(...lengths);
};

export const solvePartTwo = (rawInput: string) => {
  const input = parsePartOne(rawInput);
};
