import { MouseEvent } from "react";
import { IBlockProps } from "../types";
import { checkIsWon, checkSwappable, getSwappedBlocks } from "../utils";
import "./block.scss";

function Block({
  blockId,
  totalBlocks,
  blockSize,
  puzzleData,
  setPuzzleData,
  imgPath,
}: IBlockProps) {
  const isEmptyBlock = blockId === totalBlocks - 1;
  const handleBlockClick = (
    event: MouseEvent<HTMLDivElement>,
    blockId: number
  ) => {
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
  };
  return (
    <div
      className={
        imgPath && !isEmptyBlock
          ? `puzzle-block block-${imgPath}`
          : "puzzle-block"
      }
      data-testid="puzzle-block"
      onClick={(e) => handleBlockClick(e, blockId)}
      style={
        imgPath && !isEmptyBlock
          ? {
              width: blockSize,
              height: blockSize,
              backgroundPosition: `-${
                (blockId % puzzleData.numberOfBlocks) * 100
              }px -${Math.floor(blockId / puzzleData.numberOfBlocks) * 100}px`,
            }
          : {
              width: blockSize,
              height: blockSize,
            }
      }
    >
      {imgPath ? "" : !isEmptyBlock ? blockId + 1 : ""}
    </div>
  );
}

export default Block;
