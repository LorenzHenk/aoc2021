import { repeat, uniqBy } from "ramda";
import { array, number, semigroup } from "fp-ts";
import { pipe } from "fp-ts/lib/function";
import { Dot, FoldInstruction } from "./parse";

export const foldPaper = (
  dots: Dot[],
  foldInstruction: FoldInstruction,
): Dot[] =>
  pipe(
    dots,
    array.map(foldDot(foldInstruction)),
    uniqBy(({ x, y }) => x + " " + y),
  );

export const foldDot =
  (foldInstruction: FoldInstruction) =>
  (dot: Dot): Dot => {
    if (dot[foldInstruction.axis] < foldInstruction.position) {
      return dot;
    }
    return {
      ...dot,
      [foldInstruction.axis]: foldCoordinate(
        dot[foldInstruction.axis],
        foldInstruction.position,
      ),
    };
  };

export const foldCoordinate = (
  coordinate: number,
  foldPosition: number,
): number => foldPosition - (coordinate - foldPosition);

export const printDots = (dots: Dot[], emptyCharacter = " ") => {
  const maxX = pipe(
    dots.map((dot) => dot.x),
    semigroup.concatAll(semigroup.max(number.Ord))(0),
  );
  const maxY = pipe(
    dots.map((dot) => dot.y),
    semigroup.concatAll(semigroup.max(number.Ord))(0),
  );

  const result = repeat("", maxY + 1).map(() =>
    repeat(emptyCharacter, maxX + 1),
  );

  dots.forEach(({ x, y }) => {
    result[y][x] = "#";
  });

  return result.map((l) => l.join("")).join("\n");
};
