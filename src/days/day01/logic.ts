export enum ComparisonResult {
  Increase = "increase",
  Decrease = "decrease",
}

export const compare = (previous: number, next: number) => {
  if (next > previous) {
    return ComparisonResult.Increase;
  }
  return ComparisonResult.Decrease;
};
