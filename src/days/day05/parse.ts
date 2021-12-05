export interface VentLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export const parsePartOne = (input: string): VentLine[] => {
  return input
    .split("\n")
    .map((l) => l.trim().match(/(\d+),(\d+) -> (\d+),(\d+)/))
    .map((r) => {
      if (!r) {
        throw Error("Parsing error");
      }
      return {
        x1: parseInt(r[1]),
        y1: parseInt(r[2]),
        x2: parseInt(r[3]),
        y2: parseInt(r[4]),
      };
    });
};
