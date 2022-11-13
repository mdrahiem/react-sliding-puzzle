import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Block from "./block";

describe("Testing block component", () => {
  const setPuzzleData = () => {};
  it("render block component", () => {
    render(
      <Block
        blockId={1}
        totalBlocks={9}
        blockSize={100}
        puzzleData={{
          numberOfBlocks: 9,
          blocks: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          isWon: false,
          numberOfMoves: 10,
          gameStarted: true,
        }}
        setPuzzleData={setPuzzleData}
      />
    );
    const puzzleEle = screen.getByTestId("puzzle-block");
    expect(puzzleEle).toBeInTheDocument();
  });

  it("on block click it should swap", () => {
    render(
      <Block
        blockId={1}
        totalBlocks={9}
        blockSize={100}
        puzzleData={{
          numberOfBlocks: 9,
          blocks: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          isWon: false,
          numberOfMoves: 10,
          gameStarted: true,
        }}
        setPuzzleData={setPuzzleData}
      />
    );
    const puzzleEle = screen.getByTestId("puzzle-block");
    userEvent.click(puzzleEle);
    expect(puzzleEle.textContent).not.toBe(2);
  });
});
