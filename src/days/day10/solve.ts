import { array, either } from "fp-ts";
import { pipe } from "fp-ts/lib/function";
import { sum } from "ramda";
import { CorruptedValidationError, validateLine } from "./logic";
import { parsePartOne } from "./parse";

const POINT_MAP = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

export const solvePartOne = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  const results = input
    .map(validateLine)
    .filter(either.isLeft)
    .filter(
      (v): v is either.Left<CorruptedValidationError> =>
        v.left.type === "Corrupted",
    );

  return sum(
    results.map((r) => POINT_MAP[r.left.received as keyof typeof POINT_MAP]),
  );
};

export const solvePartTwo = (rawInput: string) => {
  const input = parsePartOne(rawInput);
};
