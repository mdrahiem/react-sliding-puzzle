import Confetti from "react-confetti";

function WinningMessage() {
  return (
    <>
      <div className="party-container">
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={400}
          recycle={false}
        />
      </div>
      <p className="win-message">
        🎉 🥳
        <br /> You won the game!
      </p>
    </>
  );
}

export default WinningMessage;
