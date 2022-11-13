import "@testing-library/jest-dom";
import {
  checkIsWon,
  checkSwappable,
  getShuffledBlocks,
  getSwappedBlocks,
} from "./utils";

describe("Testing utils functions", () => {
  const blocksArray = [0, 8, 4, 2, 7, 5, 1, 3, 6];
  it("test getShuffledBlocks", () => {
    const shuffledBlocks = getShuffledBlocks(3);
    expect(shuffledBlocks.length).toBe(9);
  });

  it("test getSwappedBlocks", () => {
    const swappedBlocks = getSwappedBlocks(3, blocksArray);
    expect(swappedBlocks).toStrictEqual([0, 3, 4, 2, 7, 5, 1, 8, 6]);
  });

  it("test getSwappedBlocks as falsy", () => {
    const isSwappable = checkSwappable(3, blocksArray, 3);
    expect(isSwappable).toBe(false);
  });

  it("test getSwappedBlocks as truthy", () => {
    const isSwappable = checkSwappable(4, [0, 8, 4, 2, 7, 5, 1, 3, 6], 3);
    expect(isSwappable).toBe(true);
  });

  it("test is won false", () => {
    const isWon = checkIsWon([0, 8, 4, 2, 7, 5, 1, 3, 6]);
    expect(isWon).toBe(false);
  });

  it("test is won true", () => {
    const isWon = checkIsWon([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    expect(isWon).toBe(true);
  });
});
