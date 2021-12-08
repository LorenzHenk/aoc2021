export type SignalPattern = string[];

export interface NoteEntry {
  inputSignalPatterns: SignalPattern[];
  outputValues: SignalPattern[];
}

export const parsePartOne = (input: string): NoteEntry[] =>
  input
    .split("\n")
    .filter(Boolean)
    .map((s) => s.trim().split(" | "))
    .map(([left, right]) => ({
      inputSignalPatterns: parsePatterns(left),
      outputValues: parsePatterns(right),
    }));

export const parsePatterns = (patterns: string) =>
  patterns.split(" ").map(parseSignalPattern);

export const parseSignalPattern = (pattern: string) => pattern.split("");
