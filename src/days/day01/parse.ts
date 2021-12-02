export const parsePartOne = (input: string) => {
  return (
    input
      .split("\n")
      .map((line) => line.trim())
      // remove empty leading / trailing lines
      .filter(Boolean)
      .map((stringifiedNumber) => parseInt(stringifiedNumber))
  );
};
