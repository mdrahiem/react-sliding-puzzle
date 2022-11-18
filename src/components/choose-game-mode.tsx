import { useState } from "react";
import ImagePuzzle from "../assets/image-puzzle.png";
import NumberPuzzle from "../assets/number-puzzle.png";
import ArrowRight from "../icons/arrow-right";
import { GameMode, IChooseGameModeProps } from "../types";

function ChooseGameMode({ setPuzzleData }: IChooseGameModeProps) {
  const [gameMode, setGameMode] = useState<GameMode | null>(null);
  function handleSubmitClick() {
    setPuzzleData((puzzleData) => ({
      ...puzzleData,
      gameModeChosen: true,
      gameMode,
    }));
  }

  return (
    <>
      which puzzle would you like to play?
      <div className="choose-puzzle-container">
        <label className="container">
          <input
            type="radio"
            checked={gameMode === GameMode.NUMBER}
            value={GameMode.NUMBER}
            name="gameMode"
            onChange={() => setGameMode(GameMode.NUMBER)}
          />
          <img src={NumberPuzzle} />
          Number puzzle
        </label>
        <label className="container">
          <input
            type="radio"
            name="gameMode"
            checked={gameMode === GameMode.IMAGE}
            value={GameMode.IMAGE}
            onChange={() => setGameMode(GameMode.IMAGE)}
          />
          <img src={ImagePuzzle} />
          Image puzzle
        </label>
      </div>
      <div className="choose-puzle--submit" onClick={handleSubmitClick}>
        <ArrowRight />
      </div>
    </>
  );
}

export default ChooseGameMode;
