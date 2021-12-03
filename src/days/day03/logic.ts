import * as R from "ramda";
import { Bit, DiagnosticReport } from "./parse";

export const binaryToDecimal = (data: Bit[]): number => {
  return data.reduce(
    (acc, next, index) => acc + Math.pow(2, data.length - index - 1) * next,
    0 as number,
  );
};

/**
 * count 0 and 1 occurrences per position
 */
export const getBitCount = (data: Bit[]) => {
  return R.countBy<Bit>((v) => v.toString())(data);
};

export const getBitCountGroup = (diagnosticReport: DiagnosticReport) => {
  return R.range(0, diagnosticReport.bitLength).map((index) => {
    const grouped = getBitCount(diagnosticReport.data.map((row) => row[index]));

    return grouped;
  });
};

const getXBinary = (
  groupingFunction: (count0: number, count1: number) => Bit,
) => (diagnosticReport: DiagnosticReport) => {
  const groups = getBitCountGroup(diagnosticReport);

  return groups.map((group) => groupingFunction(group[0], group[1]));
};

export const getGammaBinary = getXBinary((count0, count1) =>
  count0 > count1 ? 0 : 1,
);

export const getEpsilonBinary = getXBinary((count0, count1) =>
  count0 > count1 ? 1 : 0,
);

export const getOxygenGeneratorRating = (
  diagnosticReport: DiagnosticReport,
) => {
  let data = [...diagnosticReport.data];
  let index = 0;
  while (data.length > 1) {
    const bitCountAtIndex = getBitCount(data.map((row) => row[index]));
    const mostCommon = bitCountAtIndex[0] > bitCountAtIndex[1] ? 0 : 1;
    data = data.filter((row) => row[index] === mostCommon);
    index++;
  }
  return data[0];
};

export const getCO2ScrubberRating = (diagnosticReport: DiagnosticReport) => {
  let data = [...diagnosticReport.data];
  let index = 0;
  while (data.length > 1) {
    const bitCountAtIndex = getBitCount(data.map((row) => row[index]));
    const mostCommon = bitCountAtIndex[0] > bitCountAtIndex[1] ? 1 : 0;
    data = data.filter((row) => row[index] === mostCommon);
    index++;
  }
  return data[0];
};
