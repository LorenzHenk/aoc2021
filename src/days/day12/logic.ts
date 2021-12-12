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

export const findPathsWithGoingBackOnce = (caveSystem: CaveSystem) => {
  const { start } = caveSystem;
  const finishedPaths: CaveSystemPath[] = [];

  const unfinishedPaths: { path: CaveSystemPath; wentBack: boolean }[] = [
    { path: [start.name], wentBack: false },
  ];

  while (unfinishedPaths.length) {
    const next = unfinishedPaths.pop()!;
    const currentCaveName = next.path[next.path.length - 1];
    const currentCave = caveSystem[currentCaveName];

    if (currentCave === caveSystem.end) {
      finishedPaths.push(next.path);
    } else {
      unfinishedPaths.push(
        ...currentCave.connectedTo
          .filter((to) => to !== "start")
          .filter(
            (to) =>
              caveSystem[to].isLarge ||
              !next.wentBack ||
              !next.path.includes(to),
          )
          .map((to) => ({
            path: [...next.path, to],
            wentBack:
              next.wentBack ||
              (!caveSystem[to].isLarge && next.path.includes(to)),
          })),
      );
    }
  }

  return finishedPaths;
};
