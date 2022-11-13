import type { FormEvent } from "react";
import { IEnterGameSizeProps } from "../types";

function EnterGameSizeForm({ setPuzzleData }: IEnterGameSizeProps) {
  function handleFormSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const numberOfBlocks = formData.get("numberOfBlocks");
    setPuzzleData((puzzleData) => ({
      ...puzzleData,
      numberOfBlocks: Number(numberOfBlocks),
      gameStarted: true,
    }));
  }
  return (
    <form onSubmit={handleFormSubmit} id="submit-form" className="submit-form">
      <div>
        <label htmlFor="numberOfBlocks">Please enter size of the game!</label>
        <input
          id="numberOfBlocks"
          name="numberOfBlocks"
          type="text"
          data-testid="numberOfBlocks"
        />
      </div>
      <button type="submit">Generate game</button>
      <mark>
        <sup>*</sup> This number defines the number of rows/columns
      </mark>
    </form>
  );
}

export default EnterGameSizeForm;
