import { uniqBy } from "ramda";
import { array } from "fp-ts";
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
