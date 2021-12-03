import { binaryToDecimal } from "./logic";
import { Bit } from "./parse";

describe("binaryToDecimal", () => {
  it("converts 000 correctly", () => {
    const INPUT: Bit[] = [0, 0, 0];

    expect(binaryToDecimal(INPUT)).toEqual(0);
  });

  it("converts 001 correctly", () => {
    const INPUT: Bit[] = [0, 0, 1];

    expect(binaryToDecimal(INPUT)).toEqual(1);
  });

  it("converts 010 correctly", () => {
    const INPUT: Bit[] = [0, 1, 0];

    expect(binaryToDecimal(INPUT)).toEqual(2);
  });

  it("converts 100 correctly", () => {
    const INPUT: Bit[] = [1, 0, 0];

    expect(binaryToDecimal(INPUT)).toEqual(4);
  });

  it("converts 111 correctly", () => {
    const INPUT: Bit[] = [1, 1, 1];

    expect(binaryToDecimal(INPUT)).toEqual(7);
  });
});
