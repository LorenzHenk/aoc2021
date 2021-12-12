import { map } from "fp-ts/lib/Array";
import { trim } from "fp-ts/lib/string";

export type OctopusMap = ReadonlyArray<ReadonlyArray<number>>;

export const parsePartOne = (input: string): OctopusMap =>
  input
    .split("\n")
    .map(trim)
    .filter(Boolean)
    .map((line) => line.split(""))
    .map(map<string, number>((v) => parseInt(v)));
