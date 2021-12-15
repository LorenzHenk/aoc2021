import { array } from "fp-ts";
import { identity, pipe } from "fp-ts/lib/function";
import { aperture, groupBy } from "ramda";

export interface OptimalPolymerInstructions {
  polymerTemplate: Map<string, number>;
  pairInsertionRules: Map<string, string>;
}

export const parsePartOne = (input: string) =>
  pipe(input.split("\n\n"), ([a, b]) => ({
    polymerTemplate: parsePolymerTemplate(a),
    pairInsertionRules: new Map(b.split("\n").map(parsePairInsertionRule)),
  }));

export const parsePairInsertionRule = (input: string) =>
  input.split(" -> ") as [string, string];

export const parsePolymerTemplate = (input: string) =>
  pipe(
    // generate all pairs and count them
    aperture(2, input.split("")).map((n) => n.join("")),
    groupBy(identity),
    Object.entries,
    array.map(([key, values]) => [key, values.length] as const),
    array.concat(getDuplicateElements(input)),
    (data) => new Map(data),
  );

// find all elements that are duplicated when creating pairs
// basically every element except the leftmost and rightmost ones
export const getDuplicateElements = (input: string) =>
  pipe(
    input.slice(1, -1).split(""),
    groupBy(identity),
    Object.entries,
    // since those elements are duplicates, add them as negative numbers
    // so that the total element count is still correct
    array.map(([key, values]) => [key, -values.length] as const),
  );
