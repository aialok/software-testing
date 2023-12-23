import Greet from "./Greet";
import { render, screen } from "@testing-library/react";

test("Greet renders properly", () => {
  render(<Greet />);
  const textContent = screen.getByText("Hello, Alok");
  expect(textContent).toBeInTheDocument();
});
