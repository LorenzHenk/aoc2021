import { getImplicitRange } from "./logic";

describe("getImplicitRange", () => {
  it("should create an increasing range", () => {
    expect(getImplicitRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should create a decreasing range", () => {
    expect(getImplicitRange(5, 1)).toEqual([5, 4, 3, 2, 1]);
  });
});
