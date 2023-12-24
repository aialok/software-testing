import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("Hello Component should Render properly", () => {
  render(<Hello />);
  const textContent = screen.getByText(/Hello/);
  expect(textContent).toBeInTheDocument();
});

// test('Component should render properly with prop passed to it', ()=>{
//     render(<Hello names="Alok"/>)
//     const textContent = screen.getByText(/Hello/)
//     expect(textContent).toBeInTheDocument()
// })
