import R from "ramda";
import { playGameUntilWon } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
  const parsedInput = parsePartOne(input);
  const endState = playGameUntilWon(parsedInput);

  const unmarkedNumbers = endState.winningBoard.rows.flatMap((row) =>
    row.filter((n) => !endState.drawnNumbers.includes(n)),
  );

  return (
    R.sum(unmarkedNumbers) *
    endState.drawnNumbers[endState.drawnNumbers.length - 1]
  );
};

export const solvePartTwo = (input: string) => {};
