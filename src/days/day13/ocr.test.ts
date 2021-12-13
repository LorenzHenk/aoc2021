import { asciiToAlpha, RAW_LETTERS, RAW_LETTER_ARRAY } from "./ocr";

test("asciiToAlpha", () => {
  RAW_LETTER_ARRAY.forEach((letter, i) => {
    expect(asciiToAlpha(letter)).toEqual([RAW_LETTERS[i]]);
  });
});
