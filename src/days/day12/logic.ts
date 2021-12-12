import { CaveSystem } from "./parse";

export type CaveSystemPath = string[];

export const findPaths = (caveSystem: CaveSystem) => {
  const { start } = caveSystem;
  const finishedPaths: CaveSystemPath[] = [];

  const unfinishedPaths: CaveSystemPath[] = [[start.name]];

  while (unfinishedPaths.length) {
    const next = unfinishedPaths.pop()!;
    const currentCaveName = next[next.length - 1];
    const currentCave = caveSystem[currentCaveName];

    if (currentCave === caveSystem.end) {
      finishedPaths.push(next);
    } else {
      unfinishedPaths.push(
        ...currentCave.connectedTo
          .filter((to) => caveSystem[to].isLarge || !next.includes(to))
          .map((n) => [...next, n]),
      );
    }
  }

  return finishedPaths;
};
