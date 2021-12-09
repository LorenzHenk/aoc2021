export interface HeightMap {
  rows: number[][];
}

export const parsePartOne = (input: string): HeightMap => ({
  rows: input
    .split("\n")
    .filter(Boolean)
    .map((line) => line.split("").map((n) => parseInt(n))),
});
