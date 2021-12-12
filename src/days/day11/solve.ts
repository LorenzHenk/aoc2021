import { range } from "fp-ts/lib/NonEmptyArray";
import { runStep } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  let flashes = 0;

  let octopusMap = input;
  range(1, 100).forEach(() => {
    const result = runStep(octopusMap);
    octopusMap = result.octopusMap;
    flashes += result.flashes;
  });

  return flashes;
};

export const solvePartTwo = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  let step = 0;
  let octopusMap = input;

  while (!octopusMap.every((row) => row.every((o) => o === 0))) {
    step++;
    const result = runStep(octopusMap);
    octopusMap = result.octopusMap;
  }

  return step;
};
