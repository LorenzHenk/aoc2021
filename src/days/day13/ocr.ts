import { array } from "fp-ts";
import { pipe } from "fp-ts/lib/function";

export const RAW_LETTERS = "ABCEFGHIJKLOPRSUYZ0";

export const RAW_LETTER_ARRAY = `\
.##.
#..#
#..#
####
#..#
#..#

###.
#..#
###.
#..#
#..#
###.

.##.
#..#
#...
#...
#..#
.##.

####
#...
###.
#...
#...
####

####
#...
###.
#...
#...
#...

.##.
#..#
#...
#.##
#..#
.###

#..#
#..#
####
#..#
#..#
#..#

###
.#.
.#.
.#.
.#.
###

..##
...#
...#
...#
#..#
.##.

#..#
#.#.
##..
#.#.
#.#.
#..#

#...
#...
#...
#...
#...
####

.##.
#..#
#..#
#..#
#..#
.##.

###.
#..#
#..#
###.
#...
#...

###.
#..#
#..#
###.
#.#.
#..#

.###
#...
#...
.##.
...#
###.

#..#
#..#
#..#
#..#
#..#
.##.

#...#
#...#
.#.#.
..#..
..#..
..#..

####
...#
..#.
.#..
#...
####

#####
#...#
#...#
#...#
#####`.split("\n\n");

export const splitAsciiLetters = (input: string) => {
  const lines = input.split("\n");

  const letters = [];

  let lastI = 0;
  for (let i = 1; i <= lines[0].length; i++) {
    if (lines.every((line) => line[i] !== "#")) {
      letters.push(lines.map((line) => line.slice(lastI, i)).join("\n"));
      lastI = ++i;
    }
  }

  return letters;
};

export const asciiToAlpha = (input: string): string[] =>
  pipe(input, splitAsciiLetters, array.map(asciiLetterToAlphaLetter));

export const asciiLetterToAlphaLetter = (input: string) => {
  const idx = RAW_LETTER_ARRAY.findIndex((l) => l === input);
  if (idx === -1) {
    throw Error("Ascii letter could not be resolved");
  }

  return RAW_LETTERS[idx];
};
