import { parsePartOne, SubmarineCommandType } from "./parse";

export const solvePartOne = (input: string) => {
  const parsedInput = parsePartOne(input);

  const { horizontal, depth } = parsedInput.reduce(
    (acc, next) => {
      if (next.type === SubmarineCommandType.Forward) {
        return { ...acc, horizontal: acc.horizontal + next.amount };
      } else if (next.type === SubmarineCommandType.Up) {
        return { ...acc, depth: acc.depth - next.amount };
      } else if (next.type === SubmarineCommandType.Down) {
        return { ...acc, depth: acc.depth + next.amount };
      }

      throw Error(`Unsupported type ${next.type}`);
    },
    { horizontal: 0, depth: 0 },
  );

  return horizontal * depth;
};

export const solvePartTwo = (input: string) => {
  const parsedInput = parsePartOne(input);

  const { horizontal, depth } = parsedInput.reduce(
    (acc, next) => {
      if (next.type === SubmarineCommandType.Forward) {
        return {
          ...acc,
          horizontal: acc.horizontal + next.amount,
          depth: acc.depth + next.amount * acc.aim,
        };
      } else if (next.type === SubmarineCommandType.Up) {
        return { ...acc, aim: acc.aim - next.amount };
      } else if (next.type === SubmarineCommandType.Down) {
        return { ...acc, aim: acc.aim + next.amount };
      }

      throw Error(`Unsupported type ${next.type}`);
    },
    { horizontal: 0, depth: 0, aim: 0 },
  );

  return horizontal * depth;
};
