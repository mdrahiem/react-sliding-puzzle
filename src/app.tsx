import { useMemo, useState, useEffect } from "react";
import "./scss/app.scss";
import EnterGameSizeForm from "./components/enter-game-size";
import { GameMode, IPuzzleData } from "./types";
import { getShuffledBlocks } from "./utils";
import ChooseGameMode from "./components/choose-game-mode";
import NumberPuzzle from "./components/number-puzzle";
import ChooseImagePuzzle from "./components/choose-image-puzzle";

const initPuzzleData: IPuzzleData = {
  numberOfBlocks: 0,
  gameStarted: false,
  blocks: [],
  isWon: false,
  numberOfMoves: 0,
  gameModeChosen: false,
  gameMode: null,
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

  function resetGameMode() {
    setPuzzleData(memoizedInitData);
  }

  return (
    <div className="app">
      <h1 className="app-title">Welcome to puzzle</h1>
      {/* //TODO: Adjust this logic */}
      {puzzleData.gameStarted ? (
        <NumberPuzzle
          setPuzzleData={setPuzzleData}
          puzzleData={puzzleData}
          resetGameMode={resetGameMode}
        />
      ) : puzzleData.gameModeChosen &&
        puzzleData.gameMode === GameMode.NUMBER ? (
        <EnterGameSizeForm setPuzzleData={setPuzzleData} />
      ) : puzzleData.gameModeChosen &&
        puzzleData.gameMode === GameMode.IMAGE ? (
        <ChooseImagePuzzle />
      ) : (
        <ChooseGameMode setPuzzleData={setPuzzleData} />
      )}
    </div>
  );
}

export default App;
