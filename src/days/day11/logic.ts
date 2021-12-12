import { option, readonlyNonEmptyArray, readonlyArray, array } from "fp-ts";
import { increment, pipe } from "fp-ts/lib/function";
import { xprod } from "ramda";

import { OctopusMap } from "./parse";

interface Octopus {
  energy: number;
  x: number;
  y: number;
}

export const getAdjacent = (
  octopusMap: OctopusMap,
  x: number,
  y: number,
): ReadonlyArray<Octopus> =>
  pipe(
    xprod(
      readonlyNonEmptyArray.range(-1, 1),
      readonlyNonEmptyArray.range(-1, 1),
    ),
    readonlyArray.filter(([dx, dy]) => !(dx === 0 && dy === 0)),
    readonlyArray.map(([dx, dy]) => [dx + x, dy + y]),
    readonlyArray.map(([x, y]) =>
      pipe(
        option.fromNullable(octopusMap[y]?.[x]),
        option.map((value) => ({ energy: value, x, y })),
      ),
    ),
    readonlyArray.filter(option.isSome),
    readonlyArray.map((o) => o.value),
  );

export const flashSingle = (
  octopusMap: Readonly<OctopusMap>,
  x: number,
  y: number,
  flashes: { x: number; y: number }[],
) => {
  const nextOctopusMap = [...octopusMap.map((row) => [...row])];
  nextOctopusMap[y][x] = 0;
  const adjacent = getAdjacent(nextOctopusMap, x, y);
  adjacent.forEach((a) => {
    // only increment if octopus hasn't already flashed
    if (!flashes.find((f) => f.x === a.x && f.y === a.y))
      nextOctopusMap[a.y][a.x]++;
  });

  return nextOctopusMap;
};

export const flash = (
  octopusMap: OctopusMap,
): { octopusMap: OctopusMap; flashes: number } => {
  let flashes: { x: number; y: number }[] = [];

  let data = octopusMap;
  let didFlash = true;

  while (didFlash) {
    didFlash = false;
    for (let y = 0; y < data.length; y++) {
      for (let x = 0; x < data[y].length; x++) {
        if (data[y][x] > 9) {
          // flash
          flashes.push({ x, y });
          data = flashSingle(data, x, y, flashes);
          // start from the beginning
          didFlash = true;
        }
      }
    }
  }

  return { octopusMap: data, flashes: flashes.length };
};

export const runStep = (octopusMap: OctopusMap) => {
  let nextOctopusMap = octopusMap.map((row) => row.map(increment));

  let afterFlash = flash(nextOctopusMap);

  return afterFlash;
};
