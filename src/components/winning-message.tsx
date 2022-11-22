import Confetti from "react-confetti";
import { IWinningMessageProps } from "../types";

function WinningMessage({
  messageSize,
  showParty = true,
}: IWinningMessageProps) {
  return (
    <>
      {showParty && (
        <div className="party-container" data-testid="party-container">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={400}
            recycle={false}
          />
        </div>
      )}
      <p
        className="win-message"
        data-testid="win-message"
        style={{ width: messageSize, height: messageSize }}
      >
        🎉 🥳
        <br /> You won the game!
      </p>
    </>
  );
}

export default WinningMessage;
