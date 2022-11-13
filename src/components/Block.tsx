import type { MouseEvent } from "react";
import { IBlockProps } from "../types";
import { checkIsWon, checkSwappable, getSwappedBlocks } from "../utils";

function Block({
  blockId,
  totalBlocks,
  blockSize,
  puzzleData,
  setPuzzleData,
}: IBlockProps) {
  const isEmptyBlock = blockId === totalBlocks - 1;

  function handleBlockClick(
    event: MouseEvent<HTMLDivElement>,
    blockId: number
  ) {
    event.preventDefault();
    // check whether the block is swappable
    const isSwappableBlock = checkSwappable(
      blockId,
      puzzleData.blocks,
      puzzleData.numberOfBlocks
    );
    if (isSwappableBlock) {
      // increase the move count
      setPuzzleData((puzzleData) => ({
        ...puzzleData,
        numberOfMoves: puzzleData.numberOfMoves + 1,
      }));
      const swappedBlocks = [...getSwappedBlocks(blockId, puzzleData.blocks)];
      setPuzzleData((puzzleData) => ({
        ...puzzleData,
        blocks: swappedBlocks,
      }));
      // check whether puzzle is solved
      const isPuzzleSolved = checkIsWon(swappedBlocks);
      if (isPuzzleSolved) {
        setPuzzleData((puzzleData) => ({
          ...puzzleData,
          isWon: isPuzzleSolved,
        }));
      }
    }
  }
  return (
    <div
      className="puzzle-block"
      data-testid="puzzle-block"
      onClick={(e) => handleBlockClick(e, blockId)}
      style={{ width: blockSize, height: blockSize }}
    >
      {!isEmptyBlock ? blockId + 1 : ""}
    </div>
  );
}

export default Block;
