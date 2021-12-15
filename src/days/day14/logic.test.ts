import { sum } from "ramda";
import { SAMPLE_INPUT } from "./input";
import { applyPairInsertionRulesN } from "./logic";
import { parsePartOne } from "./parse";

describe("applyPairInsertionRulesN", () => {
  it("works after step 1", () => {
    const input = parsePartOne(SAMPLE_INPUT);
    const result = applyPairInsertionRulesN(1)(input);

    expect(sum(Object.values(result))).toEqual(7);
    expect(result.N).toEqual(2);
    expect(result.C).toEqual(2);
    expect(result.B).toEqual(2);
    expect(result.H).toEqual(1);
  });

  it("works after step 5", () => {
    const input = parsePartOne(SAMPLE_INPUT);
    const result = applyPairInsertionRulesN(5)(input);

    expect(sum(Object.values(result))).toEqual(97);
  });

  it("works after step 10", () => {
    const input = parsePartOne(SAMPLE_INPUT);
    const result = applyPairInsertionRulesN(10)(input);

    expect(sum(Object.values(result))).toEqual(3073);
    expect(result.B).toEqual(1749);
    expect(result.C).toEqual(298);
    expect(result.H).toEqual(161);
    expect(result.N).toEqual(865);
  });
});
