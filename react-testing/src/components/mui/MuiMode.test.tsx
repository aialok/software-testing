import { screen, render } from "../../test-utils";

import { MuiMode } from "./MuiMode";
import { AppProviders } from "../../providers/AppProviders";

describe("MUI", () => {
  test("Renders Properly", () => {
    render(<MuiMode />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("dark mode");
  });
});
