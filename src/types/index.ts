export interface IBlockProps {
  blockId: number;
  puzzleData: IPuzzleData;
  setPuzzleData: React.Dispatch<React.SetStateAction<IPuzzleData>>;
  totalBlocks: number;
  blockSize: number;
  imgPath?: string;
}

export interface IPuzzleData {
  numberOfBlocks: number;
  blocks: number[];
  isWon: boolean;
  numberOfMoves: number;
  gameStarted: boolean;
  gameModeChosen: boolean;
  gameMode: GameMode | null;
}

export interface INumberOfMovesProps {
  moves: number;
}

export interface IEnterGameSizeProps {
  setPuzzleData: React.Dispatch<React.SetStateAction<IPuzzleData>>;
}

export interface IWinningMessageProps {
  messageSize: number;
  showParty?: boolean;
}

export interface IChooseGameModeProps {
  setPuzzleData: React.Dispatch<React.SetStateAction<IPuzzleData>>;
}

export interface INumberPuzzleProps {
  puzzleData: IPuzzleData;
  setPuzzleData: React.Dispatch<React.SetStateAction<IPuzzleData>>;
  resetGameMode: () => void;
}

export enum GameMode {
  NUMBER = "NUMBER",
  IMAGE = "IMAGE",
}

export interface IArrowIconProps {
  handleOnClick?: () => void;
  className?: string;
}
