import { screen, render, act } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counters", () => {
  test("Counter renders properly", () => {
    render(<Counter />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();

    const increasementElement = screen.getByRole("button", {
      name: "Increment",
    });

    expect(increasementElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText("counter");
    expect(inputElement).toBeInTheDocument();
  });

  test("Counter renders with its initial state Zero", () => {
    render(<Counter />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("0");
  });

  test("renders count of 1 after clicking the increament button", async () => {
    userEvent.setup();
    render(<Counter />);

    await act(async () => {
      const incrementButton = screen.getByRole("button", {
        name: "Increment",
      });

      await userEvent.click(incrementButton);
    });

    const headingContent = screen.getByRole("heading");

    expect(headingContent).toHaveTextContent("1");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    userEvent.setup();
    render(<Counter />);

    await act(async () => {
      const inputElement = screen.getByRole("spinbutton");
      await userEvent.type(inputElement, "10");

      const setButton = screen.getByRole("button", {
        name: "Set",
      });

      await userEvent.click(setButton);
    });

    const headingCounter = screen.getByRole("heading");

    expect(headingCounter).toHaveTextContent("10");
  });

  test("element are focus in right order", async () => {
    userEvent.setup();

    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const inputElement = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    await act(async ()=>{
        // await userEvent.tab(incrementButton);
        // expect(incrementButton).toHaveFocus();
    })
   
  });
});
