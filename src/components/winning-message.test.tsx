import { render, screen } from "../test-utils";
import WinningMessage from "./winning-message";

describe("Testing winning message component", () => {
  it("show you won text", () => {
    render(<WinningMessage showParty={false} messageSize={300} />);
    const textEle = screen.getByTestId("win-message");
    expect(textEle?.textContent).toBe("🎉 🥳 You won the game!");
  });
});
