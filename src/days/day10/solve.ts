import { either, number as N } from "fp-ts";
import { reverse, sort } from "fp-ts/lib/Array";
import { sum } from "ramda";
import {
  calculateCompletionScore,
  CorruptedValidationError,
  getClosing,
  IncompleteValidationError,
  validateLine,
} from "./logic";
import { parsePartOne } from "./parse";

const CORRUPTED_POINT_MAP = {
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
    results.map(
      (r) =>
        CORRUPTED_POINT_MAP[
          r.left.received as keyof typeof CORRUPTED_POINT_MAP
        ],
    ),
  );
};

export const solvePartTwo = (rawInput: string) => {
  const input = parsePartOne(rawInput);

  const incompleteLines = input
    .map(validateLine)
    .filter(either.isLeft)
    .filter(
      (v): v is either.Left<IncompleteValidationError> =>
        v.left.type === "Incomplete",
    )
    .map((v) => v.left)
    .map((v) => reverse(v.unclosed));

  const results = incompleteLines
    .map((line) => line.map(getClosing))
    .map(calculateCompletionScore);

  return sort(N.Ord)(results)[(results.length - 1) / 2];
};
