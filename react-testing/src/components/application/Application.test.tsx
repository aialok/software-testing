import { screen, render } from "@testing-library/react";
import { Application } from "./Application";
describe("Test for application component", () => {
  test("Renders Properly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();
    const termsAndConditionElement = screen.getByRole("checkbox");
    expect(termsAndConditionElement).toBeInTheDocument();
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("custom element to be in the document", () => {
    render(<Application />);
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });

  test("For heading, para and span", () => {
    render(<Application />);
    const headingJobApplication = screen.getByRole("heading", {
      name: "Job application form",
      level: 1,
    });
    expect(headingJobApplication).toBeInTheDocument();

    const heading2 = screen.getByRole("heading", {
      name: "Section 1",
      level: 2,
    });
    expect(heading2).toBeInTheDocument();

    const para = screen.getByTitle("close");
    expect(para).toBeInTheDocument();

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument();
  });
});
