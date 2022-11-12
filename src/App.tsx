import { useMemo, useState, MouseEvent } from "react";
import "./app.scss";
import Block from "./components/block";
import NumberOfMoves from "./components/number-of-moves";
import WinningMessage from "./components/winning-message";
import { IPuzzleData } from "./types";
import {
  checkSwappable,
  getShuffledBlocks,
  getSwappedBlocks,
  checkIsWon,
} from "./utils";

const NUMBER_OF_BLOCKS = 9;

const initPuzzleData: IPuzzleData = {
  blocks: getShuffledBlocks(NUMBER_OF_BLOCKS),
  isWon: false,
  numberOfMoves: 0,
};

function App() {
  const memoizedInitData = useMemo(() => initPuzzleData, [initPuzzleData]);
  const [puzzleData, setPuzzleData] = useState<IPuzzleData>(memoizedInitData);

  function handleBlockClick(
    event: MouseEvent<HTMLDivElement>,
    blockId: number
  ) {
    event.preventDefault();
    // check whether the block is swappable
    const isSwappableBlock = checkSwappable(blockId, puzzleData.blocks);
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
    <div className="app">
      <h1>Welcome to puzzle</h1>
      {puzzleData.numberOfMoves > 0 && (
        <NumberOfMoves moves={puzzleData.numberOfMoves} />
      )}
      <div className="puzzle-container">
        {puzzleData.isWon && <WinningMessage />}
        {puzzleData.blocks.map((block) => (
          <Block
            blockId={block}
            key={block}
            handleBlockClick={handleBlockClick}
            totalBlocks={puzzleData.blocks.length}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
