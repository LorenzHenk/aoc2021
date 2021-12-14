import { PairInsertionRule, PolymerTemplate } from "./parse";

export const applyPairInsertionRules = (
  pairInsertionRules: PairInsertionRule[],
  polymerTemplate: PolymerTemplate,
) => {
  const applicables: [number, PairInsertionRule][] = [];
  for (let i = 0; i < polymerTemplate.length - 1; i++) {
    const applicablePairInsertionRule = pairInsertionRules.find((rule) =>
      rule.from.every((v, j) => v === polymerTemplate[i + j]),
    );
    if (applicablePairInsertionRule) {
      applicables.push([i, applicablePairInsertionRule]);
    }
  }
  applicables.reverse();

  const newPolymerTemplate = [...polymerTemplate];
  applicables.forEach(([i, pairInsertionRule]) => {
    newPolymerTemplate.splice(i + 1, 0, ...pairInsertionRule.to);
  });

  return newPolymerTemplate;
};
