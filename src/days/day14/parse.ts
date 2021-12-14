import { pipe } from "fp-ts/lib/function";

export type PolymerTemplate = string[];

export interface PairInsertionRule {
  from: PolymerTemplate;
  to: PolymerTemplate;
}

export interface OptimalPolymerInstructions {
  polymerTemplate: PolymerTemplate;
  pairInsertionRules: PairInsertionRule[];
}

export const parsePartOne = (input: string) =>
  pipe(input.split("\n\n"), ([a, b]) => ({
    polymerTemplate: a.split(""),
    pairInsertionRules: b.split("\n").map(parsePairInsertionRule),
  }));

export const parsePairInsertionRule = (input: string) =>
  pipe(input.split(" -> "), ([a, b]) => ({
    from: a.split(""),
    to: b.split(""),
  }));
