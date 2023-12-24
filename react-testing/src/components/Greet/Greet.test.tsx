import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// Grouping Text

describe("Greet", () => {
  test("Render Properly", () => {
    render(<Greet />);
  });
  test("Contains text Hello, Alok", () => {
    render(<Greet />);
    const textContent = screen.getByText(/Hello/);
    expect(textContent).toBeInTheDocument();
  });
});
