import { INumberOfMovesProps } from "../types";

function NumberOfMoves({ moves }: INumberOfMovesProps) {
  return (
    <>
      <div className="moves-text" data-testid="moves-text">
        <div className="arrow bounce">
          <p>Number of moves</p>
        </div>
        <span>{moves}</span>
      </div>
    </>
  );
}

export default NumberOfMoves;
