import axios from "axios";
import WeatherData from "../types/weather";

const API_WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_BASE_URL = "https://api.weatherapi.com/v1/";

export const weatherApi = {
  async getWeather(city: string) {
    try {
      const { data } = await axios.get<WeatherData>(
        `${API_BASE_URL}current.json`,
        {
          params: {
            key: API_WEATHER_KEY,
            q: city,
            aqi: "no",
          },
        }
      );

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.error?.message || "Failed to fetch weather"
        );
      }
      throw error;
    }
  },
};
