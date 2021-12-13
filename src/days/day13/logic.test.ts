import { pipe } from "fp-ts/lib/function";
import { SAMPLE_INPUT } from "./input";
import { foldDot, foldPaper } from "./logic";
import { Axis, parsePartOne } from "./parse";

describe("fold", () => {
  it("folds on y axis", () => {
    const data = parsePartOne(SAMPLE_INPUT);
    const result = foldPaper(data.dots, data.folds[0]);

    expect(result.length).toEqual(17);
    expect(result).toContainEqual({ x: 0, y: 0 });
    expect(result).toContainEqual({ x: 0, y: 1 });
    expect(result).not.toContainEqual({ x: 1, y: 0 });
    expect(result).toContainEqual({ x: 10, y: 4 });
  });

  it("folds on x axis", () => {
    const data = parsePartOne(SAMPLE_INPUT);
    const result = pipe(
      data.dots,
      (dots) => foldPaper(dots, data.folds[0]),
      (dots) => foldPaper(dots, data.folds[1]),
    );

    expect(result.length).toEqual(16);
  });
});

test("foldDotY", () => {
  expect(foldDot({ axis: Axis.Y, position: 7 })({ x: 1, y: 10 })).toEqual({
    x: 1,
    y: 4,
  });
});
