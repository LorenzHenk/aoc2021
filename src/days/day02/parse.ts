import { trim } from "ramda";

export enum SubmarineCommandType {
  Forward = "forward",
  Down = "down",
  Up = "up",
}

export interface SubmarineCommand {
  type: SubmarineCommandType;
  amount: number;
}

export const parsePartOneLine = (line: string): SubmarineCommand => {
  const [command, amount] = line.split(" ");
  return { type: command as SubmarineCommandType, amount: parseInt(amount) };
};

export const parsePartOne = (input: string): SubmarineCommand[] => {
  return input
    .split("\n")
    .map(trim)
    .filter(Boolean)
    .map(parsePartOneLine);
};
