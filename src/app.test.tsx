import App from "./app";
import { render, screen } from "./test-utils";

describe("Testing app component", () => {
  it("the title is visible", () => {
    render(<App />);
    expect(screen.getByText(/Welcome to puzzle/i)).toBeInTheDocument();
  });
});
