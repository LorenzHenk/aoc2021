import { groupBy } from "ramda";
import { HeightMap } from "./parse";

interface NumberWithCoordinates {
  value: number;
  x: number;
  y: number;
}

export const getAdjacentNumbers =
  (heightMap: HeightMap) =>
  (x: number, y: number): NumberWithCoordinates[] => {
    const coordinates = [
      [x, y - 1],
      [x, y + 1],
      [x - 1, y],
      [x + 1, y],
    ];

    const numbers = coordinates.map((coord) => ({
      value: heightMap.rows[coord[1]]?.[coord[0]],
      x: coord[0],
      y: coord[1],
    }));

    return numbers.filter((n) => n.value !== undefined);
  };

export const findLowestAdjacentNumber =
  (heightMap: HeightMap) =>
  (x: number, y: number): NumberWithCoordinates => {
    const numbers = getAdjacentNumbers(heightMap)(x, y);
    const min = numbers.reduce(
      (acc, next) => {
        if (acc.value > next.value) {
          return next;
        } else {
          return acc;
        }
      },
      { value: heightMap.rows[y][x], x, y },
    );

    return min;
  };

export const findLowestNumber =
  (heightMap: HeightMap) => (x: number, y: number) => {
    let n: NumberWithCoordinates = { value: heightMap.rows[y][x], x, y };

    while (true) {
      const lowest = findLowestAdjacentNumber(heightMap)(n.x, n.y);
      if (n.value === lowest.value) {
        return n;
      } else {
        n = lowest;
      }
    }
  };

export const findLowPoints = (heightMap: HeightMap) => {
  const res = heightMap.rows.flatMap((line, y) =>
    line.filter((v, x) =>
      getAdjacentNumbers(heightMap)(x, y).every((n) => n.value > v),
    ),
  );

  return res;
};

export const findBasins = (heightMap: HeightMap) => {
  const res = heightMap.rows
    .flatMap((line, y) =>
      line.map((_n, x) =>
        _n === 9 ? undefined : findLowestNumber(heightMap)(x, y),
      ),
    )
    .filter((n): n is NumberWithCoordinates => n !== undefined);

  const uniqueNumbers = groupBy(({ x, y }) => x + " " + y, res);
  return uniqueNumbers;
};
