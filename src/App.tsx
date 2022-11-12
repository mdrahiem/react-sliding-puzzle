import { useMemo, useState, MouseEvent } from "react";
import "./App.scss";
import Block from "./components/Block";
import {
  checkSwappable,
  getShuffledBlocks,
  getSwappedBlocks,
  checkIsOwn,
} from "./utils";
import Confetti from "react-confetti";

const NUMBER_OF_BLOCKS = 9;

function App() {
  const shuffledBlocks = useMemo(
    () => getShuffledBlocks(NUMBER_OF_BLOCKS),
    [NUMBER_OF_BLOCKS]
  );
  const [blocks, setBlocks] = useState<number[]>(shuffledBlocks);
  const [isOwn, setIsOwn] = useState<boolean>(false);

  function handleBlockClick(
    event: MouseEvent<HTMLDivElement>,
    blockId: number
  ) {
    event.preventDefault();
    const isSwappableBlock = checkSwappable(blockId, blocks);
    if (isSwappableBlock) {
      const swappedBlocks = [...getSwappedBlocks(blockId, blocks)];
      setBlocks(swappedBlocks);
      const isPuzzleSolved = checkIsOwn(swappedBlocks);
      if (isPuzzleSolved) {
        setIsOwn(isPuzzleSolved);
      }
    }
  }
  console.log("blocksblocks", blocks);

  return (
    <div className="app">
      <h1>Welcome to puzzle</h1>

      <div className="puzzle-container">
        {isOwn && (
          <>
            <div className="party-container">
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={400}
                recycle={false}
              />
            </div>
            <p className="win-message">
              🎉 🥳
              <br /> You won the game!
            </p>
          </>
        )}
        {blocks.map((block, index) => (
          <Block
            index={index}
            blockId={block}
            key={block}
            handleBlockClick={handleBlockClick}
            totalBlocks={blocks.length}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
