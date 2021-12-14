import { SAMPLE_INPUT } from "./input";
import { applyPairInsertionRules } from "./logic";
import { parsePartOne } from "./parse";

test("applyPairInsertionRules", () => {
  const input = parsePartOne(SAMPLE_INPUT);
  const result = applyPairInsertionRules(
    input.pairInsertionRules,
    input.polymerTemplate,
  );

  expect(result).toEqual("NCNBCHB".split(""));
});
