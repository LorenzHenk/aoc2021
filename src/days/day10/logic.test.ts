import { either } from "fp-ts";
import { isOpen, validateLine } from "./logic";
import { parsePartOne } from "./parse";

const INPUT = `\
[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;

test("isOpen", () => {
  expect(isOpen("[")).toBeTruthy();
  expect(isOpen("(")).toBeTruthy();
  expect(isOpen("<")).toBeTruthy();
  expect(isOpen("{")).toBeTruthy();

  expect(isOpen("]")).toBeFalsy();
  expect(isOpen(")")).toBeFalsy();
  expect(isOpen(">")).toBeFalsy();
  expect(isOpen("}")).toBeFalsy();
});

test("validateLine", () => {
  const data = parsePartOne(INPUT);
  expect(validateLine(data[0])).toEqual(
    either.left({
      type: "Incomplete",
      unclosed: ["[", "(", "{", "(", "[", "[", "{", "{"],
    }),
  );
  expect(validateLine(data[1])).toEqual(
    either.left({
      type: "Incomplete",
      unclosed: ["(", "{", "[", "<", "{", "("],
    }),
  );
  expect(validateLine(data[2])).toEqual(
    either.left({
      type: "Corrupted",
      expected: "[",
      received: "}",
    }),
  );
  expect(validateLine(data[3])).toEqual(
    either.left({
      type: "Incomplete",
      unclosed: ["(", "(", "(", "(", "<", "{", "<", "{", "{"],
    }),
  );
  expect(validateLine(data[4])).toEqual(
    either.left({
      type: "Corrupted",
      expected: "[",
      received: ")",
    }),
  );
  expect(validateLine(data[5])).toEqual(
    either.left({
      type: "Corrupted",
      expected: "(",
      received: "]",
    }),
  );
  expect(validateLine(data[6])).toEqual(
    either.left({
      type: "Incomplete",
      unclosed: ["<", "{", "[", "{", "[", "{", "{", "[", "["],
    }),
  );
  expect(validateLine(data[7])).toEqual(
    either.left({
      type: "Corrupted",
      expected: "<",
      received: ")",
    }),
  );
  expect(validateLine(data[8])).toEqual(
    either.left({
      type: "Corrupted",
      expected: "[",
      received: ">",
    }),
  );
  expect(validateLine(data[9])).toEqual(
    either.left({ type: "Incomplete", unclosed: ["<", "{", "(", "["] }),
  );
});
