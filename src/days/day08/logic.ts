import { difference, intersection, invertObj, sum } from "ramda";
import { NoteEntry, SignalPattern } from "./parse";

export type Segment = "a" | "b" | "c" | "d" | "e" | "f" | "g";

export const SEGMENTS_USED = {
  0: "abcefg",
  1: "cf",
  2: "acdeg",
  3: "acdfg",
  4: "bcdf",
  5: "abdfg",
  6: "abdefg",
  7: "acf",
  8: "abcdefg",
  9: "abcdfg",
};

export const WELL_KNOWN_SEGMENT_COUNTS = [
  SEGMENTS_USED[1].length,
  SEGMENTS_USED[4].length,
  SEGMENTS_USED[7].length,
  SEGMENTS_USED[8].length,
];

/**
 * retrieve the possible numbers that could be represented by the given signal
 * based on the segment count
 */
export const getPossibleNumberBySegmentCount = (signal: SignalPattern) => {
  return Object.entries(SEGMENTS_USED)
    .filter(([_key, value]) => value.length === signal.length)
    .map(([key]) => key);
};

type SegmentMapping = Record<Segment, Segment>;

/**
 * reverse engineer the segment mapping based on 10 given signal patterns
 * @returns a Record<ExpectedSegment, ActualSegment>
 */
export const getSegmentMapping = (input: SignalPattern[]): SegmentMapping => {
  const possibleNumbers = input.map(getPossibleNumberBySegmentCount);

  // well known numbers
  const n1 = possibleNumbers.findIndex((n) => n.includes("1"));
  const n4 = possibleNumbers.findIndex((n) => n.includes("4"));
  const n7 = possibleNumbers.findIndex((n) => n.includes("7"));
  const n8 = possibleNumbers.findIndex((n) => n.includes("8"));

  const n9 = possibleNumbers.findIndex(
    // 9 is the only number (besides 8) that uses all segments used by 4
    (n, i) => n.includes("9") && input[n4].every((x) => input[i].includes(x)),
  );

  const a = difference(input[n7], input[n1])[0];
  const e = difference(input[n8], input[n9])[0];

  const n2 = possibleNumbers.findIndex(
    // 2 is the only number using 5 segments that uses `e`
    (n, i) => n.includes("2") && input[i].includes(e),
  );

  const f = difference(input[n1], input[n2])[0];
  const c = intersection(input[n1], input[n2])[0];
  const b = difference(difference(input[n8], input[n2]), input[n1])[0];
  const d = difference(input[n4], [b, c, f])[0];
  const g = difference(input[n8], [a, b, c, d, e, f])[0];

  return {
    a,
    b,
    c,
    d,
    e,
    f,
    g,
  };
};

/**
 * map a signal based on a given segment mapping
 */
export const mapSignalPattern = (
  mapping: SegmentMapping,
  signal: SignalPattern,
) => signal.map((s) => mapping[s]);

export const decodeSignalPattern = (
  actualToExpectedMapping: SegmentMapping,
  signal: SignalPattern,
) => {
  const correctSignalPattern = mapSignalPattern(
    actualToExpectedMapping,
    signal,
  );
  const comparableSignalPattern = correctSignalPattern.sort().join("");

  const n = Object.entries(SEGMENTS_USED)
    .filter(([_key, value]) => value === comparableSignalPattern)
    .map(([key]) => key)[0];

  return parseInt(n);
};

export const decodeOutput = (entry: NoteEntry): number => {
  // mapping right -> wrong
  const expectedToActualMapping = getSegmentMapping(entry.inputSignalPatterns);
  // mapping wrong -> right
  const actualToExpectedMapping = invertObj(
    expectedToActualMapping,
  ) as SegmentMapping;

  return sum(
    entry.outputValues
      .map((n) => decodeSignalPattern(actualToExpectedMapping, n))
      // put digit to the correct place
      // i.e.
      // 1st digit * 1000
      // 2nd digit *  100
      // 3rd digit *   10
      // 4th digit *    1
      .map((n, i) => n * Math.pow(10, 3 - i)),
  );
};
