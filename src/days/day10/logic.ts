import { either } from "fp-ts";
import { Either } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";

export const PAIRS = [
  ["(", ")"],
  ["[", "]"],
  ["<", ">"],
  ["{", "}"],
] as const;

export interface CorruptedValidationError {
  type: "Corrupted";
  expected: string;
  received: string;
}

export interface IncompleteValidationError {
  type: "Incomplete";
  unclosed: string[];
}

export type ValidationError =
  | CorruptedValidationError
  | IncompleteValidationError;

export const isMatch = (a: string, b: string) =>
  PAIRS.some(([open, close]) => open === a && close === b);

export const isOpen = (character: string) =>
  PAIRS.some(([open]) => character === open);

export const getClosing = (character: string) =>
  PAIRS.find(([open]) => open === character)![1];

export const validateLine = (
  line: string[],
): Either<ValidationError, string[]> => {
  return pipe(
    line.reduce(
      (accE, next) =>
        pipe(
          accE,
          either.chain((acc: string[]) =>
            isOpen(next)
              ? either.right(acc.concat(next))
              : isMatch(acc[acc.length - 1], next)
              ? either.right(acc.slice(0, acc.length - 1))
              : either.left({
                  type: "Corrupted",
                  expected: acc[acc.length - 1],
                  received: next,
                } as ValidationError),
          ),
        ),
      either.right<ValidationError, string[]>([]),
    ),
    either.chain((bracketsLeft) =>
      bracketsLeft.length === 0
        ? either.right([])
        : either.left({
            type: "Incomplete",
            unclosed: bracketsLeft,
          } as ValidationError),
    ),
  );
};

export const mapBracketToCompletionScore = (b: string): number =>
  ({ ")": 1, "]": 2, "}": 3, ">": 4 }[b]!);

export const calculateCompletionScore = (data: string[]) =>
  data.reduce((acc, next) => acc * 5 + mapBracketToCompletionScore(next), 0);
