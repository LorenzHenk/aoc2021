import { parsePartOne, SubmarineCommandType } from "./parse";

export const solvePartOne = (input: string) => {
  const parsedInput = parsePartOne(input);

  const { horizontal, vertical } = parsedInput.reduce(
    (acc, next) => {
      if (next.type === SubmarineCommandType.Forward) {
        return { ...acc, horizontal: acc.horizontal + next.amount };
      } else if (next.type === SubmarineCommandType.Up) {
        return { ...acc, vertical: acc.vertical - next.amount };
      } else if (next.type === SubmarineCommandType.Down) {
        return { ...acc, vertical: acc.vertical + next.amount };
      }

      throw Error(`Unsupported type ${next.type}`);
    },
    { horizontal: 0, vertical: 0 },
  );

  return horizontal * vertical;
};

export const solvePartTwo = (input: string) => {};
