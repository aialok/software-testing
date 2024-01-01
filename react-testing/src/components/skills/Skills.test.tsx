import { screen, render, act, logRoles } from "@testing-library/react";

import { Skills } from "./Skills";
import userEvent from "@testing-library/user-event";

describe("Testing Skills Component", () => {
  const SkillsList = ["JS", "TS", "Nodejs"];
  test("Skills Render Successfully", () => {
    render(<Skills skills={SkillsList} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("Testing All ListItem Render Correctly", () => {
    render(<Skills skills={SkillsList} />);

    const listItem = screen.getAllByRole("listitem");
    expect(listItem).toHaveLength(3);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders login button", () => {
    render(<Skills skills={SkillsList} />);

    const LoginButton = screen.getByRole("button", {
      name: "Login",
    });

    expect(LoginButton).toBeInTheDocument();
  });

  test("Start learing button should not rendered", () => {
    render(<Skills skills={SkillsList} />);

    // This will throw error as getbyRole Return error when element is not found in dom

    // const StartLearningButton = screen.getByRole('Button', {
    //     name : "Start learning"
    // })

    const StartLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });

    expect(StartLearningButton).not.toBeInTheDocument();
  });

  test("Renders Start Learning button when Login Button is Clicked", async () => {
    render(<Skills skills={SkillsList} />);

    act(() => {
      const loginButton = screen.getByRole("button", {
        name: "Login",
      });

      expect(loginButton).toBeInTheDocument();

      userEvent.click(loginButton);
    });

    const startlearningButton = screen.getByRole("button", {
      name: "Start learning",
    });

    expect(startlearningButton).toBeInTheDocument();
  });

  test("Start Learning button get render eventually", async () => {
   let view  = render(<Skills skills={SkillsList} />);

    // screen.debug(); for debugging
    logRoles(view.container);
    const learingButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug(); for debugging
    expect(learingButton).toBeInTheDocument();
  });
});
