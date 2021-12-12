import { INPUT_SIMPLE_1 } from "./input";
import { parsePartOne } from "./parse";

it("Parses the first README example correctly", () => {
  const result = parsePartOne(INPUT_SIMPLE_1);

  expect(result.start).toEqual({
    name: "start",
    isLarge: false,
    connectedTo: ["A", "b"],
  });
  expect(result.end).toEqual({
    name: "end",
    isLarge: false,
    connectedTo: ["A", "b"],
  });
  expect(result.A).toEqual({
    name: "A",
    isLarge: true,
    connectedTo: ["start", "c", "b", "end"],
  });
  expect(result.b).toEqual({
    name: "b",
    isLarge: false,
    connectedTo: ["start", "A", "d", "end"],
  });
  expect(result.d).toEqual({
    name: "d",
    isLarge: false,
    connectedTo: ["b"],
  });
  expect(result.c).toEqual({
    name: "c",
    isLarge: false,
    connectedTo: ["A"],
  });
});
