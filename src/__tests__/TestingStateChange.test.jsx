import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingStateChange from "../components/TestingStateChange";

describe("TestingStateChange Component", () => {
  test("Testing state change", async () => {
    render(<TestingStateChange />);

    expect(
      await screen.findByText(/page loaded/i)
    ).toBeInTheDocument();
  });

  test("Testing state change on button click", async () => {
    render(<TestingStateChange />);

    await userEvent.click(
      screen.getByRole("button", {
        name: /toggle text/i,
      })
    );

    expect(
      screen.getByText(/text visible/i)
    ).toBeInTheDocument();
  });

  test("Testing disabled on button click", async () => {
    render(<TestingStateChange />);

    await userEvent.click(
      screen.getByRole("button", {
        name: /toggle button disabled/i,
      })
    );

    expect(
      screen.getByRole("button", {
        name: /toggle text/i,
      })
    ).toBeDisabled();
  });

  test("Testing adding elements to list on button click", async () => {
    render(<TestingStateChange />);

    expect(screen.getAllByTestId("record")).toHaveLength(3);

    await userEvent.click(
      screen.getByRole("button", {
        name: /add to list/i,
      })
    );

    expect(screen.getAllByTestId("record")).toHaveLength(4);
    expect(screen.getByText(/abhinav/i)).toBeInTheDocument();
  });

  test("Testing removing elements from the list on button click", async () => {
    render(<TestingStateChange />);

    expect(screen.getAllByTestId("record")).toHaveLength(3);

    await userEvent.click(
      screen.getByRole("button", {
        name: /remove from list/i,
      })
    );

    expect(screen.getAllByTestId("record")).toHaveLength(2);
    expect(screen.queryByText(/rounak/i)).not.toBeInTheDocument();
  });
});
