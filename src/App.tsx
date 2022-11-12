import { useMemo, useState, MouseEvent } from "react";
import "./App.scss";
import Block from "./components/Block";
import { checkSwappable, getShuffledBlocks, swapBlocks } from "./utils";

const NUMBER_OF_BLOCKS = 9;

function App() {
  const shuffledBlocks = useMemo(
    () => getShuffledBlocks(NUMBER_OF_BLOCKS),
    [NUMBER_OF_BLOCKS]
  );
  const [blocks, setBlocks] = useState<number[]>(shuffledBlocks);

  function handleBlockClick(
    event: MouseEvent<HTMLDivElement>,
    blockId: number
  ) {
    event.preventDefault();
    const isSwappableBlock = checkSwappable(blockId, blocks);
    if (isSwappableBlock) {
      const getSwappedBlocks = swapBlocks(blockId, blocks);
      setBlocks([...getSwappedBlocks]);
    }
  }
  console.log("blocksblocks", blocks);

  return (
    <div className="app">
      <h1>Welcome to puzzle</h1>
      <div className="puzzle-container">
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
