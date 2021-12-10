import { solvePartOne, solvePartTwo } from "./solve";

const INPUT = `\
[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;

describe("Solve part one", () => {
  it("Solves the README example correctly", () => {
    const EXPECTED_RESULT = 26397;

    const result = solvePartOne(INPUT);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});

describe("Solve part two", () => {
  it("Solves the README example correctly", () => {
    const EXPECTED_RESULT = 288957;

    const result = solvePartTwo(INPUT);

    expect(result).toEqual(EXPECTED_RESULT);
  });
});
