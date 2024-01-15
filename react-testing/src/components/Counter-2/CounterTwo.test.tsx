import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";
import userEvent from "@testing-library/user-event";

describe("CounterTwo", () => {
  test("should render properly", () => {
    const increment = jest.fn();
    const decrement = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={increment}
        handleDecrement={decrement}
      />
    );
    const counterHeading = screen.getByText(/Counter/);
    expect(counterHeading).toBeInTheDocument();
  });

  test("button should render properly", async () => {
    const increment = jest.fn();
    const decrement = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={increment}
        handleDecrement={decrement}
      />
    );

    const buttonIncrement = screen.getByRole("button", {
      name: "Increment",
    });

    const buttonDecrement = screen.getByRole("button", {
      name: "Decrement",
    });

    await userEvent.click(buttonIncrement);
    await userEvent.click(buttonDecrement);

    expect(increment).toBeCalledTimes(1);
    expect(decrement).toBeCalledTimes(1);
  });
});
