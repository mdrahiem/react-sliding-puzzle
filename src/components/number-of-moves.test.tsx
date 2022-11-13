import { render, screen } from "../test-utils";
import NumberOfMoves from "./number-of-moves";

describe("Testing number of moves component", () => {
  it("show number of moves", () => {
    render(<NumberOfMoves moves={2} />);
    const divEle = screen.getByTestId("moves-text");
    const spanEle = divEle.querySelector("span");
    expect(divEle).toBeInTheDocument();
    expect(spanEle?.textContent).toBe("2");
  });
});
