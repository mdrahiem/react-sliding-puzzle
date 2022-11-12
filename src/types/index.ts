export interface IBlockProps {
  blockId: number;
  handleBlockClick: (
    event: React.MouseEvent<HTMLDivElement>,
    blockId: number
  ) => void;
  totalBlocks: number;
}

export interface IPuzzleData {
  blocks: number[];
  isWon: boolean;
  numberOfMoves: number;
}

export interface INumberOfMovesProps {
  moves: number;
}
