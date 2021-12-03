import { DiagnosticReport, DiagnosticReportData, parsePartOne } from "./parse";

describe("Parse part one", () => {
  it("Parses the README example correctly", () => {
    const INPUT = `
    00100
    11110
    10110
    10111
    10101
    01111
    00111
    11100
    10000
    11001
    00010
    01010`;

    const EXPECTED_RESULT: DiagnosticReportData = [
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 1, 1, 0],
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [0, 1, 1, 1, 1],
      [0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 1],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 1, 0],
    ];

    const result = parsePartOne(INPUT);

    expect(result.bitLength).toEqual(5);
    expect(result.data).toEqual(EXPECTED_RESULT);
  });
});
