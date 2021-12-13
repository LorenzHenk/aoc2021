import { pipe } from "fp-ts/function";

export enum Axis {
  X = "x",
  Y = "y",
}

export interface FoldInstruction {
  axis: Axis;
  position: number;
}

export interface Dot {
  x: number;
  y: number;
}

export interface Instructions {
  dots: Dot[];
  folds: FoldInstruction[];
}

const FOLD_INSTRUCTION_PREFIX = "fold along ";

export const parsePartOne = (input: string) =>
  pipe(input.split("\n\n"), ([dots, folds]) => ({
    dots: parseDots(dots),
    folds: parseFolds(folds),
  }));

const parseDots = (input: string): Dot[] => input.split("\n").map(parseDot);

const parseDot = (input: string): Dot =>
  pipe(input.split(","), ([x, y]) => ({ x: parseInt(x), y: parseInt(y) }));

const parseFolds = (input: string): FoldInstruction[] =>
  input.split("\n").map(parseFold);

const parseFold = (input: string): FoldInstruction =>
  pipe(
    input.slice(FOLD_INSTRUCTION_PREFIX.length).split("="),
    ([axis, position]) => ({
      axis: axis as FoldInstruction["axis"],
      position: parseInt(position),
    }),
  );
