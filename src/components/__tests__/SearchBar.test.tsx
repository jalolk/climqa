import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "../SearchBar";

describe("SearchBar", () => {
  it("renders search input and button", () => {
    render(<SearchBar onSearch={jest.fn()} />);

    expect(screen.getByTestId("city-input")).toBeInTheDocument();
    expect(screen.getByTestId("search-button")).toBeInTheDocument();
  });

  it("calls onSearch with trimmed input value", async () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByTestId("city-input");
    await userEvent.type(input, " London");

    const form = screen.getByTestId("form");
    fireEvent.submit(form);

    expect(mockOnSearch).toHaveBeenCalledWith("London");
  });

  it("does not call onSearch when input is empty", () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const form = screen.getByTestId("form");
    fireEvent.submit(form);

    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});
