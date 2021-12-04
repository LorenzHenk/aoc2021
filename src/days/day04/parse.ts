export type DrawnNumbers = number[];

export interface BingoBoard {
  rows: number[][];
}

export interface BingoGame {
  numbersToDraw: DrawnNumbers;
  boards: BingoBoard[];
}

export const parsePartOne = (input: string): BingoGame => {
  const [numbersToDrawString, ...rest] = input.split("\n\n");

  const numbersToDraw = numbersToDrawString.split(",").map((n) => parseInt(n));

  const boards = rest.map(parseBoard);

  return { numbersToDraw: numbersToDraw, boards };
};

/**
 *
 * @example
 * const input = `\
 * 22 13 17 11  0
 *  8  2 23  4 24
 * 21  9 14 16  7
 *  6 10  3 18  5
 *  1 12 20 15 19
 * `
 * parseBoard(input)
 */
export const parseBoard = (input: string): BingoBoard => {
  return {
    rows: input
      .split("\n")
      .filter(Boolean)
      .map((line) =>
        line
          .split(" ")
          .filter(Boolean)
          .map((n) => parseInt(n)),
      ),
  };
};
