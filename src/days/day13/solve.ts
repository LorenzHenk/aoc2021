import { foldPaper, printDots } from "./logic";
import { asciiToAlpha } from "./ocr";
import { parsePartOne } from "./parse";

export const solvePartOne = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  const foldInstruction = input.folds[0];
  return foldPaper(input.dots, foldInstruction).length;
};

export const solvePartTwo = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  const result = input.folds.reduce(
    (acc, next) => foldPaper(acc, next),
    input.dots,
  );

  return asciiToAlpha(printDots(result, ".")).join("");
};
