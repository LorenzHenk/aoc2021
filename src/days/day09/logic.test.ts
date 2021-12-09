import {
  findLowestAdjacentNumber,
  findLowestNumber,
  getAdjacentNumbers,
} from "./logic";
import { parsePartOne } from "./parse";

const INPUT = `\
2199943210
3987894921
9856789892
8767896789
9899965678`;

test("getAdjacentNumbers", () => {
  const data = parsePartOne(INPUT);
  expect(getAdjacentNumbers(data)(0, 0).map((n) => n.value)).toEqual([3, 1]);
  expect(getAdjacentNumbers(data)(1, 0).map((n) => n.value)).toEqual([9, 2, 9]);
  expect(getAdjacentNumbers(data)(9, 4).map((n) => n.value)).toEqual([9, 7]);
});

test("findLowestAdjacentNumber", () => {
  const data = parsePartOne(INPUT);

  expect(findLowestAdjacentNumber(data)(0, 0).value).toEqual(1);
  expect(findLowestAdjacentNumber(data)(1, 0).value).toEqual(1);
  expect(findLowestAdjacentNumber(data)(2, 0).value).toEqual(1);
  expect(findLowestAdjacentNumber(data)(1, 1).value).toEqual(1);

  expect(findLowestAdjacentNumber(data)(2, 1).value).toEqual(5);
});

test("findLowestNumber", () => {
  const data = parsePartOne(INPUT);

  expect(findLowestNumber(data)(0, 0).value).toEqual(1);
  expect(findLowestNumber(data)(0, 1).value).toEqual(1);
  expect(findLowestNumber(data)(0, 4).value).toEqual(5);
});
