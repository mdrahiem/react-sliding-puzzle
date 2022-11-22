import { useMemo, useState } from "react";
import ArrowPath from "../icons/arrow-path";
import ArrowRight from "../icons/arrow-right";
import { INumberPuzzleProps } from "../types";
import { getRandomPuppyImage, getShuffledBlocks } from "../utils";
import Block from "./block";
import NumberOfMoves from "./number-of-moves";
import WinningMessage from "./winning-message";

function ImagePuzzle({
  setPuzzleData,
  puzzleData,
  resetGameMode,
}: INumberPuzzleProps) {
  function resetImagePuzzle() {
    setPuzzleData((puzzleData) => ({
      ...puzzleData,
      blocks: getShuffledBlocks(puzzleData.numberOfBlocks),
      numberOfMoves: 0,
      isWon: false,
    }));
    setPuzzleImg(getRandomPuppyImage());
  }
  const randomPuzzleImage = useMemo(() => getRandomPuppyImage(), []);
  const [puzzleImg, setPuzzleImg] = useState<string>(randomPuzzleImage);

  return (
    <>
      <p className="puzzle-tip" data-testid="puzzle-tip">
        💡 You need to click on a block to move! This is image puzzle
      </p>
      {puzzleData.numberOfMoves > 0 && (
        <NumberOfMoves moves={puzzleData.numberOfMoves} />
      )}
      <div
        className="puzzle-container"
        style={{
          width: puzzleData.numberOfBlocks * 100,
          height: puzzleData.numberOfBlocks * 100,
        }}
      >
        {puzzleData.isWon && (
          <WinningMessage messageSize={puzzleData.numberOfBlocks * 100} />
        )}
        {puzzleData.blocks.map((block) => (
          <Block
            blockId={block}
            key={block}
            puzzleData={puzzleData}
            setPuzzleData={setPuzzleData}
            totalBlocks={puzzleData.blocks.length}
            blockSize={
              (puzzleData.numberOfBlocks * 100) / puzzleData.numberOfBlocks
            }
            imgPath={puzzleImg}
          />
        ))}
      </div>
      <div className="game-reset">
        <span title="Reset puzzle">
          <ArrowPath handleOnClick={resetImagePuzzle} />
        </span>
        <span title="Go back home">
          <ArrowRight
            handleOnClick={resetGameMode}
            className="game-reset--arrow"
          />
        </span>
      </div>
    </>
  );
}

export default ImagePuzzle;
