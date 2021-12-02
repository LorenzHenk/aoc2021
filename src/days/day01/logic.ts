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

/**
 * compare a list of numbers
 */
export const compareList = (data: number[]) => {
  return data
    .slice(0, -1)
    .map((value, index) => compare(value, data[index + 1]));
};

/**
 * apply a function to an array via sliding window
 */
export const slidingWindow = <ResultType>(
  windowSize: number,
  aggregateFunction: (data: number[]) => ResultType,
  data: number[],
): ResultType[] => {
  return data
    .slice(0, -1 * windowSize + 1)
    .map((_value, index) =>
      aggregateFunction(data.slice(index, index + windowSize)),
    );
};
