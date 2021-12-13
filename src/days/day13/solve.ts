import { foldPaper } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  const foldInstruction = input.folds[0];
  return foldPaper(input.dots, foldInstruction).length;
};

export const solvePartTwo = (rawInput: string) => {
  const input = parsePartOne(rawInput);
};
