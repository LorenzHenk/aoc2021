import { OptimalPolymerInstructions } from "./parse";

export const applyPairInsertionRules = (
  pairInsertionRules: OptimalPolymerInstructions["pairInsertionRules"],
  polymerTemplate: OptimalPolymerInstructions["polymerTemplate"],
) => {
  const resultTemplate = new Map(polymerTemplate.entries());

  polymerTemplate.forEach((value, key) => {
    if (pairInsertionRules.has(key)) {
      // e.g.
      // key = NN
      // value (count) = 20
      // insertion rule = "NN" -> "C"
      // will change all "NN" to "NCN", meaning "NC" and "CN" pairs and negative "C"
      // to account for the duplication via the splitting to pairs

      // remove the old pair
      resultTemplate.set(key, resultTemplate.get(key)! - value);

      const newCharacter = pairInsertionRules.get(key)!;

      const left = key[0] + newCharacter;
      const right = newCharacter + key[1];

      // create the two new pairs
      resultTemplate.set(left, (resultTemplate.get(left) ?? 0) + value);
      resultTemplate.set(right, (resultTemplate.get(right) ?? 0) + value);

      // add the duplicated new character to the negative count so that the
      // total count stays correct
      resultTemplate.set(
        newCharacter,
        (resultTemplate.get(newCharacter) ?? 0) - value,
      );
    }
  });

  return resultTemplate;
};

export const applyPairInsertionRulesN =
  (n: number) => (input: OptimalPolymerInstructions) => {
    const result = Array.from({ length: n }).reduce<
      OptimalPolymerInstructions["polymerTemplate"]
    >(
      (acc: any) => applyPairInsertionRules(input.pairInsertionRules, acc),
      input.polymerTemplate,
    );

    const counts: Record<string, number> = {};

    // count all pairs and elements
    result.forEach((value, key) => {
      key.split("").forEach((element) => {
        counts[element] = (counts[element] ?? 0) + value;
      });
    });

    return counts;
  };
