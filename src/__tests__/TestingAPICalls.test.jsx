import { render, screen } from "@testing-library/react";
import TestingAPICalls from "../components/TestingAPICalls";
import * as services from "../utils/services";

describe("TestingAPICalls component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Fetch Data API Called", async () => {
    const mockFetch = jest
      .spyOn(services, "FetchData")
      .mockResolvedValue([{ name: "kunal" }]);

    render(<TestingAPICalls />);

    expect(
      await screen.findByText(/kunal/i)
    ).toBeInTheDocument();

    expect(mockFetch).toHaveBeenCalledTimes(1);
  });
});

