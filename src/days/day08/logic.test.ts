import {
  decodeOutput,
  getPossibleNumberBySegmentCount,
  getSegmentMapping,
} from "./logic";
import { parseEntry, parsePatterns } from "./parse";

describe("getPossibleNumberBySegmentLength", () => {
  it("can figure out well known numbers", () => {
    expect(getPossibleNumberBySegmentCount(["c", "f"])).toEqual(["1"]);
    expect(getPossibleNumberBySegmentCount(["b", "c", "d", "f"])).toEqual([
      "4",
    ]);
    expect(getPossibleNumberBySegmentCount(["a", "c", "f"])).toEqual(["7"]);
    expect(
      getPossibleNumberBySegmentCount(["a", "b", "c", "d", "e", "f", "g"]),
    ).toEqual(["8"]);
  });
});

describe("getSegmentMapping", () => {
  const INPUT = `acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab`;
  const result = getSegmentMapping(parsePatterns(INPUT));
  expect(result.a).toEqual("d");
  expect(result.b).toEqual("e");
  expect(result.c).toEqual("a");
  expect(result.d).toEqual("f");
  expect(result.e).toEqual("g");
  expect(result.f).toEqual("b");
  expect(result.g).toEqual("c");
});

describe("decodeOutput", () => {
  const INPUT = `acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf`;
  const result = decodeOutput(parseEntry(INPUT));
  expect(result).toEqual(5353);
});
