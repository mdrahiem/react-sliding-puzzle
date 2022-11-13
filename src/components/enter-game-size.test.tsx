import { render, userEvent, screen } from "../test-utils";
import EnterGameSizeForm from "./enter-game-size";

describe("Testing form component", () => {
  const setPuzzleData = () => {};
  it("the input text is visible and able to enter number", async () => {
    render(<EnterGameSizeForm setPuzzleData={setPuzzleData} />);
    const inputEle = screen.getByTestId("numberOfBlocks");
    expect(inputEle).toBeInTheDocument();
    await userEvent.type(inputEle, "4");
    expect(inputEle).toHaveValue("4");
  });

  it("the submit button is visible", () => {
    render(<EnterGameSizeForm setPuzzleData={setPuzzleData} />);
    const btnEle = screen.getByRole("button");
    expect(btnEle).toBeInTheDocument();
  });
});
