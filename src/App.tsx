import { useMemo, useState } from "react";
import "./App.scss";
import Block from "./components/Block";
import { getShuffledBlocks } from "./utils";

const NUMBER_OF_BLOCKS = 9;

function App() {
  const shuffledBlocks = useMemo(
    () => getShuffledBlocks(NUMBER_OF_BLOCKS),
    [NUMBER_OF_BLOCKS]
  );
  const [blocks] = useState(shuffledBlocks);

  function handleClick(index: number) {
    console.log("index", index);
  }

  return (
    <div className="app">
      <h1>Welcome to puzzle</h1>
      <div className="puzzle-container">
        {blocks.map((block, index) => (
          <Block
            index={index}
            blockId={block + 1}
            key={block}
            handleClick={handleClick}
            totalBlocks={blocks.length}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
