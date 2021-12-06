import { sum } from "ramda";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
  const parsedInput = parsePartOne(input);

  // how many fish per day are left
  // index === days left
  //           0  1  2  3  4  5  6  7  8
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  parsedInput.forEach((v) => {
    count[v]++;
  });

  const DAYS_LIMIT = 80;

  for (let day = 1; day <= DAYS_LIMIT; day++) {
    const nextCount = count.slice(1).concat(count[0]);
    nextCount[6] += count[0];

    count = nextCount;
  }

  return sum(count);
};
