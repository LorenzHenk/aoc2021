import { trim } from "fp-ts/lib/string";

export interface Cave {
  name: string;
  isLarge: boolean;
  connectedTo: string[];
}

export type CaveSystem = Record<string, Cave>;

export const parsePartOne = (input: string): CaveSystem =>
  input
    .split("\n")
    .map(trim)
    .filter(Boolean)
    .map((line) => line.split("-"))
    .reduce((acc, [from, to]) => {
      const result: typeof acc = { ...acc };
      if (!result[from]) {
        result[from] = {
          name: from,
          isLarge: from.toUpperCase() === from,
          connectedTo: [],
        };
      }
      if (!result[to]) {
        result[to] = {
          name: to,
          isLarge: to.toUpperCase() === to,
          connectedTo: [],
        };
      }
      result[from] = {
        ...result[from],
        connectedTo: [...result[from].connectedTo, to],
      };
      result[to] = {
        ...result[to],
        connectedTo: [...result[to].connectedTo, from],
      };

      return result;
    }, {} as CaveSystem);
