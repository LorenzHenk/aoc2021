import * as R from "ramda";
import { Bit, DiagnosticReport } from "./parse";

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

export const getGammaBinary = (diagnosticReport: DiagnosticReport) => {
  const groups = getBitCountGroup(diagnosticReport);

  return groups.map((group) => {
    return group[0] > group[1] ? 0 : 1;
  });
};

export const getEpsilonBinary = (diagnosticReport: DiagnosticReport) => {
  const groups = getBitCountGroup(diagnosticReport);

  return groups.map((group) => {
    return group[0] > group[1] ? 1 : 0;
  });
};

export const binaryToDecimal = (data: Bit[]): number => {
  return data.reduce(
    (acc, next, index) => acc + Math.pow(2, data.length - index - 1) * next,
    0 as number,
  );
};
