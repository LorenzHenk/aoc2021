/**
 * returns an array of counts of fish per days left
 * the index corresponds to the days left, the value to the count of fish
 *
 * @example
 * getCount([1, 1, 2]) === [0, 2, 1, 0, 0, 0, 0, 0, 0]
 */
export const getCount = (lanternFish: number[]) => {
  // how many fish per day are left
  // index === days left
  //           0  1  2  3  4  5  6  7  8
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  lanternFish.forEach((v) => {
    count[v]++;
  });

  return count;
};

/**
 * simulate a single day
 */
export const simulateDay = (lanternFishCounts: number[]) => {
  // every fish takes 1 day less
  const nextCount = lanternFishCounts.slice(1);

  // fish that took 0 days are recreated as 6 days and create new 8 day fish
  nextCount[6] += lanternFishCounts[0];
  nextCount[8] = lanternFishCounts[0];

  return nextCount;
};

/**
 * run the simulation for a specific amount of days
 */
export const runSimulation = (days: number, lanternFish: number[]) => {
  let count = getCount(lanternFish);

  for (let day = 1; day <= days; day++) {
    count = simulateDay(count);
  }

  return count;
};
