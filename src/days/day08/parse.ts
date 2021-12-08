import { Segment } from "./logic";

export type SignalPattern = Segment[];

export interface NoteEntry {
  inputSignalPatterns: SignalPattern[];
  outputValues: SignalPattern[];
}

export const parsePartOne = (input: string): NoteEntry[] =>
  input.split("\n").filter(Boolean).map(parseEntry);

export const parseEntry = (line: string) => {
  const [left, right] = line.trim().split(" | ");
  return {
    inputSignalPatterns: parsePatterns(left),
    outputValues: parsePatterns(right),
  };
};

export const parsePatterns = (patterns: string) =>
  patterns.split(" ").map(parseSignalPattern);

export const parseSignalPattern = (pattern: string) =>
  pattern.split("") as SignalPattern;
