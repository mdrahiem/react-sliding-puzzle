import { INumberOfMovesProps } from "../types";

function NumberOfMoves({ moves }: INumberOfMovesProps) {
  return <div className="moves-text">Number of moves: {moves}</div>;
}

export default NumberOfMoves;
