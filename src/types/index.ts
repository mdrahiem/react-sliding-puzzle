export interface IBlockProps {
  blockId: number;
  puzzleData: IPuzzleData;
  setPuzzleData: React.Dispatch<React.SetStateAction<IPuzzleData>>;
  totalBlocks: number;
  blockSize: number;
}

export interface IPuzzleData {
  numberOfBlocks: number;
  blocks: number[];
  isWon: boolean;
  numberOfMoves: number;
  gameStarted: boolean;
}

export interface INumberOfMovesProps {
  moves: number;
}

export interface IEnterGameSizeProps {
  setPuzzleData: React.Dispatch<React.SetStateAction<IPuzzleData>>;
}

export interface IWinningMessageProps {
  messageSize: number;
}
