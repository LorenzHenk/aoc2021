import { range, repeat } from "ramda";
import { VentLine } from "./parse";

/**
 * get a range from a to b
 * also works if a > b
 */
export const getImplicitRange = (a: number, b: number): number[] => {
  if (b >= a) {
    return range(a, b + 1);
  } else {
    return range(b, a + 1).reverse();
  }
};

export const countLineOverlaps = (data: VentLine[]) => {
  const map: Record<string, number> = {};

  data.forEach(({ x1, y1, x2, y2 }) => {
    const length = Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));

    const xs = x1 === x2 ? repeat(x1, length + 1) : getImplicitRange(x1, x2);
    const ys = y1 === y2 ? repeat(y1, length + 1) : getImplicitRange(y1, y2);

    for (let i = 0; i <= length; i++) {
      const x = xs[i];
      const y = ys[i];

      const key = `${x},${y}`;
      if (!map[key]) {
        map[key] = 0;
      }

      map[key]++;
    }
  });

  return map;
};
