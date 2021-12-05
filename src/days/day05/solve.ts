import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
  const parsedInput = parsePartOne(input);

  const map: Record<string, number> = {};

  parsedInput
    .filter(
      (ventLine) => ventLine.x1 === ventLine.x2 || ventLine.y1 === ventLine.y2,
    )
    .forEach((ventLine) => {
      const minX = Math.min(ventLine.x1, ventLine.x2);
      const maxX = Math.max(ventLine.x1, ventLine.x2);

      const minY = Math.min(ventLine.y1, ventLine.y2);
      const maxY = Math.max(ventLine.y1, ventLine.y2);

      for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
          const key = `${x},${y}`;
          if (!map[key]) {
            map[key] = 0;
          }

          map[key]++;
        }
      }
    });

  return Object.values(map).filter((c) => c >= 2).length;
};

export const solvePartTwo = (input: string) => {};
