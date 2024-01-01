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

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  // Get By Label
  test("Testing element inside form", () => {
    render(<Application />);

    // Get By Role
    const NameInput = screen.getByLabelText("Name");
    expect(NameInput).toBeInTheDocument();

    const BioInput = screen.getByLabelText("Bio");

    expect(BioInput).toBeInTheDocument();
  });

  // Get By Paragraph Text
  test("Testing Get By text- para,div,span", () => {
    render(<Application />);
    const paraElement = screen.getByText("All fields are mandatory");
    expect(paraElement).toBeInTheDocument();
  });

  // Get By Display value
  test("Testing using getByDisplayValue", () => {
    render(<Application />);

    const nameInputField = screen.getByDisplayValue("Vishwas");
    expect(nameInputField).toBeInTheDocument();
  });

  // getByTitle
  test("Testing with getByTitle", () => {
    render(<Application />);
    const spanTitle = screen.getByTitle("close");
    expect(spanTitle).toBeInTheDocument();
  });

  // getByTestid
  test("Testing using getByTestId", () => {
    render(<Application />);
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const customElement2 = screen.getByTestId("custom-element-2");
    expect(customElement2).toBeInTheDocument();
  });

  test("Testing MatchText", () => {
    render(<Application />);

    const para1 = screen.getByText("All fields are mandatory");
    expect(para1).toBeInTheDocument();

    const para2 = screen.getByText("are", { exact: false });
    expect(para2).toBeInTheDocument();

    const para3 = screen.getByText(/All fields/);
    expect(para3).toBeInTheDocument();

    const para4 = screen.getByText((content) => content.length == 24);

    expect(para4).toBeInTheDocument();
  });
});
