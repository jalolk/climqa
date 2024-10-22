import React from "react";
import { render, screen } from "@testing-library/react";
import { WeatherCard } from "../WeatherCard";

const mockWeather = {
  location: {
    name: "London",
    country: "UK",
  },
  current: {
    temp_c: 20,
    condition: {
      text: "Sunny",
      icon: "sunny.png",
    },
    humidity: 65,
    wind_kph: 15,
  },
};

describe("WeatherCard", () => {
  it("displays weather information correctly", () => {
    render(<WeatherCard weather={mockWeather} />);

    expect(screen.getByRole("heading")).toHaveTextContent("London, UK");
    expect(screen.getByTestId("temperature")).toHaveTextContent("20°C");
    expect(screen.getByTestId("humidity")).toHaveTextContent("65%");
    expect(screen.getByTestId("wind")).toHaveTextContent("15 km/h");
  });

  it("renders weather icon with correct alt text", () => {
    render(<WeatherCard weather={mockWeather} />);

    const icon = screen.getByRole("img", { name: "Sunny" });
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "sunny.png");
  });
});
