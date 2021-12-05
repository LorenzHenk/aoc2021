import { countLineOverlaps } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
  const parsedInput = parsePartOne(input);

  const map = countLineOverlaps(
    // only pass lines that are vertical or horizontal
    parsedInput.filter(
      (ventLine) => ventLine.x1 === ventLine.x2 || ventLine.y1 === ventLine.y2,
    ),
  );

  return Object.values(map).filter((c) => c >= 2).length;
};

export const solvePartTwo = (input: string) => {
  const parsedInput = parsePartOne(input);

  const map = countLineOverlaps(parsedInput);

  return Object.values(map).filter((c) => c >= 2).length;
};
