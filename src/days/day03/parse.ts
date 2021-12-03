import { split, trim } from "ramda";

export type Bit = 0 | 1;

export type DiagnosticReportData = Bit[][];

export interface DiagnosticReport {
  data: DiagnosticReportData;
  bitLength: number;
}

export const parsePartOne = (input: string): DiagnosticReport => {
  const data = input
    .split("\n")
    .map(trim)
    .filter(Boolean)
    .map(split(""))
    .map((number) =>
      number.map((stringValue) => (stringValue === "0" ? 0 : 1)),
    );

  if (!data.length) {
    throw Error("Unexpected empty data");
  }

  return { data, bitLength: data[0].length };
};
