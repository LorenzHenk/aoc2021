import { INPUT_SIMPLE_1, INPUT_SIMPLE_2, INPUT_SIMPLE_3 } from "./input";
import { findPaths } from "./logic";
import { parsePartOne } from "./parse";

describe("findPaths", () => {
  it("works with README input 1", () => {
    const input = parsePartOne(INPUT_SIMPLE_1);
    const paths = findPaths(input);
    expect(paths.length).toEqual(10);
  });
  it("works with README input 2", () => {
    const input = parsePartOne(INPUT_SIMPLE_2);
    const paths = findPaths(input);
    expect(paths.length).toEqual(19);
  });
  it("works with README input 3", () => {
    const input = parsePartOne(INPUT_SIMPLE_3);
    const paths = findPaths(input);
    expect(paths.length).toEqual(226);
  });
});
