import {
  binaryToDecimal,
  getCO2ScrubberRating,
  getEpsilonBinary,
  getGammaBinary,
  getOxygenGeneratorRating,
} from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
  const parsedInput = parsePartOne(input);

  const gammaBinary = getGammaBinary(parsedInput);
  const epsilonBinary = getEpsilonBinary(parsedInput);

  return binaryToDecimal(gammaBinary) * binaryToDecimal(epsilonBinary);
};

export const solvePartTwo = (input: string) => {
  const parsedInput = parsePartOne(input);
  const oxygenBinary = getOxygenGeneratorRating(parsedInput);
  const co2Binary = getCO2ScrubberRating(parsedInput);

  return binaryToDecimal(oxygenBinary) * binaryToDecimal(co2Binary);
};
