import { sum } from "../src/sum";

describe("Summary", () => {
  it("should be able to summarize numbers", () => {
    const summarize: number = sum(1, 2, 3, 4, 5);
    expect(summarize).toBe(15);
  });
});
