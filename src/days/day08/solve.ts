import { sum } from "ramda";
import { WELL_KNOWN_SEGMENT_COUNTS } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  return sum(
    input.map(
      (line) =>
        line.outputValues.filter((value) =>
          WELL_KNOWN_SEGMENT_COUNTS.includes(value.length),
        ).length,
    ),
  );
};

export const solvePartTwo = (input: string) => {};
