import { useMemo, useState, useEffect } from "react";
import "./scss/app.scss";
import Block from "./components/block";
import EnterGameSizeForm from "./components/enter-game-size";
import NumberOfMoves from "./components/number-of-moves";
import WinningMessage from "./components/winning-message";
import { GameMode, IPuzzleData } from "./types";
import { getShuffledBlocks } from "./utils";
import ChooseGameMode from "./components/choose-game-mode";

const initPuzzleData: IPuzzleData = {
  numberOfBlocks: 0,
  gameStarted: false,
  blocks: [],
  isWon: false,
  numberOfMoves: 0,
  gameModeChosen: false,
  gameMode: GameMode.NUMBER,
};

function App() {
  const memoizedInitData = useMemo(() => initPuzzleData, [initPuzzleData]);
  const [puzzleData, setPuzzleData] = useState<IPuzzleData>(memoizedInitData);

  useEffect(() => {
    setPuzzleData((puzzleData) => ({
      ...puzzleData,
      blocks: getShuffledBlocks(puzzleData.numberOfBlocks),
    }));
  }, [puzzleData.numberOfBlocks]);

  return (
    <div className="app">
      <h1 className="app-title">Welcome to puzzle</h1>
      {puzzleData.gameStarted ? (
        <>
          <p className="puzzle-tip" data-testid="puzzle-tip">
            💡 You need to click on a block to move!
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
              />
            ))}
          </div>
        </>
      ) : puzzleData.gameModeChosen &&
        puzzleData.gameMode === GameMode.NUMBER ? (
        <EnterGameSizeForm setPuzzleData={setPuzzleData} />
      ) : puzzleData.gameModeChosen &&
        puzzleData.gameMode === GameMode.IMAGE ? (
        <h1>Image mode</h1>
      ) : (
        <ChooseGameMode setPuzzleData={setPuzzleData} />
      )}
    </div>
  );
}

export default App;
