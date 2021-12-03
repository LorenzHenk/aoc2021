import * as R from "ramda";
import { binaryToDecimal, getEpsilonBinary, getGammaBinary } from "./logic";
import { Bit, parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
  const parsedInput = parsePartOne(input);

  const gammaBinary = getGammaBinary(parsedInput);
  const epsilonBinary = getEpsilonBinary(parsedInput);

  return binaryToDecimal(gammaBinary) * binaryToDecimal(epsilonBinary);
};

export const solvePartTwo = (input: string) => {};
