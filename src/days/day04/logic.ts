import { range } from "ramda";
import { BingoBoard, BingoGame } from "./parse";

export type ColumnsAndRows = number[][];

export const playGameUntilWon = (game: BingoGame) => {
  // horizontal and vertical lines that need to be checked
  const boardLinesToCheck: ColumnsAndRows[] = game.boards.map(
    getBoardLinesToCheck,
  );

  let numbersToDraw = game.numbersToDraw;

  let drawnNumberIndex = 0;

  let winningBoardIndex: number | null;
  do {
    drawnNumberIndex++;
    winningBoardIndex = getWinningBoardIndex(
      numbersToDraw.slice(0, drawnNumberIndex),
      boardLinesToCheck,
    );
  } while (winningBoardIndex === null);

  return {
    winningBoard: game.boards[winningBoardIndex],
    drawnNumbers: numbersToDraw.slice(0, drawnNumberIndex),
  };
};

export const playGameUntilAllWon = (game: BingoGame) => {
  // horizontal and vertical lines that need to be checked
  const boardLinesToCheck: ColumnsAndRows[] = game.boards.map(
    getBoardLinesToCheck,
  );

  let numbersToDraw = game.numbersToDraw;

  let drawnNumberIndex = 0;

  let winningIndices: number[] = [];

  while (winningIndices.length !== game.boards.length) {
    drawnNumberIndex++;

    let winningBoardIndex;
    // remove all winning boards
    do {
      // do not check boards that already won
      const boardsToCheck = boardLinesToCheck.filter(
        (_, i) => !winningIndices.includes(i),
      );

      winningBoardIndex = getWinningBoardIndex(
        numbersToDraw.slice(0, drawnNumberIndex),
        boardsToCheck,
      );

      if (winningBoardIndex !== null) {
        winningIndices.push(
          // get the correct board index
          boardLinesToCheck.indexOf(boardsToCheck[winningBoardIndex]),
        );
      }
    } while (winningBoardIndex !== null);
  }

  return {
    boardsInWinningOrder: winningIndices.map((i) => game.boards[i]),
    drawnNumbers: numbersToDraw.slice(0, drawnNumberIndex),
  };
};

export const getBoardLinesToCheck = (board: BingoBoard): ColumnsAndRows => {
  return board.rows.concat(
    range(0, 5).map((i) => board.rows.map((row) => row[i])),
  );
};

export const getWinningBoardIndex = (
  drawnNumbers: number[],
  internalBoardRepresentations: ColumnsAndRows[],
): number | null => {
  const index = internalBoardRepresentations.findIndex((repr) =>
    isWinningBoard(drawnNumbers, repr),
  );
  return index === -1 ? null : index;
};

export const isWinningBoard = (
  drawnNumbers: number[],
  boardLinesToCheck: ColumnsAndRows,
) => {
  return boardLinesToCheck.some((line) =>
    line.every((n) => drawnNumbers.includes(n)),
  );
};
