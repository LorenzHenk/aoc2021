import { parsePartOne, SubmarineCommand, SubmarineCommandType } from "./parse";

describe("Parse part one", () => {
  it("Parses the README example correctly", () => {
    const INPUT = `
    forward 5
    down 5
    forward 8
    up 3
    down 8
    forward 2`;

    const EXPECTED_RESULT: SubmarineCommand[] = [
      { type: SubmarineCommandType.Forward, amount: 5 },
      { type: SubmarineCommandType.Down, amount: 5 },
      { type: SubmarineCommandType.Forward, amount: 8 },
      { type: SubmarineCommandType.Up, amount: 3 },
      { type: SubmarineCommandType.Down, amount: 8 },
      { type: SubmarineCommandType.Forward, amount: 2 },
    ];

    expect(parsePartOne(INPUT)).toEqual(EXPECTED_RESULT);
  });
});
