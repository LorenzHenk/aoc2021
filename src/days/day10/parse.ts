export const parsePartOne = (input: string) =>
  input
    .split("\n")
    .filter(Boolean)
    .map((line) => line.trim().split(""));
